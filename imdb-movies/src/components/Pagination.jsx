import "font-awesome/css/font-awesome.min.css";
import React from "react";

function Pagination({handlePrev, handleNext, page}) {
  return (
    <div className="bg-gray-400 p-2 m-4 flex justify-center items-center">
      <div onClick={handlePrev} className="px-8 hover:cursor-pointer">
        <i className="fa fa-chevron-left"></i>
      </div>
      <div className="font-bold">{page}</div>
      <div onClick={handleNext} className="px-8 hover:cursor-pointer">
        <i className="fa fa-chevron-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
