import Link from 'next/link';
import Image from 'next/image';
import 'animate.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-6 md:py-12 mt-6 md:mt-10 animate__animated animate__fadeIn animate__delay-2s">
        <h1 className="text-2xl md:text-4xl lg:text-7xl font-semibold text-center">
          Discover and
          <br />
          Design Your <br />
          <span className="text-primary">Own Fashion!</span>
        </h1>

        <p className="my-4 md:my-6 lg:my-10 text-gray-1500 text-lg md:text-xl lg:text-2xl text-center animate__animated animate__fadeInUp animate__delay-3s">
          Explore our curated collection of stylish clothing and accessories tailored to your unique taste.
        </p>
        <div className="flex flex-col items-center gap-4">
          <button className="bg-primary uppercase text-white px-4 py-2 rounded-full animate__animated animate__fadeInUp animate__delay-4s">
            Order now
          </button>
        </div>
      </div>
      <div className="py-6 md:py-10 mt-4 md:mt-8 lg:mt-16 relative md:hidden animate__animated animate__fadeIn animate__delay-3s">
        <Image src={'/vk-landimg.png'} layout={'responsive'} width={500} height={300} objectFit={'contain'} alt={'fashion'} />
      </div>
      <div className="py-10 mt-16 relative hidden md:block animate__animated animate__fadeInRight animate__delay-3s">
  <Image src={'/vk-landimg.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
</div>
    </section>
  );
}
