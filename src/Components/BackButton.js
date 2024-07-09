import React from "react";
import { useNavigate } from "react-router-dom";
const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <button
      className="bg-red float-right text-white px-4 py-2 rounded"
      onClick={handleGoBack}
    >
      Back
    </button>
  );
};

export default BackButton;
