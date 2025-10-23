import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { projectApi } from '../services/projectApi';
import { type Project } from '../data/projects';

export function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await projectApi.getProjects();
      setProjects(data);
    };
    fetchProjects();
  }, []);

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

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">  
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
                      Visitar
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
            onClick={() => window.open('https://github.com/makipro147', '_blank')}
          >
            <Github className="mr-2 h-4 w-4" />
            Ver GitHub Completo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}