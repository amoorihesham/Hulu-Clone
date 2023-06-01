import Image from "next/image";
import Headeritem from "./Headeritem";
import {
  HomeIcon,
  CheckBadgeIcon,
  MagnifyingGlassIcon,
  BoltIcon,
  UserIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/outline";
const Header = () => {
  return (
    <header className="flex flex-col items-center sm:flex-row justify-between pt-5 pb-5 h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl items-center">
        <Headeritem title="HOME" Icon={HomeIcon} />
        <Headeritem title="TRENDING" Icon={BoltIcon} />
        <Headeritem title="Verified" Icon={CheckBadgeIcon} />
        <Headeritem title="PROFILE" Icon={UserIcon} />
        <Headeritem title="COLLECTIONS" Icon={ArchiveBoxIcon} />
        <Headeritem title="SEARCH" Icon={MagnifyingGlassIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="Photo"
      />
    </header>
  );
};
export default Header;
