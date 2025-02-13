import { Shield } from "lucide-react";
import { Bot } from "lucide-react";
import { AlarmClockCheck } from "lucide-react"; 
import { BadgePercent } from "lucide-react";
import { CircleDollarSign } from "lucide-react";
import { MessageSquareMore } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3  from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#workflow" },
  { label: "Investment Plans", href: "#InvestmentPlans" },
  { label: "Testimonials", href: "#testimonials"},
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
    rating: 5,
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
    rating: 4,
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
    rating: 5,
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
    rating: 3,
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
    rating: 4,
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
    rating: 5,
  },
];

export const features = [
  {
    icon: <Shield />,
    text: "Secure & Reliable Investments",
    description:
      "Multi-layer security with 2FA, encryption, and blockchain verification.",
  },
  {
    icon: <Bot/>,
    text: "AI-Powered Market Predictions",
    description:
      "Users can enable AI-driven trading bots to execute trades automatically.",
  },
  {
    icon: <BadgePercent />,
    text: "Low Fees & High Returns",
    description:
      "Enjoy minimal transaction fees while maximizing your profits.",
  },
  {
    icon: <AlarmClockCheck />,
    text: "Real-Time Market Insights & Analytics ",
    description:
      "Live price updates, trading charts, and AI-driven market predictions.",
  },
  {
    icon: <CircleDollarSign />,
    text: "Personalized Investment Plans & Risk Management",
    description:
      "Offer customized investment strategies based on user risk tolerance and goals.",
  },
  {
    icon: <MessageSquareMore />,
    text: "24/7 Customer Support",
    description:
      "Provide round-the-clock assistance through live chat, email, and phone.",
  },
];

export const checklistItems = [
  {
    title: "Step 1 : Sign Up & Create Account",
    description:
      "Quickly register an account by providing your details, and gain instant access to our platform.",
  },
  {
    title: "Step 2 : Deposit Funds (Crypto or Fiat)",
    description:
      "Easily fund your account by depositing either cryptocurrency or fiat currency for investment.",
  },
  {
    title: "Step 3 : Choose Investment Plan",
    description:
      "Select an investment plan that suits your financial goals and risk tolerance for maximum returns.",
  },
  {
    title: "Step 4: Track Profits & Withdraw Earning",
    description:
      "Monitor your investment performance in real-time, and withdraw your earnings anytime with ease.",
  },
];

export const pricingOptions = [
  {
    title: "Starter 🛠️",
    price: "$100",
    features: [
      "Risk Level: Low",
      "Returns: 5% monthly return",
      "Duration: 3-month term",
      "Minimum Withdrawals: $5",
    ],
  },
  {
    title: "Pro",
    price: "$500",
    features: [
      "Risk Level: Balanced",
      "Returns: 10% monthly return",
      "Duration: 6-month term",
      "Minimum Withdrawals: $50",
    ],
  },
  {
    title: "VIP 💎",
    price: "$2000",
    features: [
      "Risk Level: High",
      "Returns: 20% monthly return",
      "Duration: 12-month term",
      "Minimum Withdrawals: $400",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const Legal = [
  { href: "#", text: "Terms & Conditions" },
  { href: "#", text: "Privacy Policy" },
  { href: "#", text: "Cookie Policy" },
  { href: "#", text: "Refund & Return Policy" },
  { href: "#", text: "User Agreement" },
];
