import React from "react";
import HomeBanner from "../components/Home/HomeBanner";
import HomeBannerFooter from "../components/Home/HomeBannerFooter";

const Home = () => {
  return (
    <main className="home_container">
      <section>
        <HomeBanner />
      </section>
      <section>
        <HomeBannerFooter />
      </section>
    </main>
  );
};

export default Home;
