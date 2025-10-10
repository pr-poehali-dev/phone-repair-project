import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const services = [
    {
      icon: "Smartphone",
      title: "Ремонт телефонов",
      description: "Замена экранов, батарей, камер и других компонентов",
      price: "от 1500 ₽"
    },
    {
      icon: "Laptop",
      title: "Ремонт ноутбуков",
      description: "Чистка, замена термопасты, ремонт материнских плат",
      price: "от 2000 ₽"
    },
    {
      icon: "Cpu",
      title: "Диагностика",
      description: "Бесплатная диагностика неисправностей техники",
      price: "Бесплатно"
    },
    {
      icon: "Zap",
      title: "Срочный ремонт",
      description: "Экспресс-ремонт за 30-60 минут",
      price: "от 3000 ₽"
    }
  ];

  const appleServices = [
    {
      icon: "Smartphone",
      title: "iPhone",
      items: ["Замена дисплея", "Замена батареи", "Ремонт камеры", "Восстановление после воды"]
    },
    {
      icon: "Laptop",
      title: "MacBook",
      items: ["Замена клавиатуры", "Ремонт матрицы", "Апгрейд SSD", "Чистка системы охлаждения"]
    },
    {
      icon: "Tablet",
      title: "iPad",
      items: ["Замена тачскрина", "Ремонт разъёма зарядки", "Замена аккумулятора", "Ремонт кнопок"]
    },
    {
      icon: "Watch",
      title: "Apple Watch",
      items: ["Замена экрана", "Замена батареи", "Ремонт корпуса", "Диагностика"]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <div 
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-200/30 via-transparent to-transparent pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(255, 107, 53, 0.15) 0%, transparent 50%)"
        }}
      />
      
      <div 
        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-200/30 via-transparent to-transparent pointer-events-none"
        style={{
          background: "linear-gradient(45deg, rgba(0, 78, 137, 0.15) 0%, transparent 50%)"
        }}
      />

      <header className="relative bg-gradient-to-r from-[#FF6B35] to-[#004E89] text-white py-20 px-6 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)"
          }}
        />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                <Icon name="Wrench" size={32} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold font-heading">TechRepair Pro</h1>
            </div>
            <div className="flex gap-4">
              <a href="tel:+79999999999" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Icon name="Phone" size={20} />
                <span className="font-semibold">+7 (999) 999-99-99</span>
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6 leading-tight">
                Профессиональный ремонт техники
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Быстро, качественно, с гарантией. Более 10 лет опыта работы с техникой Apple и Android
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-[#FF6B35] hover:bg-white/90 font-semibold text-lg px-8 py-6"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Оставить заявку
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Наши услуги
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent blur-3xl" />
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: "Shield", text: "Гарантия до 12 месяцев" },
                    { icon: "Clock", text: "Ремонт за 30-60 минут" },
                    { icon: "Award", text: "Сертифицированные мастера" },
                    { icon: "ThumbsUp", text: "5000+ довольных клиентов" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center gap-3">
                      <div className="bg-white/20 p-4 rounded-2xl">
                        <Icon name={item.icon as any} size={28} />
                      </div>
                      <p className="text-sm font-semibold">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="services" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-[#11A1A1A]">
              Наши услуги
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Предлагаем полный спектр услуг по ремонту и обслуживанию электроники
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card 
                key={idx}
                className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#FF6B35] bg-white animate-slide-in group cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-[#FF6B35] to-[#004E89] w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={service.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2 text-[#11A1A1A]">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#FF6B35]">{service.price}</span>
                  <Icon name="ArrowRight" size={20} className="text-[#004E89] group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-[#11A1A1A] to-[#004E89] text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }}
        />
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Ремонт техники Apple
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Специализируемся на ремонте устройств Apple. Используем только оригинальные запчасти
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appleServices.map((category, idx) => (
              <Card 
                key={idx}
                className="p-6 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={category.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-white">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-white/90">
                      <Icon name="Check" size={16} className="mt-1 text-[#FF6B35] flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold text-lg px-8 py-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Записаться на ремонт
              <Icon name="Calendar" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-[#11A1A1A]">
              Оставьте заявку
            </h2>
            <p className="text-lg text-gray-600">
              Мы свяжемся с вами в течение 5 минут
            </p>
          </div>

          <Card className="p-8 md:p-12 shadow-2xl border-2 animate-scale-in bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#11A1A1A]">
                  Ваше имя
                </label>
                <Input
                  type="text"
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="text-lg border-2 focus:border-[#FF6B35]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-[#11A1A1A]">
                  Телефон
                </label>
                <Input
                  type="tel"
                  placeholder="+7 (999) 999-99-99"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="text-lg border-2 focus:border-[#FF6B35]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-[#11A1A1A]">
                  Опишите проблему
                </label>
                <Textarea
                  placeholder="Расскажите, что случилось с вашим устройством..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="text-lg border-2 focus:border-[#FF6B35] min-h-32"
                  required
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-[#FF6B35] to-[#004E89] hover:opacity-90 text-white font-semibold text-lg py-6"
              >
                Отправить заявку
                <Icon name="Send" size={20} className="ml-2" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-[#11A1A1A] text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#FF6B35] p-2 rounded-lg">
                  <Icon name="Wrench" size={24} />
                </div>
                <h3 className="text-xl font-bold font-heading">TechRepair Pro</h3>
              </div>
              <p className="text-white/80">
                Профессиональный ремонт техники с 2014 года
              </p>
            </div>

            <div>
              <h4 className="font-bold font-heading mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 999-99-99
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@techrepair.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, д. 1
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold font-heading mb-4">Режим работы</h4>
              <div className="space-y-2 text-white/80">
                <p>Пн-Пт: 9:00 - 21:00</p>
                <p>Сб-Вс: 10:00 - 20:00</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2024 TechRepair Pro. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
