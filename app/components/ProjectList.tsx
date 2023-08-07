import { generateImage, getGithubProjects } from '@/app/utils/GithubAPI';
import { ProjectItem } from '@/app/components/ProjectItem';

export const ProjectList = async () => {
  const projectData = await getGithubProjects().then((res) => res.data);

  await projectData.map((project: any) => {
    if (project.homepage != null) generateImage(project.homepage, project.name);
  });

  const displayProjects: any[] = await createProjects();

  async function createProjects() {
    const exludeList: string[] = ['CedricAOUN'];

    const sortedProjects: any[] = projectData.sort((a: any, b: any) => {
      let aValue = a.homepage;
      let bValue = b.homepage;
      if (aValue == null) {
        aValue = '';
      }
      if (bValue == null) {
        bValue = '';
      }
      return aValue < bValue ? 1 : aValue === bValue ? 0 : -1;
    });

    let orderedProjects: any[] = [];

    sortedProjects.map((project: any, index: number) => {
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
            imgUrl={`Projects/${project.name}.png`}
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
          'mx-auto grid w-max grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'
        }
      >
        {displayProjects.map((p) => p)}
      </div>
    </>
  );
};
