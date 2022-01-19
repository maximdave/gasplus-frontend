import React from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
const Goback = () => {
  const { goBack } = useHistory();
  return (
    <div onClick={() => goBack()}>
      <FiArrowLeft size={32} />
    </div>
  );
};

export default Goback;
