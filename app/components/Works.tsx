import Link from "next/link";
import { orbitron } from "@/app/utils/fonts";
import { WorkItem } from "@/app/components/WorkItem";

export const Works = () => {
  return (
    <>
      <section
        className={
          "bg-white dark:bg-gray-900 py-10 bg-opacity-50 dark:bg-opacity-50"
        }
        id={"work"}
      >
        <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16 text-center">
          <h1
            className={`mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white ${orbitron.className}`}
          >
            Work
          </h1>
          <div className={"flex flex-col gap-5"}>
            <WorkItem
              url={"https://standardgrouplb.com/"}
              title={"Standard Group - LB"}
              desc={
                "Full Bootstrap showcase website with a contact us form, and a project display for a Lebanese planning and construction company"
              }
              job={"Web Dev - Bootstrap"}
              logoUrl={"https://standardgrouplb.com/assets/logo.png"}
            />
            <WorkItem
              url={"https://portesdelabrie.org"}
              title={"Mission Locale - Portes de la Brie"}
              desc={
                "Full wordpress website, with a large number of functionalities such as a contact form, a job listing service, geolocatisation and more for the 'Portes de la brie' branch of 'Mission Locales'"
              }
              job={"Web Dev - Wordpress"}
              logoUrl={
                "https://portesdelabrie.org/wp-content/uploads/2021/10/01LOGO_MISSION_Petit_PortesBrie.png"
              }
            />
            <WorkItem
              url={"http://une-autre-histoire.org/"}
              title={"Une Autre Histoire - Claude RIBBE"}
              desc={
                "General cleanup and relooking of a Wordpress Website, as well as the addition of an automatic translation system for the famous writer, Claude RIBBE"
              }
              job={"Web Dev - Wordpress"}
              logoUrl={
                "https://m.media-amazon.com/images/I/61Yi0n7BfEL._AC_UF1000,1000_QL80_.jpg"
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};
