export interface Workshop {
    id: number;
    title: string;
    tagline: string;
    desc: string;
    img: string;
    detailedDesc: string;
}

export const workshops: Workshop[] = [
    {
        id: 1,
        title: "Consulting & Strategy",
        tagline: "Master the art of structured problem-solving.",
        desc: "A deep dive into business case analysis, framework applications, and strategic decision-making.",
        img: "/workshop/Consulting.png",
        detailedDesc: "Learn to think like a top-tier consultant. This workshop covers essential frameworks, case-solving methodologies, and presentation skills required to succeed in high-stakes consulting environments."
    },
    {
        id: 2,
        title: "Data Science & AI",
        tagline: "Unlock the power of data-driven insights.",
        desc: "Explore machine learning algorithms, data visualization, and predictive modeling.",
        img: "/workshop/DataScience.png",
        detailedDesc: "A hands-on session using industry-standard tools to process large datasets, build predictive models, and visualize complex information. Ideal for aspiring data scientists and analysts."
    },
    {
        id: 3,
        title: "Financial Markets",
        tagline: "Navigate the complexities of global finance.",
        desc: "Understand stock markets, derivative instruments, and economic indicators.",
        img: "/workshop/FinancialMarkets.png",
        detailedDesc: "Gain practical insights into investment banking, trading strategies, and how global financial systems interact. Learn to analyze market trends and manage financial risk effectively."
    },
    {
        id: 4,
        title: "Securities Markets",
        tagline: "Trading, investment, and wealth creation.",
        desc: "Specialized workshop on securities trading, risk management, and regulatory landscapes.",
        img: "/workshop/SecuritiesMarkets.png",
        detailedDesc: "Dive deep into the mechanics of securities trading, including equity, debt, and derivative markets. Experience simulated trading environments and learn from industry professionals."
    },
    {
        id: 5,
        title: "Software Development",
        tagline: "Build the digital foundations of the future.",
        desc: "Learn full-stack development, cloud architecture, and modern DevOps practices.",
        img: "/workshop/Software.png",
        detailedDesc: "A comprehensive guide to building scalable applications. This workshop covers the entire software development lifecycle, from coding frontend interfaces to deploying backend services on the cloud."
    },
    {
        id: 6,
        title: "Automotive Engineering",
        tagline: "The future of mobility and smart transport.",
        desc: "Explore EV technology, autonomous systems, and automotive design.",
        img: "/workshop/Automobiles.png",
        detailedDesc: "Discover the latest innovations in car design, power systems, and sustainable transport. We cover everything from internal combustion to the latest in electronic vehicle architecture."
    }
];
