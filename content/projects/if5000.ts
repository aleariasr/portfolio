import type { Project } from "@/content/types/project";

export const if5000: Project = {
  slug: "if5000",
  title: "Network & Security Infrastructure — IF5000",
  oneLiner:
    "Hardened multi-service Linux server built with a team of 4: Docker workloads, a Tailscale VPN, Suricata IDS and a real-time security alerting pipeline.",
  role: "Team of 4 — shared hands-on configuration and hardening of the server (work happened directly on a shared virtual machine, not through individual git commits)",
  type: "academico",
  team: "Team of 4",
  dateRange: "Jun 2026",
  status: "academic-complete",
  featured: false,
  links: {
    repo: "https://github.com/KendalTC/proyecto-if5000",
  },
  heroImage: {
    src: "/projects/if5000/dashboard.png",
    alt: "IF5000 server monitoring dashboard",
  },
  gallery: [
    { src: "/projects/if5000/dashboard.png", alt: "IF5000 server monitoring dashboard", caption: "Dashboard" },
  ],
  problem:
    "The IF5000 Networks course required standing up an Ubuntu Server VM exposing Docker services (storage, media, DNS, remote admin), reachable over SSH and a VPN, with optional bonus tracks for monitoring and performance. My team of 4 built and hardened the full stack together on one shared VM.",
  solution: {
    overview:
      "One hardened Ubuntu Server 24.04 VM running Docker workloads, a Tailscale mesh VPN for stable remote access, and a layered security setup: Suricata IDS, Fail2ban, and a custom Bash-based alerting pipeline posting to Discord.",
    features: [
      "Docker services: Nextcloud, Jellyfin, Pi-hole and Portainer, each on its own mapped port to avoid collisions.",
      "Tailscale VPN giving the team a stable address to reach every service from any network, used for all remote demos.",
      "A Prometheus + Grafana + Node Exporter + cAdvisor monitoring stack (the course's optional monitoring bonus track).",
      "Suricata IDS running the Emerging Threats Open ruleset, logging structured alerts.",
      "Fail2ban banning repeated failed SSH attempts.",
      "A custom SOC pipeline: independent Bash watchers tail Suricata's alert log, Fail2ban's ban log and the SSH auth log, aggregate and correlate events, enrich attacker and login IPs with geolocation, and post formatted alerts to a Discord channel in real time.",
    ],
  },
  architecture: {
    overview:
      "A single Ubuntu VM with a static IP via Netplan, a flat Docker bridge network, and Tailscale as the primary remote-access path used in demos, alongside direct LAN access.",
    decisions: [
      {
        decision: "Three of the alerting watchers run as always-on systemd services.",
        rationale: "Turns ad hoc detection scripts into durable daemons that restart automatically and log through journalctl.",
      },
      {
        decision: "The Suricata watcher aggregates alerts in a 60-second window per IP and signature before notifying.",
        rationale: "Avoids flooding the team's Discord channel with a message per packet during a real scan.",
      },
    ],
  },
  stack: {
    infra: [
      "Ubuntu Server 24.04",
      "Docker & Docker Compose",
      "Portainer",
      "Tailscale (WireGuard)",
      "Prometheus, Grafana, Node Exporter, cAdvisor",
    ],
    auth: ["Per-user SSH accounts with sudo"],
    external: ["Discord webhooks", "Public IP geolocation API"],
  },
  challenges: [
    {
      title: "Avoiding alert fatigue on a real IDS feed",
      problem: "A naive per-alert notification would flood the team's channel during an active scan.",
      solution:
        "Built a dedup/aggregation window keyed by source IP and signature, flushing one summary message every 60 seconds instead of one message per matched packet.",
    },
    {
      title: "Correlating signals across three independent log sources",
      problem: "Suricata alerts, Fail2ban bans and SSH auth events each lived in a different log with no shared identifier.",
      solution:
        "Wrote a scoring correlation script that raises a source IP's threat score when it appears across multiple sources (a scan signature, a Fail2ban ban, an HTTP probe pattern), firing a distinct \"correlated threat\" alert once a threshold is crossed.",
    },
    {
      title: "Telling a new login from a known one",
      problem: "Plain login logging doesn't distinguish a user's usual device from a new, potentially suspicious one.",
      solution:
        "The SSH watcher tracks each user's last-seen IP in memory and geolocates it, flagging logins from an IP it hasn't seen before for that user.",
    },
  ],
  results: {
    qualitative:
      "Delivered a working multi-service hardened server with real-time security alerting, demoed end to end for the course.",
    metrics: [],
  },
  learnings:
    "Coordinating a real-time alerting pipeline across three independent log sources, with each teammate owning a different watcher script, was a good lesson in keeping a shared contract (the Discord message format, the log paths) consistent across code nobody centrally reviewed.",
  technologies: ["Docker", "Linux", "Suricata", "Fail2ban", "Tailscale", "Prometheus", "Grafana"],
};
