import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const ButtonPDF = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1aTGVkg_1lYVCFrQ8mhP54iAcZf-TiA5W/view?usp=sharing"
      target="_blank"
      className="btn pink-bg border-0"
    >
      <AiOutlineDownload className="mr-2" />
      PDF CV
    </a>
  );
};

export default ButtonPDF;
