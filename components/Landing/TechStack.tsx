import Image from "next/image";

const techStacks = [
  {
    area: "front end",
    technologies: [
      {
        name: "React",
      },
      {
        name: "NextJS",
      },
      {
        name: "Angular",
      },
      {
        name: "Vue.js",
      },
      {
        name: "NuxtJS",
      },
    ],
  },
  {
    area: "languages",
    technologies: [
      {
        name: "Typescript",
      },
      {
        name: "Javascript",
      },
      {
        name: "Ruby",
      },
      {
        name: "Python",
      },
      { name: "PHP" },
      {
        name: "Elixir",
      },
    ],
  },
  {
    area: "frameworks",
    technologies: [
      {
        name: "NestJS",
      },
      {
        name: "ExpressJS",
      },
      {
        name: "Ruby on Rails",
      },
      {
        name: "Django",
      },
      {
        name: "Laravel",
      },

      {
        name: "Phoenix",
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
    ],
  },
];

function TechStack() {
  return (
    <div className="flex flex-col space-y-2">
      <div className="font-bold text-4xl text-center mt-16 mb-8 tracking-wider">
        Our technology stack
      </div>
      {techStacks.map((stack) => {
        return (
          <div
            className="flex sm:flex-col flex-wrap sm:space-y-5 lg:space-y-0 lg:flex-row items-center lg:space-x-3"
            key={stack.name}
          >
            <div className="sm:text-2xl lg:text-xl w-48 font-semibold uppercase tracking-wider sm:mt-10 lg:mt-0">
              {stack.area}
            </div>
            {stack.technologies.map((technology) => {
              return (
                <div
                  key={technology.name}
                  className="flex flex-col cursor-pointer justify-center items-center space-y-5 hover:bg-primary-100 rounded-lg w-48 h-48 px-5"
                >
                  <Image
                    alt={""}
                    src={`/tech-stack/${technology.name}.svg`}
                    width="100"
                    height="100"
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
  );
}

export default TechStack;
