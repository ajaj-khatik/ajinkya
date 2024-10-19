import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const OrderForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product, size, price } = location.state as {
    product: any;
    size: string;
    price: string;
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
  });

  // New status state to handle different submission states
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading"); // Start loading when form is submitted
    axios
      .post("http://localhost:5000/api/orders", {
        ...formData,
        product: product.title,
        size,
        price,
      })
      .then((_response) => {
        setStatus("success"); // Set status to success
        // Navigate to home after a short delay to show success message
        setTimeout(() => navigate("/"), 6000);
      })
      .catch((error) => {
        setStatus("error"); // Set status to error
        console.error("There was an error placing the order!", error);
        // Optionally, you can display an error message to the user
      });
  };

  return (
    <div className="relative container mx-auto p-4">
      {/* Overlay Loading and Success Skeleton */}
      {(status === "loading" || status === "success") && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          {status === "loading" ? (
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg">
              <svg
                aria-hidden="true"
                className="w-12 h-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="mt-2 text-gray-700">
                Submitting your order...
              </span>
            </div>
          ) : (
            // Success Message
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg">
              <svg
                aria-hidden="true"
                className="w-12 h-12 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="mt-2 text-green-700 text-lg font-semibold">
                Order placed successfully!
              </span>
              <p className="mt-2 text-orange-600 text-lg font-semibold">
                You will Get Order Confirmation Call!
              </p>
            </div>
          )}
        </div>
      )}

      {/* Order Form Container */}
      <div
        className={`max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 transition duration-300 ${
          status === "loading" || status === "success" ? "filter blur-sm" : ""
        }`}
      >
        <h2 className="text-3xl text-center font-bold mb-4 font-frenchScript">
          Place Your Order
        </h2>
        <div className="flex flex-col items-center mb-4">
          <img
            className="w-full rounded-lg"
            src={product.imageUrl}
            alt={product.title}
          />
          <h3 className="text-xl font-bold">{product.title}</h3>
          <p className="text-gray-700">Size: {size}</p>
          <p className="text-gray-700">Price: {price} Rs</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label className="block text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
                disabled={status === "loading" || status === "success"}
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
                disabled={status === "loading" || status === "success"}
              />
            </div>
          </div>
          {/* <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
              disabled={status === "loading" || status === "success"}
            />
          </div> */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
              disabled={status === "loading" || status === "success"}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
              disabled={status === "loading" || status === "success"}
            />
          </div>
          <button
            type="submit"
            className={`mt-4 bg-black text-white py-2 px-4 rounded hover:bg-gray-950 transition ${
              status === "loading" || status === "success"
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={status === "loading" || status === "success"}
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
