import React from "react";
import {
  BookmarkIcon,
  ChatIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

function Card() {
  return (
    <div class="max-w-xl rounded overflow-hidden shadow-lg mt-8">
      {/* Header */}
      <div className="flex p-5">
        <img
          src="https://links.papareact.com/3ke"
          alt=""
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
        />
        <div className="flex-1">
          <p className="font-bold">CS Careers</p>
          <p className="text-xs text-gray-700">Ryan Hu</p>
        </div>
        <p className="text-xs text-gray-700">Feb 21, 2023</p>
      </div>

      {/* Title */}
      <div className="px-6 py-1 text-lg">
        <p>
          What's your favorite color? I want to test if this will fit in the
          card, so because of that I need to put more and more and more and more
          and more and more text.
        </p>
      </div>

      {/* Poll */}
      <div className="flex flex-col">
        <div className="mx-10 my-2">
          <button className="bg-white w-full border-2 border-blue-300 h-10 rounded-lg shadow hover:bg-blue-50">
            <span className="flex justify-center items-center text-black">
              Red
            </span>
          </button>
        </div>
        <div className="mx-10 my-2">
          <button className="bg-white w-full border-2 border-blue-300 h-10 rounded-lg shadow hover:bg-blue-50">
            <span className="flex justify-center items-center text-black">
              Blue
            </span>
          </button>
        </div>
        <div className="mx-10 my-2">
          <button className="bg-white w-full border-2 border-blue-300 h-10 rounded-lg shadow hover:bg-blue-50">
            <span className="flex justify-center items-center text-black">
              Purple
            </span>
          </button>
        </div>
        <div className="mx-10 my-2">
          <button className="bg-white w-full border-2 border-blue-300 h-10 rounded-lg shadow hover:bg-blue-50">
            <span className="flex justify-center items-center text-black">
              Green
            </span>
          </button>
        </div>
        <div className="mx-10 my-2">
          <p className="text-gray-600">5,120 votes</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between px-6 py-4">
        <div className="flex space-x-7">
          <HeartIcon className="h-8 text-gray-600 cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
          <ChatIcon className="h-8 text-gray-600 cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
          <PaperAirplaneIcon className="h-8 text-gray-600 rotate-45 cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
        </div>
        <BookmarkIcon className="h-8 text-gray-600 cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
      </div>
    </div>
  );
}

export default Card;
