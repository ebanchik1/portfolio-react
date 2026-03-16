"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log({ name, email, message })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <p className="font-mono text-sm">
        Thanks! I&apos;ll get back to you soon.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="font-mono text-xs uppercase tracking-wider block mb-2"
        >
          Name
        </label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="font-mono text-xs uppercase tracking-wider block mb-2"
        >
          Email
        </label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-mono text-xs uppercase tracking-wider block mb-2"
        >
          Message
        </label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          required
        />
      </div>

      <Button type="submit">Send Message</Button>
    </form>
  )
}
