import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.state?.data || "");
  }, [location]);

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  // Error Messages
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessages, setErrMessages] = useState("");

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessages("");
  };

  // Email Validation
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handlePost = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!clientName) {
      setErrClientName("Enter your Name");
      isValid = false;
    }

    if (!email) {
      setErrEmail("Enter your Email");
      isValid = false;
    } else if (!EmailValidation(email)) {
      setErrEmail("Enter a Valid Email");
      isValid = false;
    }

    if (!messages) {
      setErrMessages("Enter your Messages");
      isValid = false;
    }

    if (isValid) {
      const phoneNumber = "+923028557208"; // Replace with your actual WhatsApp number
      const textMessage = `Hello, my name is ${clientName}. My email is ${email}. Message: ${messages}`;
      const encodedMessage = encodeURIComponent(textMessage);
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      window.open(whatsappURL, "_blank"); // Opens WhatsApp in a new tab
    }
  };

  return (
    <div className="max-w-container mx-auto px-4 sm:px-2">
      <Breadcrumbs title="Contact" prevLocation={prevLocation} />
      <form className="pb-20">
      
        <div className="w-full max-w-[500px] h-auto py-6 flex flex-col gap-6">
          <div>
            <p className="text-base font-titleFont font-semibold px-2">
              Name
            </p>
            <input
              onChange={handleName}
              value={clientName}
              className="w-full py-2 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
              type="text"
              placeholder="Enter your name here"
            />
            {errClientName && (
              <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                <span className="text-sm italic font-bold">!</span>
                {errClientName}
              </p>
            )}
          </div>
          <div>
            <p className="text-base font-titleFont font-semibold px-2">
              Email
            </p>
            <input
              onChange={handleEmail}
              value={email}
              className="w-full py-2 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
              type="email"
              placeholder="Enter your email here"
            />
            {errEmail && (
              <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                <span className="text-sm italic font-bold">!</span>
                {errEmail}
              </p>
            )}
          </div>
          <div>
            <p className="text-base font-titleFont font-semibold px-2">
              Messages
            </p>
            <textarea
              onChange={handleMessages}
              value={messages}
              cols="30"
              rows="3"
              className="w-full py-2 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
              placeholder="Enter your message here"
            ></textarea>
            {errMessages && (
              <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                <span className="text-sm italic font-bold">!</span>
                {errMessages}
              </p>
            )}
          </div>
          <button
            onClick={handlePost}
            className="w-full sm:w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
