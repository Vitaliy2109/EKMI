import ContactsSection from "../components/ContactsList/ContactsSection";
import FeedbackSection from "../components/FeedbackSection/Feedbacksection";
function Contacts() {
  return (
    <main>
      <ContactsSection className="animate__animated animate__fadeIn" />
      <FeedbackSection titleText="Залишились питання?" />
    </main>
  );
}

export default Contacts;
