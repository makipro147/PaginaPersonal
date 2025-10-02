// Importación de tipos de iconos de Lucide-React para mantener consistencia de tipos
import { LucideIcon } from 'lucide-react';
import { Globe, Database, Smartphone } from 'lucide-react';

/**
 * Interfaz que define la estructura de un plan de servicio.
 * Tipado estricto obligatorio para el Data Layer.
 */
export interface Service {
  id: number; // Identificador único del servicio
  title: string; // Título del plan de servicio
  description: string; // Descripción del servicio
  price: string; // Rango de precio (e.g., "1000 - 1600")
  currency: string; // Moneda de referencia (e.g., "soles")
  features: string[]; // Lista de características incluidas
  icon: LucideIcon; // Componente de icono de Lucide-React
  complexity: "Baja" | "Media" | "Alta"; // Nivel de complejidad del proyecto
  deliveryTime: string; // Tiempo estimado de entrega
  popular?: boolean; // Indicador booleano para el plan popular
}

/**
 * Array principal de datos de servicios, desacoplado de la lógica de presentación (Modelo).
 */
export const services: Service[] = [
  {
    id: 1,
    title: "Página Web Básica",
    description: "Sitio web estático con diseño responsive y optimización SEO básica, ideal para presencia digital inicial.",
    price: "600 - 900",
    currency: "soles",
    features: [
      "Hasta 5 páginas (Home, Servicios, Contacto, etc.)",
      "Diseño 100% responsive (Mobile First)",
      "Optimización SEO básica (Google Search Console)",
      "Formulario de contacto integrado",
      "Hosting SSD por 1 año"
    ],
    icon: Globe,
    complexity: "Baja",
    deliveryTime: "1-2 semanas"
  },
  
  {
    id: 2,
    title: "Aplicación Web Interactiva",
    description: "Aplicación web con funcionalidades avanzadas y backend personalizado, ideal para startups o herramientas internas.",
    price: "1000 - 1600",
    currency: "soles",
    features: [
      "Base de datos personalizada (Postgres/Supabase/Firebase)",
      "Autenticación y gestión de usuarios (NextAuth/Clerk)",
      "Panel de administración / Dashboard",
      "API REST/GraphQL para el front-end",
      "Hosting premium y CDN por 1 año"
    ],
    icon: Database,
    complexity: "Media",
    deliveryTime: "3-4 semanas",
    popular: true // Marcado como popular para el destaque visual
  },
  {
    id: 3,
    title: "E-Commerce Completo",
    description: "Tienda online completa, de alto rendimiento, con carrito, pagos y gestión de inventario robusta.",
    price: "1800 - + ",
    currency: "soles",
    features: [
      "Catálogo de productos escalable",
      "Carrito de compras y Checkout avanzado",
      "Pasarela de pagos (Stripe/PayPal)",
      "Panel de administración para gestión total",
      "Gestión de inventario en tiempo real",
      "Hosting premium por 2 años y seguridad SSL"
    ],
    icon: Smartphone,
    complexity: "Alta",
    deliveryTime: "4-6 semanas"
  }
];

/**
 * Array de servicios complementarios con sus precios.
 */
export const additionalServices: string[] = [
  "Mantenimiento mensual (incluye soporte): 100 soles",
  "Dominio personalizado (.com, .pe): 50 soles/año",
  "Certificado SSL (https): Incluido en todos los planes",
  "Migraciones de sistemas o datos: 200-400 soles (depende de la complejidad)",
  "Capacitaciones de uso y administración: 150 soles/hora"
];