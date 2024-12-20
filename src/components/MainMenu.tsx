// Components
import Sidebar from "./Sidebar";
import MenuItems from "./MenuItems";

// Types
import { Menu } from "../types/menu";

interface MainMenuProps {
  menu: Menu;
}

export default function MainMenu({ menu }: MainMenuProps) {
  return (
    <main className="min-h-screen py-6 md:py-10 bg-background text-black flex flex-col md:flex-row gap-8 md:gap-10 justify-between px-0 md:px-5 lg:px-10 xl:px-32">
      <Sidebar sections={menu.sections} />
      <MenuItems menu={menu} />
    </main>
  );
}
