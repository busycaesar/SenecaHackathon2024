import { Testimonial } from "../../../Data/Schema/testimonialSchema";

export default function TestimonialSection({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div className="mx-1 flex bg-red-600 md:min-h-[380px] min-h-[480px] h-[500px] md:h-[400px]  rounded-xl flex-col mt-[100px] flex-wrap max-w-1/3">
      {testimonial.headshot ? (
        <img
          className="border-5 border-solid border-white drop-shadow-2xl absolute left-1/2 ml-[-85px] mt-[-100px] h-[180px] w-[180px] rounded-full object-cover object-top"
          src={testimonial.headshot}
          alt=""
        />
      ) : null}

      <svg
        className="w-8 h-8 mt-4 ml-5 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 310 310"
        fill="#FFF"
      >
        <path d="M79 144.11c-6 0-11.37.28-16.19.8 8.02-32.82 27.27-48.06 55.31-60.35L103.1 50.31C75.18 62.56 56.9 76.59 43.81 95.82c-15.2 22.35-22.6 51.72-22.6 89.81v16.46c0 31.83.11 57.6 57.79 57.6 57.79 0 57.79-25.87 57.79-57.79 0-31.91.37-57.79-57.79-57.79zm152 0c-6 0-11.37.28-16.19.8 8.02-32.82 27.27-48.06 55.31-60.35L255.1 50.31c-27.92 12.25-46.2 26.28-59.29 45.51-15.2 22.35-22.6 51.72-22.6 89.81v16.46c0 31.83.11 57.6 57.79 57.6 57.79 0 57.79-25.87 57.79-57.79 0-31.91.37-57.79-57.79-57.79z"></path>
      </svg>

      <div className="text-white mx-auto mt-10 px-10 ">
        {testimonial.review}
      </div>

      <div className="text-white font-bold  bottom-12 left-12 mt-4 ml-10 md:mx-auto">
        - {testimonial.name}
      </div>
      <svg
        className="w-8 h-8 my-2 ml-auto mr-5 md:mr-12 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 310 310"
        fill="#FFF"
      >
        <path d="M231 167.84c6.02 0 11.42-.28 16.25-.81-7.1 29.03-22.95 44.36-45.88 56.04-5.33 2.71-7.63 9.1-5.23 14.57l6.04 13.77c2.59 5.91 9.62 8.44 15.38 5.53 22.1-11.11 37.39-23.92 48.76-40.63C281.58 193.89 289 164.4 289 126.17v-16.52c0-31.95-.11-57.81-58-57.81-58 0-58 25.97-58 58s-.38 58 58 58zm-152 0c6.02 0 11.42-.28 16.25-.81-7.1 29.03-22.95 44.36-45.88 56.04-5.33 2.71-7.63 9.1-5.23 14.57l6.04 13.77c2.59 5.91 9.62 8.44 15.38 5.53 22.1-11.11 37.39-23.92 48.76-40.63C129.58 193.89 137 164.4 137 126.17v-16.52c0-31.95-.11-57.81-58-57.81-58 0-58 25.97-58 58s-.38 58 58 58z"></path>
      </svg>
    </div>
  );
}
