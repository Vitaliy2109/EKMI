import FeedbackForm from "../FeedbackSection/FeedbackForm";
import "../../assets/scss/components/common/_Modal.scss";

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show
    ? "modal-wrap display-block"
    : "modal-wrap display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal">
        <FeedbackForm titleText="Залишились питання?" />
        <button onClick={handleClose} className="close-btn"></button>
        <div className="background"></div>
        {/* Для бг можна додати в онклік handeClose */}
      </section>
    </div>
  );
};

export default Modal;
