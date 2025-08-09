// Import components
import { Contact } from "../Contact";
// Import types
import type { ContactListPanelProps } from "../ContactListPanel";
import type { Message } from "../../types/conversation";
// Import utility functions
import { getConversationByPhone } from "../../utils/helperUtils";

/**
 * This component is designed to display a list of contacts.
 */
const ContactList: React.FC<ContactListPanelProps> = ({
  contacts,
  conversations,
  selectedPhone,
  setSelectedPhone,
}) => {
  const getLastMessage = (messages: Message[]): Message => {
    return messages[messages.length - 1];
  };

  return (
    <div className="flex-1 overflow-y-auto">
      {contacts.map((contact) => {
        const conversation = getConversationByPhone(
          contact.phone,
          conversations
        );
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
            setSelectedPhone={setSelectedPhone}
          />
        );
      })}
    </div>
  );
};

export default ContactList;
