import { FC } from "react";
import { useRouter } from "next/router";
import { IoChevronBack } from "react-icons/io5";

interface Props {
  url?: string;
}
const Back: FC<Props> = ({ url }) => {
  const router = useRouter();
  return (
    <div
      className="w-7 aspect-square flex items-center justify-center bg-neutral-800 bg-opacity-70 hover:scale-90 transition-all cursor-pointer my-3"
      onClick={() => (url ? router.push(url) : router.back())}
    >
      <IoChevronBack size={18} className="cursor-pointer" />
    </div>
  );
};

export default Back;
