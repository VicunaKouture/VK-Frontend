import Link from 'next/link';
import Image from 'next/image';
import 'animate.css';

export default function Hero() {
  return (
    <section className="hero bg-green-200">
      <div className="py-16 md:py-24 mx-auto max-w-2xl text-center animate__animated animate__fadeIn animate__delay-2s">
      <h1 className="text-2xl md:text-4xl lg:text-7xl font-semibold text-center mb-8">
  Discover and
  <br class="mb-4" />
  Design Your
  <br class="mb-4" />
  <span className="text-green-600">Own Fashion!</span>
</h1>

<p className="mb-8 text-gray-700 text-lg md:text-xl lg:text-2xl animate__animated animate__fadeInUp animate__delay-3s">
  Explore our curated collection of stylish clothing and accessories tailored to your unique taste.
</p>
        <div className="flex flex-col items-center gap-4 animate__animated animate__fadeInUp animate__delay-4s">
          <button className="bg-green-600 text-white uppercase px-6 py-3 rounded-full">
            Order now
          </button>
        </div>
      </div>

      <div className="py-6 md:py-10 mt-4 md:mt-8 lg:mt-16 relative md:hidden animate__animated animate__fadeIn animate__delay-3s">
        <Image src="/vk-landimg.png" layout="responsive" width={500} height={300} objectFit="contain" alt="fashion" />
      </div>

      <div className="py-10 mt-16 relative hidden md:block animate__animated animate__fadeInRight animate__delay-3s">
        <Image src="/vk-landimg.png" layout="fill" objectFit="contain" alt="pizza" />
      </div>
    </section>
  );
}