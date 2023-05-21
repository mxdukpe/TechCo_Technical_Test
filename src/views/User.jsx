import Navbar from "../components/Navbar";
import { Link} from "react-router-dom";

function User() {
  return (
    <div className="User h-screen bg-gray-200">
      {/* <Layout> */}
      <Navbar/>

      <h1 className="flex justify-center text-center text-xl font-bold"> 𝓑𝓲𝓮𝓷𝓿𝓮𝓷𝓾𝓮 </h1>
      <h1 className="flex justify-center text-center text-xl"> 𝓥𝓸𝓾𝓵𝓮𝔃-𝓿𝓸𝓾𝓼 𝓻𝓮𝓳𝓸𝓲𝓷𝓭𝓻𝓮 </h1>
      <h1 className="flex justify-center text-center text-xl"> 
        <Link to="/yin" className="hover:text-3xl hover:font-bold pr-4">𝓵𝓮 𝒀𝑰𝑵 </Link> 𝓸𝓾 
        <Link to="/yang" className="hover:text-3xl hover:font-bold pl-4"> 𝓵𝓮 𝒀𝑨𝑵𝑮</Link> </h1>

      {/* </Layout> */}
    </div>
  );
}

export default User;
