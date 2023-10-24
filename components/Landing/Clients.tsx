import Image from "next/image";
import Link from "next/link";
const Clients = () => {
  const clients = [
    {
      name: "Function",
      link: "https://gofunction.io",
      image: "go-function",
    },
    {
      name: "Ophthalytics",
      link: "https://www.ophthalytics.com",
      image: "ophthalytics",
    },
    {
      name: "testfish",
      link: "https://www.testfish.app",
      image: "testfish",
    },
  ];

  return (
    <div className="flex flex-col space-y-2 flex-wrap">
      <div className="font-bold text-4xl text-center mt-16 mb-10">Clients</div>

      <div className="flex sm:space-y-24 xl:space-y-0 xl:flex-row sm:flex-col sm:space-x-0 xl:space-x-16 flex-wrap mx-16">
        {clients.map((client) => {
          return (
            <Link
              href={`${client.link}`}
              target="_blank"
              key={client.image}
              className="flex flex-col cursor-pointer justify-center items-center space-y-5 hover:bg-primary-100 rounded-lg w-48 h-48 px-5"
            >
              <Image
                src={`/clients/${client.image}.png`}
                height="200"
                width="200"
                alt={`${client.name}`}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Clients;
