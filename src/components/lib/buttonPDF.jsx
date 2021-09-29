import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const ButtonPDF = () => {
  return (
    <a
      href="https://drive.google.com/file/d/1RPG2Vk14CslSW0K0XWCMgNg8TM3e-n46/view?usp=sharing"
      target="_blank"
      className="btn pink-bg border-0 text-light"
    >
      <AiOutlineDownload className="mr-2" />
      PDF CV
    </a>
  );
};

export default ButtonPDF;
