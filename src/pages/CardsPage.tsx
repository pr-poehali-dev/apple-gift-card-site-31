
import CardItem from "@/components/CardItem";

const cards = [
  {
    id: 1,
    title: "Apple Gift Card",
    price: 1000,
    description: "Идеально для небольших покупок и подписок",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Apple Gift Card",
    price: 2500,
    description: "Оптимальный выбор для приложений и игр",
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=2574&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Apple Gift Card",
    price: 5000,
    description: "Для серьезных покупок и длительных подписок",
    image: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=1780&auto=format&fit=crop"
  }
];

const CardsPage = () => {
  return (
    <div className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-black mb-6">Подарочные карты Apple</h1>
          <p className="text-lg text-gray-600">
            Выберите подходящий номинал для пополнения баланса Apple ID. 
            Используйте для покупки приложений, игр, фильмов и подписок.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <CardItem 
              key={card.id}
              title={card.title}
              price={card.price}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4">Важная информация</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-medium text-black mb-2">О картах Apple Gift Card</h3>
              <p className="text-gray-600">
                Подарочные карты Apple можно использовать для покупок в App Store, 
                iTunes Store, Apple Books и оплаты подписок, таких как Apple Music, 
                Apple TV+, Apple Arcade и iCloud+.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-black mb-2">Условия использования</h3>
              <p className="text-gray-600">
                Карты действительны только в российском App Store. Средства не могут 
                быть переведены на другой аккаунт Apple ID. Подробнее читайте в 
                инструкции по активации.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
