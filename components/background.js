import Particles from '@/lib/particles';

export function PageBackground() {
  return (
    <div className='w-full h-screen absolute -z-10'>
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
