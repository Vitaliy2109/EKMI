import "../assets/scss/components/TechnicalInfo.scss";

import TechInfo from "../data/TechInfo.json";
import Button from "./common/Button";
function TechnicalInformation() {
  const handleDownload = () => {
    window.open("./PDF/TechInfo.pdf", "_blank");
  };

  return (
    <section id="technical-info">
      <div className="container">
        <div className="info-wrap">
          <h3 className="title">Технічна інформація</h3>
          <ul className="list">
            {Object.keys(TechInfo[0]).map((key, index) => (
              <li key={index} className="list__item">
                <p className="title">{key}:</p>
                <p className="info"> {TechInfo[0][key]}</p>
              </li>
            ))}
          </ul>
        </div>

        <Button text="Завантажити характеристику" onClick={handleDownload} />
      </div>
    </section>
  );
}

export default TechnicalInformation;
