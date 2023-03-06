function PaginationWrap(props) {
  const { btnPrev, btnNext, pageNumbers, className = "" } = props;
  return (
    <div className={`pagination-wrap${className}`}>
      <button className="page-btn prev" onClick={btnPrev}></button>
      <ul className="page-numbers">{pageNumbers}</ul>
      <button className="page-btn next" onClick={btnNext}></button>
    </div>
  );
}

export default PaginationWrap;
