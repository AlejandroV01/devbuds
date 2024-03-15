import React from 'react'
import PaginationButton from './paginationButtons';
import { render } from 'react-dom';

type onPageChangeType = (n: number) => void;

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: onPageChangeType;
};

/**
 * 
 * @param currentPage - takes the current page
 * @param onPageChange - change page handle function
 * @returns - returns nothing if page is 1
 */
const prevButton = (currentPage: number, onPageChange: onPageChangeType) => {
  if (currentPage > 1) {
    const buttonContent = '<';
    return (
      <button className={getButtonStyling()} onClick={() => onPageChange(currentPage - 1)}>
        {buttonContent}
      </button>
    )
  }
  return null;
};


/**
 * 
 * @param currentPage - takes the current page
 * @param totalPages - takes the total pages available or requested
 * @param onPageChange - change page handle function
 * @returns - returns nothing if last page
 */
const nextButton = (currentPage: number, totalPages: number, onPageChange: onPageChangeType) => {
  console.log(currentPage, totalPages)
  if (currentPage < totalPages) {
    const buttonContent = '>';
    return (
      <button className={getButtonStyling()} onClick={() => onPageChange(currentPage + 1)}>
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
    <button className={getButtonStyling()}>1</button>
    <p>...</p>
    </>
  );
};

// Button to jump to the last page
const lastPageButton = (totalPages: number) => {
  return (
    <>
    <p>...</p>
    <button className={getButtonStyling()}>{totalPages}</button>
    </>
  );
};


/**
 * 
 * @param currentPage - takes current page user is at
 * @param totalPages - total available pages
 * @returns - array of possible page numbers to render
 */
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


/**
 * 
 * @param borderColor - Color of button border
 * @param textColor - Color of text inside button
 * @param bgColor - Inside button background color
 * @param isSelected - specify if button is selected (so it's not clickable)
 * @param borderType - rounded, square, etc
 * @returns 
 */
const getButtonStyling = (borderColor: string = 'border-gray-900', 
                          textColor: string = 'text-gray-900', 
                          bgColor: string = '', 
                          isSelected: boolean = false,
                          borderType: string = 'rounded-full') => {

  let selected = '';

  if (isSelected) selected = 'focus:outline-none cursor-default'; 

  return  'align-middle select-none font-sans font-bold text-center uppercase' +
          'transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none' + 
          `text-xs py-1 px-3 border ${borderColor} ${textColor} ${bgColor} ${selected} hover:opacity-75 focus:ring` + 
          `focus:ring-gray-300 active:opacity-[0.85] ${borderType}`;
};


const Pagination = ({totalPages, currentPage, onPageChange}: PaginationProps) => {

  const renderNumbers = () => {
    const pages: number[] = getRenderNumbers(currentPage, totalPages);
    return (
      <>
        {pages.map( (n) => (
          <>
            {n === currentPage &&(
              <button className={getButtonStyling('border-primary', 'text-primary', 'bg-primary/20', true)} key={n}>
                {n}
              </button>
            )}

            {n != currentPage &&(
              <button className={getButtonStyling()} key={n}>
                {n}
              </button>
            )}
          </>
        ))}
      </>
    );
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
};

export default Pagination;