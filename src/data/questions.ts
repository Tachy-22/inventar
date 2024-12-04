import { Question } from "@/types/types";

export const questions: Question[] = [
  {
    id: 1,
    section: "Current Inventory Practices",
    text: "How do you currently manage inventory?",
    description: "We want to understand where you're starting from so we can show you simple ways to improve, save time, and prevent stockouts or overstock.",
    options: [
      { text: "No system—inventory is based on guesswork", score: 0 },
      { text: "We use spreadsheets, but it's time-consuming and often inaccurate", score: 1 },
      { text: "We use basic software, but it's not doing enough for us", score: 2 },
      { text: "We have a fully integrated inventory system—things are mostly under control", score: 3 }
    ]
  },
  {
    id: 2,
    section: "Current Inventory Practices",
    text: "How often do you update your inventory records?",
    description: "Keeping your inventory up-to-date is the key to avoiding missed sales opportunities and wasteful overstocking.",
    options: [
      { text: "Rarely or never—stock levels change too quickly", score: 0 },
      { text: "Only when problems arise or we remember", score: 1 },
      { text: "Weekly or monthly as part of routine checks", score: 2 },
      { text: "Daily or in real-time—we're proactive and on top of it", score: 3 }
    ]
  },
  {
    id: 3,
    section: "Pain Points & Financial Impact",
    text: "What's your biggest inventory challenge right now?",
    description: "Your inventory challenges could be costing you money. Let's pinpoint where we can help you save.",
    options: [
      { text: "We spend too much time on manual checks", score: 0 },
      { text: "Our stockouts or overstocking cost us customers and money", score: 1 },
      { text: "Our processes are too disorganized and inefficient", score: 2 },
      { text: "Forecasting demand accurately is a real challenge", score: 3 }
    ]
  },
  {
    id: 4,
    section: "Pain Points & Financial Impact",
    text: "How do you handle low-stock or stockout situations?",
    description: "Your ability to respond quickly to stockouts or low inventory directly affects your revenue potential.",
    options: [
      { text: "We only find out when customers complain", score: 0 },
      { text: "We manually check and restock, which can be slow", score: 1 },
      { text: "We use a basic system to track and alert us to low stock", score: 2 },
      { text: "Our system automatically reorders or alerts us, preventing stockouts and lost sales", score: 3 }
    ]
  },
  {
    id: 5,
    section: "Profit & Efficiency Potential",
    text: "Can you quickly identify which products are best-sellers or slow-moving?",
    description: "Understanding what sells and what doesn't is key to maximizing your profits and reducing unnecessary stock.",
    options: [
      { text: "No—I'm guessing or relying on intuition", score: 0 },
      { text: "I can find out, but it takes hours or is inaccurate", score: 1 },
      { text: "We track this manually but not in real-time", score: 2 },
      { text: "Our system provides real-time insights and helps us make quick decisions", score: 3 }
    ]
  },
  {
    id: 6,
    section: "Profit & Efficiency Potential",
    text: "Do you forecast demand for your inventory?",
    description: "Accurate forecasting means less waste and more sales. Let's see where you stand.",
    options: [
      { text: "We don't—we just stock what we think will sell", score: 0 },
      { text: "We try to forecast based on past sales, but it's hit or miss", score: 1 },
      { text: "We do some forecasting based on trends", score: 2 },
      { text: "We use advanced tools that accurately predict demand", score: 3 }
    ]
  },
  {
    id: 7,
    section: "Technology & Time-Saving Opportunities",
    text: "Are you currently using any automated tools for inventory management?",
    description: "Automation can save you significant time and money—let us know where you could benefit from it most.",
    options: [
      { text: "No—we still do everything manually", score: 0 },
      { text: "Yes, but only basic tracking without automation", score: 1 },
      { text: "Yes, we automate some parts, but not enough", score: 2 },
      { text: "Yes, our system is fully automated and efficient", score: 3 }
    ]
  },
  {
    id: 8,
    section: "Technology & Time-Saving Opportunities",
    text: "Would you be interested in implementing a low-risk inventory system that saves you time and money?",
    description: "Imagine not having to worry about stockouts, overstocking, or manual checks. We can show you how!",
    options: [
      { text: "I'm not sure—I'd need to understand the benefits first", score: 0 },
      { text: "I'm curious, but concerned about the cost", score: 1 },
      { text: "Yes, I need a solution to make my business more efficient", score: 2 },
      { text: "Absolutely—I'm ready to optimize and grow!", score: 3 }
    ]
  }
];