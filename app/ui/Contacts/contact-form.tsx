"use client";

import { useActionState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { GoCheckCircle } from "react-icons/go";

import { sendEmail } from "@/app/lib/actions";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendEmail,
    null,
  );

  console.log("ContactForm State:", state, "Is Pending:", isPending);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 py-0 w-xl rounded-xl">
      <form
        action={formAction}
        className="flex flex-col gap-4 w-full"
      >
        <div className="flex flex-col w-full justify-start">
          <div>
            <label
              htmlFor="name"
              className="block font-semibold text-foreground"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="given-name"
                placeholder="John Doe"
                className="block w-full rounded-xl bg-gray-200 px-3.5 py-2 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-400 placeholder:text-gray-400"
                required
              />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-foreground"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="email@example.com"
                className="block w-full rounded-xl bg-gray-200 px-3.5 py-2 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-400"
                required
              />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-foreground"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows={4}
                className="block w-full rounded-xl bg-gray-200 px-3.5 py-2 text-base text-foreground outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-400"
                required
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className={`block w-full rounded-xl bg-brand-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand cursor-pointer ${isPending ? 'pointer-events-none opacity-50' : ''}`}
            disabled={isPending}
          >
            Let&apos;s talk
          </button>
          {/* <div className="flex h-8 items-end space-x-1"> */}
            {state?.success && (
              <div className="flex h-8 items-end space-x-1">
                <GoCheckCircle className="h-5 w-5 text-green-500" />
                <p className="text-sm text-green-500">{state.message}</p>
              </div>
            ) || state?.success === false && (
              <div className="flex h-8 items-end space-x-1">
                <MdErrorOutline className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{state?.message}</p>
              </div>
            )}
          {/* </div> */}
        </div>
      </form>
    </div>
  );
}
