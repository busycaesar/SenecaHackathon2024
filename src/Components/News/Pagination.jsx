import PropTypes from "prop-types";
import React, { useState } from "react";

Pagination.propTypes = {
  numbers: PropTypes.number,
  getPreviousPage: PropTypes.func,
  getNextPage: PropTypes.func,
  getSelectedPage: PropTypes.func,
};

function Pagination(props) {
  const pageNumbers = [];
  const [activePage, setActivePage] = useState(0);
  for (let i = 0; i < props.numbers; i++) {
    pageNumbers.push(i);
  }

  const getSelectedPage = (number) => {
    setActivePage(number);
    props.getSelectedPage(number);
  };

  const getPreviousPage = () => {
    if (activePage > 0) {
      setActivePage(activePage - 1);
      props.getPreviousPage(activePage);
    }
  };

  const getNextPage = () => {
    if (activePage < props.numbers - 1) {
      setActivePage(activePage + 1);
      props.getNextPage(activePage);
    }
  };
  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-8 text-sm list-none justify-center">
        <li>
          <div
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-neutral-100 border border-e-0 border-gray-300 rounded-s-lg hover:bg-my-red hover:cursor-pointer  hover:text-white"
            onClick={() => getPreviousPage()}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </div>
        </li>

        {pageNumbers.map((number) => (
          <li>
            <div
              key={number}
              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 hover:bg-my-red hover:cursor-pointer  hover:text-white ${
                activePage === number ? "bg-my-red text-white" : ""
              }`}
              onClick={() => getSelectedPage(number)}
            >
              {number + 1}
            </div>
          </li>
        ))}

        <li>
          <div
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border bg-neutral-100 border-gray-300 rounded-e-lg hover:bg-my-red hover:cursor-pointer  hover:text-white"
            onClick={() => getNextPage()}
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
