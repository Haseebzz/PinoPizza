import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
     <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 font-bold text-2xl">
          <p className="mb-4">
            You'll find more than just pizza at the top restaurants in Brooklyn. Try some of the local top dishes for a treat. Don&apos;t miss the chance to try the popular Cheese Pizza. It&apos;s a classic for a reason.
          </p>
          {/* ... */}
          <p>
            Pino Pizza accepts credit cards. That makes it easy to get your pizza sooner.
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don&apos;t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
            (718) 996-9750
          </a>
        </div>
      </section>
    </>
  )
}
