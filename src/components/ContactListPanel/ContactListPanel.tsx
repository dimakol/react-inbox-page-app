import React, { useState } from "react";
import { Search } from "lucide-react";
// Import components
import { CustomInput } from "../CustomInput";
import { Contact } from "../Contact";
// Import types
import type { ContactListPanelProps } from "./ContactListPanel.types";
import type { Conversation, Message } from "../../types/conversation";

/**
 * This component is designed to display a list of contacts with search functionality.
 */
const ContactListPanel: React.FC<ContactListPanelProps> = ({
  contacts,
  conversations,
}) => {
  // State for search term
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  // Filter contacts based on search - case insensitive
  const filteredContacts = contacts.filter((contact) => {
    const fullName = `${contact.first_name} ${contact.last_name}`.toLowerCase();
    const phone = contact.phone.toLowerCase();
    const search = searchTerm.toLowerCase();
    // Check if full name or phone contains the search term
    return fullName.includes(search) || phone.includes(search);
  });

  // Filter conversations based on filtered contacts
  const filteredConversations = conversations.filter((conversation) => {
    const filteredPhones = filteredContacts.map((contact) => contact.phone);
    // Match conversations to contacts using the phone number field
    return filteredPhones.includes(conversation.phone);
  });

  return (
    <div className="w-80 border-r flex flex-col border-divider">
      {/* Search */}
      <div className="p-4 border-b border-divider">
        <div className="relative">
          {/* Svg icon  */}
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-placeholder" />
          <CustomInput
            placeholder="Search"
            name="search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="text-main border-divider focus:!border-primary"
          />
        </div>
      </div>

      {/* Conversations Count */}
      <div className="px-4 py-3 text-main text-sm font-medium">
        {filteredContacts.length} Conversations
      </div>

      {/* Contact List */}
      <ContactList
        contacts={filteredContacts}
        conversations={filteredConversations}
      />
    </div>
  );
};

/**
 * This component is designed to display a list of contacts.
 */
const ContactList: React.FC<ContactListPanelProps> = ({
  contacts,
  conversations,
}) => {
  const [selectedPhone, setSelectedPhone] = useState<string | null>(null);

  const getConversationByPhone = (phone: string): Conversation | undefined => {
    return conversations.find((conversation) => conversation.phone === phone);
  };

  const getLastMessage = (messages: Message[]): Message => {
    return messages[messages.length - 1];
  };

  const setSelectedContactPhone = (phone: string): void => {
    setSelectedPhone(phone);
  };

  return (
    <div className="flex-1 overflow-y-auto">
      {contacts.map((contact) => {
        const conversation = getConversationByPhone(contact.phone);
        let lastMessage = null;
        if (conversation) {
          lastMessage = getLastMessage(conversation.messages);
        }

        return (
          <Contact
            key={contact.phone}
            contact={contact}
            lastMessage={lastMessage}
            isSelected={selectedPhone === contact.phone}
            setSelectedPhone={setSelectedContactPhone}
          />
        );
      })}
    </div>
  );
};

export default ContactListPanel;
