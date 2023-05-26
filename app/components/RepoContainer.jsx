import Link from "next/link";
import {AiFillGithub} from "react-icons/ai";
const RepoContainer = ({name, link, description}) => {
  const cleanedName = name.replace("_", " ");

  return (
    <div className="flex flex-col gap-4 items-center justify-center mt-12 border rounded-md border-slate-400 m-4">
      <h4 className="uppercase font-semibold text-gray-800 text-center">
        {cleanedName}
      </h4>
      {description !== null ? (
        <p className="text-gray-600 text-center">{description}</p>
      ) : (
        <p className="text-gray-600 text-center">No Description</p>
      )}
      <Link
        href={link}
        className="flex gap-2 text-gray-800 hover:scale-x-105 mb-1"
      >
        <span>Repository</span>
        <AiFillGithub size={24} />
      </Link>
    </div>
  );
};
export default RepoContainer;
