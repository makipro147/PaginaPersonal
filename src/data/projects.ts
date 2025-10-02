interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  complexity: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Plataforma completa de comercio electrónico con carrito de compras, pagos integrados y panel de administración.",
    technologies: ["Next.js", "Supabase", "Stripe", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1722596627369-a743837c7176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5MzQzNjk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    liveUrl: "#",
    githubUrl: "#",
    complexity: "Alta"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones y dashboard analítico.",
    technologies: ["React", "Firebase", "Material-UI", "Node.js"],
    image: "https://images.unsplash.com/photo-1753998941587-5befe71f4572?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzU5MzY0MDM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    liveUrl: "#",
    githubUrl: "#",
    complexity: "Media"
  },
  {
    id: 3,
    title: "Corporate Website",
    description: "Sitio web corporativo moderno con CMS personalizado, optimización SEO y diseño responsive.",
    technologies: ["Next.js", "Sanity CMS", "Framer Motion", "Vercel"],
    image: "https://images.unsplash.com/photo-1640109341881-1cd3eaf50909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBzZXR1cHxlbnwxfHx8fDE3NTkzMjUxODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    liveUrl: "#",
    githubUrl: "#",
    complexity: "Baja"
  }
];

export { projects, type Project };