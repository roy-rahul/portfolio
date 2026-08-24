import { RxPerson } from "react-icons/rx";
import { PiToolboxDuotone } from "react-icons/pi";

export default function AboutMe() {
  return (
    <div id="about" className="flex w-full h-max flex-col items-center justify-center p-8">
      <h1 className="mb-16 text-4xl font-bold text-brand-600 justify-center w-full flex items-center">
        About Me
      </h1>
      <div className="flex w-full flex-col gap-16 items-center justify-around">
        <div className="flex flex-col items-center justify-center gap-4 p-8 bg-brand-100 w-3xl rounded-xl">
          <h2 className="flex flex-row text-2xl font-bold text-foreground justify-start w-full mb-4">
            <RxPerson className="text-4xl text-brand-600" />
            <span className="ml-2">Who am I?</span>
          </h2>
          <ul className="ml-2 mb-8 text-lg text-foreground marker:text-brand-600 list-disc">
            <li className="mb-2">
              Senior Full-Stack Engineer with 8 years of experience.
            </li>
            <li className="mb-2">
              Expert in Node.js, React, AWS, and distributed system design.
            </li>
            <li className="mb-2">
              Proven track record of working with cross-functional teams across
              Europe and USA.
            </li>
            <li className="mb-2">
              Managed technical delivery for projects deployed in European, US,
              and Chinese markets, serving thousands of users with high
              availability and low latency.
            </li>
            <li className="mb-2">
              Architected and implemented CI/CD pipelines for multiple projects
              using GitHub Actions, streamlining deployment processes for a
              fully remote, distributed team.
            </li>
            <li className="mb-2">
              Engineered a comprehensive communication platform by mastering
              Twilio services (Voice, Web Chat, WhatsApp) and integrating them
              with Salesforce, MS Dynamics, and HubSpot.
            </li>
            <li className="mb-2">
              I use AI assistants to speed up
              writing, debugging, and code review, and I&apos;ve gained hands-on
              experience with Claude, ChatGPT , and Gemini APIs.
            </li>
            {/* <li className="mb-2">I love to travel and explore new places.</li> */}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-8 bg-brand-100 w-3xl rounded-xl">
          <h2 className="flex flex-row text-2xl font-bold text-foreground justify-start w-full mb-4">
            <PiToolboxDuotone className="text-4xl text-brand-600" />
            <span className="ml-2">What are my technical skills?</span>
          </h2>
          <div className="flex flex-col"></div>
          <h2 className="text-base font-bold text-brand-600 w-full justify-start">
            Languages
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
              HTML5
            </span>
            <span className="rounded-full text-foreground p-2 mx-1 bg-gray-300 text-xs">
              CSS3
            </span>
          </div>
          <h2 className="text-base font-bold text-brand-600 w-full justify-start">
            Frontend
          </h2>
          <div className="flex flex-row w-full justify-start items-center -mt-2">
            <span className="rounded-full text-foreground p-2 m-1 bg-gray-300 text-xs">
              ReactJS
            </span>
            <span className="rounded-full text-foreground p-2 m-1 bg-gray-300 text-xs">
              Vue.js
            </span>
            <span className="rounded-full text-foreground p-2 m-1 bg-gray-300 text-xs">
              NuxtJS
            </span>
            <span className="rounded-full text-foreground p-2 m-1 bg-gray-300 text-xs">
              Tailwind CSS
            </span>
            <span className="rounded-full text-foreground p-2 m-1 bg-gray-300 text-xs">
              Bootstrap
            </span>
          </div>
          <h2 className="text-base font-bold text-brand-600 w-full justify-start">
            Backend & Database
          </h2>
          <div className="flex flex-row w-full justify-start items-center -mt-2">
            <span className="rounded-full text-foreground p-2 m-1 bg-gray-300 text-xs">
              Express.js
            </span>
            <span className="rounded-full text-foreground p-2 m-1 bg-gray-300 text-xs">
              Sails.js
            </span>
            <span className="rounded-full text-foreground p-2 m-1 bg-gray-300 text-xs">
              MySQL
            </span>
            <span className="rounded-full text-foreground p-2 m-1 bg-gray-300 text-xs">
              MongoDB
            </span>
            <span className="rounded-full text-foreground p-2 m-1 bg-gray-300 text-xs">
              REST API
            </span>
          </div>
          <h2 className="text-base font-bold text-brand-600 w-full justify-start">
            Cloud & DevOps
          </h2>
          <div className="flex flex-row w-full justify-start items-center -mt-2">
            <span className="rounded-full text-foreground p-2 m-1 bg-gray-300 text-xs">
              AWS (EC2, S3, Lambda, Route53, ...etc)
            </span>
            <span className="rounded-full text-foreground p-2 m-1 bg-gray-300 text-xs">
              CI/CD (GitHub Actions)
            </span>
            <span className="rounded-full text-foreground p-2 m-1 bg-gray-300 text-xs">
              Linux Administration
            </span>
          </div>
          <h2 className="text-base font-bold text-brand-600 w-full justify-start">
            Architecture & APIs
          </h2>
          <div className="flex flex-row w-full justify-start items-center -mt-2">
            <span className="rounded-full text-foreground p-2 m-1 bg-gray-300 text-xs">
              Microservices
            </span>
            <span className="rounded-full text-foreground p-2 m-1 bg-gray-300 text-xs">
              Twilio
            </span>
            <span className="rounded-full text-foreground p-2 m-1 bg-gray-300 text-xs">
              Stripe Payment
            </span>
            <span className="rounded-full text-foreground p-2 m-1 bg-gray-300 text-xs">
              WebSockets (Socket.io)
            </span>
            <span className="rounded-full text-foreground p-2 m-1 bg-gray-300 text-xs">
              OAuth, JWT
            </span>
          </div>
          <h2 className="text-base font-bold text-brand-600 w-full justify-start">
            Leadership
          </h2>
          <div className="flex flex-row w-full justify-start items-center -mt-2">
            <span className="rounded-full text-foreground p-2 m-1 bg-gray-300 text-xs">
              Agile/Scrum
            </span>
            <span className="rounded-full text-foreground p-2 m-1 bg-gray-300 text-xs whitespace-nowrap">
              Technical Recruitment
            </span>
            <span className="rounded-full text-foreground p-2 m-1 bg-gray-300 text-xs whitespace-nowrap">
              Performance Reviews
            </span>
            <span className="rounded-full text-foreground p-2 m-1 bg-gray-300 text-xs whitespace-nowrap">
              Remote Team Management
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
