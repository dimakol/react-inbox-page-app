export interface Contact {
  first_name: string;
  last_name: string;
  city: string;
  phone: string;
}

export type ContactFullName = Pick<Contact, "first_name" | "last_name">;
export type ContactPhone = Pick<Contact, "phone">;
