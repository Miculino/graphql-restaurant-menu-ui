interface MenuItem {
  id: string;
  label: string;
  description: string | null;
  display_order: number;
  type: string;
  price: number;
}

interface Section {
  id: string;
  label: string;
  description: null | string;
  items: MenuItem[];
}

interface Menu {
  id: string;
  label: string;
  start_date: string;
  end_date: string;
  state: string;
  sections: Section[];
}

export default function MenuItems({ menu }: { menu: Menu }) {
  return (
    <div className="w-3/4 bg-background text-black">
      {menu.sections.map((section) => (
        <div key={section.id}>
          <h2 className="text-2xl font-display">{section.label}</h2>
          {section.items.map((item) => (
            <div key={item.id}>
              <h3 className="text-xl font-display">{item.label}</h3>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
