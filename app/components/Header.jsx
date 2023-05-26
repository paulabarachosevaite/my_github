"use client";
import Link from "next/link";
import {useState} from "react";
import {BiCodeCurly} from "react-icons/bi";
import {AiOutlineMenu} from "react-icons/ai";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <nav class="flex items-center justify-between flex-wrap p-6">
        <div class="flex items-center flex-shrink-0 text-gray-800">
          <Link
            href="/"
            class="font-semibold text-xl tracking-tight flex gap-2 hover:scale-x-105"
          >
            <BiCodeCurly size={24} />
            Web App Projects
          </Link>
        </div>
        <div
          class="block 
        lg:hidden"
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            class="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-400 hover:text-gray-500 hover:border-gray-500"
          >
            <AiOutlineMenu />
          </button>
        </div>
        {isOpen && (
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto transition m-auto">
            <div class="text-md lg:flex-grow">
              <Link
                href="/about"
                class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 mr-4
                "
              >
                About
              </Link>
              <Link
                href="/codes"
                class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-gray-600 mr-4"
              >
                Codes
              </Link>
            </div>
          </div>
        )}
      </nav>
      <hr />
    </header>
  );
};
export default Header;
