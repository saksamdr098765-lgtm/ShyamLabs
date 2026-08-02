
import { SITE_CONFIG } from "../siteConfig";
import MainFooter from "./footer/MainFooter";
import FooterAction from "./footer/FooterAction";
import Location from "./footer/Location";
const packages = [
  {
    name: "Lipid Profile Test",
    path: "/package-detail-page/lipid-profile-test",
  },
  {
    name: "Arthritis Checkup",
    path: "/package-detail-page/arthritis-checkup",
  },
  {
    name: "Fever Panel Basic",
    path: "/package-detail-page/fever-panel-basic",
  },
  {
    name: "Aarogyam A Pro",
    path: "/package-detail-page/aarogyam-a-pro",
  },
  {
    name: "Fasting Blood Sugar",
    path: "/package-detail-page/fasting-blood-sugar",
  },
];
 const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Health Packages",
    path: "/packages",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
const year = new Date().getFullYear();
const {address,map,fullName}=SITE_CONFIG
export default function Footer() {

  return (
    <footer className="relative bg-white overflow-hidden border-t border-slate-100">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#0A4F8A 1px, transparent 1px),
            linear-gradient(90deg, #0A4F8A 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] bg-gradient-to-r from-green-100/50 to-blue-100/50 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Main Footer */}
      <MainFooter links={links} packages={packages}></MainFooter>

        {/* Bottom */}
   <div className="border-t border-slate-200 py-6 flex flex-col md:flex-row items-center justify-between gap-5">
  <p className="text-sm text-slate-500 text-center md:text-left">
    © {year} Shyam Labs. All rights reserved.
  </p>

  <div className="flex items-center gap-4 flex-wrap justify-center">
    <p className="hidden lg:block text-sm text-slate-500">
      Trusted Diagnostics For Every Family
    </p>

 <FooterAction></FooterAction>
  </div>
</div>
        {/* Location Section */}
<Location></Location>

      </div>
      
    </footer>
  );
}