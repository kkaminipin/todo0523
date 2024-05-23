import ReactPaginate from 'react-paginate';

import './styles/style.css';
import { useState } from 'react';

const Pagination = () => {
  const [page, setPage] = useState(0);

  const handlePageClick = ({ selected }) => {
    setPage(selected);
  };
  return (
    <>
      <ReactPaginate
        className='pagination'
        breakLabel='...'
        nextLabel='next >'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={5}
        previousLabel='< previous'
        renderOnZeroPageCount={null}
        forcePage={page}
      />
    </>
  );
};

export default Pagination;
