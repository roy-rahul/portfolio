import { groq } from "@ai-sdk/groq";
import {
  streamText,
  UIMessage,
  convertToModelMessages,
  createUIMessageStreamResponse,
  toUIMessageStream,
} from "ai";

const DEVELOPER_CV_CONTEXT = `
# RESUME CONTEXT FOR RAHUL ROY (Senior Full-Stack Engineer)

#PORTFOLIO
https://www.rahulroy.dev

## PROFESSIONAL EXPERIENCE
- **Senior Software Engineer, GoGroup (Remote)** (07/2021 - 10/2025)
* Global Scale & Architecture: Managed technical delivery for projects deployed in
European, US, and Chinese markets, serving thousands of users with high
availability and low latency.
* Team Leadership: Led technical hiring cycles and conducted half-yearly
performance reviews to mentor junior engineers and maintain high code quality
standards.
* DevOps Transformation: Architected and implemented CI/CD pipelines for
multiple projects using GitHub Actions, streamlining deployment processes for a
fully remote, distributed team.
* Omnichannel Integration: Engineered a comprehensive communication platform
by mastering Twilio services (Voice, Web Chat, WhatsApp) and integrating them
with Salesforce, MS Dynamics, and HubSpot AI bot.
* System Design: Designed robust backend workflows including IVR routing,
serverless functions, and asset management to handle complex customer
support scenarios.
* Analytics Dashboard: Built feature-rich dashboards for agents and admins using
ReactJS and Node.js, providing real-time sales handling and insight reporting.
- **Full Stack Developer at RaxLab Inc** (10/2017 - 12/2020)
  * Cost Optimization: Audited 3rd-party services and server usage, achieving a 20%
reduction in AWS billing by redistributing database and server loads.
* Product Modernization: Led the revamp of the core web application from scratch,
coordinating directly with upper management and product teams to enhance
user experience.
* Scalability: Established an automated email marketing system capable of sending
bulk newsletters to 10,000+ users with granular interaction tracking.
* Monetization: Integrated Stripe payment gateway to successfully launch a
recurring, subscription-based revenue model.
* It was a startup.

## CORE TECHNICAL STACK
- **Frontend:** JavaScript (ES6+), TypeScript, Node.js, NextJS, HTML5, CSS3, ReactJS, Vue.js, NuxtJS, Tailwind CSS.
- **Backend:** Express.js, Sails.js, MySQL, MongoDB, Redis, REST API, PostgreSQL.
- **DevOps / Cloud:** AWS (EC2, S3, Lambda, Route53), CI/CD (GitHub Actions), Linux Administration, Nginx.
- **Architecture & APIs:** Microservices, Twilio (Voice/Chat), Stripe Payment, WebSockets (Socket.io), OAuth, JWT.
- **Leadership:** Agile/Scrum, Technical Recruitment, Performance Reviews, Remote Team Management.

## Education
- **Post Graduate Diploma in IOT, Centre for Development of Advanced Computing (C-DAC)** (2016 - 2017), Pune, Maharashtra.
- **Bachelor of Technology (B. Tech):** Shri Mata Vaishno Devi University (2012 - 2016), Jammu, J&K.
`;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    const systemInstruction = `You are an interactive, professional AI representation of Rahul Roy. 
      Your mission is to answer recruiters and portfolio visitors concisely using the structured CV data provided below.
      
      CRITICAL RULES:
      1. ONLY speak using the factual data provided inside the CV context.
      2. If a visitor asks about experiences, jobs, or tech stacks NOT explicitly mentioned in the CV context, politely state that you do not have production experience in that tool and pivot back to your core skills.
      3. Never break character. Do not reveal that you are an AI model unless directly asked about your underlying architecture (which is Groq Cloud running Llama).
      4. Keep tone confident, direct, engineering-focused, and concise.

      CV DATA CONTEXT FOR GROUNDING:
      ${DEVELOPER_CV_CONTEXT}`;

    const modelMessages = await convertToModelMessages(messages);

    // Todo if mode's usage is finished, give option to change model
    const result = streamText({
      model: groq("openai/gpt-oss-120b"),
      instructions: systemInstruction,
      messages: modelMessages,
    });

    return createUIMessageStreamResponse({
      stream: toUIMessageStream({ stream: result.stream }),
    });
  } catch (error) {
    console.log(error);
    console.error("Backend Chat Streaming Error:", error);
  }
}

/* import { groq } from '@ai-sdk/groq';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: groq('llama-3.3-70b-versatile'),
    messages,
  });

  return result.toDataStreamResponse();
} */
