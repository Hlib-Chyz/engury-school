import AboutUs from "@components/about-us/about-us";
import Header from "@components/header/header";
import Subheader from "@components/subheader/subheader";
import Reviews from "@components/reviews/reviews";
import React from "react";
import Footer from "@components/footer/footer";
import Contacts from "@components/contacts/contacts";
import WhyWe from "@components/why-we/why-we";
import OurCourses from "@components/our-courses/our-courses";
import Enroll from "@components/enroll/enroll";
import OurTeachers from "@components/our-teachers/our-teachers";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Subheader />
      <AboutUs />
      <WhyWe />
      <OurCourses />
      <Enroll />
      <OurTeachers />
      <Reviews />
      <div className="wrapper-contacts-footer">
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}
