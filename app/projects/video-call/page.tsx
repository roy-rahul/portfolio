"use client";

import { useRouter, usePathname } from "next/navigation";
import React, { useState, useRef } from "react";
import { PiVideoConference } from "react-icons/pi";
import { IoCopyOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

import {
  // encodePassphrase,
  generateRoomId,
  // randomString,
} from "@/app/lib/client-utils";

function DemoMeetingTab(props: { label: string }) {
  const router = useRouter();
  const [isCopied, setIsCopied] = useState(false);
  const [generatedRoomId, setGeneratedRoomId] = useState('');
  // const [sharedPassphrase, setSharedPassphrase] = useState(randomString(64));
  // const roomIdRef = useRef<string | null>(null);
  // if (roomIdRef.current === null) {
  //   roomIdRef.current = generateRoomId();
  // }

  // const generatedRoomId = roomIdRef.current;
  const pathname = usePathname();
  const startMeeting = async () => {
    let roomId = generatedRoomId;
    if (!roomId) {
      roomId = generateRoomId();
    }
    router.push(`${pathname}/rooms/${roomId}`);
  };

  const generateLink = () => {
    const generatedRoomId = generateRoomId();
    setGeneratedRoomId(generatedRoomId)
  }

  const copied = async () => {
    const conferenceLink = `${window.location.host + pathname}/rooms/${generatedRoomId}`;
    await navigator.clipboard.writeText(conferenceLink);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col p-0 rounded-2xl w-full justify-center">
      <div className={`flex ${generatedRoomId? 'flex-col' : 'flex-row'} justify-between text-foreground text-lg mb-4 bg-brand-200 rounded-2xl p-2 px-4`}>
        Generate live conference link and share with your peers.
        <div className="flex">
          {!generatedRoomId && <button onClick={generateLink} className="bg-brand-600 text-foreground p-1 px-2 rounded-2xl cursor-pointer hover:bg-brand-800 hover:text-white">Generate</button>}
          {generatedRoomId && <p className="bg-brand-300 rounded-2xl p-4 text-base flex flex-row items-center justify-between w-full">
            {window.location.host + pathname}/rooms/{generatedRoomId}
            {!isCopied ? (
              <IoCopyOutline onClick={copied} className="cursor-pointer"></IoCopyOutline>
            ) : (
              <FaCheck></FaCheck>
            )}
          </p>}
        </div>
      </div>
      <button
        className="flex flex-row justify-center bg-brand-600 p-2 rounded-2xl w-full my-4 cursor-pointer hover:bg-brand-800 hover:text-white"
        onClick={startMeeting}
      >
        Start Meeting
      </button>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-center w-3/4 p-8 pb-0">
        <h1 className="text-2xl text-brand-600 font-bold mb-4">
          Video Conference / Meet
        </h1>
        <main className="flex flex-col bg-brand-100 p-8 rounded-2xl h-screen justify-between">
          <div className="flex flex-col w-full gap-6 p-4 mt-10">
            <div className="flex flex-col w-full justify-center items-center">
              <PiVideoConference className="text-9xl text-brand-600" />
              <p className="mt-16 text-lg">
                {/* Open source video conferencing app built on LiveKit&nbsp;Components, LiveKit&nbsp;Cloud and Next.js. */}
                A video conference app for your friends, family and office work.
              </p>
            </div>
          </div>
          <div className="p-8 pb-0 flex flex-col justify-center items-center">
            <DemoMeetingTab label="Demo" />
          </div>
        </main>
      </div>
    </>
  );
}
