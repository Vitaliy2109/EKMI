import "../../assets/scss/components/FeedbackSection.scss";
import "animate.css/animate.min.css";
import image from "../../assets/images/FeedbackSection/image-1.png";
import FeedbackForm from "./FeedbackForm";
import LazyLoad from "react-lazy-load";
import { AnimationOnScroll } from "react-animation-on-scroll";
function FeedbackSection(props) {
  const { titleText, className, formClass } = props;
  return (
    <section id="feedback-section" className={className}>
      <div className="container">
        <div className="img-wrap">
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            delay={100}
            animateOnce={true}
          >
            <LazyLoad>
              <img src={image} alt="Sofa Image" />
            </LazyLoad>
          </AnimationOnScroll>
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
