// Components
import Sidebar from "./components/Sidebar";
import MenuItems from "./components/MenuItems";

// Data
import { RESTAURANT_MENU } from "./data/mockData";

// GraphQL
import { gql } from "@apollo/client";

// Apollo Client
import { useQuery } from "@apollo/client";

function App() {
  const menu = RESTAURANT_MENU;

  const MENU_QUERY = gql`
    query Menus {
      menus {
        sections {
          id
          label
          items {
            id
            label
            description

            type
            price
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(MENU_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const restaurantMenu = data.menus;

  console.log(restaurantMenu);

  return (
    <main className="min-h-screen py-6 md:py-10 bg-background text-black flex flex-col md:flex-row gap-8 md:gap-10 justify-between px-0 md:px-5 lg:px-10 xl:px-32">
      <Sidebar sections={menu.sections} />
      <MenuItems menu={menu} />
    </main>
  );
}

export default App;
