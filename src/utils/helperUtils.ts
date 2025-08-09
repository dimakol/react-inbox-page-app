// Import types
import type { Contact, PhoneType } from "../types/contact";
import type { Conversation } from "../types/conversation";

export const getContactByPhone = (
  phone: PhoneType,
  contactsData: Contact[]
): Contact | undefined => {
  return contactsData.find((contact) => contact.phone === phone);
};

export const getConversationByPhone = (
  phone: PhoneType,
  conversationsData: Conversation[]
): Conversation | undefined => {
  return conversationsData.find((conversation) => conversation.phone === phone);
};
