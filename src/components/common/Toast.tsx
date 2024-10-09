// src/components/CustomToast.tsx
import React from "react";
import { toast } from "react-toastify";
import "../../styles/CustomToast.css";

const CustomToast = () => {
  const showSuccessToast = (message: string) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      className: "custom-toast-success",
    });
  };

  const showErrorToast = (message: string) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      className: "custom-toast-error",
    });
  };

  return (
    <div>
      <button onClick={() => showSuccessToast("Opération réussie !")}>
      </button>
      <button onClick={() => showErrorToast("Une erreur s'est produite !")}>
      </button>
    </div>
  );
};

export default CustomToast;
