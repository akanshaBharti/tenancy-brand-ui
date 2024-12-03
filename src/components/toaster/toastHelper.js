// toastHelpers.js
import { toast } from 'react-toastify';
import ErrorToaster from './ErrorToaster';
import SuccessToaster from './SuccessToaster';
import SuccessRedirectToast from './SuccessRedirectToast';

// Custom toast for errors
export const showErrorToast = (title, summary) => {
  toast.error(<ErrorToaster title={title} summary={summary} />, {
    icon: false,
    hideProgressBar: false,
    className: "w-[400px] p-0 m-0",
    bodyClassName: "w-full",
    closeButton: false
  });
};

// Custom toast for success
export const showSuccessToast = (summary) => {
  toast.success(<SuccessToaster summary={summary} />, {
    icon: false,
    hideProgressBar: false,
    className: "w-[400px] p-0 m-0",
    bodyClassName: "w-full",
    closeButton: false
  });
};

// Toaster.error("message")
// Toaster.success("message")

export const showRedirectToast = (summary, navigate, redirectUrl, countdownSeconds = 3) => {
  const toastId = toast.success(
    <SuccessRedirectToast countdown={countdownSeconds} summary={summary} />, 
    {
      autoClose: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      icon: false,
      hideProgressBar: true,
      className: "w-[400px] p-0 m-0",
      bodyClassName: "w-full",
      closeButton: false,
    }
  );

  const countdownInterval = setInterval(() => {
    countdownSeconds -= 1;
    toast.update(toastId, {
      render: <SuccessRedirectToast countdown={countdownSeconds} summary={summary}/>
    });
  }, 1000);

  setTimeout(() => {
    clearInterval(countdownInterval);
    navigate(redirectUrl);
    closeToastAfterCountdown(toastId);
  }, countdownSeconds * 1000);
};

// Function to close toast after countdown
const closeToastAfterCountdown = (toastId, delay = 100) => {
  toast.update(toastId, {
    autoClose: 1,
  });
};