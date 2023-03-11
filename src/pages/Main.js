import BestLife from "../components/Bestlife/BestLife";
import NewProducts from "../components/NewProducts/NewProducts";
import IndividualFurnSection from "../components/IndividualFurnSection";
import OurHistory from "../components/OurHistory";
import LatestPublications from "../components/LatestPublications/LatestPublications";
import FeedbackSection from "../components/FeedbackSection/Feedbacksection";
import NumbersSection from "../components/NumbersSection";
import OurPartners from "../components/OurPartners";
import Brands from "../components/Brands";
import GallerySection from "../components/GallerySection";
function Main() {
  return (
    <main>
      <BestLife />
      <NewProducts />
      <IndividualFurnSection />
      <OurHistory />
      <LatestPublications />
      <FeedbackSection titleText="Залишились питання?" />
      <NumbersSection />
      <OurPartners />
      <Brands />
      <GallerySection />
    </main>
  );
}

export default Main;
