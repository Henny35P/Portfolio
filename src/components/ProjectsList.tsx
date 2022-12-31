import ProjectCard, { ProjectProps } from "../components/ProjectCard";

const Projects: ProjectProps[] = [
  {
    name: "SED USACH",
    description:
      '"Sistema de evaluacion docente", un programa Fullstack de fines educativos desarrollado\
      con Spring, Vue y Nuxt. El usuario puede dejar constancia de sus avances en el sistema para despues \
      ser visualizado y evaluado por las autoridades academicas.',
    img: "/SEDlogin.png",
    url: "https://github.com/Henny35P/grupo3_frontend",
  },

  {
    name: "DEBEDE",
    description:
      '"DEBEDE" es un programa Fullstack de fines educativos desarrollado\
    con Laravel, este programa es una plataforma de streaming donde el usuario podra escuchar distintas canciones\
    y los artistas podran subir sus canciones',
    img: "/DEBEDElogin.png",
    url: "https://github.com/Henny35P/LaravelMusic",
  },
];

export default function ProjectsList() {
  const projects = Projects.map((project) => (
    <ProjectCard
      name={project.name}
      description={project.description}
      img={project.img}
      url={project.url}
    />
  ));
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 place-items-center mx-auto gap-10 w-5/6 md:w-8/12">
      {projects}
    </div>
  );
}
