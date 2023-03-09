import "../assets/scss/components/TechnicalInfo.scss";

import TechInfo from "../data/TechInfo.json";
function TechnicalInformation() {
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

        <a href="./PDF/TechInfo.pdf" download className="btn">
          Завантажити характеристику
        </a>
      </div>
    </section>
  );
}

export default TechnicalInformation;
