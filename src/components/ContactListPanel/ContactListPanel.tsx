import { Search } from "lucide-react";
import React, { useState } from "react";
// Import components
import { CustomInput } from "../CustomInput";

/**
 * This component is designed to display a list of contacts with search functionality.
 */
export default function ContactListPanel() {
  // State for search term
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

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
    </div>
  );
}
