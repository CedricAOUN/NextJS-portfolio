"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [infoMsg, setInfoMsg] = useState("");

  const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const email = formRef.current?.querySelector("#email") as HTMLInputElement;
    const name = formRef.current?.querySelector("#name") as HTMLInputElement;
    const subject = formRef.current?.querySelector(
      "#subject",
    ) as HTMLInputElement;
    const message = formRef.current?.querySelector(
      "#message",
    ) as HTMLTextAreaElement;

    if (
      email.value == "" ||
      name.value == "" ||
      subject.value == "" ||
      message.value == ""
    ) {
      setInfoMsg("All fields are required");
    } else if (!validateEmail(email.value)) {
      setInfoMsg("Invalid Email.");
    } else {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EJS_SERVICE_KEY as string,
          process.env.NEXT_PUBLIC_EJS_TEMPLATE_KEY as string,
          formRef.current as HTMLFormElement,
          process.env.NEXT_PUBLIC_EJS_PUBLIC_KEY as string,
        )
        .catch((e) => console.log(e));

      email.value = "";
      message.value = "";
      subject.value = "";
      name.value = "";

      setInfoMsg("Message sent!");
    }
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Me
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"></p>
          <form action="#" className="space-y-8" ref={formRef}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name={"user_email"}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name={"user_name"}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name={"subject"}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="The subject matter of your message"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                name={"message"}
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="The body of your message..."
                required
              ></textarea>
            </div>
            <p
              className={`${
                infoMsg == "Message sent!" ? "text-green-500" : "text-red-500"
              }`}
            >
              {infoMsg}
            </p>
            <button
              type="submit"
              onClick={handleSubmit}
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
