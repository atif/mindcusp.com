import {
  IconAnalyze,
  IconBinaryTree2,
  IconHeartHandshake,
  IconSourceCode,
} from "@tabler/icons-react";

function Services() {
  const services = [
    {
      title: "MVP development",
      description:
        "We collaborate with the leadership team to brainstorm, design,\
      and create products that cater to the business needs, keeping in check the time to market.",
      image: <IconSourceCode className="w-8 h-8" />,
    },
    {
      title: "Architecture & Design",
      description:
        "Our team, consisting of experienced architects and engineering managers, is available to assist you in crafting your upcoming project, addressing both its technical and execution aspects.",
      image: <IconBinaryTree2 className="w-8 h-8" />,
    },
    {
      title: "Software Consultancy",
      description:
        "Receive guidance from a consulting team comprising seasoned architects and developers with over 15 years of collective experience collaborating with startups, small to medium-sized businesses, and large enterprises.",
      image: <IconAnalyze className="w-8 h-8" />,
    },
    {
      title: "Partnership",
      description:
        "Our team possesses extensive expertise in establishing software developer teams from scratch, dedicated to delivering high-quality code while adhering to industry best practices. Collaborate with us to bring your next innovation to life!",
      image: <IconHeartHandshake className="w-8 h-8" />,
    },
  ];

  return (
    <div className="flex flex-col space-y-2 lg:my-24 flex-wrap">
      <div className="font-bold text-4xl text-center mt-16 mb-24">Services</div>

      <div className="flex sm:space-y-24 xl:space-y-0 xl:flex-row sm:flex-col sm:space-x-0 xl:space-x-16 flex-wrap mx-16">
        {services.map((service) => {
          return (
            <div
              key={service.title}
              className="flex flex-1 flex-col space-y-5 text-left"
            >
              <div className="flex space-x-3 items-center text-3xl font-semibold">
                <div>{service.image}</div>
                <div>{service.title}</div>
              </div>
              <div className="text-xl tracking-wide">{service.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
