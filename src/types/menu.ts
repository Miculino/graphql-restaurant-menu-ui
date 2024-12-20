export interface MenuItemType {
  id: string;
  label: string;
  description: string | null;
  display_order: number;
  type: string;
  price: number;
  image: string;
  thumbnail_url: string;
}

export interface Section {
  id: string;
  label: string;
  description: null | string;
  items: MenuItemType[];
}

export interface Menu {
  id: string;
  label: string;
  start_date: string;
  end_date: string;
  state: string;
  sections: Section[];
}