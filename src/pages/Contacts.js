import ContactsSection from "../components/ContactsSection";
import FeedbackSection from "../components/FeedbackSection/Feedbacksection";
function Contacts() {
  return (
    <main>
      <ContactsSection />
      <FeedbackSection titleText="Залишились питання?" />
    </main>
  );
}

export default Contacts;
