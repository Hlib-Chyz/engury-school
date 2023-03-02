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
import React, { useRef } from "react";
import Head from "next/head";
import FooterForMobile from "@components/footer-for-mobile/footer-for-mobile";

export default function Home() {
  const teachersRef = useRef<HTMLDivElement>(null);
  const tariffsRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container">
      <Head>
        <title>Engury</title>
        <link rel="icon" href="logo.svg" />
      </Head>
      <Header
        refs={{ teachersRef, tariffsRef, aboutUsRef, reviewsRef, contactsRef }}
      />
      <Subheader />
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <WhyWe />
      <div ref={tariffsRef} className="wrapper-our-courses">
        <OurCourses />
      </div>
      <Enroll />
      <div ref={teachersRef}>
        <OurTeachers />
      </div>
      <div ref={reviewsRef}>
        <Reviews />
      </div>
      <div className="wrapper-footer-for-mobile">
        <FooterForMobile />
      </div>
      <div className="wrapper-contacts-footer">
        <div ref={contactsRef}>
          <Contacts />
        </div>
        <Footer />
      </div>
    </div>
  );
}
