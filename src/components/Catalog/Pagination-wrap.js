export default function PaginationWrap(props) {
  const { btnPrev, btnNext, pageNumbers, className = "" } = props;
  return (
    <div className={`pagination-wrap${className}`}>
      <button className="page-btn prev" onClick={btnPrev}></button>
      <ul
        className="page-numbers"
        onClick={window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {pageNumbers}
      </ul>
      <button className="page-btn next" onClick={btnNext}></button>
    </div>
  );
}
