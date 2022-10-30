import { ButtonVariant } from "../components/UI/ButtonVarians";

const Page = async () => {
  return (
    <div className="w-full md:h-[500px] flex items-center justify-center flex-col max-w-screen-lg text-center">
      <div className="md:max-w-4xl tracking-wide capitalize">
        <h1 className="sm:text-6xl text-4xl md:text-7xl font-extrabold">
          first-class Business Countsultan
        </h1>
      </div>
      <div className="max-w-3xl mt-8">
        <p className="text-zinc-500">
          we know how large Lorem ipsum dolor sit amet, qui minim labore
          adipisicing minim sint cillum sint consectetur cupidatat.
        </p>
      </div>
      <div className="mt-7 flex gap-x-4">
        <ButtonVariant>Get Quote Now</ButtonVariant>
        <ButtonVariant href="/about" variants="outline">
          Learn More
        </ButtonVariant>
      </div>
    </div>
  );
};

export default Page;
