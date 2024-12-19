// Restaurant Menu
export const RESTAURANT_MENU = {
  id: "1",
  label: "Mrs Kueh Menu",
  start_date: "2024-01-01",
  end_date: "2024-01-01",
  state: "active",
  sections: [
    {
      id: "1",
      label: "Platters",
      description: null,
      items: [
        {
          id: "1",
          label: "Mrs Kueh's Favourites",
          description:
            "\u003cp\u003eIncludes:\u003cbr/\u003e3 pieces of Kueh Salat\u003cbr/\u003e3 pieces of Bingka Ubi\u003cbr/\u003e3 pieces of Ondeh Ondeh\u003cbr/\u003e3 pieces of Putri Ayu\u003cbr/\u003eKueh Kosui\u003c/p\u003e\u003cp\u003e\u003c/p\u003e",
          display_order: 0,
          type: "Product",
          price: 35.0,
        },
      ],
    },
    {
      id: "2",
      label: "Desserts",
      description: null,
      items: [
        {
          id: "2",
          label: "Kueh Lapis",
          description:
            "\u003cp\u003eA traditional layered cake made with coconut milk and pandan flavor.\u003c/p\u003e",
          display_order: 1,
          type: "Product",
          price: 25.0,
        },
      ],
    },
    {
      id: "3",
      label: "Beverages",
      description: null,
      items: [
        {
          id: "3",
          label: "Teh Tarik",
          description:
            "\u003cp\u003eA popular Malaysian pulled tea, rich and creamy.\u003c/p\u003e",
          display_order: 2,
          type: "Product",
          price: 5.0,
        },
      ],
    },
  ],
};
