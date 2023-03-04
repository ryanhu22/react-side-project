import React from "react";
import CardScrollable from "./CardScrollable";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";

function Feed() {
  return (
    <div>
      {/* Toggle selector */}
      <div className="flex justify-center mt-8">
        <div className="flex items-center">
          <button className="px-4 py-2 rounded-l-md border border-blue-200 font-medium hover:bg-blue-100 focus:outline-none focus:bg-blue-100">
            All
          </button>
          <button className="px-4 py-2 border border-blue-200 font-small hover:bg-blue-100 focus:outline-none focus:bg-blue-100">
            Communities you follow
          </button>
          <button className="px-4 py-2 rounded-r-md border border-blue-200 font-small hover:bg-blue-100 focus:outline-none focus:bg-blue-100">
            People you follow
          </button>
        </div>
      </div>

      <main
        className="grid grid-cols-1 md:grid-cols-2 
                 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto"
      >
        <section className="col-span-2">
          {/* <Posts /> */}
          <CardScrollable />
          <CardScrollable />
          <CardScrollable />
        </section>

        <section className="hidden xl:inline-grid md:col-span-1">
          <div className="fixed top-20">
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Feed;
