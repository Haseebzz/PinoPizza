import Right from "@/components/icons/Right";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold tracking-tighter">
        <p>In the mood for something delicious?<br />
        Enjoy the best </p>
          <span className="text-primary">
            Pizza
          </span>
       <p>Brooklyn has to offer.<br />
        &nbsp;</p>
        </h1>
      
        <p className="my-6 text-gray-500 text-2xl font-bold ">
        Pino Pizza remains one of the most popular in Brooklyn. Give them a try and see what makes them such a favorite.
        </p>
       
      </div>
      <div className="relative hidden md:block">
        <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
      </div>
    </section>
  );
}