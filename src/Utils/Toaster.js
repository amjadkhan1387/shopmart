import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const success_toaster = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT, // Ensure toast.POSITION is correctly accessed from toast
    theme: 'dark',
  });
};

export const error_toaster = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT, // Ensure toast.POSITION is correctly accessed from toast
    theme: 'dark',
  });
};
