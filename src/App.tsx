import { useState } from "react";
import { Search } from "lucide-react";
// Import components
import { CustomInput } from "./components/CustomInput";
// Import hooks
import useFetch, { type FetchState } from "./hooks/useFetch";
// Import types
import type Contact from "./types/contact";
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

  // State for search term
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

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
      </div>
    </div>
  );
}

export default App;
