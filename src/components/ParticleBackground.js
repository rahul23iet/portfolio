import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import styled from 'styled-components';

const ParticleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: auto;
`;

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Particles loaded callback
  }, []);

  return (
    <ParticleContainer>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: ["push", "bubble"],
              },
              onHover: {
                enable: true,
                mode: ["grab", "bubble"],
                parallax: {
                  enable: true,
                  force: 60,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 6,
              },
              grab: {
                distance: 200,
                links: {
                  opacity: 0.8,
                  color: "#ff6ec7",
                },
              },
              bubble: {
                distance: 250,
                size: 12,
                duration: 2,
                opacity: 0.8,
                speed: 3,
                color: "#ff9a56",
              },
              repulse: {
                distance: 300,
                duration: 0.4,
              },
              trail: {
                delay: 0.005,
                quantity: 5,
                particles: {
                  color: {
                    value: "#c77dff",
                  },
                  size: {
                    value: 3,
                  },
                },
              },
            },
          },
          particles: {
            color: {
              value: ["#ff6ec7", "#ff9a56", "#c77dff", "#7209b7", "#ffffff"],
            },
            links: {
              color: "#ff6ec7",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
              triangles: {
                enable: true,
                color: "#c77dff",
                opacity: 0.1,
              },
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1.5,
              straight: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.6,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            shape: {
              type: ["circle", "triangle", "polygon"],
              polygon: {
                sides: 6,
              },
            },
            size: {
              value: { min: 1, max: 6 },
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false,
              },
            },
          },
          detectRetina: true,
          responsive: [
            {
              maxWidth: 768,
              options: {
                particles: {
                  number: {
                    value: 40,
                  },
                  links: {
                    distance: 100,
                  },
                },
              },
            },
            {
              maxWidth: 480,
              options: {
                particles: {
                  number: {
                    value: 25,
                  },
                  links: {
                    distance: 80,
                  },
                },
              },
            },
          ],
        }}
      />
    </ParticleContainer>
  );
};

export default ParticleBackground;
