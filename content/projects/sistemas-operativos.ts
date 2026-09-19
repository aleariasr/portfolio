import type { Project } from "@/content/types/project";

export const sistemasOperativos: Project = {
  slug: "sistemas-operativos",
  title: "TCP/IP Remote Administration Tool",
  oneLiner:
    "Client-server remote administration tool built from raw TCP sockets — system info, screen capture and live mouse control over a custom protocol.",
  role: "Team project",
  type: "academico",
  team: "Team",
  dateRange: "Nov 2025",
  status: "academic-complete",
  featured: false,
  links: {
    repo: "https://github.com/aleariasr/proyectoSistemasOperativos",
  },
  heroImage: {
    src: "/projects/sistemas-operativos/tcpip.png",
    alt: "TCP/IP remote administration client GUI",
  },
  gallery: [
    { src: "/projects/sistemas-operativos/tcpip.png", alt: "TCP/IP remote administration client GUI" },
  ],
  problem:
    "The IF4001 Operating Systems course required building a remote-administration tool from raw TCP sockets, without relying on an existing remote-desktop library or protocol.",
  solution: {
    overview:
      "Two Python applications talking over a custom line-based TCP protocol: a server that runs on the remote machine, and a client with a customtkinter GUI for the controlling machine.",
    features: [
      "System info reporting: RAM, disk list with free/used space, screen resolution, current user, timezone, date/time and active processes.",
      "Screenshot capture and transfer over the same socket, using a length-prefixed binary frame so image data can't be confused with text commands.",
      "Live mouse control: move, left-click, right-click and double-click, sent from the client's GUI to the remote machine in real time.",
      "Remote power actions: shut down, restart, log off, plus volume up/down/mute.",
      "A multithreaded server so handling one client's commands never blocks the GUI or other connections.",
    ],
  },
  architecture: {
    overview:
      "A line-terminated text protocol for commands (INFO_SISTEMA, MOUSE_MOVE x y, APAGAR, and similar), with a distinct binary framing (IMG <byte-count>\\n<payload>) for screenshot transfers on the same connection.",
    decisions: [
      {
        decision: "Mixed text-and-binary protocol on a single TCP stream, length-prefixed for binary frames.",
        rationale: "Keeps the protocol simple for text commands while still allowing large binary payloads (screenshots) without ambiguity about where a message ends.",
      },
    ],
  },
  stack: {
    backend: ["Python", "raw sockets", "threading"],
    frontend: ["customtkinter"],
    external: ["psutil", "mss", "Pillow", "pyautogui", "pynput", "pycaw (Windows)"],
  },
  challenges: [
    {
      title: "Mixing text commands and binary image data on one stream",
      problem: "Sending both plain-text commands and raw PNG bytes over the same socket risks one corrupting the parsing of the other.",
      solution:
        "Text commands are newline-terminated; image responses are framed with an explicit byte count read before the payload, so the receiver always knows exactly how many bytes to read regardless of content.",
    },
    {
      title: "Cross-platform volume control",
      problem: "Windows and macOS have no common API for controlling system volume.",
      solution: "Used pycaw on Windows and an AppleScript-based fallback on macOS, isolated behind one function.",
    },
  ],
  results: {
    qualitative: "Fully working remote administration tool meeting the course's requirements, tested across Windows and macOS.",
    metrics: [],
  },
  learnings:
    "First hands-on look at how much protocol design matters once text and binary data share the same TCP stream — small framing mistakes silently corrupt the next message instead of failing loudly.",
  technologies: ["Python", "Sockets", "Threading", "customtkinter"],
};
