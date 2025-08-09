import { useEffect, useState } from "react";
// Import hooks
import useFetch, { type FetchState } from "./hooks/useFetch";
// Import components
import { ContactListPanel } from "./components/ContactListPanel";
import { ConversationPanel } from "./components/ConversationPanel";
// Import types
import type { Contact } from "./types/contact";
import type { Conversation, Message } from "./types/conversation";
// Import utility functions
import { getContactByPhone, getConversationByPhone } from "./utils/helperUtils";

function App() {
  // Fetch contacts data using custom hook
  const {
    data: contactsData,
    loading: contactsLoading,
    error: contactsError,
  }: FetchState<Contact[]> = useFetch("data/contacts.json");

  // Fetch conversations data using custom hook
  const {
    data: conversationsData,
    loading: conversationsLoading,
    error: conversationsError,
  }: FetchState<Conversation[]> = useFetch("data/conversations.json");

  const [conversations, setConversations] = useState<Conversation[] | null>(
    null
  );
  const [selectedPhone, setSelectedPhone] = useState<string | null>(null);

  useEffect(() => {
    setConversations(conversationsData);
  }, [conversationsData]);

  // Function to append a new message to the selected conversation
  const appendMessage = (newMsg: Message): void => {
    setConversations((prevConversations: Conversation[] | null) => {
      if (!prevConversations) return null; // handle the case where prevState is null
      return prevConversations.map((conversation: Conversation) =>
        conversation.phone === selectedPhone
          ? { ...conversation, messages: [...conversation.messages, newMsg] }
          : conversation
      );
    });
  };

  const setSelectedContactPhone = (phone: string): void => {
    setSelectedPhone(phone);
  };

  if (contactsLoading || conversationsLoading) {
    return <div>Loading data...</div>;
  }

  if (contactsError || conversationsError) {
    return (
      <div>Error: {contactsError?.message || conversationsError?.message}</div>
    );
  }

  const selectedContact = selectedPhone
    ? getContactByPhone(selectedPhone, contactsData || [])
    : null;
  const selectedConversation = selectedPhone
    ? getConversationByPhone(selectedPhone, conversations || [])
    : null;

  return (
    <div className="flex h-screen bg-default">
      {/* Left Sidebar */}
      <ContactListPanel
        contacts={contactsData || []}
        conversations={conversations || []}
        selectedPhone={selectedPhone}
        setSelectedPhone={setSelectedContactPhone}
      />
      {/* Right Panel */}
      <ConversationPanel
        contact={selectedContact}
        messages={selectedConversation?.messages || []}
        appendMessage={appendMessage}
      />
    </div>
  );
}

export default App;
