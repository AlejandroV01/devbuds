import React from 'react'
import PaginationButton from './paginationButtons';
import { render } from 'react-dom';

type onPageChangeType = (n: number) => void;

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: onPageChangeType;
};

// Button to go to previous page
const prevButton = (currentPage: number, onPageChange: onPageChangeType) => {
  if (currentPage > 1) {
    const buttonContent = '< Previous';
    return (
      <button className='px-1' onClick={() => onPageChange(currentPage - 1)}>
        {buttonContent}
      </button>
    )
  }
  return null;
};


// Button to go to next page
const nextButton = (currentPage: number, totalPages: number, onPageChange: onPageChangeType) => {
  console.log(currentPage, totalPages)
  if (currentPage < totalPages) {
    const buttonContent = 'Next >';
    return (
      <button className='px-1' onClick={() => onPageChange(currentPage + 1)}>
        {buttonContent}
      </button>
    )
  }
  return null;
};

// Button to jump to the first page
const firstPageButton = () => {
  return (
    <>
    <button>1</button>
    <p>. . .</p>
    </>
  );
};

// Button to jump to the last page
const lastPageButton = (totalPages: number) => {
  return (
    <>
    <p>. . .</p>
    <button>{totalPages}</button>
    </>
  );
};



const getRenderNumbers = (currentPage: number, totalPages: number) => {
  
  const renderSize: number = 5;
  const distribution: number = Math.floor(renderSize / 2)
  const numbers: number[] = [];
  let startPage: number, lastPage: number;



  startPage = Math.max(currentPage - distribution, 1);
  lastPage = Math.min(currentPage + distribution, totalPages);

  // case for the last 2 pages
  if ((totalPages - currentPage) <= 1) {
    startPage = totalPages - renderSize + 1;
    lastPage = totalPages;
  }

  // case for the first two pages
  if (currentPage <= 2) {
    startPage = 1;
    lastPage = renderSize;
  }
  

  for (let i = startPage; i <= lastPage; i++) {
    numbers.push(i);
  }

  return numbers;
};




const Pagination = ({totalPages, currentPage, onPageChange}: PaginationProps) => {

  const renderNumbers = () => {
    
  
    if (true) {
      const pages: number[] = getRenderNumbers(currentPage, totalPages);
      return (
        <>
          {pages.map( (n) => (
            <button className={`px-4 ${n === currentPage ? 'bg-red-400': undefined}`} key={n}>
              {n}
            </button>
          ))}
        </>
      )
    }
  };


  return (
    <div className='flex justify-start items-center space-x-3'>

      {prevButton(currentPage, onPageChange)}
      
      {currentPage > 3 &&(
        firstPageButton()
      )}

      {renderNumbers()}


      {totalPages - currentPage > 4 && (
        lastPageButton(totalPages)
      )}

      {nextButton(currentPage, totalPages, onPageChange)}

    </div>


  );

    // return (
    //     <div className='flex justify-start items-center space-x-3'>
    //       <p>{ name }</p>
    //       <button>{'< Previous'}</button>
    //       <button onClick={change}>1</button>
    //       <button>2</button>
    //       <button>3</button>
    //       <button>{' Next >'}</button>
    //     </div>
    //   )
};

export default Pagination;