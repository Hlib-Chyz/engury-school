import AboutUs from "@components/about-us/about-us";
import Header from "@components/header/header";
import React from "react";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <AboutUs />
    </div>
  );
}
