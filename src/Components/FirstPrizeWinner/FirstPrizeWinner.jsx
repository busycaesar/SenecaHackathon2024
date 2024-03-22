import hFirst from "../../svgs/Prize/hFisrt.png";
import winner from "../../svgs/Prize/winners.png";
import { useEffect, useMemo, useState, useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { AttentionSeeker } from "react-awesome-reveal";

function FirstPrizeWinner() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60, // Lower fps for a smoother confetti effect
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
      },
      particles: {
        color: {
          value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"],
        },
        move: {
          decay: 0.05,
          direction: "top",
          enable: true,
          gravity: {
            enable: true,
          },
          outModes: {
            top: "none",
            default: "destroy",
          },
          speed: {
            min: 50,
            max: 100,
          },
        },
        number: {
          value: 200,
        },
        opacity: {
          value: 1,
        },
        rotate: {
          value: {
            min: 0,
            max: 360,
          },
          direction: "random",
          animation: {
            enable: true,
            speed: 30,
          },
        },
        tilt: {
          direction: "random",
          enable: true,
          value: {
            min: 0,
            max: 360,
          },
          animation: {
            enable: true,
            speed: 30,
          },
        },
        size: {
          value: 4,
          animation: {
            enable: true,
            startValue: "min",
            count: 1,
            speed: 16,
            sync: true,
          },
        },
        roll: {
          darken: {
            enable: true,
            value: 25,
          },
          enlighten: {
            enable: true,
            value: 25,
          },
          enable: true,
          speed: {
            min: 5,
            max: 15,
          },
        },
        wobble: {
          distance: 30,
          enable: true,
          speed: {
            min: -7,
            max: 7,
          },
        },
        shape: {
          type: ["circle", "square"],
          options: {},
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="mt-10 font-gotham page-content">
      <AttentionSeeker effect="tada">
        {" "}
        <h2 className="m-4 text-3xl font-gotham text-my-red sm:text-5xl lg:text-7xl uppercase text-center">
          <strong>The Winners</strong>
        </h2>
      </AttentionSeeker>

      <div
        id="certificate"
        className=" border-solid border-8 border-my-red md:px-4 px-2.5 md:pt-4 pt-2.5 pb-4 md:pb-12 bg-gray-800 rounded-xl relative shadow-2xl"
      >
        <div className="w-full overflow-hidden rounded-xl ">
          <img
            src={winner}
            alt="First Prize Winner"
            className="w-full md:w-cover"
          />
        </div>
        <div className="flex justify-center items-center flex-col text-white mt-2">
          <h3 className="text-3xl lg:text-5xl uppercase font-bold tracking-wide">
            ENIGMA
          </h3>
          <div className="flex md:flex-row flex-wrap md:pb-10  justify-around items-center w-full">
            <AttentionSeeker effect="bounce" triggerOnce>
              <div className="flex flex-col justify-center items-center m-3">
                <p className="text-lg sm:text-2xl font-bold m-0">Andri Sych</p>
               
              </div>
            </AttentionSeeker>
            <AttentionSeeker effect="bounce" triggerOnce delay={20}>
              <div className="flex flex-col justify-center items-center m-3">
                <p className="text-lg sm:text-2xl font-bold m-0">Majd Al Mnayer</p>
               
              </div>
            </AttentionSeeker>
            <AttentionSeeker effect="bounce" triggerOnce delay={40}>
              <div className="flex flex-col justify-center items-center m-3">
                <p className="text-lg sm:text-2xl font-bold m-0">Abdullah Al Mamun Fahim</p>
               
              </div>
            </AttentionSeeker>
            <AttentionSeeker effect="bounce" triggerOnce delay={60}>
              <div className="flex flex-col justify-center items-center m-3">
                <p className="text-lg sm:text-2xl font-bold m-0">Cleo Buenaventura</p>
               
              </div>
            </AttentionSeeker>
            <AttentionSeeker effect="bounce" triggerOnce delay={80}>
              <div className="flex flex-col justify-center items-center m-3">
                <p className="text-lg sm:text-2xl font-bold m-0">Fevin Patel</p>
               
              </div>
            </AttentionSeeker>
          </div>
        </div>
        <Particles
          id="tsparticles"
          options={options}
          init={particlesInit}
          className="-z-50"
        />
        <div className="w-1/2 md:w-1/3 overflow-hidden rounded-xl absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <img src={hFirst} alt="First Prize Winner" className="w-full" />
        </div>
      </div>
      {/* <div id="description" className="mt-5">
        <h3 className="pt-2 text-center font-bold tracking-wide uppercase ">
          Meet the team
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          iure sed repellendus velit alias soluta distinctio aliquid voluptates?
          Pariatur distinctio exercitationem illo a placeat possimus
          dignissimos, similique temporibus doloremque, qui soluta iusto
          excepturi nemo voluptas laboriosam obcaecati? Corrupti vero rem
          doloribus dignissimos est in. Asperiores incidunt voluptatum dolor
          vero ipsam iure odio iusto consequuntur, suscipit aliquid dolorum
          distinctio. Sunt, illo sequi! Odit, natus, laudantium nesciunt soluta
          facere quae, dolor enim veniam nostrum deserunt sed! Totam, pariatur
          harum consequatur perspiciatis impedit ullam, vel at molestiae, aut
          nesciunt quaerat non vero minus libero tempore. Sunt voluptatem
          aperiam quis, impedit, ea ullam quaerat nostrum totam magnam beatae
          quibusdam laboriosam consequatur unde consequuntur quod excepturi
          obcaecati. Dolorum, modi est. Minima quidem cum corrupti, odit minus
          magnam. Nam asperiores a quibusdam nobis, necessitatibus illo,
          commodi, quod eos beatae porro ipsum. Doloribus nisi nulla eos
          adipisci rerum eius fugit soluta, nam voluptatum velit ipsam
          laboriosam hic laudantium suscipit dolores repudiandae sunt maiores
          quaerat dolorem molestiae delectus cumque rem itaque? Voluptatibus
          debitis harum architecto quisquam vitae asperiores natus error commodi
          molestiae impedit vel dolorem, necessitatibus sit voluptates ullam
          perferendis. Autem libero quo, vel earum quibusdam tempore voluptatem,
          rem ratione, provident quisquam at voluptas recusandae obcaecati ipsam
          sit.
        </p>
      </div> */}
      {/* <div className="button rounded-3xl pt-10 md:pt-20 mx-auto text-center hover:none">
                  <a
                    href="/qualified-teams"
                    target="_blank"
                    rel="noreferrer"
                    className="my-6"
                  >
                    <button className="font-bold h-20 rounded-3xl opacity-80 hover:opacity-100"><span className="text-2xl blink_me">See All Winners</span> </button>
                  </a>
                </div> */}
    </div>
  );
}

export default FirstPrizeWinner;
