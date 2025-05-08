
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface CardItemProps {
  title: string;
  price: number;
  description: string;
  image: string;
}

const CardItem = ({ title, price, description, image }: CardItemProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg h-full flex flex-col">
      <div className="aspect-[4/3] relative overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-8"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-2xl font-bold text-black">{price} ₽</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-black hover:bg-gray-800 text-white">
          Добавить в корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardItem;
