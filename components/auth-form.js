import Image from 'next/image';

export default function AuthForm() {
  return (
    <form className='py-12 px-16 w-5/6 max-w-2xl rounded-md  fixed z-1 top-1/3 left-1/3 backdrop-blur-sm border-2 border-[rgba(255,255,255,0.1)]'>
      <div>{/* <Image /> */}</div>
      <p>
        <label
          className='block mb-1 font-bold text-white
'
          htmlFor='email'
        >
          Email:
        </label>
        <input
          className='w-full mb-4 p-2 text-white border-b-2 border-white focus:outline-none'
          type='email'
          name='email'
          id='email'
          placeholder='Enter your email'
        />
      </p>
      <p>
        <label className='block mb-1 font-bold text-white' htmlFor='password'>
          Password:
        </label>
        <input
          className='w-full mb-4 p-2 text-white border-b-2 border-white focus:outline-none'
          type='password'
          name='password'
          id='password'
          placeholder='Enter your password'
        />
      </p>
      <p>
        <button
          className='w-full cursor-pointer pt-2 pb-2 pr-6 pl-6  bg-white text-black font-bold py-3 px-3 rounded-sm text-lg border-2 border-transparent'
          type='submit'
        >
          Create
        </button>
      </p>
    </form>
  );
}
