
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-white py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black">
                Apple Gift Cards
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Универсальный подарок для любителей техники Apple. Пополняйте счёт в App Store, покупайте приложения, игры, музыку и многое другое.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  asChild
                  className="bg-black hover:bg-gray-800 text-white px-8 py-6"
                >
                  <Link to="/cards">Выбрать карту</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-black text-black hover:bg-gray-100 px-8 py-6"
                >
                  <Link to="/instructions">Как активировать</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1470&auto=format&fit=crop"
                alt="Apple Gift Cards"
                className="rounded-lg shadow-xl w-full h-auto max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black">Почему выбирают наши карты</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Дарите возможность выбора вместе с Apple Gift Cards
            </p>
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black">Мгновенная активация</h3>
              <p className="mt-4 text-gray-600">
                Активируйте подарочную карту в течение нескольких минут после покупки.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11L12 14L15 11M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black">Гибкий выбор</h3>
              <p className="mt-4 text-gray-600">
                Разные номиналы для любого бюджета и любого повода.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black">Долгий срок действия</h3>
              <p className="mt-4 text-gray-600">
                Используйте баланс когда угодно без ограничения по времени.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-10 md:mb-0">
              <h2 className="text-3xl font-bold text-black">Готовы выбрать подарок?</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                Просто выберите нужный номинал карты и оформите заказ
              </p>
            </div>
            <Button 
              asChild
              className="bg-black hover:bg-gray-800 text-white px-8 py-6"
            >
              <Link to="/cards">Перейти к картам</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
