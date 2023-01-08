import AboutUs from "@components/about-us/about-us";
import Contacts from "@components/contacts/contacts";
import Enroll from "@components/enroll/enroll";
import Footer from "@components/footer/footer";
import Header from "@components/header/header";
import OurCourses from "@components/our-courses/our-courses";
import OurTeachers from "@components/our-teachers/our-teachers";
import Reviews from "@components/reviews/reviews";
import Subheader from "@components/subheader/subheader";
import WhyWe from "@components/why-we/why-we";
import React from "react";
import Head from "next/head";
import FooterForMobile from "@components/footer-for-mobile/footer-for-mobile";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Engury</title>
        <link rel="icon" href="logo.svg" />
      </Head>
      <Header />
      <Subheader />
      <AboutUs />
      <WhyWe />
      <div className="wrapper-our-courses">
        <OurCourses />
      </div>
      <Enroll />
      <OurTeachers />
      <Reviews />
      <div className="wrapper-footer-for-mobile">
        <FooterForMobile />
      </div>
      <div className="wrapper-contacts-footer">
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}
