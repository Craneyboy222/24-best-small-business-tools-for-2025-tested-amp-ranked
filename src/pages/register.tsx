import { useState } from 'react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
import { ARIA_LABELS } from '../constants/ariaLabels';

const Register = () => {
  const { register, handleSubmit, errors } = useForm();
  const [registerError, setRegisterError] = useState(null);
  const router = useRouter();

  const onSubmit = async (data: { username: string; password: string; email: string }) => {
    try {
      await axios.post('/api/users/register', data);
      router.push('/login');
    } catch (err) {
      setRegisterError(err.message);
    }
  };

  return (
    <>
      <Head>
        <title>Register - Tool App</title>
      </Head>
      <main aria-label={ARIA_LABELS.REGISTER_MAIN} className="p-4">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              ref={register({ required: true })}
              className="mt-1 block w-full"
            />
            {errors.username && <span>Username is required</span>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              ref={register({ required: true })}
              className="mt-1 block w-full"
            />
            {errors.email && <span>Email is required</span>}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              ref={register({ required: true })}
              className="mt-1 block w-full"
            />
            {errors.password && <span>Password is required</span>}
          </div>
          {registerError && <span className="text-red-500">{registerError}</span>}
          <button type="submit" className="btn-primary">Register</button>
        </form>
      </main>
    </>
  );
};

export default Register;
