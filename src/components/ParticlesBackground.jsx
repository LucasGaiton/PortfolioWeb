//importamos las particulas de react
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import paticlesConfig from "./config/particles-config";
export default function ParticlesBackground() {
    const particlesInit = useCallback((engine) => {
        loadFull(engine);
    }, []);
    return (
        <div>
            <Particles
                // id="tsparticles"
                options={paticlesConfig}
                init={particlesInit}
            />
        </div>
    )

}