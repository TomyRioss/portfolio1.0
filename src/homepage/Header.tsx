import Image from 'next/image';
import Socials from './Socials';
import Experience from './experience';
import { Separator } from '@/components/ui/separator';
import Buttons from './Buttons';

function Header() {
  return (
    <>
      <header className="w-screen h-screen flex justify-evenly items-center mt-10">
        <div className="w-[400px] h-[400px] relative overflow-hidden rounded-full border-4 border-black shadow-xl">
          <Image
            src="/yo.webp"
            alt="Tomas Rios"
            width={400}
            height={400}
            className="rounded-full border-4 border-black shadow-xl object-cover object-top"
          />
        </div>

        <div className=" flex text-right flex-col max-w-5xl ">
          <h1 className="text-9xl font-extrabold text-black dark:text-gray-300">
            Tomas Rios
          </h1>
          <h2 className="text-5xl font-semibold text-gray-600 dark:text-gray-400 mt-6">
            Fullstack Developer
          </h2>
          <div className="flex">
            <Socials />
          </div>
          <Separator />
          <Experience />
          <Buttons />
        </div>
      </header>
    </>
  );
}

export default Header;
