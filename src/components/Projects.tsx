import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
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

export function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} id="proyectos" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-indigo-500/20 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mis <span className="text-indigo-500">Proyectos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades en desarrollo full stack,
            desde aplicaciones web complejas hasta sitios corporativos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 30 }
              }}
            >
              <Card className="h-full bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                  <div className="absolute top-4 right-4">
                    <Badge variant={project.complexity === 'Alta' ? 'destructive' : project.complexity === 'Media' ? 'secondary' : 'outline'}>
                      {project.complexity}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-indigo-400 border-indigo-400/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-indigo-500/30 text-indigo-400 hover:bg-indigo-500 hover:text-white"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Ver Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6">
            ¿Interesado en ver más proyectos? Revisa mi GitHub para una colección completa.
          </p>
          <Button
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <Github className="mr-2 h-4 w-4" />
            Ver GitHub Completo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}