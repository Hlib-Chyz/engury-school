import ConsultationRegistrationForm from "@components/consultation-registration-form/consultation-registration-form";
import FooterForMobile from "@components/footer-for-mobile/footer-for-mobile";
import Footer from "@components/footer/footer";
import Header from "@components/header/header";
import React from "react";

export default function Form() {
  return (
    <div className="container">
      <Header isOrange={true} />
      <ConsultationRegistrationForm />
      {/* <Footer hasBackground={true} /> */}
      <FooterForMobile />
    </div>
  );
}
