import Details from "./components/FirstPage/Details";
import Footer from "./components/FirstPage/Footer";
import Nav from "./components/FirstPage/Nav";
import Projects from "./components/FirstPage/Projects";

export default function Home() {
  return (
    <div className=" px-5 md:px-16 lg:px-24 xl:px-56 bg-[#171717] py-12 flex flex-col gap-10">
      <Nav />
      <Details />
      <Projects />
      <Footer />
    </div>
  );
}
