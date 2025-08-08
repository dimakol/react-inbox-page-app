import type { Contact } from "../../types/contact";
import type { Conversation } from "../../types/conversation";

export interface ContactListPanelProps {
  contacts: Contact[];
  conversations: Conversation[];
}
