import Link from "next/link";

interface Props {
  name: string;
  imgUrl: string;
  description: string;
  homepage: string;
  repoURL: string;
}

export const ProjectItem = (props: Props) => {
  function nameFormater(name: string) {
    let spaced = name.replaceAll("-", " ");

    return spaced.slice(0, 1).toUpperCase() + spaced.slice(1, spaced.length);
  }

  return (
    <div className="max-w-[20rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg bg"
        src={props.homepage ? props.imgUrl : "/no-image.png"}
        alt=""
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
          {nameFormater(props.name)}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <div className={"block"}>
          {props.homepage ? (
            <Link
              href={props.homepage ? props.homepage : ""}
              target={"_blank"}
              className={`
              inline-flex items-center mx-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
            `}
            >
              Visit
            </Link>
          ) : null}
          <Link
            href={props.repoURL}
            target={"_blank"}
            className="inline-flex items-center mx-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Code
          </Link>
        </div>
      </div>
    </div>
  );
};
