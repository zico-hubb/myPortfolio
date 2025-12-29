export const personalDetails = {
  name: "Moses Zico",
  role: "Full-Stack Developer & Data Analyst",
  bio: "Innovative developer bridging the gap between Forensic Science, Web3, and Financial Data Intelligence. Specializing in Solana blockchain solutions and Python-driven quantitative analysis.",
  socials: {
    linkedin: "https://linkedin.com/in/MosesZico",
    twitter: "https://twitter.com/", // Add your handle if you have one
    github: "https://github.com/zico-hubb",
    email: "mosesszico@gmail.com",
  },
};

export const skills = [
  {
    category: "Data Science & AI",
    items: ["Python", "Pandas", "NumPy", "Streamlit", "SciPy", "OpenCV", "Power BI"],
  },
  {
    category: "Web3 & Blockchain",
    items: ["Solana", "Rust", "Anchor Framework", "Solidity", "Web3.js", "Smart Contracts"],
  },
  {
    category: "Full-Stack Web",
    items: ["Next.js", "React", "Node.js", "Django", "Tailwind CSS", "PostgreSQL"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Quantitative Risk Dashboard",
    description: "A live financial intelligence platform that pulls real-time market data to calculate VaR, Beta, and Sharpe Ratios. Features an interactive Monte Carlo simulation engine to stress-test asset portfolios.",
    stack: ["Python", "Streamlit", "Pandas", "SciPy", "Yahoo Finance API"],
    github: "https://github.com/zico-hubb/financial-risk-dashboard",
    demo: "https://financial-risk-analysis.streamlit.app/",
  },
  {
    id: 2,
    title: "ipShield (Solana)",
    description: "Decentralized Intellectual Property management on the Solana Blockchain. Allows creators to mint works as NFTs for immutable proof of ownership and copyright protection.",
    stack: ["Rust", "Anchor", "React", "Solana Web3.js"],
    github: "https://github.com/zico-hubb/ipShield",
    demo: "", // Add if you have one
  },
  {
    id: 3,
    title: "ArdhiChain Land Registry",
    description: "A transparent, blockchain-based ledger for land transactions in Kenya. Designed to prevent title deed fraud by ensuring immutable ownership records.",
    stack: ["Solidity", "Next.js", "Ethereum"],
    github: "https://github.com/zico-hubb/ArdhiChain",
    demo: "",
  },
  {
    id: 4,
    title: "Aminika HMS",
    description: "Full-stack Hospital Management System deployed at Aminika Medical Hospital. Digitized patient records and reduced administrative wait times by 30%.",
    stack: ["Django", "Python", "PostgreSQL", "Bootstrap"],
    github: "", // Private repo usually
    demo: "",
  },
];