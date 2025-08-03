"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
export const Contact = () => {
  const [successMsg, setSuccessMsg] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_l03816b", "template_tbd3qjr", form.current, {
        publicKey: "pYz6DOGDjR-XKIu1P",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccessMsg(true); // ✅ Show success message
          form.current.reset(); // ✅ Reset form fields

          // ✅ Hide message after 3 seconds
          setTimeout(() => {
            setSuccessMsg(false);
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col md:items-center md:justify-center px-4 pb-10 ">
      <h2 className="text-amber-400 md:text-3xl text-xl font-bold md:py-10">
        Contact
      </h2>
      <Link href="/">
        <IoIosArrowRoundBack className="h-15 w-15 pt-5 md:hidden animate-pulse" />
      </Link>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-yellow-400 p-8 rounded-lg shadow-lg w-full max-w-md "
      >
        <h2 className="md:text-3xl text-xl font-bold text-black md:mb-6 mb-2 text-center">
          Let's make it quick
        </h2>
        <label className="block text-black mb-2">Name</label>
        <input
          type="text"
          name="user_name"
          className="w-full p-2 mb-4 border border-black rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
          required
        />

        <label className="block text-black mb-2">Email</label>
        <input
          type="email"
          name="user_email"
          className="w-full p-2 mb-4 border border-black rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
          required
        />

        <label className="block text-black mb-2">Message</label>
        <textarea
          name="message"
          className="w-full p-2 mb-4 border border-black rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
          required
        />

        <input
          type="submit"
          value="Send"
          className="w-full bg-black text-yellow-400 font-semibold py-2 rounded hover:bg-yellow-500 hover:text-black transition duration-300"
        />
      </form>

      {/* ✅ Show message below form */}
      {successMsg && (
        <p className="mt-4 text-green-400 text-lg font-medium">
          Message sent successfully!
        </p>
      )}
    </div>
  );
};
