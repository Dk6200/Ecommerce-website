// import React from "react";

// const ShippingInformation = ({
//   shippingInfo,
//   shippingInfoError,
//   handleShippingInfoChange,
// }) => {
//   return (
//     <div className="mb-6">
//       <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>

//       {/* Full Name */}
//       <div className="mb-3">
//         <label className="block text-sm font-medium text-gray-600">
//           Full Name
//         </label>
//         <input
//           type="text"
//           name="fullName"
//           value={shippingInfo.fullName}
//           onChange={handleShippingInfoChange}
//           className={`form-input ${
//             shippingInfoError.fullName ? "border-red-500" : ""
//           }`}
//         />
//         {shippingInfoError.fullName && (
//           <p className="text-red-500 text-sm">{shippingInfoError.fullName}</p>
//         )}
//       </div>

//       {/* Address */}
//       <div className="mb-3">
//         <label className="block text-sm font-medium text-gray-600">
//           Address
//         </label>
//         <input
//           type="text"
//           name="address"
//           value={shippingInfo.address}
//           onChange={handleShippingInfoChange}
//           className={`form-input ${
//             shippingInfoError.address ? "border-red-500" : ""
//           }`}
//         />
//         {shippingInfoError.address && (
//           <p className="text-red-500 text-sm">{shippingInfoError.address}</p>
//         )}
//       </div>

//       {/* City */}
//       <div className="mb-3">
//         <label className="block text-sm font-medium text-gray-600">City</label>
//         <input
//           type="text"
//           name="city"
//           value={shippingInfo.city}
//           onChange={handleShippingInfoChange}
//           className={`form-input ${
//             shippingInfoError.city ? "border-red-500" : ""
//           }`}
//         />
//         {shippingInfoError.city && (
//           <p className="text-red-500 text-sm">{shippingInfoError.city}</p>
//         )}
//       </div>

//       {/* Postal Code */}
//       <div className="mb-3">
//         <label className="block text-sm font-medium text-gray-600">
//           Postal Code
//         </label>
//         <input
//           type="text"
//           name="postalCode"
//           value={shippingInfo.postalCode}
//           onChange={handleShippingInfoChange}
//           className={`form-input ${
//             shippingInfoError.postalCode ? "border-red-500" : ""
//           }`}
//         />
//         {shippingInfoError.postalCode && (
//           <p className="text-red-500 text-sm">{shippingInfoError.postalCode}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShippingInformation;
