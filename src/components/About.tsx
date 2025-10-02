import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Code2, 
  Database, 
  Smartphone, 
  Globe, 
  Coffee, 
  Award,
  BookOpen,
  Users
} from 'lucide-react';

const skills = [
  { name: "Frontend", technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"], icon: Smartphone },
  { name: "Backend", technologies: ["Node.js", "Express", "Python", "REST APIs"], icon: Database },
  { name: "Database", technologies: ["Supabase", "Firebase", "PostgreSQL", "MongoDB"], icon: Database },
  { name: "Tools", technologies: ["Git", "Vercel", "Docker", "Figma"], icon: Code2 }
];

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelancer",
    period: "2022 - Presente",
    description: "Desarrollo de aplicaciones web completas para diversos clientes, desde startups hasta empresas establecidas."
  },
  {
    role: "Frontend Developer",
    company: "TechStart Inc.",
    period: "2021 - 2022",
    description: "Especializado en el desarrollo de interfaces de usuario modernas y responsive con React y Next.js."
  },
  {
    role: "Junior Developer",
    company: "WebSolutions",
    period: "2020 - 2021",
    description: "Desarrollo y mantenimiento de sitios web corporativos usando tecnologías modernas."
  }
];

const achievements = [
  { icon: Award, text: "15+ proyectos completados con éxito" },
  { icon: Users, text: "Clientes satisfechos en 3 países" },
  { icon: BookOpen, text: "Certificaciones en React y Node.js" },
  { icon: Coffee, text: "1000+ horas de código" }
];

export function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={containerRef} id="acerca" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        style={{ y, rotate }}
        className="absolute top-20 right-10 w-64 h-64 border border-red-500/10 rounded-full"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
        className="absolute bottom-20 left-10 w-32 h-32 bg-red-500/5 rounded-full blur-xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Acerca de <span className="text-red-500">Mí</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soy un desarrollador full stack apasionado por crear soluciones digitales innovadoras
            que resuelven problemas reales y mejoran la experiencia del usuario.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About Text & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-red-500/20 rounded-full">
                    <Globe className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Mi Historia</h3>
                </div>

                <div className="space-y-4 text-gray-300">
                  <p>
                    Con más de 1 año de experiencia en desarrollo web, me especializo en crear
                    aplicaciones modernas y escalables utilizando las últimas tecnologías.
                  </p>
                  <p>
                    Mi enfoque se centra en entender las necesidades específicas del cliente
                    y traducirlas en soluciones técnicas efectivas, siempre priorizando
                    la calidad, performance y experiencia del usuario.
                  </p>
                  <p>
                    Trabajo con metodologías ágiles y mantengo una comunicación constante
                    durante todo el proceso de desarrollo para garantizar resultados excepcionales.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-600">
                  <p className="text-red-400 font-medium mb-4">Filosofía de trabajo:</p>
                  <blockquote className="text-gray-300 italic">
                    "El código limpio no es escrito por alguien que sigue un conjunto de reglas.
                    Es escrito por alguien que se preocupa profundamente por el arte de programar."
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 text-center"
                  >
                    <Icon className="w-8 h-8 text-red-500 mx-auto mb-2" />
                    <p className="text-gray-300 text-sm">{achievement.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Skills & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Skills */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Code2 className="w-6 h-6 text-red-500" />
                  Habilidades Técnicas
                </h3>

                <div className="space-y-6">
                  {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className="w-5 h-5 text-red-500" />
                          <h4 className="text-white font-medium">{skill.name}</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {skill.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-gray-300 border-gray-600 hover:border-red-500/50 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-red-500" />
                  Experiencia
                </h3>

                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="border-l-2 border-red-500/30 pl-6 pb-6 last:pb-0"
                    >
                      <div className="relative">
                        <div className="absolute -left-8 top-0 w-3 h-3 bg-red-500 rounded-full"></div>
                        <h4 className="text-white font-bold">{exp.role}</h4>
                        <p className="text-red-400 text-sm">{exp.company} • {exp.period}</p>
                        <p className="text-gray-300 mt-2">{exp.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para dar vida a tu proyecto?
            </h3>
            <p className="text-gray-300 mb-6">
              Combinemos tu visión con mi experiencia técnica para crear algo extraordinario.
            </p>
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
              onClick={() => {
                const element = document.getElementById('contacto');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Hablemos de tu proyecto
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}