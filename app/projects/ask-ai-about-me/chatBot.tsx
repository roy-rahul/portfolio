"use client";

import React, { useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FaUserTie } from "react-icons/fa";
import { Spinner } from "@/app/ui/shadcn-components/spinner";

export default React.memo(function Chat() {
  const [input, setInput] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/ask-ai-about-me",
    }),
    throttle: 200,
    onFinish: (data) => {
      console.log("Finished streaming: ");
      console.log("Finish reason: ", data);
      if (error) {
        console.log("Error: ", error);
        return;
      }
      const elements = document.getElementsByClassName("ai-response-start");

      if (elements.length > 0) {
        const lastElement = elements[elements.length - 1];

        lastElement.scrollIntoView({
          behavior: "smooth",
          block: "start", // Aligns the top of the element with the top of the visible area
        });
      }
    },
    onError: (error) => {
      console.log("On error: ", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    sendMessage({ text: input });
    // Clear your input and trigger your streaming logic here
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Check if the user pressed 'Enter' without holding the 'Shift' key
    // Also prevent firing during IME composition (for accented/international characters)
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault(); // 1. Prevent the default behavior of adding a new line

      // 2. Safely trigger the form submit event manually
      if (formRef.current) {
        formRef.current.requestSubmit();
      }
    }
  };

  return (
    <div className="flex flex-col w-full overflow-y-auto scrollbar-none bg-brand-100 rounded-2xl pt-8 pb-16 h-screen">
      <div className="flex flex-col w-full gap-6 p-4 mb-8">
        {messages.length === 0 && (
          <div className="flex flex-col w-full justify-center items-center">
            <FaUserTie className="text-9xl mt-16 text-brand-600" />
            <p className="mt-16 text-lg">
              If you have any questions, ask me!
            </p>
          </div>
        )}
        {status === "streaming" && (
          <div className="absolute left-59/100 bottom-1/2">
            <Spinner className="size-8" />
          </div>
        )}
        {messages.map((message) => (
          <div key={message.id} className="flex flex-col w-full gap-2">
            {/* <strong className="text-xs uppercase tracking-wide text-foreground">
              {message.role === "user" ? "You:" : "AI Persona:"}
            </strong> */}

            <div
              className={`p-4 rounded-4xl text-sm leading-relaxed ${
                message.role === "user"
                  ? "bg-gray-300 text-foreground self-end ml-auto max-w-[80%]"
                  : "text-foreground w-full ai-response-start"
              }`}
            >
              {message.parts?.map((part, index) => {
                if (part.type === "text") {
                  return (
                    <ReactMarkdown
                      key={`${message.id}-text-${index}`}
                      remarkPlugins={[remarkGfm]} // Enables tables and lists
                      components={{
                        // Style Markdown headers with Tailwind CSS
                        h1: ({ ...props }) => (
                          <h1
                            className="text-2xl font-bold my-4 text-foreground"
                            {...props}
                          />
                        ),
                        h2: ({ ...props }) => (
                          <h2
                            className="text-xl font-semibold my-3 text-foreground"
                            {...props}
                          />
                        ),
                        h3: ({ ...props }) => (
                          <h3
                            className="text-lg font-medium my-2 text-foreground"
                            {...props}
                          />
                        ),

                        // Style regular body text and emphasis
                        p: ({ ...props }) => (
                          <p
                            className="mb-3 last:mb-0 text-foreground text-base"
                            {...props}
                          />
                        ),
                        strong: ({ ...props }) => (
                          <strong
                            className="font-bold text-brand-600 text-base"
                            {...props}
                          />
                        ),

                        // Style lists
                        ul: ({ ...props }) => (
                          <ul
                            className="list-disc pl-5 mb-3 space-y-1 text-base"
                            {...props}
                          />
                        ),
                        ol: ({ ...props }) => (
                          <ol
                            className="list-decimal pl-5 mb-3 space-y-1 text-base"
                            {...props}
                          />
                        ),
                        li: ({ ...props }) => (
                          <li
                            className="text-foreground text-base"
                            {...props}
                          />
                        ),

                        // Style blockquotes
                        blockquote: ({ ...props }) => (
                          <blockquote
                            className="border-l-4 border-foreground pl-4 my-3 italic text-foreground text-base"
                            {...props}
                          />
                        ),

                        // Style data tables beautifully
                        table: ({ ...props }) => (
                          <div className="overflow-x-auto my-4 border border-foreground rounded-lg text-base">
                            <table
                              className="w-full text-left border-collapse text-xs text-base"
                              {...props}
                            />
                          </div>
                        ),
                        thead: ({ ...props }) => (
                          <thead
                            className="text-foreground font-semibold text-base"
                            {...props}
                          />
                        ),
                        th: ({ ...props }) => (
                          <th
                            className="p-3 border-b border-foreground text-base"
                            {...props}
                          />
                        ),
                        td: ({ ...props }) => (
                          <td
                            className="p-3 border-b border-foreground text-foreground text-base"
                            {...props}
                          />
                        ),

                        // Style inline code and code blocks
                        code: ({ ...props }) => (
                          <code
                            className="bg-slate-navy text-brand-300 px-1.5 py-0.5 rounded text-xs font-mono text-base"
                            {...props}
                          />
                        ),
                      }}
                    >
                      {part.text}
                    </ReactMarkdown>
                  );
                } /* else if (part.type === "error") {
                 Todo handle error 
                } */
                return null;
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute bottom-1/18 left-1/10 flex items-center justify-center p-4 pt-0">
        <form ref={formRef} onSubmit={handleSubmit}>
          <textarea
            className="w-2xl py-4 bg-white p-4 border border-gray-300 dark:border-slate-navy rounded-4xl shadow-white focus-visible:outline-none shadow-2xl inset-shadow-md inset-shadow-brand-400 field-sizing-content"
            value={input}
            placeholder="Tell me about yourself..."
            maxLength={300}
            onChange={(e) => setInput(e.currentTarget.value)}
            onKeyDown={handleKeyDown}
          />
        </form>
      </div>
    </div>
  );
});
