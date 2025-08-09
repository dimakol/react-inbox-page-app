// Import types
import type { PlaceholderKey } from "../../types/contact";

export interface PlaceholderButtonProps {
  placeholder: PlaceholderKey;
  isInMessage: boolean;
  addPlaceholder: (placeholder: PlaceholderKey) => void;
}
