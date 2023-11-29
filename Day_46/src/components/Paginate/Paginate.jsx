import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

const Paginate = () => {
  const [pageCount, setPageCount] = useState(0);
  const totalPage = useSelector((state) => state.product.totalPage);
  const navigate = useNavigate();

  useEffect(() => {
    setPageCount(totalPage);
  }, [totalPage]);

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    // dispatch(getProducts(currentPage));
    navigate(`/product/${currentPage}`);
  };
  return (
    <>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
};

export default Paginate;
