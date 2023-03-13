import Button from "../common/Button";
import image1 from "../../assets/images/IndividualFurniture/FullCycleSection/image-1.jpg";
import Modal from "../common/Modal";
import LazyLoad from "react-lazy-load";
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
          <h2 className="title animate__animated animate__fadeInDown">
            Повний цикл виробництва
          </h2>
          <p className="text animate__animated animate__fadeInDown">
            Якість м'яких меблів починається задовго до початку її виробництва.
          </p>
          <Button
            text="Зв'язатися з менеджером"
            onClick={toggleModal}
            className="animate__animated animate__fadeInUp animate__delay-1s"
          />
        </div>
        <div className="img-wrap">
          <LazyLoad>
            <img src={image1} alt="Sofa Image" />
          </LazyLoad>
        </div>
      </div>
      <Modal handleClose={toggleModal} show={showModal} />
    </section>
  );
}

export default FullCycleSection;
