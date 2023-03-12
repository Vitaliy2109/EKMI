import "../../assets/scss/components/FeedbackSection.scss";
import image from "../../assets/images/FeedbackSection/image-1.png";
import FeedbackForm from "./FeedbackForm";
import LazyLoad from "react-lazy-load";
function FeedbackSection(props) {
  const { titleText, className, formClass } = props;
  return (
    <section id="feedback-section" className={className}>
      <div className="container">
        <div className="img-wrap">
          <LazyLoad>
            <img src={image} alt="Sofa Image" />
          </LazyLoad>
        </div>
        <FeedbackForm
          titleText={titleText}
          className={className}
          formClass={formClass}
        />
      </div>
    </section>
  );
}

export default FeedbackSection;
