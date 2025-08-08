// Import hooks
import useFetch, { type FetchState } from "./hooks/useFetch";
// Import components
import { ContactListPanel } from "./components/ContactListPanel";
// Import types
import type { Contact } from "./types/contact";
import type { Conversation } from "./types/conversation";

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

  if (contactsLoading || conversationsLoading) {
    return <div>Loading data...</div>;
  }

  if (contactsError || conversationsError) {
    return (
      <div>Error: {contactsError?.message || conversationsError?.message}</div>
    );
  }

  return (
    <div className="flex h-screen bg-default">
      {/* Left Sidebar */}
      <ContactListPanel
        contacts={contactsData || []}
        conversations={conversationsData || []}
      />
    </div>
  );
}

export default App;
