import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface ProjectProps {
  name: string;
  description: string;
  img: string;
  url: string;
}

export default function ProjectCard(props: ProjectProps) {
  return (
    <div className="bg-zinc-800 rounded-xl shadow-black shadow-2xl">
      <img src={props.img} className="rounded-xl object-fill" />
      <div className="grid place-items-center h-64">
        <div>
          <h1 className="text-zinc-50"> {props.name} </h1>
        </div>
        <div>
          <p className="text-zinc-200"> {props.description}</p>
        </div>
        <div>
          <FontAwesomeIcon className="h-6 md:h-12" icon={faGithub} />
        </div>
      </div>
    </div>
  );
}
