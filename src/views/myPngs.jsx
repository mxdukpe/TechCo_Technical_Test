import Layout from "../components/Layout";
import cephalopods from "../image/welcome.png";
import bts from "../image/BTS.png";
import candace from "../image/candace.png";
import purple from "../image/purple.png";
import jojo from "../image/jojo.png";
import egypte from "../image/egypte.png";
import scream from "../image/scream.png";
import Pinterest from "../image/Pinterest.png";
import dea from "../image/DEA.png";
import chihiro from "../image/chihiro.png";
import devil from "../image/devil.png";
import heart from "../image/heart.png";
import HelloTheRock from "../image/HelloTheRock.png";
import Jolyne from "../image/Jolyne.png";
import jotaro from "../image/jotato.png";
import kakyoin from "../image/kakyoin.png";
import Sadjojo from "../image/SadJojo.png";

function MyPngs() {
    return (
        <div className="MyPngs">
            <Layout>
                <h1 className="text-6xl text-center text-6xl hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300">Images</h1>
                <br /><hr /><br />

                <div className="flex flex-wrap">
                <img className="h-56 pl-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300" src={cephalopods} alt="cephalopods" />
                    <img className="h-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300" src={candace} alt="candace" />
                    <img className="h-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300" src={jojo} alt="jojo" />
                    <img className="h-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300" src={bts} alt="bts" />
                    <img className="h-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300" src={purple} alt="purple" />
                    <img className="h-56 pl-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300" src={egypte} alt="egypte" />
                    <img className="h-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300" src={dea} alt="dea" />
                    <img className="h-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300" src={Pinterest} alt="Pinterest" />
                    <img className="h-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300" src={scream} alt="scream" />
                    <img className="h-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300" src={devil} alt="devil" />
                    <img className="h-56 pl-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300" src={chihiro} alt="chihiro" />
                    <img className="h-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300" src={heart} alt="heart" />
                    <img className="h-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300" src={Jolyne} alt="Jolyne" />
                    <img className="h-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300" src={jotaro} alt="jotaro" />
                    <img className="h-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300" src={kakyoin} alt="kakyoin" />
                    <img className="h-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300" src={Sadjojo} alt="Sadjojo" />
                    <img className="h-56 pl-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300" src={HelloTheRock} alt="HelloTheRock" />
                </div>
            </Layout>
        </div>
    );
}

export default MyPngs;
