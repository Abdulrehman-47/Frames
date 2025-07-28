import React, { useState } from "react";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Payment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    apartment: "",
    phoneNumber: "",
    postalCode: "",
  });

  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const cartItems = useSelector((state) => state.orebiReducer.products);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showPopupMessage = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const handleSubmit = () => {
    const { fullName, email, address, city, phoneNumber } = formData;

    if (!fullName || !email || !address || !city || !phoneNumber) {
      showPopupMessage("Please fill in all required fields.");
      return;
    }

    if (cartItems.length === 0) {
      showPopupMessage("Your cart is empty!");
      return;
    }

    const orderSummaryText = cartItems.map((item, index) => (
      `\n---\nProduct ${index + 1}:\n` +
      `Name: ${item.name || item.title}\n` +
      `Price: Rs ${item.price}\n` +
      `Quantity: ${item.quantity}\n` +
      `Frame Type: ${item.frameType || 'None'}\n` +
      `Subtotal: Rs ${item.price * item.quantity}\n` +
      `Image URL: ${item.image || "No image available"}`
    )).join("\n");

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      address: formData.address,
      city: formData.city,
      apartment: formData.apartment,
      postalCode: formData.postalCode,
      phoneNumber: formData.phoneNumber,
      orderSummary: `${orderSummaryText}\n\nTotal Amount: Rs ${totalAmount}`
    };

    emailjs
      .send("service_9l1192g", "template_rszwhqh", templateParams, "D-DOQ5mTm-RpvB_oW")
      .then(
        () => {
          showPopupMessage("Order submitted successfully!");
          setFormData({
            fullName: "",
            email: "",
            address: "",
            city: "",
            apartment: "",
            phoneNumber: "",
            postalCode: "",
          });
        },
        (err) => {
          console.error("Email sending failed:", err);
          showPopupMessage("Failed to send order. Try again.");
        }
      );
  };

  const orderBoxClass = () => {
    if (cartItems.length === 1) return "h-[280px]";
    if (cartItems.length <= 4) return "h-auto";
    return "max-h-[500px] overflow-y-auto scrollbar-thin";
  };

  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-800">
      {showPopup && (
        <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-[rgb(38,38,38)] text-white text-base font-medium px-6 py-3 shadow-xl animate-fade-in-out">
            {popupMessage}
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 py-10">
        <Breadcrumbs title="Billing & Payment" />
        <h1 className="text-3xl font-bold mb-6">Complete Your Order</h1>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Billing Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>
            <form className="grid grid-cols-1 gap-5">
              <input type="text" name="fullName" placeholder="Full Name *" value={formData.fullName} onChange={handleChange} className="input-style" />
              <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} className="input-style" />
              <input type="text" name="address" placeholder="Address *" value={formData.address} onChange={handleChange} className="input-style" />
              <input type="text" name="apartment" placeholder="Apartment (optional)" value={formData.apartment} onChange={handleChange} className="input-style" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="city" placeholder="City *" value={formData.city} onChange={handleChange} className="input-style" />
                <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} className="input-style" />
              </div>
              <input type="text" name="phoneNumber" placeholder="Phone Number *" value={formData.phoneNumber} onChange={handleChange} className="input-style" />
            </form>
            <button onClick={handleSubmit} className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 rounded">
              Complete Purchase
            </button>
          </div>

          {/* Order Summary */}
          <div className={`bg-white rounded-lg shadow-md p-4 ${orderBoxClass()} transition-all duration-300 ease-in-out`}>
            <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
            <div className="border-b border-gray-300 mb-4"></div>

            <div className="space-y-4 text-base">
              {cartItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4 border-b pb-3 last:border-b-0">
                  <img
                    src={item.image || "https://via.placeholder.com/100"}
                    alt="Product"
                    className="w-24 h-24 object-cover rounded shadow"
                  />
                  <div className="flex-1 space-y-1">
                    <p className="font-bold text-lg">{item.name || item.title}</p>
                    <p className="text-gray-700">Price: Rs {item.price}</p>
                    <p className="text-gray-700">Qty: {item.quantity}</p>
                    <p className="text-gray-700">Frame: {item.frameType || "None"}</p>
                    <p className="font-semibold text-gray-900">Subtotal: Rs {item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
              <div className="text-right mt-2">
                <h3 className="text-lg font-bold text-gray-800">
                  Total: Rs{" "}
                  {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .input-style {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          background-color: #f9fafb;
          transition: border 0.3s ease;
        }
        .input-style:focus {
          border-color: #3b82f6;
          outline: none;
          background-color: #fff;
        }
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
        .animate-fade-in-out {
          animation: fadeInOut 3s ease-in-out forwards;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background-color: #f1f5f9;
        }
      `}</style>
    </div>
  );
};

export default Payment;
