import requests from "../utilits/requests";
import { useRouter } from "next/router";
function Nav() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex px-10 py-5 text-lg  space-x-10 sm:text-2xl whitespace-nowrap  sm:space-x-20 overflow-x-scroll last:pr-24 scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => {
          return (
            <h2
              key={key}
              onClick={() => router.push(`/?genre=${key}`)}
              className="cursor-pointer transition duration-200 transform hover:scale-125 hover:text-white active:text-red-500"
            >
              {title}
            </h2>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-20 w-24" />
    </nav>
  );
}

export default Nav;
