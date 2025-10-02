import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  projectType: string;
}

// Configuración de EmailJS con tus claves reales
const EMAILJS_CONFIG = {
  public_key: '8PIVpaOpgonayaAGY',
  service_id: 'service_1jmtkeu',
  template_id: 'template_jx59qeo'
};

export const contactApi = {
  submitContactForm: async (formData: FormData): Promise<void> => {
    try {
      // 1. Enviar email real con EmailJS
      const emailResult = await emailjs.send(
        EMAILJS_CONFIG.service_id,
        EMAILJS_CONFIG.template_id,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          projectType: formData.projectType,
          message: formData.message,
          to_email: 'rojasmichael148@gmail.com' // Destinatario fijo
        },
        EMAILJS_CONFIG.public_key
      );

      console.log('Email enviado exitosamente:', emailResult);

      // 2. Generar y abrir WhatsApp con el mensaje
      const whatsappMessage = `*Nuevo mensaje de contacto desde mi portfolio*\n\n` +
        `*Nombre:* ${formData.name}\n` +
        `*Email:* ${formData.email}\n` +
        `*Asunto:* ${formData.subject}\n` +
        `*Tipo de proyecto:* ${formData.projectType}\n` +
        `*Mensaje:*\n${formData.message}\n\n` +
        `*Enviado desde:* Mi sitio web portfolio`;

      const whatsappUrl = `https://api.whatsapp.com/send?phone=51921866613&text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      // Notificación de éxito
      toast.success("¡Mensaje enviado exitosamente!", {
        description: "Recibirás confirmación en tu email y WhatsApp. Te contactaré pronto.",
        duration: 5000
      });

    } catch (error) {
      console.error("Error al enviar el email:", error);

      // Fallback: Abrir WhatsApp si falla el email
      const whatsappMessage = `*Nuevo mensaje de contacto (FALLBACK)*\n\n` +
        `*Nombre:* ${formData.name}\n` +
        `*Email:* ${formData.email}\n` +
        `*Asunto:* ${formData.subject}\n` +
        `*Tipo de proyecto:* ${formData.projectType}\n` +
        `*Mensaje:*\n${formData.message}`;

      const whatsappUrl = `https://api.whatsapp.com/send?phone=51921866613&text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      toast.error("Error al enviar el email, pero se envió a WhatsApp", {
        description: "Revisa la consola para detalles. Intenta de nuevo o contáctame directamente.",
        duration: 5000
      });

      throw error; // Para que el componente Contact.tsx maneje el error
    }
  }
};