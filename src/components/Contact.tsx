import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Send, CheckCircle } from 'lucide-react';
import { contactInfo, socialLinks, type ContactInfo, type SocialLink } from '../data/contactInfo';
import { contactApi } from '../services/contactApi';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await contactApi.submitContactForm(formData);
      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: ''
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={containerRef} id="contacto" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-20 left-20 w-40 h-40 border border-red-500 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-red-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-red-500/20 rounded-full"></div>
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
            Hablemos de tu <span className="text-red-500">Proyecto</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            ¿Tienes una idea? ¿Necesitas una solución técnica? ¿Quieres mejorar tu presencia digital?
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <Badge className="bg-red-500/20 text-red-400 border-red-500/30 px-6 py-2 text-lg">
              "Es más difícil explicar lo que hago que hacerlo, contáctanos"
            </Badge>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center gap-3">
                  <Send className="w-6 h-6 text-red-500" />
                  Cuéntame sobre tu proyecto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Nombre completo</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre"
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-red-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-red-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="projectType" className="text-white">Tipo de proyecto</Label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
                        required
                      >
                        <option value="">Selecciona un tipo</option>
                        <option value="web-basica">Página Web Básica</option>
                        <option value="app-interactiva">Aplicación Interactiva</option>
                        <option value="ecommerce">E-Commerce</option>
                        <option value="mantenimiento">Mantenimiento</option>
                        <option value="consultoria">Consultoría</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white">Asunto</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Resumen de tu proyecto"
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-red-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe tu proyecto, objetivos, timeline y cualquier detalle relevante..."
                      rows={6}
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-red-500 resize-none"
                      required
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="mr-2"
                          >
                            <Send className="w-5 h-5" />
                          </motion.div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" />
                          Enviar Mensaje
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-xl">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300"
                    >
                      <div className="p-2 bg-red-500/20 rounded-full">
                        <Icon className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <a
                          href={info.href}
                          className="text-white hover:text-red-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-xl">Sígueme</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                        whileHover={{ 
                          scale: 1.1,
                          transition: { type: "spring", stiffness: 400, damping: 17 }
                        }}
                        className={`p-3 bg-gray-700/50 rounded-full text-gray-400 transition-all duration-300 ${social.color}`}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Promise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/30 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-red-500" />
                <h3 className="text-white font-bold">Respuesta Rápida</h3>
              </div>
              <p className="text-gray-300 text-sm">
                Me comprometo a responder todos los mensajes en menos de 24 horas.
                Tu proyecto es importante para mí.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}