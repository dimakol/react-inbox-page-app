import type { Contact } from "../../types/contact";
import type { Message } from "../../types/conversation";

export interface ConversationPanelProps {
  contact?: Contact | null;
  messages: Message[];
}
