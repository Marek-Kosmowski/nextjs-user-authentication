import Image from 'next/image';

export default function AuthForm() {
  <form>
    <div>{/* <Image /> */}</div>
    <p>
      <label htmlFor='email'>Email:</label>
      <input type='email' name='email' id='email' />
    </p>
    <p>
      <label htmlFor='password'>Password:</label>
      <input type='password' name='password' id='password' />
    </p>
    <p>
      <button type='submit'>Create</button>
    </p>
  </form>;
}
