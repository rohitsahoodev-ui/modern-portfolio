// Portfolio Configuration - Customize everything from this single file
export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "RDX.dev",
    title: "Bot Dev & Hosting dev",
    tagline: "Hello, I'm RDX.dev, a professional bot dev & hosting dev specializing in modern digital solutions. I create reliable, scalable applications that help businesses grow and succeed online.",
    email: "aegis@strelixcloud.com",
    location: "N/A",
    avatar: "/src/assets/aegis.png"
  },

  // SEO & Meta
  seo: {
    title: "RDX.dev - Bot Developer Portfolio",
    description: "Professional bot developer creating modern applications. View my portfolio showcasing recent projects and technical expertise.",
    keywords: ["bot developer", "discord.py", "python", "node.js", "discord bots", "automation"],
    ogImage: "/og-image.png"
  },

  // Theme & Design
  theme: {
    primaryColor: "120 100% 50%", // Terminal green
    accentColor: "0 0% 100%", // White
    backgroundColor: "0 0% 4%", // Deep black
    terminalColors: {
      window: "0 0% 12%",
      border: "0 0% 20%",
      header: "0 0% 8%"
    },
    animations: {
      typingSpeed: 50,
      staggerDelay: 0.1,
      transitionDuration: 300,
      hoverScale: 1.05
    }
  },

  // Navigation
  navigation: {
    showScrollProgress: true,
    smoothScroll: true,
    sections: ["about", "skills", "projects", "contact"]
  },

  // Skills Configuration
  skills: [
    { name: "React", category: "Frontend", level: 95 },
    { name: "TypeScript", category: "Language", level: 90 },
    { name: "Node.js", category: "Backend", level: 85 },
    { name: "Python", category: "Language", level: 80 },
    { name: "Databases", category: "Backend", level: 68 },
    { name: "UI/UX", category: "Design", level: 95 },
    { name: "Infrastructure", category: "DevOps", level: 94 },
    { name: "DevOps", category: "DevOps", level: 70 }
  ],

  // Projects Configuration
  projects: [
    {
      name: "ZassHosting",
      year: "2026",
      description: "Professional hosting platform providing custom development and premium digital solutions for modern businesses and gaming communities.",
      tags: ["Pterodactyl", "Proxmox", "Docker"],
      status: "production",
      featured: true,
      links: {
        github: "https://github.com/rohitsahoodev-ui/",
        live: "https://zasshosting.qzz.io/"
      }
    },
    {
      name: "HexaCraft",
      year: "2025", 
      description: "best free and paid vps , Minecraft hosting",
      tags: ["Discord.py", "Python3", "Nodejs"],
      status: "production",
      featured: true,
      links: {
        github: "https://github.com/rohitsahoodev-ui/",
        live: "https://discord.gg/hexacraft"
      }
    },
    {
      name: "Strelizia",
      year: "2025",
      description: "Advanced automation and management platform with powerful features for streamlined workflows.",
      tags: ["Python", "Automation", "Discord"],
      status: "production",
      featured: true,
      links: {
        github: "https://github.com/rohitsahoodev-ui/",
        live: "https://discord.gg/strelix"
      }
    },
    {
      name: "Addiee",
      year: "2025",
      description: "Advanced Discord bot with modern features for server management and community engagement.",
      tags: ["React", "TypeScript", "Node.js"],
      status: "coming soon",
      featured: false,
      links: {
        github: "https://github.com/rohitsahoodev-ui/",
        live: "https://discord.gg/strelix"
      }
    },
    {
      name: "Strelix Selfbot",
      year: "2025",
      description: "Interactive data visualization and analytics platform for creating comprehensive dashboards with real-time insights.",
      tags: ["JavaScript", "nodejs", "selfbot.js"],
      status: "coming soon",
      featured: false,
      links: {
        github: "https://github.com/rohitsahoodev-ui/",
        live: "https://discord.gg/strelix"
      }
    }
  ],

  // Social Links
  social: {
    github: "https://github.com/rohitsahoodev-ui/",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
    youtube: "",
    email: "mailto:me@zasshosting.qzz.io"
  },

  // Content Sections
  content: {
    about: {
      title: "About Me",
      paragraphs: [
        "I am a dedicated bot developer with expertise in creating efficient, user-friendly applications. I focus on delivering high-quality solutions that meet business requirements and exceed user expectations.",
        "I stay current with industry trends and best practices, continuously expanding my technical skills to provide the most effective solutions for each project."
      ],
      availability: "Currently available for new projects"
    },
    contact: {
      title: "Get In Touch",
      description: "I am always interested in discussing new opportunities and projects. Feel free to reach out to explore how we can work together.",
      cta: "Thank you for visiting my portfolio!"
    }
  },

  // Feature Flags
  features: {
    particles: true,
    matrixRain: true,
    soundEffects: false,
    darkMode: true, // Always dark for terminal theme
    analytics: false,
    showCodeButtons: false // Toggle to show/hide code buttons in projects
  }
};
