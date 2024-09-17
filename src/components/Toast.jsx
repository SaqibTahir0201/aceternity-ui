// notifications.js
import { ToastContainer, toast } from "react-toastify";

const notify = (type, message) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "warning":
      toast.warning(message);
      break;
    case "error":
      toast.error(message);
      break;
    default:
      toast(message);
  }
  <ToastContainer />;
};

export default notify;
