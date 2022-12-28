import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function ProfileCard(): JSX.Element {
	return (
		<div className="bg-zinc-800 h-4/6 w-4/6 rounded-xl grid grid-cols-2 text-white backdrop-blur-lg bg-opacity-50 ">
			<div className="grid grid-rows-3 place-items-center">
				<h1 className="text-5xl"> Hans Villarroel </h1>
			</div>
			<div className="grid grid-rows-6 place-items-center overflow-hidden mx-auto">
				<img
					className="h-auto max-h-96 rounded-full mx-auto row-span-4"
					src="https://avatars.githubusercontent.com/u/59944004?v=4"
				/>
				<div className="flex justify-center gap-10 ">
					<FontAwesomeIcon className="h-16" icon={faGithub} />
					<FontAwesomeIcon className="h-16" icon={faLinkedin} />
				</div>
			</div>
		</div>
	);
}

export default ProfileCard;
