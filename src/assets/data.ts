export const experienceSectionData = [
    {
        companyName: "HelloScribe A.I",
        companyLocation: "Florida, USA",
        companyUrl: "https://helloscribe.ai",
        companySummary:
            "Focused on building and designing innovative features by leveraging AI technologies to simplify and enhance productivity.",
        position: "Co-Founder & Lead Software Engineer",
        from: "Feb 2024",
        till: "Present",
        current: true,
        jobType: "Remote",
        employmentType: "Full-time",
        description: [
            "Led the newly formed remote team as the company transitioned from MVP to the production phase and acquired 3000+ new users",
            "Built a metered billing system in 7 weeks that made subscriptions more flexible and 50% cheaper",
            "Reduced the login/registration defect rate to 0% and improved the security by rewriting all the Auth modules in 2 weeks",
            "Architected a performant and flexible data processing pipelines that can handle up to 1,000 concurrent requests by utilizing Python’s async and concurrency",
            "Improved debugging velocity by implementing detailed logging in the production apps",
        ],
        techStack: [
            "Python",
            "JavaScript",
            "Node.js",
            "Express.js",
            "Vue.js",
            "MongoDB",
        ],
    },
    {
        companyName: "X-Booker",
        companyLocation: "Chessington, UK",
        companyUrl: "https://x-booker.co.uk",
        companySummary:
            "Building the next generation integrations to simplify the lead acquisition and adminstration tasks.",
        position: "Lead Full-Stack Engineer",
        from: "Apr 2022",
        till: "Feb 2024",
        current: false,
        jobType: "Remote",
        employmentType: "Contract",
        description: [
            "Mentored and assisted junior developers, in understanding the platform, and developing new features",
            "Architected a Tired per-user subscription system with buyable perks using Stripe",
            "Developed a pub-sub solution using Node.js (TypeScript) and Firestore that performs a set of automated tasks in the background while keeping the main thread open to serve clients",
            "Built a secured API key-based third-party integration for the X-Booker API",
            "Built a CI/CD pipeline to auto-deploy two versions (Production & Staging) of the system on K8s",
        ],
        techStack: [
            "TypeScript",
            "Python",
            "Node.js",
            "Next.js",
            "GCP",
            "Docker",
            "Redis",
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
