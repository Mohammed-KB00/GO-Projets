import React, {useState} from 'react';
import { UilStepForward } from '@iconscout/react-unicons'
import { UilPrevious } from '@iconscout/react-unicons'

const Pagination = ({ UsersPerPage, totalUsers, paginate }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / UsersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.includes(currentPage - 1) && (
          <a
            className="page-link"
            onClick={() => {
              setCurrentPage(currentPage - 1);
              paginate(currentPage - 1);
            }}
          >
            <UilPrevious/>
          </a>
        )}

        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
        {pageNumbers.includes(currentPage + 1) && (
          <a
            className="page-link"
            onClick={() => {
              setCurrentPage(currentPage + 1);
              paginate(currentPage + 1);
            }}
          >
            <UilStepForward/>
          </a>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;