import Button from "../common/Button";
import image1 from "../../assets/images/IndividualFurniture/FullCycleSection/image-1.jpg";
import Modal from "../common/Modal";
import { useState } from "react";
function FullCycleSection() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <section id="fullCycleSection">
      <div className="container">
        <div className="textInfo">
          <h2 className="title">Повний цикл виробництва</h2>
          <p className="text">
            Якість м'яких меблів починається задовго до початку її виробництва.
          </p>
          <Button text="Зв'язатися з менеджером" onClick={toggleModal} />
        </div>
        <div className="img-wrap">
          <img src={image1} alt="" />
        </div>
      </div>
      <Modal handleClose={toggleModal} show={showModal} />
    </section>
  );
}

export default FullCycleSection;
