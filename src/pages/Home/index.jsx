import RestaurantCard from "../../components/RestaurantCard";
import Layout from "../../layouts/layout";
import { api_url } from "../../utils/constant";

const Home = () => {
  return (
    <Layout>
      <RestaurantCard apiUrl={api_url} />
    </Layout>
  );
};

export default Home;
