import { Link } from "react-scroll";

const navLinks = [
  {
    name: "Home",
    section: "home",
    offset: -200,
  },
  {
    name: "Technology Stack",
    section: "tech-stack",
    offset: -50,
  },
  {
    name: "Contact us",
    section: "contact-us",
    offset: -80,
  },
];

function NavLinks({ onClick }) {
  return (
    <>
      {navLinks.map((link) => {
        return (
          <Link
            key={link.name}
            activeClass="text-primary-600 font-semibold bg-primary-100"
            smooth
            spy
            duration={30}
            offset={link.offset}
            to={link.section}
            onClick={onClick}
            className={`hover:bg-primary-100 font-medium hover:text-primary-600 rounded-full p-2 px-3 tracking-wide cursor-pointer`}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}

export default NavLinks;
