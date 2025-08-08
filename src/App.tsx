import { useState } from "react";
import { Search } from "lucide-react";
// Import components
import { CustomInput } from "./components/CustomInput";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex h-screen bg-default">
      {/* Left Sidebar */}
      <div className="w-80 border-r flex flex-col border-divider">
        {/* Search */}
        <div className="p-4 border-b border-divider">
          <div className="relative">
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
