"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/app/ui/shadcn-components/badge";
import { Button } from "@/app/ui/shadcn-components/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/ui/shadcn-components/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/ui/shadcn-components/dialog";
import { Separator } from "@/app/ui/shadcn-components/separator";
import { FaGithub } from "react-icons/fa";

export default function ProjectsSection() {
  return (
    <div
      id="projects"
      className="flex w-full h-max flex-col items-center justify-center p-8"
    >
      <h1 className="mb-16 text-4xl font-bold text-brand-600 justify-center w-full flex items-center">
        Projects
      </h1>
      <div className="flex w-full flex-row gap-16 items-center justify-around">
        <div className="flex flex-col items-center justify-center gap-4 w-3xl rounded-xl">
          <Card className="relative mx-auto w-full max-w-sm pt-0 duration-300 ease-in-out hover:-translate-y-2">
            {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35" /> */}
            <Dialog>
              <DialogTrigger
                render={
                  <div className="flex bg-brand-600 justify-center items-center h-60 cursor-pointer">
                    <div className="w-1/2">
                      <Image
                        src="/project-1.avif"
                        alt="Project cover"
                        width={100}
                        height={50}
                        className="rounded-xl relative z-20 w-full object-cover"
                      />
                    </div>
                  </div>
                }
              />
              <DialogContent showCloseButton={true} className="max-w-1/2">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-foreground">
                    AI Chatbot
                  </DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>
                <Separator></Separator>
                <div className="flex bg-brand-600 justify-center items-center h-auto rounded-4xl p-8">
                  <div className="w-1/2">
                    <Image
                      src="/project-1.avif"
                      alt="Project cover"
                      width={100}
                      height={50}
                      className="rounded-xl relative z-20 w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <p>
                    This project showcases an AI-powered chatbot built with
                    Next.js, TypeScript, and the AI SDK, integrated with a Groq
                    model for real-time conversational responses. It features a
                    clean, responsive chat interface, markdown-rendered outputs,
                    and streaming message support to create a smooth and
                    engaging user experience. The project demonstrates how to
                    connect a frontend application to an LLM, handle chat state
                    effectively, and build an interactive AI assistant that
                    feels modern, fast, and user-friendly.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">
                    Technologies used
                  </h2>
                  <div className="flex flex-row w-full justify-start items-center -mt-2">
                    <span className="rounded-full text-foreground p-2 mx-1 bg-gray-300 text-xs">
                      JavaScript
                    </span>
                    <span className="rounded-full text-foreground p-2 mx-1 bg-gray-300 text-xs">
                      TypeScript
                    </span>
                    <span className="rounded-full text-foreground p-2 mx-1 bg-gray-300 text-xs">
                      Node.js
                    </span>
                    <span className="rounded-full text-foreground p-2 mx-1 bg-gray-300 text-xs">
                      Next.js
                    </span>
                    <span className="rounded-full text-foreground p-2 mx-1 bg-gray-300 text-xs">
                      Grok API
                    </span>
                    <span className="rounded-full text-foreground p-2 mx-1 bg-gray-300 text-xs">
                      AI SDK
                    </span>
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    className="bg-brand-600 hover:bg-brand-700 cursor-pointer w-40"
                    nativeButton={false}
                  >
                    <Link
                      className="flex flex-row"
                      href="https://github.com/roy-rahul/rahul-roy-profile"
                    >
                      <FaGithub className="mr-2" /> View on GitHub
                    </Link>
                  </Button>
                  <DialogClose
                    render={
                      <Button variant="outline" className="cursor-pointer">
                        Close
                      </Button>
                    }
                  />
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* </DialogTrigger> */}
            <CardHeader>
              <CardAction>
                <Badge variant="secondary">AI</Badge>
              </CardAction>
              <CardTitle>AI Chatbot</CardTitle>
              <CardDescription>
                Built with Next.js, TypeScript, and the AI SDK, this AI chatbot
                delivers real-time conversational experiences powered by Groq’s
                language models. The app features a clean, responsive chat
                interface, streaming responses, and markdown-rendered output for
                a polished and engaging user experience.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center">
              <Button className="w-40 bg-brand-600 hover:bg-brand-700">
                <Link href="/projects/ai-chatbot">Check it out</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-3xl rounded-xl">
          <Card className="relative mx-auto w-full max-w-sm pt-0 duration-300 ease-in-out hover:-translate-y-2">
            {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35" /> */}
            <Dialog>
              <DialogTrigger
                render={
                  <div className="flex bg-brand-600 justify-center items-center h-60 cursor-pointer">
                    <div className="w-1/2">
                      <Image
                        src="/project-2.avif"
                        alt="Project cover"
                        width={100}
                        height={50}
                        className="rounded-xl relative z-20 w-full object-cover"
                      />
                    </div>
                  </div>
                }
              />
              <DialogContent showCloseButton={true} className="max-w-1/2">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-foreground">
                    Ask AI About Me
                  </DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>
                <Separator></Separator>
                <div className="flex bg-brand-600 justify-center items-center h-auto rounded-4xl p-8">
                  <div className="w-1/2">
                    <Image
                      src="/project-2.avif"
                      alt="Project cover"
                      width={100}
                      height={50}
                      className="rounded-xl relative z-20 w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <p>
                    You can ask anything about me from this bot. It will answer
                    the questions with the available info about me as context.
                    This project showcases an AI-powered chatbot built with
                    Next.js, TypeScript, and the AI SDK, integrated with a Groq
                    model for real-time conversational responses. The project
                    demonstrates how to connect a frontend application to an
                    LLM, handle chat state effectively, and build an interactive
                    AI assistant that feels that is specific to certain task.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">
                    Technologies used
                  </h2>
                  <div className="flex flex-row w-full justify-start items-center -mt-2">
                    <span className="rounded-full text-foreground p-2 mx-1 bg-gray-300 text-xs">
                      JavaScript
                    </span>
                    <span className="rounded-full text-foreground p-2 mx-1 bg-gray-300 text-xs">
                      TypeScript
                    </span>
                    <span className="rounded-full text-foreground p-2 mx-1 bg-gray-300 text-xs">
                      Node.js
                    </span>
                    <span className="rounded-full text-foreground p-2 mx-1 bg-gray-300 text-xs">
                      Next.js
                    </span>
                    <span className="rounded-full text-foreground p-2 mx-1 bg-gray-300 text-xs">
                      Grok API
                    </span>
                    <span className="rounded-full text-foreground p-2 mx-1 bg-gray-300 text-xs">
                      AI SDK
                    </span>
                  </div>
                </div>
                <DialogFooter>
                  <Button className="bg-brand-600 hover:bg-brand-700 cursor-pointer w-40">
                    <Link
                      className="flex flex-row"
                      href="https://github.com/roy-rahul/rahul-roy-profile"
                    >
                      <FaGithub className="mr-2" /> View on GitHub
                    </Link>
                  </Button>
                  <DialogClose
                    render={
                      <Button variant="outline" className="cursor-pointer">
                        Close
                      </Button>
                    }
                  />
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* </DialogTrigger> */}
            <CardHeader>
              <CardAction>
                <Badge variant="secondary">AI</Badge>
              </CardAction>
              <CardTitle>Ask AI About Me</CardTitle>
              <CardDescription>
                You can ask anything about me from this bot. It will answer the
                questions with the available info about me as context. This
                project showcases an AI-powered chatbot built with Next.js,
                TypeScript, and the AI SDK, integrated with a Groq model. The
                project demonstrates how we can use AI
                assistant that perform specific task.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center">
              <Button className="w-40 bg-brand-600 hover:bg-brand-700">
                <Link href="/projects/ask-ai-about-me">Check it out</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-3xl rounded-xl">
          <Card className="relative mx-auto w-full max-w-sm pt-0 duration-300 ease-in-out hover:-translate-y-2">
            {/* <div className="absolute inset-0 z-30 aspect-video bg-black/35" /> */}
            <Dialog>
              <DialogTrigger
                render={
                  <div className="flex bg-brand-600 justify-center items-center h-60 cursor-pointer">
                    <div className="w-1/2">
                      <Image
                        src="/project-3.avif"
                        alt="Project cover"
                        width={100}
                        height={50}
                        className="rounded-xl relative z-20 w-full object-cover"
                      />
                    </div>
                  </div>
                }
              />
              <DialogContent showCloseButton={true} className="max-w-1/2">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-foreground">
                    Video Conference
                  </DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>
                <Separator></Separator>
                <div className="flex bg-brand-600 justify-center items-center h-auto rounded-4xl p-8">
                  <div className="w-1/2">
                    <Image
                      src="/project-3.avif"
                      alt="Project cover"
                      width={100}
                      height={50}
                      className="rounded-xl relative z-20 w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <p>
                    Open source video conferencing app built on LiveKit
                    Components, LiveKit Cloud, react and Next.js. This project
                    showcases an video call app with standard features. It can
                    be shared with your peers and you can video call
                    immediately. It can be modified to our need. It can be
                    scaled to include AI powered transcript and many other
                    features.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">
                    Technologies used
                  </h2>
                  <div className="flex flex-row w-full justify-start items-center -mt-2">
                    <span className="rounded-full text-foreground p-2 mx-1 bg-gray-300 text-xs">
                      LiveKit Components
                    </span>
                    <span className="rounded-full text-foreground p-2 mx-1 bg-gray-300 text-xs">
                      LiveKit Cloud
                    </span>
                    <span className="rounded-full text-foreground p-2 mx-1 bg-gray-300 text-xs">
                      JavaScript
                    </span>
                    <span className="rounded-full text-foreground p-2 mx-1 bg-gray-300 text-xs">
                      TypeScript
                    </span>
                    <span className="rounded-full text-foreground p-2 mx-1 bg-gray-300 text-xs">
                      Node.js
                    </span>
                    <span className="rounded-full text-foreground p-2 mx-1 bg-gray-300 text-xs">
                      Next.js
                    </span>
                  </div>
                </div>
                <DialogFooter>
                  <Button className="bg-brand-600 hover:bg-brand-700 cursor-pointer w-40">
                    <Link
                      className="flex flex-row"
                      href="https://github.com/roy-rahul/rahul-roy-profile"
                    >
                      <FaGithub className="mr-2" /> View on GitHub
                    </Link>
                  </Button>
                  <DialogClose
                    render={
                      <Button variant="outline" className="cursor-pointer">
                        Close
                      </Button>
                    }
                  />
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* </DialogTrigger> */}
            <CardHeader>
              <CardAction>
                <Badge variant="secondary">LiveKit</Badge>
              </CardAction>
              <CardTitle>Video Conference</CardTitle>
              <CardDescription>
                Open source video conferencing app built on LiveKit Components,
                LiveKit Cloud, react and Next.js. This project showcases an
                video call app with standard features. It can be shared with
                your peers and you can video call immediately. It can be
                modified to our need. It can be scaled to include AI powered
                transcript and many other features.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center">
              <Button className="w-40 bg-brand-600 hover:bg-brand-700">
                <Link href="/projects/video-call">Check it out</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
