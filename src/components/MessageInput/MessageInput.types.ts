// Import types
import type { Contact } from "../../types/contact";
import type { Message } from "../../types/conversation";

export interface MessageInputProps {
  contact: Contact;
  appendMessage: (newMsg: Message) => void;
}
