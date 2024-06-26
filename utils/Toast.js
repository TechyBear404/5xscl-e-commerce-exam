import { Toast } from "bootstrap";

export const showToast = (message, type = "primary") => {
  var toastElem = document.getElementById("liveToast");
  var newToast = new Toast(toastElem);
  if (type === "success") {
    toastElem.classList.remove("bg-primary");
    toastElem.classList.remove("bg-danger");
    toastElem.classList.add("bg-success");
  } else if (type === "danger") {
    toastElem.classList.remove("bg-success");
    toastElem.classList.remove("bg-primary");
    toastElem.classList.add("bg-danger");
  } else if (type === "primary") {
    toastElem.classList.remove("bg-success");
    toastElem.classList.remove("bg-danger");
    toastElem.classList.add("bg-primary");
  }
  toastElem.querySelector(".toast-body").textContent = message;
  newToast.show();
};
