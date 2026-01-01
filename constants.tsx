import { 
  Bot, 
  MessageSquare, 
  Database, 
  Filter, 
  Calendar, 
  Headphones, 
  CreditCard, 
  Settings,
  Clock,
  UserX,
  FileWarning,
  Repeat,
  Users,
  TrendingDown,
  Building2,
  Plane,
  Coffee,
  Stethoscope,
  Scale,
  Store,
  CheckCircle2
} from 'lucide-react';
import { Service, PainPoint, ProcessStep, Industry, PricingTier, FaqItem } from './types';

export const COMPANY_NAME = "AutomateX AI";
export const TAGLINE = "Intelligent Automation for Real Estate, Travel, Healthcare, F&B, Law & Small Businesses";
export const SLOGAN = "Automating Your Success.";

export const PAIN_POINTS: PainPoint[] = [
  { problem: "Slow responses to enquiries", icon: Clock },
  { problem: "Manual follow-ups", icon: Repeat },
  { problem: "Unorganized lead management", icon: Filter },
  { problem: "Repetitive operational tasks", icon: Settings },
  { problem: "Limited staff availability", icon: UserX },
  { problem: "High cost of human-driven processes", icon: TrendingDown },
];

export const SERVICES: Service[] = [
  { title: "AI Chatbots", description: "Instant enquiry handling and qualification around the clock.", icon: Bot },
  { title: "WhatsApp Automation", description: "24/7 messaging workflows directly on WhatsApp.", icon: MessageSquare },
  { title: "CRM Integration", description: "Automatic lead logging, updates, and synchronization.", icon: Database },
  { title: "Lead Qualification", description: "Intelligent AI scoring and routing of prospects.", icon: Filter },
  { title: "Appointment Systems", description: "Automated booking, rescheduling, and reminders.", icon: Calendar },
  { title: "Support AI", description: "Automated customer support resolution and ticketing.", icon: Headphones },
  { title: "Billing Automation", description: "Streamlined invoicing and payment follow-ups.", icon: CreditCard },
  { title: "Custom Workflows", description: "Industry-specific automations tailored to your needs.", icon: Settings },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { step: 1, title: "Discovery Call", description: "Identify needs & goals" },
  { step: 2, title: "Automation Mapping", description: "Design custom workflows" },
  { step: 3, title: "Build Phase", description: "Develop & configure systems" },
  { step: 4, title: "Integration", description: "Plug into CRM/WhatsApp/Calendars" },
  { step: 5, title: "Testing", description: "QA & Pilot run" },
  { step: 6, title: "Launch", description: "Go live with support" },
  { step: 7, title: "Optimization", description: "Iterate & improve performance" },
];

export const INDUSTRIES: Industry[] = [
  { name: "Real Estate", useCase: "Automate viewing requests, lead nurturing, contract reminders.", icon: Building2 },
  { name: "Travel", useCase: "Auto booking confirmations, pre-trip messages, upsell offers.", icon: Plane },
  { name: "Healthcare / Dental", useCase: "Appointment booking, intake forms, reminders, insurance verification.", icon: Stethoscope },
  { name: "F&B / Cafes", useCase: "Online ordering follow-ups, reservations, delivery notifications.", icon: Coffee },
  { name: "Law", useCase: "Client intake automation, document reminders, appointment coordination.", icon: Scale },
  { name: "Small Business", useCase: "Tailored automation for sales, support, and operations.", icon: Store },
];

export const PRICING: PricingTier[] = [
  {
    name: "Starter",
    price: "$400",
    description: "Ideal for single-location SMBs starting with automation.",
    features: ["Basic Chatbot", "Lead Capture System", "Standard CRM Connection", "Email Support", "Onboarding Docs"],
    isPopular: false
  },
  {
    name: "Growth",
    price: "$1,500",
    description: "Advanced flows and analytics for growing teams.",
    features: ["Advanced Logic Flows", "WhatsApp Automation", "Appointment Automation", "Analytics Dashboard", "Email + Scheduled Calls Support"],
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Multi-location, custom integrations, and dedicated support.",
    features: ["Multi-location Support", "Custom Integrations (API)", "Dedicated Account Manager", "SLA Agreements", "Priority Live Support"],
    isPopular: false
  }
];

export const FAQS: FaqItem[] = [
  { question: "What businesses do you work with?", answer: "We specialize in Real Estate, Travel, Healthcare, F&B, Law and Small Businesses — but we can adapt automations to nearly any industry." },
  { question: "How long does setup take?", answer: "Typical Starter setups take 1–2 weeks; Growth setups 2–4 weeks. Enterprise timelines vary by integration complexity." },
  { question: "How do you handle data & privacy?", answer: "We use secure API integrations and follow data minimization & encryption best practices. We’ll sign an NDA and can provide a Data Processing Addendum on request." },
  { question: "Can AutomateX integrate with our CRM?", answer: "Yes. We integrate with major CRMs (HubSpot, Salesforce, Zoho, Pipedrive) and can add custom integrations." },
  { question: "Do you offer phone or live support?", answer: "Support is included for Enterprise; Growth includes email + scheduled calls. Starter includes email and onboarding docs." },
  { question: "What if my business is small or has low traffic?", answer: "Starter at $400 is built for small teams and low volume; our automations are cost-effective at low scale and can scale as you grow." },
];
