import "../assets/scss/components/IndividualFurnPage.scss";
import FullCycleSection from "../components/IndividualFurnPage/FullCycleSection";
import BrandSection from "../components/IndividualFurnPage/BrandSection";
import SectionForm1 from "../components/IndividualFurnPage/SectionForm1";
import NewProducts from "../components/NewProducts/NewProducts";
import HowItWorkSection from "../components/IndividualFurnPage/HowItWorkSection";
import Reasons from "../components/IndividualFurnPage/Reasons";
import OurPartners from "../components/OurPartners";
import Brands from "../components/Brands";
import FeedbackSection from "../components/FeedbackSection/Feedbacksection";
function IndividFurnPage() {
  return (
    <main>
      <FullCycleSection />
      <BrandSection />
      <SectionForm1 />
      <NewProducts />
      <HowItWorkSection />
      <Reasons />
      <OurPartners />
      <Brands />
      <FeedbackSection titleText="Залишились питання?" />
    </main>
  );
}
export default IndividFurnPage;
