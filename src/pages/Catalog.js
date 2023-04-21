import "../assets/scss/components/Catalog.scss";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import "lightgallery/scss/lg-thumbnail.scss";
import Products from "../data/products.json";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import FilterButton from "../components/Catalog/FilterButton";
import PaginationWrap from "../components/Catalog/Pagination-wrap";
import FeedbackSection from "../components/FeedbackSection/Feedbacksection";
import LazyLoad from "react-lazy-load";
import { useState } from "react";
function Catalog() {
  const [filtered, setFilterd] = useState(Products);
  const [classSmall, setClassSmall] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const filterButtonsArr = [
    {
      text: "Дивани",
      type: "sofa",
      image: "image-1.png",
    },
    {
      text: "Стільці",
      type: "chair",
      image: "image-2.jpg",
    },
    {
      text: "Крісла",
      type: "armchair",
      image: "image-3.jpg",
    },
    {
      text: "Ліжка",
      type: "bed",
      image: "image-4.jpg",
    },
    {
      text: "Матраси",
      type: "mattress",
      image: "image-5.jpg",
    },
    {
      text: "Пуфи",
      type: "pouf",
      image: "image-6.jpg",
    },
    {
      text: "Екслюзивні меблі",
      type: "exclusive",
      image: "image-7.jpg",
    },
  ];
  Fancybox.bind('[data-fancybox="gallery"]', {
    compact: false,

    animated: false,
    showClass: false,
    hideClass: false,

    dragToClose: false,

    Images: {
      zoom: true,
    },

    Toolbar: {
      display: {
        left: [],
        middle: [],
        right: ["close"],
      },
    },
  });
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filtered.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  if (currentPage < 1) {
    setCurrentPage(1);
  }
  if (currentPage > pageNumbers[pageNumbers.length - 1]) {
    setCurrentPage(pageNumbers[pageNumbers.length - 1]);
  }

  const returnPageNumbers = pageNumbers.map((number) => {
    return (
      <li key={number} id={number} onClick={(e) => setCurrentPage(e.target.id)}>
        {number}
      </li>
    );
  });

  function productsFilter(value) {
    if (value === "all") {
      setFilterd(Products);
    } else {
      let newProducts = [...Products].filter((item) => item.type === value);
      setFilterd(newProducts);
    }
  }
  const search = (value) => {
    if (value.length > 1) {
      const newArr = Products.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilterd(newArr);
    } else if (value.length === 0) {
      setFilterd(Products);
    }
  };

  return (
    <main>
      <section id="filterSection">
        <div className="container">
          <ul className="list animate__animated animate__fadeInDown">
            {filterButtonsArr.map((el, index) => {
              return (
                <FilterButton
                  key={index}
                  text={el.text}
                  type={el.type}
                  onClick={() => productsFilter(el.type)}
                  image={
                    <LazyLoad>
                      <img
                        src={`./images/CatalogImages/${el.image}`}
                        alt="Sofa Image"
                      />
                    </LazyLoad>
                  }
                />
              );
            })}
          </ul>
        </div>
      </section>
      <section id="section-catalog">
        <div className="container">
          <div className="navigation-wrap animate__animated animate__fadeInUp">
            <div className="left-info">
              <ul>
                <li>
                  <p className="title">Каталог</p>
                  <ul className="dropdown">
                    <FilterButton
                      text="Всі товари"
                      type="sofa"
                      onClick={() => productsFilter("all")}
                    />
                    {filterButtonsArr.map((el, index) => {
                      return (
                        <FilterButton
                          key={index}
                          text={el.text}
                          type={el.type}
                          onClick={() => productsFilter(el.type)}
                        />
                      );
                    })}
                  </ul>
                </li>
              </ul>
              <div className={`buttons-wrap${classSmall ? " small" : ""}`}>
                <div
                  className="button-col-4"
                  onClick={() => setClassSmall(false)}
                >
                  <div></div>
                </div>
                <div
                  className="button-col-2"
                  onClick={() => setClassSmall(true)}
                >
                  <div></div>
                </div>
              </div>
            </div>
            <div className="right-info">
              <div className="input-wrap">
                <input
                  type="text"
                  className="input"
                  id="searchInput"
                  placeholder=" "
                  onChange={(e) => search(e.target.value)}
                />
                <label htmlFor="searchInput" className="label">
                  Пошук
                </label>
                <i className="icon-search"></i>
              </div>
            </div>
          </div>
          <PaginationWrap
            btnPrev={() => {
              setCurrentPage(currentPage - 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            btnNext={() => {
              setCurrentPage(currentPage + 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            pageNumbers={returnPageNumbers}
            className=" top"
          />
          <div className={`catalog-wrap${classSmall ? " small" : ""} `}>
            <ul className="items-wrap">
              {filtered
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((elem, index) => {
                  return (
                    <li className="item" key={index}>
                      <div
                        data-fancybox="gallery"
                        href={`./images/products/${elem.photo}`}
                        className="img-wrap"
                      >
                        <img
                          className="rounded"
                          src={`./images/products/${elem.photo}`}
                          alt={elem.name}
                        />
                      </div>
                      <div className="text-wrap">
                        {" "}
                        <p className="name">{elem.name}</p>
                        {classSmall ? (
                          <p className="description">{elem.description}</p>
                        ) : null}
                      </div>
                    </li>
                  );
                })}
            </ul>
            <PaginationWrap
              btnPrev={() => {
                setCurrentPage(currentPage - 1);
              }}
              btnNext={() => {
                setCurrentPage(currentPage + 1);
              }}
              pageNumbers={returnPageNumbers}
            />
          </div>
        </div>
      </section>
      <FeedbackSection titleText="Залишились питання?" />
    </main>
  );
}

export default Catalog;
