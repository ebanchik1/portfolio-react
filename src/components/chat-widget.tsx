"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface Message {
  role: "user" | "assistant"
  content: string
}

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hey — I'm the AI that lives on Eli's website. Yes, that's my whole life. Ask me anything about him so I can feel useful.",
}

const SUGGESTED_PROMPTS = [
  { label: "What can Eli build?", message: "What does Eli actually do — what's his main skill set?" },
  { label: "See his projects", message: "What specific projects has he built? Any live products I can look at?" },
  { label: "Is he open to work?", message: "Is Eli currently open to new opportunities?" },
]

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPrompt, setShowPrompt] = useState(false)
  const [promptDismissed, setPromptDismissed] = useState(false)
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Show prompt bubble after 3 seconds, auto-hide after 8 more
  useEffect(() => {
    if (isOpen || promptDismissed) return
    const showTimer = setTimeout(() => setShowPrompt(true), 3000)
    return () => clearTimeout(showTimer)
  }, [isOpen, promptDismissed])

  useEffect(() => {
    if (!showPrompt) return
    const hideTimer = setTimeout(() => {
      setShowPrompt(false)
      setPromptDismissed(true)
    }, 8000)
    return () => clearTimeout(hideTimer)
  }, [showPrompt])

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const hasUserMessages = messages.some((m) => m.role === "user")

  async function sendMessage(text: string) {
    if (!text.trim() || isLoading) return

    const userMessage: Message = { role: "user", content: text.trim() }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput("")
    setIsLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages
            .filter((m) => m !== INITIAL_MESSAGE)
            .map((m) => ({
              role: m.role === "assistant" ? "model" : "user",
              content: m.content,
            })),
        }),
      })

      if (!res.ok) throw new Error("Failed to get response")

      const data = await res.json()
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Whoops, I tripped over a cable. Try asking again — I promise I'm usually more reliable than this.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  async function handleSend() {
    sendMessage(input)
  }

  return (
    <>
      {/* Floating bubble + prompt */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
          {/* Prompt tooltip */}
          {showPrompt && (
            <div
              className="relative bg-white border border-border rounded-xl shadow-lg px-4 py-2.5 max-w-[200px] animate-in fade-in slide-in-from-bottom-2 duration-300 cursor-pointer"
              onClick={() => {
                setShowPrompt(false)
                setPromptDismissed(true)
                setIsOpen(true)
              }}
            >
              <p className="text-sm font-sans text-foreground leading-snug">
                Ask my AI about me!
              </p>
              <div className="absolute -bottom-1.5 right-7 w-3 h-3 bg-white border-r border-b border-border rotate-45" />
            </div>
          )}
          <button
            onClick={() => {
              setShowPrompt(false)
              setPromptDismissed(true)
              setIsOpen(true)
            }}
            className="w-14 h-14 rounded-full bg-[#0015ff] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full sm:w-[360px] h-[100dvh] sm:h-[480px] sm:max-h-[calc(100vh-6rem)] bg-white border-t sm:border border-border sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-white">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="font-mono text-xs tracking-wide uppercase text-muted-foreground">
                Ask about Eli
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#0015ff] text-white rounded-br-md"
                      : "bg-gray-100 text-foreground rounded-bl-md font-mono text-xs"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <ReactMarkdown
                      components={{
                        a: ({ href, children }) => (
                          <a href={href} target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
                            {children}
                          </a>
                        ),
                        p: ({ children }) => <p className="mb-1 last:mb-0">{children}</p>,
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}
            {!hasUserMessages && !isLoading && (
              <div className="flex flex-wrap gap-2 px-1">
                {SUGGESTED_PROMPTS.map((prompt) => (
                  <button
                    key={prompt.label}
                    onClick={() => sendMessage(prompt.message)}
                    className="text-xs font-mono px-3 py-1.5 rounded-full border border-border bg-white hover:bg-gray-50 text-foreground transition-colors"
                  >
                    {prompt.label}
                  </button>
                ))}
              </div>
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-2.5">
                  <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border px-3 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me about Eli..."
                className="flex-1 bg-gray-50 border border-border rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0015ff]/20 focus:border-[#0015ff]/40 transition-all placeholder:text-muted-foreground"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-9 h-9 rounded-full bg-[#0015ff] text-white flex items-center justify-center hover:bg-[#0015ff]/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
