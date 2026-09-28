import "./assets/css/bootstrap.css";
import "./assets/css/styles.css";
import Header from "./components/Header";
import AlertSection from "./components/AlertSection";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";
import SixthSection from "./components/SixthSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <AlertSection></AlertSection>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <FourthSection></FourthSection>
      <FifthSection></FifthSection>
      <SixthSection></SixthSection>
      <Footer />
    </>
  );
}

export default App;
