import Image from "next/image";
import Link from "next/link";

const techStacks = [
  {
    area: "front end",
    technologies: [
      {
        name: "React",
      },
      {
        name: "Angular",
      },
      {
        name: "Vue.js",
      },
    ],
  },
  {
    area: "languages",
    technologies: [
      {
        name: "javascript",
      },
      {
        name: "typescript",
      },
      {
        name: "ruby",
      },
      {
        name: "python",
      },
      { name: "php" },
      {
        name: "elixir",
      },
    ],
  },
  {
    area: "frameworks",
    technologies: [
      {
        name: "NextJS",
      },
      {
        name: "Ruby on Rails",
      },
      {
        name: "Django",
      },
      {
        name: "NestJS",
      },
      {
        name: "ExpressJS",
      },
    ],
  },
  {
    area: "environments",
    technologies: [
      {
        name: "NodeJS",
      },
    ],
  },
  {
    area: "databases",
    technologies: [
      {
        name: "PostgresSQL",
      },
      {
        name: "MySQL",
      },
      {
        name: "MongoDB",
      },
      {
        name: "GraphQL",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="font-poppins flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex sticky top-0 p-5 bg-white">
        <Link
          href="/"
          className="font-poppins text-2xl font-semibold tracking-wide text-gray-700"
        >
          mindcusp
        </Link>

        <nav className="font-inter flex space-x-5 text-base tracking-wide">
          <Link className="" href="#">
            Home
          </Link>
          <Link href="#section-1">Our Clients</Link>
          <Link href="#section-2">Tech stack</Link>
          <Link href="#section-3">Contact us</Link>
        </nav>
      </div>
      <div id="section-1" className="h-screen">
        <div className="m-24 text-xl">
          We are a small team of developers who are passionate about crafting
          scalable software. Our goal is to create flexible, innovative products
          that can be easily maintained.
        </div>
      </div>

      <div id="section-2" className="h-screen flex items-center">
        <div className="flex flex-col space-y-3">
          {techStacks.map((stack) => {
            return (
              <div className="flex items-center space-x-3">
                <div className="text-lg font-medium uppercase tracking-wider w-36">
                  {stack.area}
                </div>
                {stack.technologies.map((technology) => {
                  return (
                    <div className="flex flex-col cursor-pointer justify-center items-center space-y-5 hover:bg-green-50 rounded-lg w-32 h-32 px-5">
                      <Image
                        src={`/tech-stack/${technology.name}.svg`}
                        width="55"
                        height="55"
                      />
                      <div className="capitalize text-sm tracking-wider text-gray-500">
                        {technology.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div id="section-3" className="h-screen">
        Section 3
      </div>

      <div>Footer</div>
    </main>
  );
}
