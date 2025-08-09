import React, { useState } from "react";
import { Search } from "lucide-react";
// Import components
import { CustomInput } from "../CustomInput";
import { ContactList } from "../ContactList";
// Import types
import type { ContactListPanelProps } from "./ContactListPanel.types";

/**
 * This component is designed to display a list of contacts with search functionality.
 */
const ContactListPanel: React.FC<ContactListPanelProps> = ({
  contacts,
  conversations,
  selectedPhone,
  setSelectedPhone,
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
    // Match conversations to contacts using the phone number field
    return filteredContacts.some(
      (contact) => contact.phone === conversation.phone
    );
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
        selectedPhone={selectedPhone}
        setSelectedPhone={setSelectedPhone}
      />
    </div>
  );
};

export default ContactListPanel;
