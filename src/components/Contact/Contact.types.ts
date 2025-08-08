import type { Contact } from "../../types/contact";
import type { Message } from "../../types/conversation";

export interface ContactProps {
  contact: Contact;
  lastMessage: Message | null;
  isSelected: boolean;
  setSelectedPhone: (phone: string) => void;
}
