import { Toast } from "bootstrap";

export const showToast = (message, type = "success") => {
  var toastElem = document.getElementById("liveToast");
  var newToast = new Toast(toastElem);
  toastElem.querySelector(".toast-body").textContent = message;
  newToast.show();
};
