import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ARIA_LABELS } from '../constants/ariaLabels';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const [loginError, setLoginError] = useState(null);
  const router = useRouter();

  const onSubmit = async (data: { username: string; password: string }) => {
    try {
      await axios.post('/api/users/login', data);
      router.push('/dashboard');
    } catch (err) {
      setLoginError(err.message);
    }
  };

  return (
    <>
      <Head>
        <title>Login - Tool App</title>
      </Head>
      <main aria-label={ARIA_LABELS.LOGIN_MAIN} className="p-4">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
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
          {loginError && <span className="text-red-500">{loginError}</span>}
          <button type="submit" className="btn-primary">Login</button>
        </form>
      </main>
    </>
  );
};

export default Login;
