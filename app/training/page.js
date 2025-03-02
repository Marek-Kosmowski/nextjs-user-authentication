import { getTrainings } from '@/lib/training';

export default function TrainginPage() {
  const traingSessions = getTrainings();

  //   return (
  //     <main className='max-w-[50rem] z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/5'>
  //       <h1 className='text-4xl text-center text-[#d0cfd6]'>
  //         Pick your favorite training.
  //       </h1>
  //       <ul className='grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-4 max-w-[40rem]   list-none p-0  '>
  //         {traingSessions.map((training) => (
  //           <li
  //             key={training.id}
  //             className='flex flex-col items-center my-4 mx-0 bg-[#0a0a0a]'
  //           >
  //             <img
  //               src={`/trainings/${training.image}`}
  //               alt={training.title}
  //               className='w-full'
  //             />
  //             <div>
  //               <h2 className='mt-4 px-4 text-[#d0cfd6] text-xl uppercase'>
  //                 {training.title}
  //               </h2>
  //               <p>{training.description}</p>
  //             </div>
  //           </li>
  //         ))}
  //       </ul>
  //     </main>
  //   );

  return (
    <main>
      <h1>Pick your favorite training.</h1>
      <ul id='training-sessions'>
        {traingSessions.map((training) => (
          <li key={training.id}>
            <img src={`/trainings/${training.image}`} alt='' />
            <div>
              <h2>{training.title}</h2>
              <p>{training.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
