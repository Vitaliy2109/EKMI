import Section3D from "../components/Section3D/Section3D";
import SwipeGallery from "../components/SwipeGallery/SwipeGallery";
import TechnicalInformation from "../components/TechnicalInformation";
import FeedbackSection from "../components/FeedbackSection/Feedbacksection";
import LatestPublications from "../components/LatestPublications/LatestPublications";
function Models3D() {
  return (
    <main>
      <Section3D />
      <SwipeGallery />
      <TechnicalInformation />
      <FeedbackSection titleText="Бажаєте диван Barselona у свій інтер'єр?" />
      <LatestPublications />
    </main>
  );
}

export default Models3D;
