import ProjectCard, { ProjectProps } from "../components/ProjectCard";

const Projects: ProjectProps[] = [
  {
    name: "SED USACH",
    description:
      '"Sistema de evaluacion docente", un programa Fullstack de fines educativos desarrollado\
      con Spring, Vue y Nuxt. El usuario puede dejar constancia de sus avances en el sistema para despues \
      ser visualizado y evaluado por las autoridades academicas.',
    img: "/SEDlogin.png",
    url: "",
    repo: "https://github.com/Henny35P/grupo3_frontend",
  },

  {
    name: "DEBEDE",
    description:
      '"DEBEDE" es un programa Fullstack de fines educativos desarrollado\
    con Laravel, este programa es una plataforma de streaming donde el usuario podra escuchar distintas canciones\
    y los artistas podran subir sus canciones',
    img: "/DEBEDElogin.png",
    url: "",
    repo: "https://github.com/Henny35P/LaravelMusic",
  },
  {
    name: "lacht",
    description:
      "Serverless webapp que permite a los usuarios publicar lo que quieran dentro de ella.\
    Los usuarios podran ver el perfil de otros usuarios y sus posts asociados.",
    img: "/lacht.png",
    url: "https://lacht.vercel.app/",
    repo: "https://github.com/Henny35P/lacht",
  },
];

export default function ProjectsList() {
  const projects = Projects.map((project) => {
    return (
      <ProjectCard
        name={project.name}
        description={project.description}
        img={project.img}
        url={project.url}
        repo={project.repo}
      />
    );
  });
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 place-items-center mx-auto gap-10 w-5/6 md:w-8/12">
      {projects}
    </div>
  );
}
