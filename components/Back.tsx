import { FC } from "react";
import { useRouter } from "next/router";
import { IoChevronBack } from "react-icons/io5";

interface Props {
  children?: any;
}
const Back: FC<Props> = () => {
  const router = useRouter();
  return (
    <div
      className="w-7 aspect-square flex items-center justify-center bg-neutral-700 bg-opacity-70 hover:scale-90 transition-all rounded-full cursor-pointer mb-3"
      onClick={() => router.back()}
    >
      <IoChevronBack size={18} className="cursor-pointer" />
    </div>
  );
};

export default Back;
