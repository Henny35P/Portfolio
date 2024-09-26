import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";

const privateInfo = {
	name: "Hans Villarroel",
	description: `Hola, soy Hans, un desarrollador web fullstack. Actualmente, estoy cursando Ingeniería de Ejecución en Computación e Informática en la Universidad de Santiago de Chile.

Desde que comencé mi carrera en el desarrollo web, me he especializado en el uso de diferentes tecnologías, como React, Next y NodeJS, entre otras.

He trabajado en varios proyectos de desarrollo web, desde páginas estáticas con HTML y CSS hasta aplicaciones web con diferentes stacks de lenguajes.

En los iconos inferiores, puedes encontrar enlaces a mi CV, GitHub y LinkedIn. Además, más abajo, encontrarás algunos de los proyectos que he realizado, junto con sus repositorios y sitios donde se pueden probar.`,
	github: "github.com/umibana",
	linkedin: "linkedin.com/in/hansvillarroel",
	curriculum: "",
};

const nameDiv = () => {
	return (
		<h1 className="text-2xl md:text-5xl font-mono font-medium underline decoration-3 underline-offset-8 text-center py-2 md:py-8 lg:py-12 ">
			{privateInfo.name}
		</h1>
	);
};

const descriptionDiv = () => {
	return (
		<div>
			<p className="px-8 whitespace-pre-line text-xl xl:text-2xl ">
				{privateInfo.description}{" "}
			</p>
		</div>
	);
};

const infoDiv = () => {
	return (
		<div className="flex justify-center gap-10 py-6 ">
			<FontAwesomeIcon
				className=" h-10 md:h-14 cursor-pointer"
				icon={faClipboard}
				onClick={() => handleClick(`https://${privateInfo.curriculum}`)}
			/>
			<FontAwesomeIcon
				className=" h-10 md:h-14 cursor-pointer"
				icon={faGithub}
				onClick={() => handleClick(`https://${privateInfo.github}`)}
			/>
			<FontAwesomeIcon
				className=" h-10 md: md:h-14 cursor-pointer"
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
		<div className="flex justify-center items-center h-screen">
			<div className="bg-zinc-800 xl:h-5/6 w-5/6 rounded-xl grid grid-cols-1 md:grid-cols-3 text-white backdrop-blur-md bg-opacity-30 shadow-black shadow-2xl ">
				{/* render para desktops */}
				<div className="flex flex-row  col-span-2">
					{!mobile ? (
						<div className=" md:px-0 lg:px-12">
							{" "}
							<div>{nameDiv()}</div> <div> {descriptionDiv()} </div> {infoDiv()}
						</div>
					) : null}
				</div>
				<img
					className="object-scale-down m-auto md:-mx-6 rounded-md xl:h-5/6 drop-shadow-lg"
					src="/lonmgtest.jpg"
				/>{" "}
				{/* render para mobile */}
				{mobile ? (
					<div>
						<div className="flex place-content-center">
							<img
								className="align-top max-h-44 rounded-full mt-4 "
								src="https://avatars.githubusercontent.com/u/59944004?v=4"
							/>{" "}
						</div>
						<div>{nameDiv()}</div>
						<div> {descriptionDiv()} </div>
						<div>{infoDiv()}</div>
					</div>
				) : null}
			</div>
		</div>
	);
}
