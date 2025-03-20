import React, { useState } from "react";
import { useSelector } from "react-redux";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Payment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    phoneNumber: "",
    postalCode: "",
  });

  const cartItems = useSelector((state) => state.orebiReducer.products);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppRedirect = () => {
    const { fullName, email, address, phoneNumber, postalCode } = formData;

    if (!fullName || !email || !address || !phoneNumber || !postalCode) {
      alert("Please fill in all fields.");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const whatsappNumber = "YOUR_WHATSAPP_NUMBER"; // Replace with your actual WhatsApp number

    const cartMessage = cartItems
      .map(
        (item, index) =>
          `Product Name: ${item.name || item.title || item.productName || "Unknown"}
Frame Type: ${item.frameType || "None"}
Quantity: ${item.quantity}
Price Rs: ${item.price}
Product Image: ${item.image || "No Image Available"}`
      )
      .join("\n\n");

    const message = `Order Quotation:
🔹 *Billing Information*:
- Full Name: ${fullName}  
- Email: ${email}
- Address: ${address}
- Phone: ${phoneNumber}
- Postal Code: ${postalCode}

🛒 *Cart Details*:
${cartMessage}

💰 *Total Amount*: Rs ${cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )}`;

    const whatsappUrl = `https://wa.me/${+923028557208}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    // Reset form fields
    setFormData({
      fullName: "",
      email: "",
      address: "",
      phoneNumber: "",
      postalCode: "",
    });

    // Show order confirmation popup
    alert("Your order is placed! Thank you.");
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment Gateway" />
      <div className="pb-10">
        <p>Thank you for choosing Jersey Frames!</p>

        {/* Billing Information Section */}
        <div className="mt-6 p-6 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </form>
        </div>

        {/* Complete Purchase Button */}
        <button
          onClick={handleWhatsAppRedirect}
          className="w-52 h-10 bg-primeColor text-white text-lg mt-6 hover:bg-black duration-300"
        >
          Complete Purchase
        </button>

        {/* Cart Summary */}
        <div className="mt-8 p-6 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-8">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center border-b pb-6 last:border-b-0 space-x-8"
              >
                {/* Larger Product Image */}
                <img
                  src={item.image || "https://via.placeholder.com/100"}
                  alt={item.name || "Product Image"}
                  className="w-40 h-40 object-cover rounded-lg"
                />

                {/* Product Details */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-lg font-semibold">{item.name || item.title || "Product"}</h3>
                  <p className="text-gray-600 text-base">
                    Price: <span className="font-medium text-lg">Rs {item.price}</span>
                  </p>
                  <p className="text-gray-600 text-base">
                    Quantity: <span className="font-medium text-lg">{item.quantity}</span>
                  </p>
                  <p className="text-gray-600 text-base">
                    Frame Type: <span className="font-medium text-lg">{item.frameType || "None"}</span>
                  </p>
                  <p className="text-gray-800 font-semibold text-xl">
                    Subtotal: <span className="text-xl">Rs {item.price * item.quantity}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Line above total price */}
          <hr className="my-6 border-gray-400" />

          <div className="text-right mt-4">
            <h3 className="text-2xl font-semibold">
              Total Amount: Rs{" "}
              {cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
