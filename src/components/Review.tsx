import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Review = () => {
  const reviews = [
    {
      name: "Marcos Homero",
      partner: "IAMSPE",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto harum optio quod, neque at hic atque a, mollitia, cumque praesentium illo recusandae accusantium! Aliquam doloribus dolor molestiae quae? A, vitae.",
    },
    {
      name: "Lucas Arruda",
      partner: "Missão Saúde",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto harum optio quod, neque at hic atque a, mollitia, cumque praesentium illo recusandae accusantium! Aliquam doloribus dolor molestiae quae? A, vitae.",
    },
    {
      name: "Willians Piter",
      partner: "IAMSPE",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto harum optio quod, neque at hic atque a, mollitia, cumque praesentium illo recusandae accusantium! Aliquam doloribus dolor molestiae quae? A, vitae.",
    },
    {
      name: "Geraldo Romão",
      partner: "Missão Saúde",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto harum optio quod, neque at hic atque a, mollitia, cumque praesentium illo recusandae accusantium! Aliquam doloribus dolor molestiae quae? A, vitae.",
    },
  ];

  return (
    <div className="flex flex-col w-full items-center py-16 px-8 gap-16 lg:px-32 xl:px-64">
      <h2 className="text-[#031432] text-2xl font-semibold">Avaliações</h2>
      <div className="flex flex-col gap-8 items-center lg:flex-row lg:justify-between">
        {reviews.map((item, index) => (
          <Card
            className="w-1/2 max-sm:w-full shadow-md rounded-[32px]"
            key={index}
          >
            <CardHeader className="gap-2">
              <CardDescription className="text-[#031432] italic indent-8 break-all">
                {item.review}
              </CardDescription>
              <div className="flex flex-row gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-around">
                  <CardTitle className="text-primary">{item.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {item.partner}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Review;
