import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

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

function ProfileCard(): JSX.Element {
	const mobile = isMobile();
	return (
		<div className="bg-zinc-800 h-5/6 w-5/6 -my-32 md:h-4/6 md:w-4/6 rounded-xl grid grid-cols-1 md:grid-cols-2 text-white backdrop-blur-lg bg-opacity-50 ">
			<div className="grid grid-rows-3 place-items-center">
				{!mobile ? (
					<h1 className="md:text-5xl font-mono font-medium underline decoration-1 underline-offset-8 ">
						Hans Villarroel
					</h1>
				) : null}
			</div>
			<div className="grid grid-rows-6 place-items-center overflow-hidden mx-auto py-16 -mb-24 md:py-0 md:-mb-0">
				<img
					className="h-auto max-h-36 md:max-h-48 rounded-full mx-auto md:row-span-4 "
					src="https://avatars.githubusercontent.com/u/59944004?v=4"
				/>

				{mobile ? (
					<h1 className="text-2xl font-mono font-medium underline decoration-1 underline-offset-8">
						Hans Villarroel
					</h1>
				) : null}
				<div>
					<p className="text-justify px-4">
						{" "}
						Hola, soy Hans, un estudiante actualmente cursando Ingenieria en
						ejecucion en la Universidad de Santiago de Chile.
					</p>
				</div>

				<div className="flex justify-center gap-10 ">
					<FontAwesomeIcon className=" h-6 md:h-16" icon={faGithub} />
					<FontAwesomeIcon className=" h-6 md: md:h-16" icon={faLinkedin} />
				</div>
			</div>
		</div>
	);
}

export default ProfileCard;
