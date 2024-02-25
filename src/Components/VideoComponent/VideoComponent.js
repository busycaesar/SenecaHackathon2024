import React from "react";
import { Row, Col } from "react-bootstrap";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function VideoComponents() {
  return (
      
<section class="">
<div className="container px-10 rounded-3xl text-center mx-auto">

          <div className="relative  overflow-hidden md:max-w-6xl mx-auto rounded-3xl aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full rounded-lg"
              height="315"
              src="https://www.youtube.com/embed/7fBkaY6-_rU?si=LbPm-vRxv70fqcoL"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            
          </div> 
          {/* <div className="flex flex-col pt-5 ml-auto justify-center items-center">
                <p className="lg:text-xl text-base text-black font-bold">Click below & Subscribe to our Channel for Hackathon Videos</p>
                <div className="fill-white mb-10 curved-border">
                  <a
                    href="https://www.youtube.com/@seneca.hackathon"
                    target="_blank"
                  >
                    <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        class="mb-2 bg-my-red inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-10 w-20"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                        </button>
                  </a>
                </div>
              </div> */}
        </div>
</section>
  );
}
