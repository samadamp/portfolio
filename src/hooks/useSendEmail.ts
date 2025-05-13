import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";

export function useSendEmail(onSuccess: () => void) {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const toast = useToast();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_ojw6gda',     
      'template_ay9fgxe',     
      form.current!,
      'npGWV5QzBe5JeY-9z'     
    )
    .then(() => {
      toast({
        title: "Message sent!",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setIsSending(false);
      onSuccess();  
    })
    .catch((error) => {
      console.error(error);
      toast({
        title: "Failed to send",
        description: "Please try again later.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setIsSending(false);
    });
  };

  return { form, sendEmail, isSending };
}
