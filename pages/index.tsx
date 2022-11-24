import AboutUs from "@components/about-us/about-us";
import Header from "@components/header/header";
import Subheader from "@components/subheader/subheader";
import Reviews from "@components/reviews/reviews";

export default function Home() {
  return (
    <div className="container">
      {/* <Header />
      <Subheader />
      <AboutUs /> */}
      <Reviews />
    </div>
  );
}
