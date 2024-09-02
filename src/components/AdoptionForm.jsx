import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { getValue } from "@testing-library/user-event/dist/utils";
import { useNavigate } from "react-router-dom";
const schema = yup.object().shape({
  PetName: yup.string().required("Pet name is required"),
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number is invalid")
    .required("Phone number is required"),
  address: yup.string().required("Address is required"),
  contactMethod: yup.string().required("Please select a contact method"),
  password: yup.string().required("Password is required").min(8, "Too short"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Password does not match"),
  agreeTerms: yup.boolean().oneOf([true], "You must agree to the terms"),
});
const AdoptionForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const redirect = (e) => {
    e.preventDefault();
    navigate("/pets");
  };

  const onSubmit = (data) => {
    const { PetName, fullName, email, phoneNumber, contactMethod, password } =
      data;
    alert(
      `Thank you ${fullName} for adopting ${PetName}. We will reach out to you on ${
        contactMethod === "phone" ? phoneNumber : email
      }`
    );
    console.log(data);
  };
  const triggerForm = () => {
    const selection = getValues("contactMethod");
    if (selection === "null") {
      setValue("contactMethod", "phone");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit) && redirect}
      className="bg-white shadow-lg rounded  p-6 "
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Pet Name
        </label>
        <input
          {...register("PetName")}
          className={`w-full px-3 py-2 border rounded ${
            errors.fullName && "border-red-500"
          }`}
          placeholder="Enter Your Pet Name"
        />
        {errors.PetName && (
          <p className="text-red-600 text-sm">{errors.PetName.message}</p>
        )}
      </div>

      <div className="mb-4">
        <lable className="block text-gray-700 text-sm font-bold mb-2">
          Full Name
        </lable>
        <input
          {...register("fullName")}
          className={`w-full px-3 py-2 border rounded ${
            errors.fullName && "border-red-500"
          }`}
          placeholder="Enter Your Full Name"
        />
        {errors.fullName && (
          <p className="text-red-600 text-sm">{errors.fullName.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Address
        </label>
        <input
          className={`w-full px-3 py-2 border rounded ${
            errors.address && `border-red-500`
          }`}
          {...register("address")}
        />
        {errors.address && (
          <p className="text-red-600 text-sm">{errors.address.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Contact Method
        </label>
        <select
          {...register("contactMethod", { onChange: triggerForm })}
          className={` w-full px-3 py-2 border rounded ${
            errors.contactMethod && "border-red-500"
          }`}
        >
          <option value="null">Select contact method</option>
          <option value="email">Email</option>
          <option value="phone"> Phone</option>
        </select>
      </div>
      {errors.contactMethod && (
        <p className="text-red-600 text-sm mt-2">{errors.address.message}</p>
      )}

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          {...register("email")}
          className={`w-full px-3 py-2 border rounded ${
            errors.email && "border-red-500"
          }`}
          placeholder="Enter Your Email"
        />
        {errors.email && (
          <p className="text-red-600 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Phone Number
        </label>
        <input
          className={`w-full px-3 py-2 border rounded ${
            errors.phoneNumber && `border-red-500`
          }`}
          {...register("phoneNumber")}
          placeholder="Enter Your Phone Number"
        />
        {errors.phoneNumber && (
          <p className="text-red-600 text-sm">{errors.phoneNumber.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          {...register("password")}
          className={`w-full px-3 py-2 border rounded ${
            errors.password && "border-red-500"
          }`}
          placeholder="Enter Your Password"
        />
        {errors.password && (
          <p className="text-red-600 text-sm">{errors.password.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Confirm Password
        </label>
        <input
          type="password"
          {...register("confirmPassword")}
          className={`w-full px-3 py-2 border rounded ${
            errors.confirmPassword && "border-red-500"
          }`}
          placeholder="Enter Your Password Again"
        />
        {errors.confirmPassword && (
          <p className="text-red-600 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <div className={` flex flex-row content-center mt-5`}>
        <input type="checkbox" {...register("agreeTerms")} />
        <label className="block text-gray-700 text-sm font-bold ml-4">
          I agree to the terms and conditions
        </label>
      </div>
      {errors.agreeTerms && (
        <p className="text-red-600 text-sm mt-2">{errors.agreeTerms.message}</p>
      )}

      <button
        type="submit"
        className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded mt-5"
      >
        Submit
      </button>
    </form>
  );
};

export default AdoptionForm;
