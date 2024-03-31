import Layout from "../../layouts/layout";

const api_url =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

const Home = () => {
  return (
    <Layout>
      <h1>Hello Swiggy</h1>
    </Layout>
  );
};

export default Home;
