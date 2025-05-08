
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const InstructionsPage = () => {
  return (
    <div className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-black mb-8 text-center">Как активировать Apple Gift Card</h1>
          
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 bg-blue-50 p-4 rounded-full">
                <span className="flex items-center justify-center w-12 h-12 text-xl font-bold text-blue-600">1</span>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-black mb-3">Получите код активации</h2>
                <p className="text-gray-600">
                  После оплаты вы получите электронное письмо с кодом активации подарочной карты. 
                  Также код будет доступен в личном кабинете.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 bg-blue-50 p-4 rounded-full">
                <span className="flex items-center justify-center w-12 h-12 text-xl font-bold text-blue-600">2</span>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-black mb-3">Откройте App Store</h2>
                <p className="text-gray-600">
                  На устройстве Apple откройте приложение App Store. 
                  Убедитесь, что вы вошли в свой Apple ID.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 bg-blue-50 p-4 rounded-full">
                <span className="flex items-center justify-center w-12 h-12 text-xl font-bold text-blue-600">3</span>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-black mb-3">Найдите раздел активации</h2>
                <p className="text-gray-600">
                  Нажмите на изображение вашего профиля в правом верхнем углу экрана. 
                  В меню выберите "Активировать подарочную карту или код".
                </p>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 bg-blue-50 p-4 rounded-full">
                <span className="flex items-center justify-center w-12 h-12 text-xl font-bold text-blue-600">4</span>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-black mb-3">Введите полученный код</h2>
                <p className="text-gray-600">
                  Введите код активации в соответствующее поле. 
                  Вы можете ввести код вручную или воспользоваться камерой для сканирования QR-кода, если он предоставлен.
                </p>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0 bg-blue-50 p-4 rounded-full">
                <span className="flex items-center justify-center w-12 h-12 text-xl font-bold text-blue-600">5</span>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-black mb-3">Проверьте баланс</h2>
                <p className="text-gray-600">
                  После успешной активации сумма будет добавлена к балансу вашего Apple ID. 
                  Проверить текущий баланс можно в настройках вашего аккаунта.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-black mb-4">Часто задаваемые вопросы</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-black mb-2">Как долго действует подарочная карта?</h3>
                <p className="text-gray-600">
                  Подарочные карты Apple не имеют срока действия. Вы можете использовать средства, когда захотите.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-black mb-2">Могу ли я использовать карту для покупки устройств Apple?</h3>
                <p className="text-gray-600">
                  Нет, подарочные карты Apple Gift Card можно использовать только для покупок в цифровых магазинах Apple,
                  таких как App Store, iTunes Store, Apple Books, и для оплаты подписок.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-black mb-2">Что делать, если код не работает?</h3>
                <p className="text-gray-600">
                  Убедитесь, что вы правильно ввели код без пробелов. Если проблема сохраняется, 
                  свяжитесь с нашей службой поддержки клиентов.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              asChild
              className="bg-black hover:bg-gray-800 text-white px-8 py-6"
            >
              <Link to="/cards">Выбрать карту</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionsPage;
