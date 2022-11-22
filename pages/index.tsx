import AboutUs from "@components/about-us/about-us";
import Header from "@components/header/header";
import SomethingWentWrongModal from "@components/something-went-wrong/something-went-wrong";
import React, { useState } from "react";

export default function Home() {
  const [isOpen] = useState(true);
  return (
    <div className="container">
      {isOpen ? (
        <div>
          <SomethingWentWrongModal />
        </div>
      ) : (
        ""
      )}
      <Header />
      <AboutUs />
    </div>
  );
}
