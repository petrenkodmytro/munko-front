import Image from 'next/image';
import Link from 'next/link';
import page404 from '../../public/image/404.png';

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="flex flex-col gap-10 items-center py-10">
      <h2>The page not found</h2>
      <p>Please don’t give up! Go back and try again</p>
      <Image src={page404} alt="page 404" width={300} />
      <p>
        Back to{' '}
        <Link href="/" className="italic text-indigo-500">
          HomePage
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
