"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { orbitron } from "@/app/utils/fonts";

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
      <section
        className="bg-white dark:bg-gray-900 min-h-[100svh]"
        id={"contact"}
      >
        <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
          <h2
            className={`mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white ${orbitron.className}`}
          >
            Contact Me
          </h2>
          <p className="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16"></p>
          <form action="#" className="space-y-8" ref={formRef}>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name={"user_email"}
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light"
                placeholder="name@email.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name={"user_name"}
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name={"subject"}
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light"
                placeholder="The subject matter of your message"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                name={"message"}
                rows={6}
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="The body of your message..."
                required
              ></textarea>
            </div>
            <div className={"text-center"}>
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
                className="hover:bg-neutral-900 focus:ring-primary-300 dark:bg-white dark:hover:bg-neutral-900 dark:focus:ring-primary-800 rounded bg-blue-700 px-5 py-3 text-center text-sm font-medium text-black hover:text-white focus:outline-none focus:ring-4 sm:w-fit transition-colors duration-300"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
        <p className={`mt-5 text-center text-white bg-gray-900`}>
          Copyright © 2023 Cedric Aoun, All Rights Reserved
        </p>
      </section>
    </>
  );
};
