import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  Code2,
  Heart,
  Instagram
} from 'lucide-react';

const quickLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Acerca de Mí', href: '#acerca' },
  { name: 'Contacto', href: '#contacto' }
];

const services = [
  'Desarrollo Web',
  'Aplicaciones React',
  'APIs y Backend',
  'E-Commerce',
  'Mantenimiento',
  'Consultoría'
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/makipro147', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/neko_jemkiller_band/', label: 'Instagram' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const elementId = href.replace('#', '');
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-red-500 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-red-500/50 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-red-500/20 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  <span className="text-red-500">{'<'}</span>
                  DevPortfolio
                  <span className="text-red-500">{'/>'}</span>
                </h3>
                <p className="text-gray-400">
                  Desarrollador Full Stack especializado en soluciones web modernas
                  con Next.js, Supabase y Firebase.
                </p>
              </div>

              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-red-500" />
                  <span>contacto@devportfolio.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>+51 999 123 456</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>Trujillo, Perú</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <h4 className="text-white font-bold mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-red-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <h4 className="text-white font-bold mb-6">Servicios</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-gray-400 flex items-center gap-2">
                    <Code2 className="w-3 h-3 text-red-500" />
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <h4 className="text-white font-bold mb-6">¿Tienes un proyecto?</h4>
              <p className="text-gray-400 mb-6">
                Convirtamos tu idea en realidad. Contáctame para una consulta gratuita.
              </p>
              <Button
                onClick={() => scrollToSection('#contacto')}
                className="bg-red-600 hover:bg-red-700 text-white w-full mb-6"
              >
                Hablemos
              </Button>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        <Separator className="bg-gray-800" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm flex items-center gap-2"
            >
              © 2024 DevPortfolio. Hecho con
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              en Trujillo, Perú
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <div className="text-gray-400 text-sm">
                Construido con Next.js + Tailwind CSS
              </div>
              
              <Button
                onClick={scrollToTop}
                size="sm"
                variant="outline"
                className="border-gray-700 text-gray-400 hover:text-white hover:border-red-500"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - Fixed Position */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-3 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg transition-all duration-300 z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}