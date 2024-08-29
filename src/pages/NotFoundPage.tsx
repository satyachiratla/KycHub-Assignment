import { Link } from "react-router-dom";
import NotFoundImage from "../assets/images/page-not-found.png";

export default function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center h-screen space-y-4">
      <img
        src={NotFoundImage}
        alt="not-found"
        className="w-[500px] h-64 mx-auto"
      />
      <h1 className="font-bold text-3xl text-center">PAGE NOT FOUND</h1>
      <Link
        to="/"
        className="text-cyan-400 text-xl hover:underline underline-offset-2"
      >
        Go to Home
      </Link>
    </section>
  );
}
