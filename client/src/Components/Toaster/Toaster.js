import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Toaster = () => (
    <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
        pauseOnHover 
    />
);
export default Toaster;