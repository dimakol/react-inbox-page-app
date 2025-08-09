// Import types
import type { Contact } from "../../types/contact";
import type { Message } from "../../types/conversation";

export interface MessageBubbleProps extends Message {
  contact: Contact;
}
