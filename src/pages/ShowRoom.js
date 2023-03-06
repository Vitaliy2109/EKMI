import { MapSection } from "../components/MapSection";
import NumbersSection from "../components/NumbersSection";
import SwipeGallery from "../components/SwipeGallery/SwipeGallery";
import ContactsSection from "../components/ContactsSection";
import FeedbackSection from "../components/FeedbackSection/Feedbacksection";
function ShowRoom() {
  return (
    <main>
      <MapSection />
      <NumbersSection title="Факти" className="showRoom" />
      <SwipeGallery className="showRoom" />
      <ContactsSection />
      <FeedbackSection titleText="Залишились питання?" />
    </main>
  );
}

export default ShowRoom;
