import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  pointer-events: none;
`;

const Scene3D = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (mounted) setReady(true);
    });
    return () => { mounted = false; };
  }, []);

  if (!ready) return null;

  return (
    <Overlay>
      <Particles
        id="constellations"
        options={{
          fullScreen: { enable: false },
          background: { color: 'transparent' },
          fpsLimit: 60,
          detectRetina: true,
          interactivity: {
            events: { onHover: { enable: true, mode: ['grab'] }, resize: true },
            modes: { grab: { distance: 200, links: { opacity: 0.9 } } }
          },
          particles: {
            number: { value: 220, density: { enable: true, area: 1000 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            size: { value: { min: 2, max: 4 } },
            opacity: { value: 1 },
            move: { enable: true, speed: 0.4, outModes: { default: 'out' } },
            links: { enable: true, distance: 170, color: '#8B5CF6', opacity: 0.85, width: 1 }
          }
        }}
        style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
      />
    </Overlay>
  );
};

export default Scene3D;
