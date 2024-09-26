import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export interface ProjectProps {
	name: string;
	description: string;
	img: string;
	url?: string;
	repo: string;
}

export default function ProjectCard(props: ProjectProps) {
	return (
		<div className="bg-zinc-800 rounded-xl shadow-black shadow-2xl py-1">
			<div>
				<img
					src={props.img}
					className="rounded-xl object-contain w-full h-52 "
				/>
			</div>
			<div className="grid grid-cols-1 place-items-center mx-4">
				<div>
					<a href={props.url || undefined}>
						<h1 className="text-zinc-50 text-xl underline underline-offset-2 py-2">
							{" "}
							{props.name}{" "}
						</h1>
					</a>
				</div>
				<div className=" h-36">
					<p className="text-zinc-200 break-words "> {props.description}</p>
				</div>
				<div className="mt-4">
					<a href={props.repo}>
						<FontAwesomeIcon className="h-6 md:h-10" icon={faGithub} />
					</a>
				</div>
			</div>
		</div>
	);
}
