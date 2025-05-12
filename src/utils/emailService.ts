
import emailjs from "@emailjs/browser";
import { toast } from "@/components/ui/use-toast";

interface EmailParams {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject?: string;
}

export const sendEmail = async (params: EmailParams): Promise<boolean> => {
  try {
    // Implementação real do EmailJS com as credenciais fornecidas
    await emailjs.send(
      "service_2ho8h0y", // Service ID
      "template_wy2efrr", // Template ID
      {
        name: params.name,
        email: params.email,
        message: params.message
        // O e-mail de destino já está configurado diretamente no template
      },
      "kx1QYE5rS7DnxZqvy" // Public Key
    );
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
      variant: "default",
    });
    
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    
    toast({
      title: "Erro ao enviar",
      description: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
      variant: "destructive",
    });
    
    return false;
  }
};
