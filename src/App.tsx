// Components
import MainMenu from "./components/MainMenu";
import MenuLoader from "./components/MenuLoader";

// Apollo Client
import { useQuery } from "@apollo/client";

// GraphQL Queries
import { GET_MENU } from "./lib/apollo/queries/menuQueries";

function App() {
  const { loading, error, data } = useQuery(GET_MENU, {
    variables: { id: 1 },
  });

  if (loading) return <MenuLoader />;
  if (error) return <p>Error: {error.message}</p>;

  const restaurantMenu = data.menu;

  return <MainMenu menu={restaurantMenu} />;
}

export default App;
