import Link from 'next/link';

interface NavProps {
  handleMenu?: () => void;
}

const Navigation: React.FC<NavProps> = ({ handleMenu }) => {
  const pagesList = [
    {
      url: '/about',
      text: 'About us',
    },
    {
      url: '/catalog',
      text: 'Catalog',
    },
    {
      url: '/soon',
      text: 'Coming soon',
    },
    {
      url: '/sale',
      text: 'Sale',
    },
  ];
  return (
    <ul className="sm:w-44 md:w-auto text-base text-white items-start md:items-center font-semibold flex flex-col lg:flex-row lg:justify-between list-none">
      <Link
        href={'/'}
        onClick={handleMenu}
        className="font-normal pb-4 lg:hidden"
      >
        HOME
      </Link>
      {pagesList.map((page, index) => {
        return (
          <li key={index} className="pb-2.5 lg:pb-0 lg:ml-6 xl:ml-12">
            <Link
              onClick={handleMenu}
              href={page.url}
              className="duration-200 ease-linear lg:hover:text-[#C3C3C3]"
            >
              {page.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
