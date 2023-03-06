import Button from "../common/Button";
import image1 from "../../assets/images/IndividualFurniture/FullCycleSection/image-1.jpg";
function FullCycleSection() {
  return (
    <section id="fullCycleSection">
      <div className="container">
        <div className="textInfo">
          <h2 className="title">Повний цикл виробництва</h2>
          <p className="text">
            Якість м'яких меблів починається задовго до початку її виробництва.
          </p>
          <Button text="Зв'язатися з менеджером" />
        </div>
        <div className="img-wrap">
          <img src={image1} alt="" />
        </div>
      </div>
      ;
    </section>
  );
}

export default FullCycleSection;
