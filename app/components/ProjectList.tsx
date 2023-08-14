import { generateImage, getGithubProjects } from "@/app/utils/GithubAPI";
import { ProjectItem } from "@/app/components/ProjectItem";

export const ProjectList = async () => {
  const projectData = await getGithubProjects().then((res) => res.data);

  await projectData.map(async (project: any) => {
    if (project.homepage) await generateImage(project.homepage, project.name);
  });

  const displayProjects: any[] = await createProjects();

  async function createProjects() {
    const exludeList: string[] = ["CedricAOUN", "NextJS-portfolio"];

    const dateSortedProjects: any[] = projectData.sort((a: any, b: any) => {
      const aDate: Date = new Date(a.created_at);
      const bDate: Date = new Date(b.created_at);
      const aURL: string = a.homepage;
      const bURL: string = b.homepage;

      if (!aURL && bURL) {
        return 1;
      } else if (aURL && !bURL) {
        return -1;
      } else {
        return bDate.getTime() - aDate.getTime();
      }
    });

    let orderedProjects: any[] = [];

    dateSortedProjects.map((project: any, index: number) => {
      let exclude = false;
      exludeList.find((itemName) => {
        if (itemName == project.name) {
          exclude = true;
        }
      });

      if (!exclude)
        orderedProjects.push(
          <ProjectItem
            key={index}
            name={project.name}
            imgUrl={`/Projects/${project.name}.jpg`}
            description={project.description}
            homepage={project.homepage}
            repoURL={project.html_url}
          ></ProjectItem>,
        );
    });
    return orderedProjects;
  }

  return (
    <>
      <div
        className={
          "mx-auto grid w-max grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        }
      >
        {displayProjects.map((p) => p)}
      </div>
    </>
  );
};
