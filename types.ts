import { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PainPoint {
  problem: string;
  icon: LucideIcon;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Industry {
  name: string;
  useCase: string;
  icon: LucideIcon;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}
