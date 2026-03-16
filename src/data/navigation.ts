export interface NavLink {
  label: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];
