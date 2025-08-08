import React from "react";
// Import types
import type { AvatarProps } from "./Avatar.types";
// Import utility functions
import { getInitials } from "../../utils/parseUtils";

/**
 * This component is designed to display an avatar with initials of a contact.
 */
const Avatar: React.FC<AvatarProps> = ({ firstName, lastName }) => {
  return (
    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white text-sm font-medium mr-3">
      {getInitials(firstName, lastName)}
    </div>
  );
};

export default Avatar;
