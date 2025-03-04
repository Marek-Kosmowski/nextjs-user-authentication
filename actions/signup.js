'use server';
import { hashUserPassword } from '@/lib/hash';
import { createUser } from '@/lib/user';
import { redirect } from 'next/navigation';
import { verifyPassword } from '@/lib/hash';


export async function signup(prevState, formData) {
  const email = formData.get('email');
  const password = formData.get('password');

  let errors = {};

  if (!email.includes('@')) {
    errors.mail = 'Please enter a valid email address.';
  }

  if (password.trim().length < 8) {
    errors.password =
      'Please enter a valid password. Must at least 8 characters long.';
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  const hashedPassword = hashUserPassword(password);
  console.log(createUser(email, hashedPassword)); //*using bcrypt to hash passwords

  redirect('/training');
}
