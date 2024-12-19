// Components
import SidebarScroller from "./SidebarScroller";

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

export default function Sidebar({ sections }: { sections: Section[] }) {
  return (
    <div className="w-full md:w-1/4 bg-background text-black">
      <h3 className="text-3xl font-bold font-display mb-5 px-4 md:px-0">
        Our Menu
      </h3>

      <SidebarScroller>
        {sections.map((section) => (
          <div
            className="p-3 border-l-2 border-gray-200 whitespace-nowrap hover:border-black transition-colors"
            key={section.id}
          >
            <a href={`#${section.id}`} className="text-lg">
              {section.label}
            </a>
          </div>
        ))}
      </SidebarScroller>
    </div>
  );
}
