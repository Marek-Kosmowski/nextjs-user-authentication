import Particles from '@/lib/particles';

export function PageBackground() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Particles
        particleColors={['#1500ff', '#1500ff']}
        particleCount={300}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={200}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
}
