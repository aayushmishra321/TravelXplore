import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";

function Explore() {
    useEffect(() => {
        document.title = "TravelXplore | Explore"; // Change the title
      }, []);

      const navigate = useNavigate();
      const handleBookNow = () => {
        navigate("/booking"); // Replace with the correct path to your booking page
      };
    
  return (
    <div>
      <Navbar />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">
                Welcome to Explore!
              </h1>
              <div class="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              <h2 className="font-semibold text-black">
                Explore the World's Most Breathtaking Destinations
              </h2>
              At TravelXplore, we bring you closer to the world's most
              captivating places. Whether you're seeking the thrill of adventure
              or the serenity of untouched landscapes, our curated list of
              destinations offers something for every traveler. From hidden gems
              to iconic landmarks, let us guide you on your next unforgettable
              journey. Dive in and discover the beauty that awaits you across
              the globe.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <h3 class="tracking-widest text-blue-700 text-xs font-medium title-font">
                  MOST VISITED THIS MONTH
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Chichen Itza
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
                <button onClick={handleBookNow} class="inline-flex text-white bg-blue-500 border-0 py-1 px-4 mt-3 rounded focus:outline-none hover:bg-blue-700 transition-colors">
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
                <h3 class="tracking-widest text-blue-700 text-xs font-medium title-font">
                  MOST VISITED IN PAST 2 MONTHS
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Colosseum Roma
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
                <button class="inline-flex text-white bg-blue-500 border-0 py-1 px-4 mt-3 focus:outline-none hover:bg-blue-700 transition-colors rounded">
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
                <h3 class="tracking-widest text-blue-700 text-xs font-medium title-font">
                  MOST VISITED
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Great Pyramid of Giza
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
                <button class="inline-flex text-white bg-blue-500 border-0 py-1 px-4 mt-3 focus:outline-none hover:bg-blue-700 transition-colors rounded">
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
                <h3 class="tracking-widest text-blue-700 text-xs font-medium title-font">
                  MOST VISITED THIS SEASON
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  San Francisco
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
                <button class="inline-flex text-white bg-blue-500 border-0 py-1 px-4 mt-3 focus:outline-none hover:bg-blue-700 transition-colors rounded">
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
                <h3 class="tracking-widest text-blue-700 text-xs font-medium title-font">
                  MOST VISITED THIS SEASON
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  San Francisco
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
                <button class="inline-flex text-white bg-blue-500 border-0 py-1 px-4 mt-3 focus:outline-none hover:bg-blue-700 transition-colors rounded">
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
                <h3 class="tracking-widest text-blue-700 text-xs font-medium title-font">
                  MOST VISITED THIS SEASON
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  San Francisco
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
                <button class="inline-flex text-white bg-blue-500 border-0 py-1 px-4 mt-3 focus:outline-none hover:bg-blue-700 transition-colors rounded">
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
                <h3 class="tracking-widest text-blue-700 text-xs font-medium title-font">
                  MOST VISITED THIS SEASON
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  San Francisco
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
                <button class="inline-flex text-white bg-blue-500 border-0 py-1 px-4 mt-3 focus:outline-none hover:bg-blue-700 transition-colors rounded">
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
                <h3 class="tracking-widest text-blue-700 text-xs font-medium title-font">
                  MOST VISITED THIS SEASON
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  San Francisco
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
                <button class="inline-flex text-white bg-blue-500 border-0 py-1 px-4 mt-3 focus:outline-none hover:bg-blue-700 transition-colors rounded">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
                
      </section>
      <Footer />
    </div>
  );
}
export default Explore;
