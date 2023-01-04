import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { CSSProperties, useEffect, useState } from "react";

const privateInfo = {
  name: "Hans Villarroel",
  description: `Hola, soy Hans!     
  Actualmente soy un estudiante cursando Ingenieria de ejecucion en computacion e informatica en la Universidad de Santiago de Chile.
  Me enfoco principalemente en desarrollo web usando diferentes tecnologias como React, Next, NodeJS y otros.`,
  github: "github.com/Henny35P",
  linkedin: "linkedin.com/in/hansvillarroel",
};

const nameDiv = () => {
  return (
    <h1 className="text-2xl md:text-5xl font-mono font-medium underline decoration-1 underline-offset-8 text-center py-2 md:py-8 lg:py-12">
      {privateInfo.name}
    </h1>
  );
};

const descriptionDiv = () => {
  return (
    <div>
      <p className="px-8 whitespace-pre-line  text-xl md:text-2xl">
        {privateInfo.description}{" "}
      </p>
    </div>
  );
};

const infoDiv = () => {
  return (
    <div className="flex justify-center gap-10 py-6 ">
      <FontAwesomeIcon
        className=" h-6 md:h-16 cursor-pointer"
        icon={faGithub}
        onClick={() => handleClick(`https://${privateInfo.github}`)}
      />
      <FontAwesomeIcon
        className=" h-6 md: md:h-16 cursor-pointer"
        icon={faLinkedin}
        onClick={() => handleClick(`https://${privateInfo.linkedin}`)}
      />{" "}
    </div>
  );
};

function handleClick(url: string) {
  window.open(url);
}
function isMobile(): boolean {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  if (windowSize.width > 768) {
    return false;
  }

  return true;
}

// Icons code
// <div className="flex justify-center gap-10 ">
//   <FontAwesomeIcon className=" h-6 md:h-16" icon={faGithub} />
//   <FontAwesomeIcon className=" h-6 md: md:h-16" icon={faLinkedin} />
// </div>

export default function ProfileCard(): JSX.Element {
  const mobile = isMobile();
  return (
    <div className="grid place-items-center h-screen">
      <div className="bg-zinc-800 h-5/6 w-5/6 md:w-4/6 rounded-xl grid grid-cols-1 md:grid-cols-3 text-white backdrop-blur-md bg-opacity-30 overflow-hidden shadow-black shadow-2xl">
        <div className="grid grid-rows-3 place-items-center col-span-2">
          {!mobile ? (
            <div className="md:row-span-2 md:px-0 lg:px-12">
              {" "}
              <div>{nameDiv()}</div> <div> {descriptionDiv()} </div> {infoDiv()}
            </div>
          ) : null}
        </div>
        <div className="grid grid-rows-6 place-items-center ">
          <img
            className="h-auto max-h-36 md:max-h-48 row-span-1 rounded-full md:row-span-4 "
            src="https://avatars.githubusercontent.com/u/59944004?v=4"
          />
          {mobile ? (
            <div className="row-span-2">
              {" "}
              <div>{nameDiv()}</div>
              <div> {descriptionDiv()} </div>
              {infoDiv()}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
