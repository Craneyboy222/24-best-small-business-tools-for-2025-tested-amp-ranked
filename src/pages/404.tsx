import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-2 text-lg">Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <a className="mt-4 text-blue-500 underline">Go back to homepage</a>
      </Link>
    </div>
  );
};

export default Custom404;
