import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between">
      <Link className="text-green-600 font-bold text-2xl mb-4 sm:mb-0" href="">
        VICUNA KOUTURE
      </Link>
      <nav className="flex flex-col sm:flex-row items-center gap-8 text-black-500 font-semibold">
        <Link href="" className="hover:underline hover:text-yellow-500 transition duration-300 ease-in-out mb-2 sm:mb-0">
          Home
        </Link>

        <Link href="" className="hover:underline hover:text-yellow-500 transition duration-300 ease-in-out mb-2 sm:mb-0">
          Shop
        </Link>
        <Link href="" className="hover:underline hover:text-yellow-500 transition duration-300 ease-in-out mb-2 sm:mb-0">
          Features
        </Link>
        <Link href="" className="hover:underline hover:text-yellow-500 transition duration-300 ease-in-out mb-2 sm:mb-0">
          Contact
        </Link>
        <Link
          className="transition-all duration-300 transform hover:scale-110 bg-primary rounded-full text-white px-6 py-2 hover:underline mb-2 sm:mb-0"
          href="/design-shop"
        >
          Design/Shop
        </Link>
        <Link
          className="transition-all duration-300 transform hover:scale-110 bg-primary rounded-full text-white px-6 py-2 hover:underline mb-2 sm:mb-0"
          href="/login"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
