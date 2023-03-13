import { MapSection } from "../components/MapSection";
import NumbersSection from "../components/NumbersSection";
import SwipeGallery from "../components/SwipeGallery/SwipeGallery";
import ContactsSection from "../components/ContactsList/ContactsSection";
import FeedbackSection from "../components/FeedbackSection/Feedbacksection";
import { AnimationOnScroll } from "react-animation-on-scroll";
function ShowRoom() {
  return (
    <main>
      <MapSection />
      <NumbersSection title="Факти" className="showRoom" />
      <SwipeGallery className="showRoom" />
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
        <ContactsSection />
      </AnimationOnScroll>
      <FeedbackSection titleText="Залишились питання?" />
    </main>
  );
}

export default ShowRoom;
