export const experienceSectionData = [
    {
        companyName: "HelloScribe A.I",
        companyLocation: "Florida, USA",
        companyUrl: "https://helloscribe.ai",
        companySummary:
            "HelloScribe AI is an AI productivity tool that speeds up various planning and content-writing tasks. It provides an intuitive web app and utilizes LLM engines to aid in plan-making and content writing.",
        position: "Co-Founder & Lead Software Engineer",
        from: "Nov 2022",
        till: "Jun 2024",
        current: true,
        jobType: "Remote",
        employmentType: "Full-time",
        description: [
            "Collaborated with the founders to develop better and more time-effective solutions to improve and evolve the system",
            "Developed a flexible algorithm for the HelloScribe agent, laid the groundwork to implement a dynamic UI component generator from the core LLM, and completed the dynamic HTML table generator",
            "Improved the core data pipeline of HelloScribe, enhancing performance from handling a few dozen concurrent requests to managing up to 5,000 concurrent requests",
            "Architected a flexible pay-as-you-go billing system",
            "Improved the data models and frontend UI structure for better performance and scalability",
            "Led the development process to rebuild HelloScribe AI with massive improvement and new features such as the agent mode, better text editor, improved security, and scalable backend architecture",
            "Enforced coding styles and consistencies across team members",
        ],
        techStack: [
            "Python",
            "JavaScript",
            "Node.js",
            "MongoDB",
            "Redis",
            "Docker",
        ],
    },
    {
        companyName: "X-Booker",
        companyLocation: "Chessington, UK",
        companyUrl: "https://x-booker.co.uk",
        companySummary:
            "X-Booker aims to streamline project management by combining most of the project management solutions into one single system with intelligent automation as well as providing an intuitive UI for easier navigation and business management.",
        position: "Lead Full-Stack Engineer",
        from: "Apr 2022",
        till: "Feb 2024",
        current: false,
        jobType: "Remote",
        employmentType: "Contract",
        description: [
            "As the lead engineer, I worked closely with the founders to figure out technical solutions and the best way to materialize their vision",
            "Integrated various services such as Google Maps, Gmail, and Calendar into X-Booker's core API",
            "Architected a diverse system that uses background job processing, pub-sub, and a serverless approach to achieve various automation and data processing",
            "Built a flexible chat system with the ability to chat with individuals create groups, and share images, videos, and audio",
            "Architected a tier-based subscription system with buyable perks (extra storage or extra team seat)",
            "Built a complex but responsive, fast-loading, and secured dashboard, kanban board, email client, and file manager with different access levels (super admin, admin, and different types of teams)",
            "Architected a role-based auth system as well as an API integration so that the organizations can have direct external connections with other lead generation platforms",
            "Onboarded and mentored junior developers, in understanding the platform, and developing new features",
            "Developed an automated deployment pipeline to auto-deploy two different versions of the system on GCP’s Kubernetes cluster",
        ],
        techStack: [
            "TypeScript",
            "Node.js",
            "Python",
            "GCP",
            "Redis",
            "Docker",
            "Kubernetes",
        ],
    },
];

export const projectsData = [
    {
        title: "My Blogging Site",
        summary:
            "A blogging site that uses Github repository as a CMS and blob store.",
        projectType: "Personal",
        githubLink: "https://github.com/sifatulrabbi/sifatul-api",
        liveLink: "https://sifatulrabbi.com/blogs",
        techStack: ["Go", "Echo", "Github", "TypeScript", "React"],
    },
    {
        title: "File watcher and file server CLI",
        summary:
            "A CLI tool to execute specified commands when files change or behave like a static file server.",
        projectType: "Personal",
        githubLink: "https://github.com/sifatulrabbi/filepatrol",
        liveLink: "",
        techStack: ["Go"],
    },
    {
        title: "LLM Agent",
        summary:
            "An interactive agent, able to hold a conversation with a human, and tell them about me and my professional experiences. Built using OpenAI's gpt-3.5.",
        projectType: "Personal",
        githubLink: "https://github.com/sifatulrabbi/openai-py-playground",
        liveLink: "",
        techStack: ["Python", "Langchain", "FastAPI", "Redis", "Socket.IO"],
    },
    {
        title: "Social Media app",
        summary:
            "A social media application built with popular web technologies. The app has registration and login functionality with persisting sessions. User profile system with features such as uploading profile pictures cover photos, and following other profiles. Feed that supports posts with images, audio, and videos. Also, users can like, comment, and share posts.",
        projectType: "Personal",
        githubLink: "https://github.com/sifatulrabbi/social_media_app",
        liveLink: "https://socialize-reactapp.web.app/login",
        techStack: ["JavaScript", "React", "Node.js", "Firebase"],
    },
    {
        title: "Hotel Management app",
        summary:
            "A Hotel Management application with backend API for a small boutique hotel. The app is responsive and fast-loading landing page with booking functionalities such as seeing a room’s availability and booking rooms. A notification system that notifies the admins when a new booking request is submitted and users when a booking request is accepted/rejected by admins. The email is also customizable by admins. Admin panel to manage booking requests, add/remove/disable rooms, or update room information.",
        projectType: "Freelance",
        githubLink: "https://github.com/sifatulrabbi",
        liveLink: "",
        techStack: [
            "JavaScript",
            "React",
            "Node.js",
            "Express.js",
            "PostgreSQL",
        ],
    },
    {
        title: "Business Management app",
        summary:
            "A frontend concept application for business management tool. This tool helps businesses managing their orders, customers, and products.",
        projectType: "Personal",
        githubLink: "https://github.com/sifatulrabbi",
        liveLink: "https://healthos-test.vercel.app/login",
        techStack: ["JavaScript", "React", "Node.js"],
    },
];
