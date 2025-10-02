// Importaciones de librerías externas de animación (motion/react)
import { motion, useScroll, useTransform } from 'motion/react';
// Importación del hook estándar de React para referencias a elementos del DOM
import { useRef } from 'react';
// Importación del Data Layer (Modelo) para desacoplar los datos de la Vista
import { services, additionalServices } from '../data/services';
// Importaciones de componentes de UI (shadcn/ui o similar)
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
// Importaciones de iconos de Lucide-React (Check, Star, Zap, etc.)
import { Check, Star, Zap } from 'lucide-react';

/**
 * Componente funcional para la sección de Servicios y Precios.
 * Implementa animaciones de scroll y corrige la inconsistencia de color de los íconos de check.
 * @returns {JSX.Element} La estructura JSX de la sección de servicios.
 */
export function Services() {
  // Referencia para el contenedor de la sección, usado como target para el cálculo del scroll
  const containerRef = useRef<HTMLElement>(null);
  // Hook de `motion/react` para rastrear el progreso de desplazamiento del target
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Cálculo de la transformación Y (movimiento vertical) para un efecto parallax sutil del fondo
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Inicio de la sección de servicios
  return (
    // 'ref' asigna el elemento al hook useRef para seguimiento de scroll
    <section ref={containerRef} id="servicios" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      
      {/* Parallax Background - Elementos decorativos animados */}
      <motion.div
        style={{ y: backgroundY }} // Aplicación del desplazamiento Y basado en el scroll
        className="absolute inset-0 opacity-20"
      >
        {/* Anillos de fondo sutiles para un efecto 'space' */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-indigo-500/30 rounded-full"></div>
        <div className="absolute top-60 right-20 w-24 h-24 border border-indigo-500/20 rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-16 h-16 border border-indigo-500/40 rounded-full"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado de la sección con animación de entrada (Fade-up) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Servicios y <span className="text-indigo-500">Precios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ofrezco soluciones personalizadas para cada necesidad. Los precios varían según la complejidad,
            funcionalidades específicas y requisitos del proyecto.
          </p>
        </motion.div>

        {/* Services Grid (Rejilla de Servicios) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            // Se asigna el componente Icono dinámicamente
            const Icon = service.icon; 
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{
                  y: -10, // Efecto de elevación al pasar el mouse (mejor UX)
                  transition: { type: "spring", stiffness: 300, damping: 30 }
                }}
                className="relative"
              >
                {/* Etiqueta de 'Más Popular' */}
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-indigo-600 text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Más Popular
                    </Badge>
                  </div>
                )}

                <Card className={`h-full bg-gray-800/50 border-gray-700 backdrop-blur-sm transition-all duration-300 ${
                  // Estilo especial para el plan popular con sombra y borde acentuado
                  service.popular ? 'border-indigo-500/50 shadow-lg shadow-indigo-500/20' : 'hover:border-indigo-500/30'
                }`}>
                  <CardHeader className="text-center pb-4">
                    {/* Contenedor del ícono con color de acento (Indigo) */}
                    <div className="mx-auto mb-4 p-3 bg-indigo-500/20 rounded-full w-fit">
                      <Icon className="w-8 h-8 text-indigo-500" />
                    </div>
                    <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-gray-300 mb-4">
                      {service.description}
                    </CardDescription>
                    {/* Indicación de precio y moneda */}
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-indigo-500">{service.price}</span>
                      <span className="text-gray-300">{service.currency}</span>
                    </div>
                    {/* Indicadores de complejidad y tiempo de entrega */}
                    <div className="flex justify-center gap-2">
                      <Badge variant={service.complexity === 'Alta' ? 'destructive' : service.complexity === 'Media' ? 'secondary' : 'outline'}>
                        {service.complexity}
                      </Badge>
                      <Badge variant="outline" className="text-gray-300">
                        <Zap className="w-3 h-3 mr-1" />
                        {service.deliveryTime}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {/* Listado de características del servicio */}
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * featureIndex }}
                          className="flex items-center text-gray-300"
                        >
                          {/* CORRECCIÓN CRÍTICA DE UX/DISEÑO: 
                              Se cambia el color del Check de 'text-red-500' a 'text-indigo-400' 
                              para mantener la consistencia visual y usar el color de acento para la confirmación. */}
                          <Check className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Botón de Contacto */}
                    <Button
                      className={`w-full transition-all duration-300 ${
                        // Uso de un color de fondo diferente para el botón popular (resaltando el CTA)
                        service.popular
                          ? 'bg-indigo-600 hover:bg-indigo-700 text-white' // Cambio de red a indigo para mantener la coherencia
                          : 'bg-gray-700 hover:bg-indigo-600 text-white'
                      }`}
                      onClick={() => {
                        // Función para desplazarse a la sección de contacto
                        const element = document.getElementById('contacto');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      Solicitar Cotización
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Servicios Adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Card className="bg-gray-800/30 border-gray-700 backdrop-blur-sm max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Servicios Adicionales</CardTitle>
              <CardDescription className="text-gray-300">
                Servicios complementarios para mantener y mejorar tu proyecto
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {additionalServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center text-gray-300 p-3 bg-gray-700/30 rounded-lg"
                  >
                    {/* CORRECCIÓN CRÍTICA DE UX/DISEÑO: 
                        Se cambia el color del Check de 'text-red-500' a 'text-indigo-400' 
                        para mantener la consistencia visual y usar el color de acento. */}
                    <Check className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0" />
                    {service}
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-indigo-500/10 border border-indigo-500/30 rounded-lg"> {/* Cambio de rojo a índigo */}
                <p className="text-gray-300 mb-4">
                  <strong className="text-indigo-400">Nota importante:</strong> Los precios son referenciales y pueden variar según:
                </p>
                <ul className="text-gray-300 space-y-2 text-left">
                  <li>• Complejidad y funcionalidades específicas del proyecto</li>
                  <li>• Integraciónes con servicios de terceros</li>
                  <li>• Necesidades de hosting y dominio personalizado</li>
                  <li>• Plazos de entrega requeridos</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}