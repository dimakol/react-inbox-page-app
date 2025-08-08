import { useState } from "react";
// Import hooks
import useFetch, { type FetchState } from "./hooks/useFetch";
// Import components
import { ContactListPanel } from "./components/ContactListPanel";
import { ConversationPanel } from "./components/ConversationPanel";
// Import types
import type { Contact } from "./types/contact";
import type { Conversation } from "./types/conversation";
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

  const [selectedPhone, setSelectedPhone] = useState<string | null>(null);

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
    ? getConversationByPhone(selectedPhone, conversationsData || [])
    : null;

  return (
    <div className="flex h-screen bg-default">
      {/* Left Sidebar */}
      <ContactListPanel
        contacts={contactsData || []}
        conversations={conversationsData || []}
        selectedPhone={selectedPhone}
        setSelectedPhone={setSelectedContactPhone}
      />
      {/* Right Panel */}
      <ConversationPanel
        contact={selectedContact}
        messages={selectedConversation?.messages || []}
      />
    </div>
  );
}

export default App;
