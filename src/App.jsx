import Services from "./components/Services";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benifits from "./components/Benifits";
import Button from "./components/Button";
import Collabaration from "./components/Collabaration";
import Header from "./components/Header";
import Hero1 from "./components/Hero1";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero1 />
        <Benifits />
        <Collabaration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
