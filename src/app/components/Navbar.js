import Logo from "./navbar/Logo";
import DesktopLinks from "./navbar/DesktopLinks";
import CTA from "./navbar/CTA";
import MobileMenu from "./navbar/MobileMenu";

const links = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "Health Packages", path: "/packages" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Blogs", path: "/blogs" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <nav className="h-20 flex items-center justify-between">
          <Logo />

          <DesktopLinks links={links} />

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <CTA />
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobileMenu links={links} />
          </div>
        </nav>
      </div>
    </header>
  );
}