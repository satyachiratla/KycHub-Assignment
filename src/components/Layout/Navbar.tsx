import { images } from "../../constants";

export default function Navbar() {
  return (
    <nav className="bg-slate-200 h-20 fixed top-0 left-0 right-0 flex justify-between items-center px-20 z-50">
      <img src={images.logo} alt="logo" className="w-14 h-14" />
      <img
        src={images.profileLogo}
        alt="profile-logo"
        className="h-14 w-14 rounded-full"
      />
    </nav>
  );
}
