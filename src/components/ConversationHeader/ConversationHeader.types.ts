import type { Contact } from "../../types/contact";

export interface ConversationHeaderProps extends Contact {
  messagesAmount: number;
}
