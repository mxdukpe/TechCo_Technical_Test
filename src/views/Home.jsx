import Navbar from "../components/Navbar";
import logo from "../image/yinEtYang.png";
import meditation from "../image/meditation.jpeg";
import { Link} from "react-router-dom";
import "./Home.css";



function Home() {
  return (
    <div className="Home h-screen">
      <Navbar/>
      <img
        className="h-5/6 w-full mb-10"
        src={meditation}
        alt="Meditation"
      />
      <div className="">
        <div className="flex flex-wrap mb-32">
          <img
              className="w-96 absolute left-0"
              src={logo}
              alt="Logo"
          />
          <h1 className="text-base mt-20 absolute right-60">𝓛𝓮 𝓳𝓪𝓻𝓭𝓲𝓷 𝓭𝓮𝓼 𝓶𝓸𝓽𝓼</h1>
        </div>

        <div className="flex flex-wrap mt-56">
          <img
          className="w-96 absolute right-0"
          src={logo}
          alt="Logo"
          />
          <h1 className="text-base absolute left-20 mt-40">𝓛𝓮 𝓳𝓪𝓻𝓭𝓲𝓷 𝓭𝓮𝓼 𝓶𝓸𝓽𝓼</h1>
        </div>

        <div className="flex flex-wrap mt-72">
          <img
          className="w-96 absolute left-0"
          src={logo}
          alt="Logo"
          />
          <h1 className="text-base mt-48 absolute right-60">𝓛𝓮 𝓳𝓪𝓻𝓭𝓲𝓷 𝓭𝓮𝓼 𝓶𝓸𝓽𝓼</h1>
        </div>

      </div>
    </div>
  );
}

export default Home;
