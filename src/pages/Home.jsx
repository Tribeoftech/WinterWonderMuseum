import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useThree } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import Loader from '../components/Loader';
import Alex from '../models/Alex.jsx';
import Bear from '../models/Bear_igloo';
import Chris from '../models/Chris.jsx';
import Mail from '../models/Mail';
import Sky from '../models/Sky';
import The_First_Christmas_Tree from '../models/The_First_Christmas_Tree';
import Dom from '../models/dom3d';
import Whey from '../models/Whey';
import Dragon from '../models/dragon';
import Snow from "../models/Snow";


const IslandGroup = ({ children, rotation }) => {
  return (
    <group rotation={rotation} position={[0, 0, 65]}>
      {children}
    </group>
  );
};

const Controls = () => {
  const {camera, gl: { domElement } } = useThree();
  return <OrbitControls args={[camera, domElement]} />;
};

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);

  const adjustThe_First_Christmas_TreeForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43.4];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition];
  }

  const adjust_TestALEX_ForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0.0, -3, -3];

    return [screenScale, screenPosition];
  }

  const adjustWheyForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [3, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  }

  const adjustChrisForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [3, 5, 3];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [4, 4, 4];
      screenPosition = [0, -5, -5];
    }

    return [screenScale, screenPosition];
  }
  const adjustDomForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 3];
      screenPosition = [0, -1, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [5, -3, -3];
    }

    return [screenScale, screenPosition];
  }
  const adjustAlexForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [2, -1, 2];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [1, -1, -1];
    }

    return [screenScale, screenPosition];
  }


  const [The_First_Christmas_TreeScale, The_First_Christmas_TreePosition, The_First_Christmas_TreeRotation] = adjustThe_First_Christmas_TreeForScreenSize();
  const [wheyScale, wheyPosition] = adjustWheyForScreenSize();
  const [chrisScale, chrisPosition] = adjustChrisForScreenSize();
  const [alexScale, alexPosition] = adjustAlexForScreenSize();
  const [tlexScale, tlexPosition] = adjust_TestALEX_ForScreenSize();
  const [domScale, domPosition] = adjustDomForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera={{ near: 0.1, far: 1000 }}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <Controls />
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight />
          <spotLight />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

          <IslandGroup rotation={isRotating ? [0, 0.1, 0] : [0, 0, 0]}>
            
            <Sky isRotating={isRotating} />
            <Snow />
            <Dragon />
            <The_First_Christmas_Tree
              position={The_First_Christmas_TreePosition}
              scale={The_First_Christmas_TreeScale}
              rotation={The_First_Christmas_TreeRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
            >
                <Alex position={tlexPosition}
                scale={tlexScale}></Alex>

             <Alex
               isRotating={isRotating}
               alexScaleScale={alexScale}
               alexPosition={alexPosition}  //{/* Adjust the position relative to The_First_Christmas_Tree */}//
              />
            </The_First_Christmas_Tree>

            <Dom 
              isRotating={isRotating}
              domScale={domScale}
              domPosition={domPosition}
              rotation={[0, 0, 0]}
            />

            <Chris
              isRotating={isRotating}
              chrisScale={chrisScale}
              chrisPosition={chrisPosition}
              rotation={[0, 0, 0]}
            />
            
            <Bear />
            <Whey
              isRotating={isRotating}
              wheyScale={wheyScale}
              wheyPosition={wheyPosition}
              rotation={[0, 10, 0]}
            />
           
            <Mail />
          </IslandGroup>
          <Alex isRotating={true} anchorPosition={[1, -1, -1]} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;