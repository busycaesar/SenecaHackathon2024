import { WordDescription } from "../../../Data/Schema/utilSchema";
import { Row, Col } from "react-bootstrap";
import ChallengeSetItem from "./challengeSetItem";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ChallengeSetsSection({
  challengeSet,
}: {
  challengeSet: WordDescription[];
}) {
  const [isLargeScreen, setIsLargeScreen] = React.useState(
    window.innerWidth >= 1024
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1280, // lg breakpoint
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // md breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // sm breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex font-gotham justify-center items-center">
        <section className="py-8 w-full bg-my-red">
          <div className="absolute p-10">
            <svg
              width="804"
              height="728"
              viewBox="0 0 804 728"
              fill="#e50000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.2" clip-path="url(#clip0)">
                <path
                  d="M784.903 402.215C784.903 402.024 784.903 401.833 784.712 401.642L593.738 76.8126L593.547 76.6215L593.356 76.4305L479.154 0.191094L478.963 1.7597e-05L478.772 1.75887e-05L478.581 1.75803e-05L478.39 1.7572e-05L478.199 1.75636e-05L134.446 76.4304C134.255 76.4304 134.064 76.6215 133.873 76.8126C133.873 77.0037 133.682 77.1948 133.682 77.3858L133.682 77.5769L182.189 250.883C182.38 251.456 182.953 251.647 183.335 251.456C183.908 251.265 184.099 250.883 184.099 250.501L184.099 250.31L135.783 78.1501L476.862 2.29293L396.271 214.77L220.766 338.396C220.384 338.587 220.384 338.969 220.384 339.16C220.384 339.351 220.384 339.542 220.575 339.733C220.957 340.115 221.53 340.307 221.912 339.924L395.125 217.827L316.062 426.482L234.707 430.877L199.568 305.531C199.568 305.149 199.186 304.957 199.186 304.957C198.995 304.957 198.804 304.766 198.422 304.957C197.849 305.149 197.658 305.531 197.658 305.913L197.658 306.104L232.606 431.068L80.5911 439.284L175.123 372.79C175.505 372.598 175.505 372.216 175.505 372.025C175.505 371.834 175.505 371.643 175.314 371.452C174.932 371.07 174.359 370.879 173.977 371.261L76.7716 439.666C76.5806 439.857 76.3896 440.048 76.3896 440.43C76.3896 440.622 76.3896 440.622 76.3896 440.813C76.5806 441.195 76.9626 441.386 77.3445 441.386L233.179 432.978L267.363 555.076L267.554 555.458L267.554 555.649L267.745 555.84L267.936 556.032L592.592 708.892C592.974 709.083 593.165 709.083 593.547 708.892C593.738 708.701 593.929 708.51 593.929 708.128L593.929 493.741C593.929 493.167 593.547 492.785 592.974 492.785C592.401 492.785 592.019 493.167 592.019 493.741L592.019 706.408L269.464 554.503L317.208 428.393L530.716 416.928C531.289 416.928 531.671 416.546 531.671 415.973C531.671 415.399 531.098 415.017 530.716 415.017L318.163 426.482L397.99 215.916L592.019 79.2966L592.019 411.769L588.009 411.96C587.436 411.96 587.054 412.342 587.054 412.916C587.054 413.489 587.627 413.871 588.009 413.871L592.019 413.68L592.019 436.418C592.019 436.991 592.401 437.373 592.974 437.373C593.547 437.373 593.929 436.991 593.929 436.418L593.929 413.489L783.948 403.171C784.33 403.171 784.521 402.98 784.712 402.597C784.903 402.406 784.903 402.406 784.903 402.215ZM782.42 401.26L593.929 411.387L593.929 80.8252L782.42 401.26ZM478.772 2.48401L591.255 77.3858L399.135 212.668L478.772 2.48401ZM315.298 428.584L268.509 552.019L235.089 432.787L315.298 428.584Z"
                  fill="#fff"
                ></path>
                <path
                  d="M804 688.829C804 667.238 786.43 649.659 764.85 649.659C743.27 649.659 725.701 667.238 725.701 688.829C725.701 710.421 743.27 728 764.85 728C786.43 728 804 710.421 804 688.829ZM727.61 688.829C727.61 668.193 744.225 651.57 764.85 651.57C785.476 651.57 802.09 668.193 802.09 688.829C802.09 709.466 785.476 726.089 764.85 726.089C744.225 726.089 727.61 709.275 727.61 688.829Z"
                  fill="#fff"
                ></path>
                <path
                  d="M78.2993 230.247C78.2993 208.655 60.7297 191.076 39.1496 191.076C17.5696 191.076 -7.68403e-07 208.655 -1.7122e-06 230.247C-2.656e-06 251.838 17.5696 269.417 39.1496 269.417C60.7297 269.417 78.2993 251.838 78.2993 230.247ZM1.90974 230.247C1.90974 209.61 18.5245 192.987 39.1496 192.987C59.7748 192.987 76.3895 209.61 76.3895 230.247C76.3895 250.883 59.7748 267.507 39.1496 267.507C18.5245 267.507 1.90974 250.692 1.90974 230.247Z"
                  fill="#fff"
                ></path>
                <path
                  d="M536.636 593.291C536.636 593.1 536.445 592.718 536.254 592.527C536.063 592.336 535.872 592.336 535.681 592.336C535.49 592.336 535.109 592.527 534.918 592.527C534.727 592.718 534.727 592.909 534.727 593.291C534.727 593.482 534.727 593.865 534.918 594.056C535.109 594.247 535.299 594.438 535.681 594.438C535.872 594.438 536.254 594.247 536.254 594.247C536.445 593.674 536.636 593.482 536.636 593.291Z"
                  fill="#fff"
                ></path>
                <path
                  d="M536.637 535.969C536.637 535.777 536.446 535.395 536.255 535.395C536.064 535.204 535.873 535.013 535.682 535.013C535.491 535.013 535.109 535.204 535.109 535.204C534.918 535.395 534.918 535.586 534.918 535.969C534.918 536.16 534.918 536.542 535.109 536.733C535.3 536.924 535.491 537.115 535.873 537.115C536.064 537.115 536.446 536.924 536.446 536.924C536.446 536.542 536.637 536.16 536.637 535.969Z"
                  fill="#fff"
                ></path>
                <path
                  d="M536.636 478.646C536.636 478.455 536.445 478.072 536.254 477.881C536.063 477.69 535.872 477.69 535.681 477.69C535.49 477.69 535.109 477.881 534.918 478.072C534.727 478.264 534.727 478.455 534.727 478.646C534.727 478.837 534.727 479.219 534.918 479.41C535.109 479.601 535.299 479.792 535.681 479.792C535.872 479.792 536.254 479.601 536.254 479.601C536.445 479.219 536.636 478.837 536.636 478.646Z"
                  fill="#fff"
                ></path>
                <path
                  d="M479.344 478.646C479.344 478.455 479.153 478.072 478.962 477.881C478.771 477.69 478.58 477.69 478.389 477.69C478.198 477.69 477.817 477.881 477.626 478.072C477.435 478.264 477.435 478.455 477.435 478.646C477.435 478.837 477.435 479.219 477.626 479.41C477.817 479.601 478.007 479.792 478.389 479.792C478.58 479.792 478.962 479.601 478.962 479.601C479.153 479.028 479.344 478.837 479.344 478.646Z"
                  fill="#fff"
                ></path>
                <path
                  d="M422.052 478.646C422.052 478.455 421.861 478.072 421.67 478.072C421.479 477.881 421.288 477.69 421.097 477.69C420.906 477.69 420.525 477.881 420.334 478.072C420.143 478.264 420.143 478.455 420.143 478.646C420.143 478.837 420.143 479.219 420.334 479.41C420.525 479.601 420.715 479.792 421.097 479.792C421.288 479.792 421.67 479.601 421.67 479.601C421.861 479.219 422.052 478.837 422.052 478.646Z"
                  fill="#fff"
                ></path>
              </g>
            </svg>
          </div>
          <div className="mx-10 flex justify-center items-center z-10 relative">
            <div className="flex flex-wrap">
              <div className="mx-auto py-10">
                <h2 className="mb-6 text-3xl lg:text-5xl text-white uppercase font-heading">
                  <strong>Challenge Sets</strong>
                </h2>
                <span className="mb-12 text-base md:text-2xl text-gray-50">
                  Explore a variety of challenges in the hackathon and
                  demonstrate your innovative skills and creativity. Choose your
                  passion and make a real-world impact.
                </span>
              </div>
            </div>
          </div>
          <section className="py-10 bg-white overflow-hidden">
            <div className="flex justify-center flex-wrap">
              {challengeSet.map((challengeSetItem, index) => (
                <div key={index} className="px-4 mb-8 xl:w-1/4 md:w-1/3">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      className="rounded-xl shadow-xl mb-6 h-[300px] w-[300px] hover:scale-105 transition-transform duration-500 ease-in-out"
                      src={challengeSetItem.image}
                    />
                    <div className="text-center">
                      <h3 className="mb-6 text-2xl text-red-500 font-semibold font-heading">
                        {challengeSetItem.title}
                      </h3>
                      <p className="text-lg hidden text-gray-900">
                        {challengeSetItem.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <div className="flex justify-center text-center md:mx-auto z-50 mt-10">
            <a
              href={`/challenge-sets`}
              rel="noreferrer"
              className="no-underline hover:scale-125 transition-all duration-150 ease-in-out"
            >
              <svg
                className="mr-3"
                width="30"
                height="30"
                viewBox="0 0 16 9"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.01 3.16553H0V5.24886H12.01V8.37386L16 4.20719L12.01 0.0405273V3.16553Z"
                  fill="#fff"
                ></path>
              </svg>
              <span className="button hover:cursor-pointer bg-white p-3 rounded-xl hover:scale-125 transition-all duration-150 ease-in-out">
                More On Challenge Sets
              </span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
