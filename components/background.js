import Particles from '@/lib/particles';

export function PageBackground() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Particles
        particleColors={['#FF204E', '#A0153E']}
        particleCount={300}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={300}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
}
