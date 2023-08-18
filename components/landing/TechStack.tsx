import Image from "next/image";
import React from "react";

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
        name: "Ruby",
      },
      {
        name: "Python",
      },
      { name: "PHP" },
      {
        name: "Elixir",
      },
      {
        name: "GraphQL",
      },
    ],
  },
  {
    area: "frameworks",
    technologies: [
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
      <div className="font-bold text-4xl text-center mt-16 mb-8">
        Our technology stack
      </div>
      {techStacks.map((stack) => {
        return (
          <div className="flex items-center space-x-3" key={stack.name}>
            <div className="text-lg font-medium uppercase tracking-wider w-36">
              {stack.area}
            </div>
            {stack.technologies.map((technology) => {
              return (
                <div
                  key={technology.name}
                  className="flex flex-col cursor-pointer justify-center items-center space-y-5 hover:bg-orange-50 rounded-lg w-32 h-32 px-5"
                >
                  <Image
                    alt={""}
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
  );
}

export default TechStack;
