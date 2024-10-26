import Footer from "./Footer";
import Header from "./Header";
import { TextParallaxContentExample } from "./Hero";
import Navbar from "./Navbar";

function HomeLayout() {
  return (
    <>
      <Navbar />
      <Header />
      <TextParallaxContentExample />
      <Footer />
    </>
  );
}

export default HomeLayout;
