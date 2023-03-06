import "../../assets/scss/components/FeedbackSection.scss";
import image from "../../assets/images/FeedbackSection/image-1.png";
import FeedbackForm from "./FeedbackForm";
function FeedbackSection(props) {
  const { titleText } = props;
  return (
    <section id="feedback-section">
      <div className="container">
        <div className="img-wrap">
          <img src={image} alt="" />
        </div>
        <FeedbackForm titleText={titleText} />
      </div>
    </section>
  );
}

export default FeedbackSection;
