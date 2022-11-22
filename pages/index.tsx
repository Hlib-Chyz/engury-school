import AboutUs from "@components/about-us/about-us";
import Header from "@components/header/header";
import SomethingWentWrongModal from "@components/something-went-wrong/something-went-wrong";
import ThankYouModal from "@components/thank-you/thank-you";
import React, { useState } from "react";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <AboutUs />
    </div>
  );
}
