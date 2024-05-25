"use client"
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
const Headernav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const data = usePathname()
  const router = useRouter()
  useEffect(() => {
    setMenuOpen(false);
  }, [data]);
  const Onsearch = (e) => {
    setTimeout(() => {
      router.push(`${data}?search=${e.target.value}`)
    }, 4000);
  }

  return (
    <nav className={`${menuOpen ? "z-50 fixed h-screen" : ""} bg-black w-full shadow-lg `}>
      <div className="w-full  md:px-35 px-5 py-5">
      <nav className="w-full py-4 bg-black shadow">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
          <nav>
            <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
              <li><Link href="/" className="hover:text-gray-200 hover:underline px-4">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-200 hover:underline px-4">About</Link></li>
            </ul>
          </nav>

          <div className="flex items-center text-[16px] no-underline text-white pr-6">
            <a className="" href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a className="pl-6" href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="pl-6" href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="pl-6" href="#">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </nav>

      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
          <Link href="/" className="font-bold text-gray-100 uppercase hover:text-gray-700 text-6xl">
            Guest Glow
          </Link>
          <p className="text-lg text-gray-100">
            The World Knowledge
          </p>
        </div>
      </header>
        <div className="flex lg:justify-center">
          <div className="flex items-center space-x-1">
           <nav className="header__inline-menu flex items-center ">
              <ul className="list-menu list-menu--inline" role="list"><li><Link href="/category/News/1" className="header__menu-item header__menu-item list-menu__item link link--text focus-inset" aria-current="page">
                <span className={`${data === "/category/News/1" ? "header__active-menu-item" : ""}`}>NEWS</span>
              </Link></li>
              <li><Link href="/category/Education/1" className="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
                <span className={`${data === "/category/Education/1" ? "header__active-menu-item" : ""}`}>EDUCATION</span>
              </Link></li>
              <li><Link href="/category/Sports/1" className="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
                <span className={`${data === "/category/Sports/1" ? "header__active-menu-item" : ""}`}>SPORTS</span>
              </Link></li><li><Link href="/category/Health/1" className="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
                <span className={`${data === "/category/Health/1" ? "header__active-menu-item" : ""}`}>HEALTH</span>
              </Link></li><li><Link href="/category/Business/1" className="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
                <span className={`${data === "/category/Business/1" ? "header__active-menu-item" : ""}`}>BUSINESS</span>
              </Link></li>
                <li><Link href="/category/Entertainment/1" className="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
                  <span className={`${data === "/category/Entertainment/1" ? "header__active-menu-item" : ""}`}>ENTERTAINMENT</span>
                </Link></li>
                <li><Link href="/category/Crypto" className="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
                  <span className={`${data === "/category/Crypto/1" ? "header__active-menu-item" : ""}`}>CRYPTO</span>
                </Link></li>
                <li><Link href="/category/Casino/1" className="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
                <span className={`${data === "/category/Casino/1" ? "header__active-menu-item" : ""}`}>CASINO</span>
              </Link></li>
              <li><Link href="/category/Abode/1" className="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
                <span className={`${data === "/category/Abode/1" ? "header__active-menu-item" : ""}`}>ADOBE</span>
              </Link></li>
              <li><Link href="/category/Cbc/1" className="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
                <span className={`${data === "/category/Cbc/1" ? "header__active-menu-item" : ""}`}>CBC</span>
              </Link></li>

              <li><Link href="/category/E-Commerce/1" className="header__menu-item header__menu-item list-menu__item link link--text focus-inset">
                <span className={`${data === "/category/E-Commerce/1" ? "header__active-menu-item" : ""}`}>E COMMERCE</span>
              </Link></li>
              </ul>
            </nav>
          </div>


          <div className="lg:hidden flex float-right">
            <button className="outline-none menu-button mx-2" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <i className="fa-solid fa-xmark text-5xl text-white"></i> : <i className="fa-solid fa-bars text-5xl text-white"></i>}
            </button>
          </div>
        </div>
      </div>
      {/* className="menu-drawer__menu-item list-menu__item link link--text focus-inset" */}
      {menuOpen && (
        <div id="menu-drawer" className="motion-reduce" tabIndex="-1">
          <div className="menu-drawer__inner-container">
            <div className="menu-drawer__navigation-container">
              <nav className="menu-drawer__navigation">
                <ul className="menu-drawer__menu list-menu" role="list"><li><Link href="/category/News/1" className="menu-drawer__menu-item list-menu__item link link--text focus-inset" aria-current="page">
                <span className={`${data === "/category/News/1" ? "header__active-menu-item" : ""}`}>NEWS</span>
              </Link></li>
              <li><Link href="/category/Education/1" className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                <span className={`${data === "/category/Education/1" ? "header__active-menu-item" : ""}`}>EDUCATION</span>
              </Link></li>
              <li><Link href="/category/Sports/1" className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                <span className={`${data === "/category/Sports/1" ? "header__active-menu-item" : ""}`}>SPORTS</span>
              </Link></li><li><Link href="/category/Health/1" className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                <span className={`${data === "/category/Health/1" ? "header__active-menu-item" : ""}`}>HEALTH</span>
              </Link></li><li><Link href="/category/Business/1" className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                <span className={`${data === "/category/Business/1" ? "header__active-menu-item" : ""}`}>BUSINESS</span>
              </Link></li>
                <li><Link href="/category/Entertainment/1" className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                  <span className={`${data === "/category/Entertainment/1" ? "header__active-menu-item" : ""}`}>ENTERTAINMENT</span>
                </Link></li>
                <li><Link href="/category/Crypto" className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                  <span className={`${data === "/category/Crypto/1" ? "header__active-menu-item" : ""}`}>CRYPTO</span>
                </Link></li>
                <li><Link href="/category/Casino/1" className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                <span className={`${data === "/category/Casino/1" ? "header__active-menu-item" : ""}`}>CASINO</span>
              </Link></li>
              <li><Link href="/category/Abode/1" className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                <span className={`${data === "/category/Abode/1" ? "header__active-menu-item" : ""}`}>ADOBE</span>
              </Link></li>
              <li><Link href="/category/Cbc/1" className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                <span className={`${data === "/category/Cbc/1" ? "header__active-menu-item" : ""}`}>CBC</span>
              </Link></li>

              <li><Link href="/category/E-Commerce/1" className="menu-drawer__menu-item list-menu__item link link--text focus-inset">
                <span className={`${data === "/category/E-Commerce/1" ? "header__active-menu-item" : ""}`}>E COMMERCE</span>
              </Link></li></ul>

              </nav>

            </div>
          </div>
        </div>
      )}

      <section className="bg-indigo-dark px-5 md:px-35 h-50">
        <div className="container mx-auto py-8">
          <input onChange={Onsearch} className="w-full h-20 border-2 hover:border-blue-600  rounded mb-8 text-black focus:outline-none focus:shadow-outline text-[25PX] px-12 shadow-lg" type="search" placeholder="Search..." />

        </div>
      </section>
    </nav>
  );
};

export default Headernav;
