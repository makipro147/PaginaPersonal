// Importamos los tipos y datos del Model Layer (el origen de datos simulado).
import { services, additionalServices, Service } from '../data/services';

/**
 * Interfaz para la respuesta de datos combinada, tipado estricto.
 */
interface ServicesResponse {
  services: Service[];
  additionalServices: string[];
}

/**
 * Función que simula una llamada asíncrona a un API de backend (Capa de Servicios).
 *
 * En un entorno real (Cloud-Native), esta función usaría 'fetch' o 'axios'
 * para consumir un endpoint como /api/services, manejado por Next.js y el ORM.
 *
 * @returns {Promise<ServicesResponse>} Promesa que resuelve los datos de servicios.
 */
export const fetchServices = (): Promise<ServicesResponse> => {
  // Simulamos una latencia de red de 500ms a 1.5s para la experiencia real de usuario.
  const latency = Math.floor(Math.random() * 1000) + 500;
  
  return new Promise((resolve) => {
    // Usamos setTimeout para simular la asincronía del servidor.
    setTimeout(() => {
      // Resolvemos la promesa con los datos del modelo, tipando la respuesta.
      resolve({ 
        services: services, 
        additionalServices: additionalServices 
      });
    }, latency);
  });
};