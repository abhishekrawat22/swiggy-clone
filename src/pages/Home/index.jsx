import RestaurantCard from "../../components/RestaurantCard";
import Layout from "../../layouts/layout";
import { api_url } from "../../utils/constant";

const Home = () => {
  return (
    <Layout>
      <RestaurantCard apiUrl={api_url} />
      <hr className="my-9" />
    </Layout>
  );
};

export default Home;
