import AboutUs from "@components/about-us/about-us";
import Header from "@components/header/header";
import Subheader from "@components/subheader/subheader";
import Reviews from "@components/reviews/reviews";
import React from "react";
import Footer from "@components/footer/footer";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Subheader />
      <AboutUs />
      <Reviews />
      <Footer />
    </div>
  );
}
