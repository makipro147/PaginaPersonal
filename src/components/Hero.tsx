import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ChevronDown, Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { cvService } from '../services/cvService';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('proyectos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-indigo-900/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-500/30 rounded-full"
            animate={{
              x: [0, Math.random() * 100, 0],
              y: [0, Math.random() * 100, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Full Stack
              <br />
              <span className="text-indigo-500">Developer</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-xl md:text-2xl text-gray-300">
                Especializado en desarrollo web moderno priorizando el diseño y la compatibilidad ante todo!!!!
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['Next.js', 'Supabase', 'Firebase'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-lg text-indigo-400"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <Button
                onClick={scrollToProjects}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Ver Proyectos
              </Button>
              
              <Button
                onClick={cvService.downloadCV}
                variant="outline"
                className="border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Download className="mr-2 h-4 w-4" />
                Descargar CV
              </Button>
            </motion.div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateY: [0, 5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1607743386830-f198fbd7f9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsJTIwZGFya3xlbnwxfHx8fDE3NTkzNjQwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Developer workspace"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            {/* Floating elements around the image */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-20 h-20 border-2 border-indigo-500/30 rounded-full"
            />
            
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-500/20 rounded-full blur-sm"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToProjects}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/70 hover:text-indigo-400 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
}