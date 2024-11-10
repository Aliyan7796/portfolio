// import { BiSolidDownload } from "react-icons/bi";
// import CV from "/public/CV.pdf";
import { FC } from "react";

const Contact: FC = () => {
  return (
    <div
      id="contact"
      className="flex min-h-screen min-w-full items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-gray-500 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h1>
        <p className="text-center text-lg font-semibold text-gray-500">
          Want to chat? Send me an email through this button, and I'll respond
          whenever I can.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <a
            href="mailto:saimahmedqazi22@gmail.com"
            className="text-nowrap rounded-lg border border-blue-900 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-blue-900 transition-all duration-300 hover:translate-y-2 hover:shadow-xl hover:shadow-blue-900"
          >
            Contact Me
          </a>
          {/* <a
            href={CV}
            download="cv.pdf"
            className="flex justify-center items-center gap-2 text-nowrap rounded-lg border border-red-900 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-red-900 transition-all duration-300 hover:translate-y-2 hover:shadow-xl hover:shadow-red-900"
          >
            <BiSolidDownload className="text-red-500" />
            Resume
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
