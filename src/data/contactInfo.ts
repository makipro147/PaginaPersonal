import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
}

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  color: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "rojasmichael148@gmail.com",
    href: "mailto:rojasmichael148@gmail.com"
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+51 921866613",
    href: "tel:+51921866613"
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Trujillo, Perú",
    href: "#"
  }
];

const socialLinks: SocialLink[] = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/makipro147",
    color: "hover:text-gray-400"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "hover:text-blue-400"
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/neko_jemkiller_band/",
    color: "hover:text-blue-400"
  }
];

export { contactInfo, socialLinks, type ContactInfo, type SocialLink };