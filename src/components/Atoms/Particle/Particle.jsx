import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: {
        enabled: true,
        zIndex: -999,
      },
      background: {
        color: {
          value: "",
        },
      },
      noise: {
        enabled: true,
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 2,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      fpsLimit: 144,
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 200,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: 2,
        },
      },
      detectRetina: true,
    }),
    []
  );

  const checkeredStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundImage:
      "linear-gradient(to right, rgba(40, 40, 40, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(40, 40, 40, 0.5) 1px, transparent 1px)",
    backgroundSize: "100px 100px",
    zIndex: -1,
  };

  if (init) {
    return (
      <>
        <div style={checkeredStyle}></div>
        <Particles
          id="tsparticles"
          options={options}
          style={{ zIndex: "-999", position: "absolute", top: 0, left: 0 }}
        />
      </>
    );
  }

  return null;
}
