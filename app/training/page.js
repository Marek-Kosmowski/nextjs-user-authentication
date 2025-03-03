import { getTrainings } from '@/lib/training';

export default function TrainginPage() {
  const traingSessions = getTrainings();

  return (
    <main className='max-w-[50rem] my-4 mx-auto'>
      <h1 className='text-white text-center uppercase'>
        Pick your favorite training
      </h1>
      <ul className='max-w-[40rem] my-4 mx-auto list-none p-0 grid gap-4 grid-cols-[repeat(auto-fill,minmax(10rem,1fr))]'>
        {traingSessions.map((training) => (
          <li
            key={training.id}
            className='flex flex-col items-center my-4 mx-0 rounded-sm bg-[#0a0a0a] shadow-[0_0_10px_0_rgba(0,0,0,0.4)]'
          >
            <img
              className='w-full'
              src={`/trainings/${training.image}`}
              alt={training.title}
            />
            <div className='text-center'>
              <h2 className='mt-4 py-0 px-4 text-[#d0cfd6] text-lg uppercase'>
                {training.title}
              </h2>
              <p className='m-4 text-[#7c7a80]'>{training.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
