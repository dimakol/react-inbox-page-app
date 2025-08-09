// Import types
import type { Contact } from "../types/contact";
import type { Conversation } from "../types/conversation";

export const getContactByPhone = (
  phone: string,
  contactsData: Contact[]
): Contact | undefined => {
  return contactsData.find((contact) => contact.phone === phone);
};

export const getConversationByPhone = (
  phone: string,
  conversationsData: Conversation[]
): Conversation | undefined => {
  return conversationsData.find((conversation) => conversation.phone === phone);
};
