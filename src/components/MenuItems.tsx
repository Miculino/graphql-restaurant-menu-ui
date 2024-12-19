// Components
import MenuItem from "./MenuItem";

interface MenuItem {
  id: string;
  label: string;
  description: string | null;
  display_order: number;
  type: string;
  price: number;
  image: string;
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
    <div className="w-3/4 flex flex-col gap-16 px-6">
      {menu.sections.map((section) => (
        <div className="flex flex-col gap-8" key={section.id} id={section.id}>
          <h2 className="text-3xl font-display">{section.label}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.items.map((item) => (
              <MenuItem
                key={item.id}
                label={item.label}
                description={item.description ?? ""}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
