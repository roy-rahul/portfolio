import { MdOutlineMailOutline } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import ContactForm from "./contact-form";

export default function ProjectsSection() {
  return (
    <div id="contacts" className="flex w-full h-max flex-col items-center justify-center p-8">
      <h1 className="mb-4 text-4xl font-bold text-brand-600 justify-center w-full flex items-center">
        Get in Touch
      </h1>
      <h2 className="mb-8 text-xl text-foreground">
        Do you have a project in mind or just want to say hello? I&apos;d love
        to hear from you!
      </h2>
      <div className="flex w-full flex-row gap-16 items-center justify-around">
        <div className="flex flex-col items-center justify-center gap-4 p-8 bg-white w-xl rounded-xl">
          <h2 className="flex flex-row text-2xl font-bold text-foreground justify-start w-full mb-4">
            <MdOutlineMailOutline className="text-4xl text-brand-600" />
            <span className="ml-2">Send Message</span>
          </h2>
          <ContactForm />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-8 bg-white w-xl rounded-xl">
          <h2 className="flex flex-row text-2xl font-bold text-foreground justify-start w-full mb-4">
            <RiContactsLine className="text-4xl text-brand-600" />
            <span className="ml-2">Contact Information</span>
          </h2>
          <div className="flex flex-row gap-2 text-foreground justify-start w-full">
            <div className="flex flex-col items-center justify-center rounded-xl p-2 bg-brand-200">
              <MdOutlineMailOutline className="text-2xl text-brand-600" />
            </div>
            <div className="flex flex-col">
              <h3 className="flex flex-row text-lg font-bold text-foreground">
                <span className="ml-2">Email</span>
              </h3>
              <span className="ml-2 text-sm font-normal text-foreground">
                <a href="mailto:office@rahulroy.dev" className="text-foreground hover:text-brand-600">
                  office@rahulroy.dev
                </a>
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-2 text-foreground justify-start w-full">
            <div className="flex flex-col items-center justify-center rounded-xl p-2 bg-brand-200">
              <MdOutlineLocationOn className="text-2xl text-brand-600" />
            </div>
            <div className="flex flex-col">
              <h3 className="flex flex-row text-lg font-bold text-foreground">
                <span className="ml-2">Location</span>
              </h3>
              <span className="ml-2 text-sm font-normal text-foreground">
                New Delhi, India
              </span>
            </div>
          </div>
          <h3 className="flex flex-row text-lg font-bold text-foreground w-full justify-start mt-4">
            <span className="ml-2">Social Media</span>
          </h3>
          <div className="flex flex-row gap-2 text-foreground justify-start w-full">
            <div className="flex flex-col items-center justify-center rounded-xl p-2 bg-brand-200">
              <a href="https://www.linkedin.com/in/rahulroy-dev/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-brand-600 hover:text-brand-700" />
              </a>
            </div>
            <div className="flex flex-col">
              <h3 className="flex flex-row text-lg font-bold text-foreground">
                <span className="ml-2">LinkedIn</span>
              </h3>
              <a className="ml-2 text-sm font-normal text-foreground hover:text-brand-600" href="https://www.linkedin.com/in/rahulroy-dev/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/rahulroy-dev
              </a>
            </div>
          </div>
              
        </div>
      </div>
    </div>
  );
}
