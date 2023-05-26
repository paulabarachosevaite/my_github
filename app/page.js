import Image from "next/image";
import Link from "next/link";
import {FaGithubAlt} from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-1 h-screen place-items-center">
      <div className="flex flex-col items-center justify-between gap-8">
        <FaGithubAlt size={100} className="text-slate-800 m-auto" />
        <h1 className="text-2xl text-gray-700">Web app ideas and codes</h1>
        <h3 className="text-gray-500">
          HTML, CSS, JavaScript, React, Next.js and more...
        </h3>
        <Link
          href="/codes"
          className="border bg-orange-600 px-4 py-1 rounded-md hover:scale-x-110 hover:bg-orange-500"
        >
          <p className="text-center uppercase text-slate-100  font-semibold text-lg ">
            projects
          </p>
        </Link>
      </div>
      <p className="text-slate-500 text-2xl italic">so empty...</p>
    </div>
  );
};

export default HomePage;
