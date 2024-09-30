"use client";
import { useEffect, useState, useRef } from "react";
import MyImageSlider from "../components/myComponents/MyImageSlider";
import MyServices from "../components/pageComponents/MyServices";
import MyTeam from "../components/pageComponents/MyTeam";
import MyTestimonials from "../components/pageComponents/MyTestimonials";
import MyGallery from "../components/pageComponents/MyGallery";
import MyContact from "../components/pageComponents/MyContact";
import FloatingButtons from "../components/pageComponents/FloatingButtons";
import ScrollToTopButton from "../components/pageComponents/ScrollToTopButton";
import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import CallMeBackForm from "../components/pageComponents/CallMeBackForm";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Hamburger menü durumu
  const menuRef = useRef<HTMLDivElement | null>(null); // Ref tipi tanımlandı

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // 768px altındaki genişlikler mobil cihaz olarak kabul edilir
      setIsMobile(window.innerWidth < 768);
    };

    // Sayfa ilk yüklendiğinde ekran genişliğini kontrol et
    handleResize();

    // Ekran boyutu değiştiğinde handleResize'i tetikleyelim
    window.addEventListener("resize", handleResize);

    // Cleanup: event listener'ı kaldırıyoruz
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const handleScrollBefore = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScrollBefore);

    return () => {
      window.removeEventListener("scroll", handleScrollBefore);
    };
  }, []);

  // Menü dışına tıklanınca menüyü kapatmak için
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Menü referansı mevcutsa ve tıklanan hedef menü değilse
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    } else {
      window.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Hamburger menüyü açıp kapatır
  };

  const MyHeader = () => {
    return (
      <header
        className={`fixed w-full z-50 opacity-90 transition-colors duration-300 ${
          isMobile
            ? "bg-white text-gray-600"
            : scrollY > 50
            ? "bg-primary text-primary-foreground"
            : "bg-white text-gray-600"
        } shadow-sm`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="lg:hidden text-2xl font-bold transition-colors">
            <Image
              width={48}
              height={48}
              src={"/images/logo.png"}
              alt="Site Logo"
              className="transition-colors z-50"
            />
          </div>

          <div className="lg:block text-2xl font-bold transition-colors">
            <Image
              width={48}
              height={48}
              src={
                isMobile
                  ? "/images/logo.png"
                  : scrollY > 50
                  ? "/images/logo-inverse.png"
                  : "/images/logo.png"
              }
              alt="Site Logo"
              className="transition-colors z-50"
            />
          </div>

          {/* Hamburger Menü butonu (Mobil ekranlar için) */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <CloseIcon
                  className={
                    isMobile
                      ? ""
                      : scrollY > 50
                      ? "bg-primary text-primary-foreground"
                      : "text-primary-foreground text-primary"
                  }
                />
              ) : (
                <MenuIcon
                  className={
                    isMobile
                      ? ""
                      : scrollY > 50
                      ? "bg-primary text-primary-foreground"
                      : "bg-white bg-primary"
                  }
                />
              )}
            </button>
          </div>

          {/* Büyük ekranlar için menü */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-12">
              <li>
                <button onClick={() => handleScroll("anasayfa")}>
                  <span
                    className={`font-bold relative pb-1 group ${
                      scrollY > 50
                        ? "text-primary-foreground hover:text-cyan-300"
                        : "text-gray-600 hover:text-red-600"
                    }`}
                  >
                    Anasayfa
                    <span
                      className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-500 group-hover:w-full"
                      aria-hidden="true"
                    ></span>
                  </span>
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll("hizmetlerimiz")}>
                  <span
                    className={`font-bold relative pb-1 group ${
                      scrollY > 50
                        ? "text-primary-foreground hover:text-cyan-300"
                        : "text-gray-600 hover:text-red-600"
                    }`}
                  >
                    Hizmetlerimiz
                    <span
                      className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-500 group-hover:w-full"
                      aria-hidden="true"
                    ></span>
                  </span>
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll("yorumlar")}>
                  <span
                    className={`font-bold relative pb-1 group ${
                      scrollY > 50
                        ? "text-primary-foreground hover:text-cyan-300"
                        : "text-gray-600 hover:text-red-600"
                    }`}
                  >
                    Yorumlar
                    <span
                      className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-500 group-hover:w-full"
                      aria-hidden="true"
                    ></span>
                  </span>
                </button>
              </li>
              <li>
                <Link
                  href="https://kolayehliyet.com/bafra-ozkan-surucu-kursu/test-coz"
                  target="_blank"
                >
                  <span
                    className={`font-bold relative pb-1 group ${
                      scrollY > 50
                        ? "text-primary-foreground hover:text-cyan-300"
                        : "text-gray-600 hover:text-red-600"
                    }`}
                  >
                    E-Sınav Deneme
                    <span
                      className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-500 group-hover:w-full"
                      aria-hidden="true"
                    ></span>
                  </span>
                </Link>
              </li>
              <li>
                <button onClick={() => handleScroll("iletisim")}>
                  <span
                    className={`font-bold relative pb-1 group ${
                      scrollY > 50
                        ? "text-primary-foreground hover:text-cyan-300"
                        : "text-gray-600 hover:text-red-600"
                    }`}
                  >
                    İletişim
                    <span
                      className="absolute left-0 bottom-0 w-0 h-[2px] bg-current transition-all duration-500 group-hover:w-full"
                      aria-hidden="true"
                    ></span>
                  </span>
                </button>
              </li>
            </ul>
          </nav>

          {/* Sosyal medya ikonları */}
          <div
            className={`hidden lg:block transition-colors ${
              scrollY > 50
                ? "text-primary-foreground hover:text-cyan-300"
                : "text-gray-600 hover:text-red-600"
            }`}
          >
            <a
              href="https://www.instagram.com/ozkansurucukursu"
              target="_blank"
            >
              <InstagramIcon
                style={{ height: "32px", width: "32px", marginRight: "5px" }}
                className={`transition-colors ${
                  scrollY > 50
                    ? "text-primary-foreground hover:text-cyan-300"
                    : "text-red-600 hover:text-cyan-300"
                }`}
              />
            </a>
            <a href="https://www.facebook.com/ozkansurucukursu" target="_blank">
              <FacebookRoundedIcon
                style={{ height: "32px", width: "32px" }}
                className={`transition-colors ${
                  scrollY > 50
                    ? "text-primary-foreground hover:text-cyan-300"
                    : "text-red-600 hover:text-cyan-300"
                }`}
              />
            </a>
          </div>
        </div>

        {/* Hamburger Menü (Mobil cihazlarda görünür) */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full"
          >
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <button onClick={() => handleScroll("anasayfa")}>
                  <span className="font-bold text-gray-600">Anasayfa</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll("hizmetlerimiz")}>
                  <span className="font-bold text-gray-600">Hizmetlerimiz</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll("yorumlar")}>
                  <span className="font-bold text-gray-600">Yorumlar</span>
                </button>
              </li>
              <li>
                <Link
                  href="https://kolayehliyet.com/bafra-ozkan-surucu-kursu/test-coz"
                  target="_blank"
                >
                  <span className="font-bold text-gray-600">
                    E-Sınav Deneme
                  </span>
                </Link>
              </li>
              <li>
                <button onClick={() => handleScroll("iletisim")}>
                  <span className="font-bold text-gray-600">İletişim</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
    );
  };

  const MyFooter = () => {
    return (
      <footer className="bg-gray-900 text-primary-foreground py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h5 className="text-xl font-bold mb-4">Adres</h5>
            <p>
              Çilhane Mahallesi, Alaçam Caddesi, No: 148, Bafra, Samsun 55400
            </p>

            <p>
              <a
                href="tel:05073121120"
                aria-label="Call"
                className="hover:text-secondary"
              >
                0507 312 11 20
              </a>
            </p>
            <p>
              <a
                href="tel:03625438318"
                aria-label="Call"
                className="hover:text-secondary"
              >
                0362 543 83 18
              </a>
            </p>
            <p>
              <a
                href="mailto:ozkanmtsk55@hotmail.com"
                className="hover:text-secondary"
              >
                ozkanmtsk55@hotmail.com
              </a>
            </p>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-4">Hizmetlerimiz</h5>
            <p>A Sınıfı Ehliyet Kursu</p>
            <p>B Sınıfı Ehliyet Kursu</p>
            <p>D Sınıfı Ehliyet Kursu</p>
            <p>Özel Direksiyon Dersi</p>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-4">Hızlı Erişim</h5>
            <p>
              <button
                onClick={() => handleScroll("anasayfa")}
                className="hover:text-secondary"
              >
                Anasayfa
              </button>
            </p>
            <p>
              <button
                onClick={() => handleScroll("hizmetlerimiz")}
                className="hover:text-secondary"
              >
                Hizmetlerimiz
              </button>
            </p>
            <p>
              <button
                onClick={() => handleScroll("yorumlar")}
                className="hover:text-secondary"
              >
                Yorumlar
              </button>
            </p>
            <p>
              <button
                onClick={() => handleScroll("iletisim")}
                className="hover:text-secondary"
              >
                İletişim
              </button>
            </p>
          </div>
          <CallMeBackForm handleClosePopup={null} about={null} />
        </div>

        {/* Ayıraç Çizgisi ve Alt Metinler */}
        <div className="mt-8 pt-4">
          <div className="w-4/5 mx-auto border-t border-gray-700"></div>{" "}
          <div className="flex flex-col md:flex-row justify-between items-center mt-4 mx-32">
            <p className="text-sm">
              © Özkan Sürücü Kursu, All Rights Reserved.
            </p>
            <p className="text-sm">Designed by Karabulut Software</p>
          </div>
        </div>
      </footer>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <section>
        <MyHeader />
      </section>
      <section id="anasayfa" className="relative h-[500px]">
        <MyImageSlider />
      </section>
      <section id="hizmetlerimiz" className="animate-on-scroll py-16">
        <MyServices />
      </section>
      <section id="yorumlar" className="animate-on-scroll py-16 bg-gray-100">
        <MyTestimonials />
      </section>
      <section id="iletisim" className="animate-on-scroll py-16">
        <MyContact />
      </section>
      <section>
        <MyFooter />
      </section>

      <FloatingButtons />
      <ScrollToTopButton showBelow={250} />
    </div>
  );
}
