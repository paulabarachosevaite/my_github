import Link from "next/link";
import {BiCodeCurly} from "react-icons/bi";
const Header = () => {
  return (
    <header>
      <nav class="flex items-center justify-between flex-wrap bg-gray-300 p-6">
        <div class="flex items-center flex-shrink-0 text-gray-800 mr-6">
          <BiCodeCurly size={24} />
          <span class="font-semibold text-xl tracking-tight pl-2">
            Paula Bara
          </span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-400 hover:text-white hover:border-white">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-white mr-4"
            >
              About
            </a>
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-white mr-4"
            >
              Codes
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
