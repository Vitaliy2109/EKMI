import FeedbackForm from "../FeedbackSection/FeedbackForm";
import { Parallax } from "react-parallax";
import bg from "../../assets/images/IndividualFurniture/sectionForm1/bg-image.jpg";

function SectionForm1() {
  return (
    <section id="sectionForm1">
      <Parallax bgImage={bg} strength={500}>
        <div className="container">
          <FeedbackForm titleText="Індивідуальний розрахунок" />
        </div>
      </Parallax>
    </section>
  );
}
export default SectionForm1;
