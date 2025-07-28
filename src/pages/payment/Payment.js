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
    // Generate plain text order summary with image URLs
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

  return (
    <div className="relative">
      {showPopup && (
        <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-black text-white text-lg px-6 py-3 rounded shadow-lg animate-fade-in-out">
            {popupMessage}
          </div>
        </div>
      )}

      <div className="max-w-container mx-auto px-4">
        <Breadcrumbs title="Payment Gateway" />
        <div className="pb-10">
          <p>Thank you for choosing Jersey Frames!</p>

          <div className="mt-6 p-6 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="w-full p-2 border rounded" required />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
              <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 border rounded" required />
              <input type="text" name="apartment" placeholder="Apartment, suite, etc. (optional)" value={formData.apartment} onChange={handleChange} className="w-full p-2 border rounded" />
              <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded" required />
              <input type="text" name="postalCode" placeholder="Postal Code (optional)" value={formData.postalCode} onChange={handleChange} className="w-full p-2 border rounded" />
              <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} className="w-full p-2 border rounded" required />
            </form>
          </div>

          <button
            onClick={handleSubmit}
            className="w-52 h-10 bg-primeColor text-white text-lg mt-6 hover:bg-black duration-300"
          >
            Complete Purchase
          </button>

          <div className="mt-8 p-6 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-8">
              {cartItems.map((item, index) => (
                <div key={index} className="flex items-center border-b pb-6 last:border-b-0 space-x-8">
                  <img src={item.image || "https://via.placeholder.com/100"} alt={item.name || "Product Image"} className="w-40 h-40 object-cover rounded-lg" />
                  <div className="flex-1 space-y-4">
                    <h3 className="text-lg font-semibold">{item.name || item.title || "Product"}</h3>
                    <p className="text-gray-600 text-base">Price: <span className="font-medium text-lg">Rs {item.price}</span></p>
                    <p className="text-gray-600 text-base">Quantity: <span className="font-medium text-lg">{item.quantity}</span></p>
                    <p className="text-gray-600 text-base">Frame Type: <span className="font-medium text-lg">{item.frameType || "None"}</span></p>
                    <p className="text-gray-800 font-semibold text-xl">Subtotal: <span className="text-xl">Rs {item.price * item.quantity}</span></p>
                  </div>
                </div>
              ))}
            </div>
            <hr className="my-6 border-gray-400" />
            <div className="text-right mt-4">
              <h3 className="text-2xl font-semibold">
                Total Amount: Rs{" "}
                {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
        .animate-fade-in-out {
          animation: fadeInOut 3s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Payment;
