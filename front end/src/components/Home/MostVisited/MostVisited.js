import React from "react";

function MostVisited() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="w-full mb-6 lg:mb-0 text-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 pb-2">
              Most visited tourist places
            </h1>
            <div class="h-1 w-60 bg-blue-600 rounded m-auto"></div>
          </div>
          {/* <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p> */}
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/720x400"
                alt="content"
              />
              {/* <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3> */}
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Kashmir
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <button class="inline-flex text-white bg-blue-500 border-0 py-1 px-4 mt-3 focus:outline-none hover:bg-blue-600 rounded">
                Book Now
              </button>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/721x401"
                alt="content"
              />
              {/* <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3> */}
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Manali
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <button class="inline-flex text-white bg-blue-500 border-0 py-1 px-4 mt-3 focus:outline-none hover:bg-blue-600 rounded">
                Book Now
              </button>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/722x402"
                alt="content"
              />
              {/* <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3> */}
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Kerala
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <button class="inline-flex text-white bg-blue-500 border-0 py-1 px-4 mt-3 focus:outline-none hover:bg-blue-600 rounded">
                Book Now
              </button>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/723x403"
                alt="content"
              />
              {/* <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3> */}
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                Jaisalmer
              </h2>
              <p class="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <button class="inline-flex text-white bg-blue-500 border-0 py-1 px-4 mt-3 focus:outline-none hover:bg-blue-600 rounded">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <a class="text-blue-500 inline-flex mt-3 items-center ml-4">
            View More
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
export default MostVisited;
