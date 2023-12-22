import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex justify-center px-4 w-full mx-auto transition-all duration-200 ease-out py-4">
      <div className="flex gap-1.5 w-[300px] mx-auto">
        <p className="text-zinc-600">Crafted with care by</p>
        <a
          href="https://prajnaprabhu.com"
          target="_blank"
          className="flex items-center gap-[2px] text-gray-200 group transition-all duration-200 ease-out"
        >
          Prajna
          <ArrowUpRight
            size={16}
            className="hidden group-hover:block transition-all duration-200 ease-out"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
