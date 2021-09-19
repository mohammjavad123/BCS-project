import React, { Fragment, useState } from "react";
import Footer from "../components/footer/footer";
import Layout from "../components/layout";
import SearchBar from "../components/searchBar/searchbar";
import axios from "axios";
import News from "../components/news/new";
export default function Home(props) {
  const [data, setdata] = useState(null);
  return (
    <Fragment>
      <Layout>
        <SearchBar />
      </Layout>
      <News info={props.data} />
      <Footer />
    </Fragment>
  );
}
Home.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get("http://localhost:1337/names");
    const data = res.data;
    return { data };
  } catch (error) {
    return { error };
  }
};
