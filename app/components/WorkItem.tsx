import Link from "next/link";
import { orbitron } from "@/app/utils/fonts";

interface Props {
  title: string;
  job: string;
  desc: string;
  url: string;
  logoUrl: string;
}

export const WorkItem = (props: Props) => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-0 bg-gray-800 p-5 rounded">
        <div
          className={`col-span-2 row-span-3 flex flex-col justify-center p-5 gap-3`}
        >
          <h1 className={`text-lg text-white ${orbitron.className}`}>
            {props.title}
          </h1>
          <p className={"dark:text-gray-500 text-sm"}>{props.job}</p>
          <p className={"text-md text-white"}>{props.desc}</p>
          <Link
            href={props.url}
            target={"_blank"}
            className="mx-auto hover:bg-neutral-900 focus:ring-primary-300 dark:bg-white dark:hover:bg-neutral-900 dark:focus:ring-primary-800 rounded bg-blue-700 px-5 py-3 text-center text-sm font-medium text-black hover:text-white focus:outline-none focus:ring-4 sm:w-fit transition-colors duration-300"
          >
            Visit
          </Link>
        </div>
        <div
          className={`row-span-3 col-start-3 justify-center items-center bg-neutral-200 hidden md:flex rounded`}
        >
          <img
            className={"max-h-[200px] rounded"}
            width={"100%"}
            height={"100%"}
            src={props.logoUrl}
            alt={`${props.title} logo`}
            loading={"lazy"}
          />
        </div>
      </div>
    </>
  );
};
