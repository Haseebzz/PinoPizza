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
    You'll find more than just pizza at the top restaurants in Brooklyn. Try some of the local top dishes for a treat. Don't miss the chance to try the popular Cheese Pizza. It's a classic for a reason.
  </p>
  <p className="mb-4">
    Don't forget to add french fries to your order. See why this delicious item is a local favorite.
  </p>
  <p className="mb-4">
    Pino Pizza has been a Slice partner for years, providing delivery and takeout in the community. Curbside pickup at Pino Pizza makes things easy. Place an order, and it'll be ready for you to pick up at your convenience. Save yourself some money with one of the regular deals at Pino Pizza. It's a great way to make your dollars stretch further.
  </p>
  <p>
    Pino Pizza accepts credit cards. That makes it easy to get your pizza sooner.
  </p>
</div>

      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
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
