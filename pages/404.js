import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 4000);
  }, []);

  return (
    <div>
      <h1>404</h1>
      <h2>Oops! That page cannot be found :(</h2>
      <p>
        Redirecting to
        <Link href='/'>
          <a>Homepage</a>
        </Link>
        for more beautifully written articles...
      </p>
    </div>
  );
};

export default NotFound;
