import "../assets/scss/components/NumbersSection.scss";

function NumbersSection() {
  const items = [
    {
      number: 1,
      text: "Постійні інвестиції в сертифікацію своєї продукції, що здійснюються компанією «Екмі-Меблі», переконливо підтверджують лідерство компанії на українському ринку високоякісних м'яких меблів.",
    },
    {
      number: 2,
      text: "Фабрику «Екмі-меблі» сертифіковано за системою менеджменту якості ISO 9001:2000 на відповідність міжнародним стандартам, представництвом «Бюро Верітас» в Україні.",
    },
    {
      number: 3,
      text: "Компанія «Екмі-Меблі» першою з українських виробників м'яких меблів забезпечила свої меблі повноцінною гарантією і першою обґрунтовано заявила про кращу якість меблів.",
    },
  ];
  return (
    <section id="numbers-section">
      <div className="container">
        <ul className="list">
          {items.map((item, index) => {
            return (
              <li className="list__item" key={index}>
                <span className={`number number-${item.number}`}>
                  {item.number}
                </span>
                <p className="info">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default NumbersSection;
