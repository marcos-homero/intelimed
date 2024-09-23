import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ClipboardPlus, HeartPulse, Syringe } from "lucide-react";

const MedicalServices = () => {
  const medicalServices = [
    {
      title: "Consultas",
      description: "1 hour ago",
      icon: <HeartPulse className="text-red-600" />,
    },
    {
      title: "Exames Laboratoriais",
      description: "1 hour ago",
      icon: <Syringe className="text-blue-600" />,
    },
    {
      title: "Exames de Imagem",
      description: "2 hours ago",
      icon: <ClipboardPlus className="text-green-600" />,
    },
  ];

  return (
    <div className="flex flex-col py-16 px-8 gap-16 lg:px-32">
      <div className="flex lg:justify-between flex-col gap-8 lg:flex-row items-center">
        <h3 className="text-[#031432] text-2xl font-semibold">Serviços</h3>
        <p className="text-secondary lg:w-1/2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quam
          soluta architecto voluptatem? Magnam sint, vel, aut et laboriosam
        </p>
      </div>
      <div className="flex flex-col gap-8 items-center lg:flex-row lg:justify-between">
        {medicalServices.map((item, index) => (
          <Card
            className="w-1/2 max-sm:w-full shadow-md rounded-[32px]"
            key={index}
          >
            <CardHeader className="gap-2">
              <div className="bg-[#E2EDFF] w-fit p-4 rounded-full">
                {item.icon}
              </div>

              <CardTitle className="text-xl">{item.title}</CardTitle>
              <CardDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
                sint, minus, dolorum quia natus provident est placeat eaque
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <button className="flex justify-center w-full py-3 gap-4 px-8 text-white font-semibold rounded-full bg-gradient-to-r from-primary to-[#6f3afa]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                  />
                </svg>
                Agendar
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MedicalServices;
