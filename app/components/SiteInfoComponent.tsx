import Link from "next/link";

export const SiteInfoComponent = () => {
  return (
    <section className={"bg-white dark:bg-gray-900 py-10"} id={"info"}>
      <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16 text-center">
        <h1
          className={
            "mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white ${orbitron.className} "
          }
        >
          Under The Hood
        </h1>
        <p
          className={
            "mb-8 text-center text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16"
          }
        >
          Curious How It&apos;s All Put Together? Take a look &quot;under the
          hood&quot; to get a closer view of the gears turning behind the
          scenes. Beyond the eye-catching parallax header, there&apos;s a bunch
          of carefully crafted code that brings this digital cosmos to life.
          Through some clever coding and thoughtful design, I&apos;ve tried to
          capture the cosmic vibe and present it in a way that&apos;s enjoyable
          for everyone.
        </p>

        <Link
          href={"https://github.com/CedricAOUN/NextJS-portfolio"}
          target={"_blank"}
          className="hover:bg-neutral-900 focus:ring-primary-300 dark:bg-white dark:hover:bg-neutral-900 dark:focus:ring-primary-800 rounded bg-blue-700 px-5 py-3 text-center text-sm font-medium text-black hover:text-white focus:outline-none focus:ring-4 sm:w-fit transition-colors duration-300"
        >
          View the code
        </Link>
      </div>
    </section>
  );
};
