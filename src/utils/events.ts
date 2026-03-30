export interface Event {
    id: number;
    title: string;
    date: string;
    image: string;
    tagline: string;
    detailedDesc: string;
}

export const events: Event[] = [
     {
        id: 1,
        title: "Minds in Motion",
        date: "—",
        image: "/events/minds.jpeg",
        tagline: "Innovate bold ideas through design and creativity.",
        detailedDesc: `Minds in Motion encourages creativity, innovation, and entrepreneurial thinking by challenging participants to ideate impactful product solutions. After an initial quiz, teams submit a product problem statement that tests their understanding of design thinking.\n\nThe event helps participants develop practical insights into sustainable solutions and product development. It strengthens participants’ ability to identify user needs, research problems, and conceptualize viable ideas; with the best teams receiving exciting prizes.`
    },
    {
        id: 2,
        title: "StrategySphere",
        date: "—",
        image: "/events/strategy.jpeg",
        tagline: "Crack real-world business cases with strategic precision.",
        detailedDesc: `StrategySphere is a consulting case competition where teams solve real-world business problems using structured analysis and strategic thinking. It mimics professional consulting tasks, requiring participants to evaluate industries, identify challenges, and propose actionable solutions.\n\nWith a quiz, executive deck submission, and final presentation round, the event builds presentation skills, critical thinking, and decision-making abilities. Top-performing teams compete for attractive cash prizes and recognition.`
    },
    {
        id: 3,
        title: "Fincortex",
        date: "—",
        image: "/events/Fincortex.jpeg",
        tagline: "Explore the intersection of finance and technology.",
        detailedDesc: `Fincortex is a premier finance and technology event that challenges participants to bridge the gap between complex financial concepts and cutting-edge tech solutions. Delve into algorithmic trading, fintech innovations, and more.`
    },
    {
        id: 4,
        title: "MockUp",
        date: "—",
        image: "/events/mockup.jpeg",
        tagline: "Design fast. Prototype smart. Build impactful solutions.",
        detailedDesc: `MockUp is a 36-hour design hackathon that challenges participants to prototype innovative solutions within a short timeframe. Teams receive problem statements and must conceptualize, design, and submit impactful prototypes.\n\nIt enhances rapid ideation, UI/UX thinking, and teamwork, while offering exciting rewards and recognition. The event prepares participants for real-world design challenges, pushing them to think fast and work collaboratively.`
    },,
    {
        id: 5,
        title: "AlgoVision",
        date: "—",
        image: "/events/algovision.jpeg",
        tagline: "Solve data-driven challenges with analytical power.",
        detailedDesc: `AlgoVision is a data analytics and machine-learning case competition where teams tackle real-world problem statements using computational approaches. Participants first submit their methodology and code, after which finalists solve a new challenge.\n\nThe event enhances participants’ analytical thinking, coding ability, and understanding of ML applications. It is ideal for those looking to strengthen their practical data science skills while competing for attractive prizes.`
    },
    {
        id: 6,
        title: "FishTank",
        date: "—",
        image: "/events/FishTank.jpeg",
        tagline: "Pitch your boldest ideas to the sharks.",
        detailedDesc: `FishTank is an entrepreneurship competition where aspiring innovators present their business ideas to a panel of expert judges. Experience the pressure of a real-world startup pitch and win mentorship and funding opportunities.`
    },
    {
        id: 7,
        title: "Enigma Escape",
        date: "—",
        image: "/events/EnigmaEscape.jpeg",
        tagline: "Think fast. Solve sharp. Escape before time runs out.",
        detailedDesc: `Enigma Escape is a high-pressure puzzle-solving challenge where teams must work together to escape an assigned room within 12–15 minutes. Limited hints and cleverly designed puzzles test participants’ logic, quick thinking, and communication.\n\nThis fun yet intense competition encourages teamwork and mental agility. With exciting rewards and certificates, Enigma Escape offers a thrilling experience that sharpens problem-solving under constraints.`
    },
    {
        id: 8,
        title: "ConnectX",
        date: "—",
        image: "/events/connectx.jpeg",
        tagline: "Network smart. Connect meaningfully. Win big.",
        detailedDesc: `ConnectX is an interactive networking-based competition designed to help participants build connections in a fun and dynamic environment. Using a specially designed bingo card, participants engage in conversations to identify peers matching the prompts on their cards, encouraging meaningful exchanges and broad networking.\n\nThe event fosters collaboration, communication, and interpersonal confidence while making networking enjoyable. Participants also stand a chance to win exclusive merchandise and exciting gifts by completing their bingo card, making ConnectX both engaging and rewarding.`
    },  
];
