import React from "react";
// Import types
import type { ContactFullName } from "../../types/contact";
// Import utility functions
import { getInitials } from "../../utils/parseUtils";

/**
 * This component is designed to display an avatar with initials of a contact.
 */
const Avatar: React.FC<ContactFullName> = ({ first_name, last_name }) => {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white text-sm font-medium mr-3">
      {getInitials(first_name, last_name)}
    </div>
  );
};

export default Avatar;
