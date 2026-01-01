import { LucideIcon } from 'lucide-react';

export interface Room {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  icon: LucideIcon;
  text: string;
  label: string;
}