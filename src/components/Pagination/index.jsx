import ReactPaginate from 'react-paginate';

import './styles/style.css';
import { useState } from 'react';

const Pagination = () => {
  const [page, setPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    console.log(selected + 1);
    setPage(selected + 1);
  };
  return (
    <>
      <ReactPaginate
        className='pagination'
        breakLabel='...'
        nextLabel='next >'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel='< previous'
        renderOnZeroPageCount={null}
        forcePage={page}
      />
    </>
  );
};

export default Pagination;
