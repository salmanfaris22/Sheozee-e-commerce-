import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4fdok85', 'template_huqz6so', form.current, {
        publicKey: 'stCFo4Wn0IKuUyjQz',
      })
      .then(
        () => {
          toast.success('🤞🏻 Tnx For Contacting s!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          setStatus(false);
        },
        (error) => {
          toast.error('Failed to send message. Please try again.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <ToastContainer />
      <h1 className="text-5xl font-extrabold mb-4 text-blue-600">Get in Touch with ShoeStop</h1>
      <p className="text-xl text-gray-700 mb-6 text-center max-w-2xl">
        We love to hear from our customers! Whether you have a question about our products, need assistance with your order, 
        or just want to share your feedback, feel free to reach out to us. Our team is here to help you find the perfect pair of shoes.
      </p>
      {status ? (
        <form ref={form} onSubmit={sendEmail} className="bg-white p-8 rounded shadow-md w-full max-w-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_name">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_email">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <input
              type="submit"
              value="Send"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        </form>
      ) : (
        <div className="text-center text-lg text-green-600 font-bold mt-4">Thank you for sending your message!</div>
      )}
    </div>
  );
};