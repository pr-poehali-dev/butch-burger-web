import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/8d66b3ea-5df4-40b5-afef-808845ecf260/files/66fbd068-5c80-4b01-a891-5ba8290891dd.jpg";
const INTERIOR_IMG = "https://cdn.poehali.dev/projects/8d66b3ea-5df4-40b5-afef-808845ecf260/files/4e742dc0-6745-4a4f-bf50-79958285533e.jpg";
const MENU_IMG = "https://cdn.poehali.dev/projects/8d66b3ea-5df4-40b5-afef-808845ecf260/files/eff19fd8-ed2a-4b40-b590-97d8a9d5c17e.jpg";

const menuItems = [
  {
    id: 1,
    name: "KILLER CLASSIC",
    desc: "Двойная котлета смэш, чеддер, маринованный лук, секретный соус",
    price: "490 ₽",
    weight: "350г",
    tag: "ХИТ",
  },
  {
    id: 2,
    name: "IRON BEAST",
    desc: "Говядина + бекон + яйцо + трюфельный майонез, горчица, томат",
    price: "590 ₽",
    weight: "420г",
    tag: "МОЩЬ",
  },
  {
    id: 3,
    name: "DEATH BY CHEESE",
    desc: "Тройной чеддер, сырный соус, лук фри, горчица, мясо смэш",
    price: "540 ₽",
    weight: "390г",
    tag: "СЫРО",
  },
  {
    id: 4,
    name: "THE INFERNO",
    desc: "Острый перец халапеньо, сальса, авокадо, говядина, хрустящий лук",
    price: "560 ₽",
    weight: "380г",
    tag: "ОГОНЬ",
  },
  {
    id: 5,
    name: "SMOKEHOUSE",
    desc: "Копчёная грудинка, BBQ соус, маринованные огурцы, лук, чеддер",
    price: "580 ₽",
    weight: "410г",
    tag: null,
  },
  {
    id: 6,
    name: "DARK TRUFFLE",
    desc: "Трюфельный соус, грибы, дижонская горчица, двойная котлета",
    price: "650 ₽",
    weight: "400г",
    tag: "ПРЕМИУМ",
  },
];

const sides = [
  { name: "КАРТОШКА ФРИ", price: "190 ₽" },
  { name: "ЛУКОВЫЕ КОЛЬЦА", price: "220 ₽" },
  { name: "СОУС (100мл)", price: "60 ₽" },
  { name: "КОЛА / ЛИМОНАД", price: "150 ₽" },
];

const reviews = [
  {
    name: "Максим К.",
    text: "Лучшие бургеры в городе. Без сомнений. KILLER CLASSIC — это отдельная религия.",
    stars: 5,
    date: "апрель 2026",
  },
  {
    name: "Алина В.",
    text: "THE INFERNO — не для слабаков. Горит во рту, но хочется ещё. Доставили за 28 минут.",
    stars: 5,
    date: "март 2026",
  },
  {
    name: "Дмитрий П.",
    text: "Брутально, вкусно, быстро. Больше не хожу в другие места. Спасибо за существование.",
    stars: 5,
    date: "март 2026",
  },
  {
    name: "Светлана Р.",
    text: "DEATH BY CHEESE — это шедевр. Три вида сыра — это не шутка. Беру каждую пятницу.",
    stars: 5,
    date: "февраль 2026",
  },
];

const navLinks = [
  { href: "#home", label: "Главная" },
  { href: "#menu", label: "Меню" },
  { href: "#about", label: "О нас" },
  { href: "#gallery", label: "Галерея" },
  { href: "#delivery", label: "Доставка" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
];

export default function Index() {
  const [cart, setCart] = useState<{ id: number; name: string; price: string }[]>([]);
  const [orderOpen, setOrderOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", address: "", comment: "" });
  const [orderSent, setOrderSent] = useState(false);

  const addToCart = (item: { id: number; name: string; price: string }) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (idx: number) => {
    setCart((prev) => prev.filter((_, i) => i !== idx));
  };

  const totalPrice = cart.reduce((acc, item) => {
    const num = parseInt(item.price.replace(/\D/g, ""));
    return acc + num;
  }, 0);

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSent(true);
  };

  return (
    <div className="min-h-screen bg-brutal-dark text-white">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brutal-dark/95 backdrop-blur border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#home" className="font-oswald text-2xl font-bold tracking-widest">
            <span className="text-brutal-red">BRUTAL</span>
            <span className="text-white"> BURGERS</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setOrderOpen(true)}
              className="relative flex items-center gap-2 bg-brutal-red text-white brutal-btn px-5 py-2"
            >
              <Icon name="ShoppingCart" size={16} />
              <span>Корзина</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-brutal-yellow text-brutal-dark text-xs font-bold rounded-full flex items-center justify-center font-oswald">
                  {cart.length}
                </span>
              )}
            </button>

            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-brutal-charcoal border-t border-white/10 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brutal-dark via-brutal-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brutal-dark/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-brutal-red" />
              <span className="font-condensed text-brutal-yellow uppercase tracking-[0.3em] text-sm">
                Доставка за 30 минут
              </span>
            </div>

            <h1 className="font-oswald text-7xl md:text-9xl font-bold leading-none mb-4">
              ЕДА <br />
              <span className="text-brutal-red">БЕЗ</span> <br />
              ЖАЛОСТИ
            </h1>

            <p className="font-condensed text-lg text-white/70 mb-10 max-w-lg leading-relaxed">
              Смэш-бургеры на угольном гриле. Никакого пластика, никакой дешёвки.
              Только мясо, огонь и характер.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#menu"
                className="brutal-btn bg-brutal-red text-white px-10 py-4 text-center text-base"
              >
                Смотреть меню
              </a>
              <a
                href="#delivery"
                className="brutal-btn border-2 border-white/30 text-white px-10 py-4 text-center text-base hover:border-brutal-yellow hover:text-brutal-yellow transition-colors"
              >
                Условия доставки
              </a>
            </div>

            <div className="mt-14 flex gap-12">
              {[
                { num: "47", label: "Позиций в меню" },
                { num: "28", label: "Мин. доставка" },
                { num: "4.9★", label: "Рейтинг" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-oswald text-4xl font-bold text-brutal-yellow">{s.num}</div>
                  <div className="font-condensed text-white/50 text-sm uppercase tracking-wider mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-brutal-dark"
          style={{ clipPath: "polygon(0 100%, 100% 30%, 100% 100%)" }}
        />
      </section>

      {/* MENU */}
      <section id="menu" className="py-24 bg-brutal-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brutal-red" />
                <span className="font-condensed text-brutal-yellow uppercase tracking-widest text-xs">
                  Наше меню
                </span>
              </div>
              <h2 className="section-title text-white">
                ВЫБЕРИ <br />
                <span className="text-brutal-red">СВОЮ</span> ЖЕРТВУ
              </h2>
            </div>
            <p className="hidden md:block font-condensed text-white/40 text-right max-w-xs">
              Каждый бургер — ручная работа. <br />
              Только свежие ингредиенты каждый день.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {menuItems.map((item) => (
              <div key={item.id} className="brutalist-card p-6 group cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-oswald text-xl font-bold text-white group-hover:text-brutal-yellow transition-colors">
                    {item.name}
                  </h3>
                  {item.tag && (
                    <span className="font-condensed text-xs bg-brutal-red text-white px-2 py-0.5 uppercase tracking-wider">
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="font-roboto text-white/50 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-oswald text-2xl font-bold text-brutal-yellow">{item.price}</div>
                    <div className="font-condensed text-white/30 text-xs">{item.weight}</div>
                  </div>
                  <button
                    onClick={() => addToCart({ id: item.id, name: item.name, price: item.price })}
                    className="brutal-btn bg-brutal-red text-white px-4 py-2 text-sm flex items-center gap-2"
                  >
                    <Icon name="Plus" size={14} />
                    В корзину
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-brutal-charcoal border-t-2 border-brutal-red p-8">
            <h3 className="font-oswald text-2xl font-bold text-white mb-6 uppercase">
              Дополнения
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sides.map((s) => (
                <div key={s.name} className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="font-condensed text-white/70 text-sm uppercase">{s.name}</span>
                  <span className="font-oswald text-brutal-yellow font-bold">{s.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-brutal-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={INTERIOR_IMG}
                alt="Интерьер ресторана"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-brutal-red p-6 hidden md:block">
                <div className="font-oswald text-5xl font-bold text-white">2019</div>
                <div className="font-condensed text-white/70 text-sm uppercase tracking-widest">
                  Год основания
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-brutal-red" />
                <span className="font-condensed text-brutal-yellow uppercase tracking-widest text-xs">
                  О нас
                </span>
              </div>
              <h2 className="section-title text-white mb-8">
                МЫ НЕ <br />
                <span className="text-brutal-red">ШУТИМ</span> <br />
                С ЕДОЙ
              </h2>
              <p className="font-roboto text-white/60 leading-relaxed mb-6">
                BRUTAL BURGERS — это место, где уважают мясо. Мы начинали с маленькой кухни
                и одного рецепта, который заставлял людей возвращаться снова и снова.
              </p>
              <p className="font-roboto text-white/60 leading-relaxed mb-10">
                Сегодня у нас 3 точки в городе и доставка. Но принцип один: никаких
                полуфабрикатов, никакой заморозки. Каждый бургер — ручная работа из
                свежей говядины каждое утро.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "Flame", label: "Угольный гриль", desc: "Настоящий смэш" },
                  { icon: "UtensilsCrossed", label: "Свежая говядина", desc: "Каждый день" },
                  { icon: "Clock", label: "Доставка 28 мин", desc: "Гарантируем" },
                  { icon: "Star", label: "4.9 рейтинг", desc: "На всех площадках" },
                ].map((f) => (
                  <div key={f.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-brutal-red flex items-center justify-center flex-shrink-0">
                      <Icon name={f.icon} size={18} fallback="CheckCircle" />
                    </div>
                    <div>
                      <div className="font-oswald text-white font-semibold text-sm uppercase">
                        {f.label}
                      </div>
                      <div className="font-condensed text-white/40 text-xs">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-brutal-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-brutal-red" />
            <span className="font-condensed text-brutal-yellow uppercase tracking-widest text-xs">
              Галерея
            </span>
          </div>
          <h2 className="section-title text-white mb-14">
            СМОТРИ <span className="text-brutal-red">И</span> ЗАВИДУЙ
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="col-span-2 row-span-2">
              <img
                src={HERO_IMG}
                alt="Фирменный бургер"
                className="w-full object-cover"
                style={{ height: "520px" }}
              />
            </div>
            <div>
              <img
                src={INTERIOR_IMG}
                alt="Интерьер"
                className="w-full object-cover"
                style={{ height: "252px" }}
              />
            </div>
            <div>
              <img
                src={MENU_IMG}
                alt="Меню бургеров"
                className="w-full object-cover"
                style={{ height: "252px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section id="delivery" className="py-24 bg-brutal-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-brutal-red" />
            <span className="font-condensed text-brutal-yellow uppercase tracking-widest text-xs">
              Доставка
            </span>
          </div>
          <h2 className="section-title text-white mb-14">
            ПРИВЕЗЁМ <br />
            <span className="text-brutal-red">БЫСТРО</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
            {[
              {
                icon: "MapPin",
                title: "Зона доставки",
                text: "Весь центр города и прилегающие районы в радиусе 7 км от точки.",
              },
              {
                icon: "Timer",
                title: "Время доставки",
                text: "В среднем 28 минут. Задержались? Следующий заказ — со скидкой 15%.",
              },
              {
                icon: "Wallet",
                title: "Стоимость доставки",
                text: "149 ₽ при заказе до 1000 ₽. Бесплатно от 1000 ₽. Самовывоз всегда бесплатен.",
              },
            ].map((c, i) => (
              <div
                key={c.title}
                className={`p-8 ${i < 2 ? "md:border-r border-white/10" : ""} border-b md:border-b-0 border-white/10`}
              >
                <div className="w-12 h-12 bg-brutal-red flex items-center justify-center mb-5">
                  <Icon name={c.icon} size={22} fallback="CheckCircle" />
                </div>
                <h3 className="font-oswald text-xl font-bold text-white uppercase mb-3">{c.title}</h3>
                <p className="font-roboto text-white/50 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-brutal-ash border-l-4 border-brutal-yellow p-6">
            <div className="flex items-start gap-4">
              <Icon name="Clock" size={24} fallback="Clock" />
              <div>
                <div className="font-oswald text-white font-bold uppercase text-lg mb-1">
                  Режим работы
                </div>
                <div className="font-condensed text-white/60">
                  Пн–Чт: 11:00–23:00 · Пт–Вс: 11:00–01:00 · Доставка до закрытия
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-brutal-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-brutal-red" />
            <span className="font-condensed text-brutal-yellow uppercase tracking-widest text-xs">
              Отзывы
            </span>
          </div>
          <h2 className="section-title text-white mb-14">
            ЧТО <span className="text-brutal-red">ГОВОРЯТ</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-brutal-charcoal p-8 border-t-2 border-brutal-red hover:border-brutal-yellow transition-colors">
                <div className="flex items-center gap-1 mb-5">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <span key={j} className="text-brutal-yellow text-lg">★</span>
                  ))}
                </div>
                <p className="font-roboto text-white/70 leading-relaxed mb-6 text-base italic">
                  «{r.text}»
                </p>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="font-oswald text-white font-semibold uppercase text-sm">{r.name}</span>
                  <span className="font-condensed text-white/30 text-xs uppercase tracking-wider">{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-brutal-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-brutal-red" />
            <span className="font-condensed text-brutal-yellow uppercase tracking-widest text-xs">
              Контакты
            </span>
          </div>
          <h2 className="section-title text-white mb-14">
            НАЙДИ <span className="text-brutal-red">НАС</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  icon: "MapPin",
                  title: "Адрес",
                  text: "ул. Гагарина, 42, 2-й этаж",
                  sub: "Рядом с ТЦ «Центральный»",
                },
                {
                  icon: "Phone",
                  title: "Телефон",
                  text: "+7 (900) 000-00-00",
                  sub: "Принимаем звонки в часы работы",
                },
                {
                  icon: "Mail",
                  title: "Email",
                  text: "hello@brutalburgers.ru",
                  sub: "Для сотрудничества и вопросов",
                },
                {
                  icon: "Instagram",
                  title: "Соцсети",
                  text: "@brutal_burgers",
                  sub: "Фото, акции, новости",
                },
              ].map((c) => (
                <div key={c.title} className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-brutal-red flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon} size={20} fallback="MapPin" />
                  </div>
                  <div>
                    <div className="font-condensed text-white/40 text-xs uppercase tracking-widest mb-0.5">
                      {c.title}
                    </div>
                    <div className="font-oswald text-white text-xl font-semibold">{c.text}</div>
                    <div className="font-condensed text-white/40 text-sm">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-brutal-ash p-8">
              <h3 className="font-oswald text-2xl font-bold text-white uppercase mb-6">
                Напиши нам
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Твоё имя"
                  className="w-full bg-brutal-dark border border-white/10 text-white font-roboto text-sm px-4 py-3 placeholder-white/30 focus:outline-none focus:border-brutal-red"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full bg-brutal-dark border border-white/10 text-white font-roboto text-sm px-4 py-3 placeholder-white/30 focus:outline-none focus:border-brutal-red"
                />
                <textarea
                  rows={4}
                  placeholder="Сообщение..."
                  className="w-full bg-brutal-dark border border-white/10 text-white font-roboto text-sm px-4 py-3 placeholder-white/30 focus:outline-none focus:border-brutal-red resize-none"
                />
                <button
                  type="submit"
                  className="w-full brutal-btn bg-brutal-red text-white py-4 font-bold text-base"
                >
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brutal-dark border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-oswald text-2xl font-bold tracking-widest">
            <span className="text-brutal-red">BRUTAL</span>
            <span className="text-white"> BURGERS</span>
          </div>
          <div className="hidden md:flex gap-6">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="nav-link text-xs">
                {l.label}
              </a>
            ))}
          </div>
          <div className="font-condensed text-white/20 text-xs uppercase tracking-wider">
            © 2026 Brutal Burgers
          </div>
        </div>
      </footer>

      {/* CART MODAL */}
      {orderOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && setOrderOpen(false)}
        >
          <div className="bg-brutal-charcoal w-full max-w-lg max-h-[90vh] overflow-y-auto border border-white/10">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="font-oswald text-2xl font-bold text-white uppercase">Корзина</h3>
              <button onClick={() => setOrderOpen(false)} className="text-white/50 hover:text-white">
                <Icon name="X" size={22} />
              </button>
            </div>

            {orderSent ? (
              <div className="p-12 text-center">
                <div className="text-5xl mb-4">🔥</div>
                <h4 className="font-oswald text-3xl font-bold text-white uppercase mb-3">
                  Заказ принят!
                </h4>
                <p className="font-roboto text-white/50">
                  Свяжемся с тобой в течение 5 минут для подтверждения.
                </p>
                <button
                  onClick={() => {
                    setOrderSent(false);
                    setOrderOpen(false);
                    setCart([]);
                    setForm({ name: "", phone: "", address: "", comment: "" });
                  }}
                  className="mt-8 brutal-btn bg-brutal-red text-white px-8 py-3"
                >
                  Закрыть
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="p-12 text-center">
                <Icon name="ShoppingCart" size={48} fallback="ShoppingCart" />
                <p className="font-oswald text-xl text-white/40 uppercase mt-4">Корзина пуста</p>
                <button
                  onClick={() => setOrderOpen(false)}
                  className="mt-6 brutal-btn border border-white/20 text-white px-6 py-2 text-sm hover:border-brutal-red"
                >
                  Выбрать бургер
                </button>
              </div>
            ) : (
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  {cart.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between py-3 border-b border-white/10">
                      <div>
                        <div className="font-oswald text-white font-bold text-sm uppercase">{item.name}</div>
                        <div className="font-oswald text-brutal-yellow">{item.price}</div>
                      </div>
                      <button
                        onClick={() => removeFromCart(idx)}
                        className="text-white/30 hover:text-brutal-red transition-colors"
                      >
                        <Icon name="Trash2" size={16} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center py-4 border-t-2 border-brutal-red mb-6">
                  <span className="font-oswald text-white text-xl uppercase font-bold">Итого:</span>
                  <span className="font-oswald text-brutal-yellow text-2xl font-bold">{totalPrice} ₽</span>
                </div>

                <form onSubmit={handleOrder} className="space-y-3">
                  <input
                    required
                    type="text"
                    placeholder="Твоё имя *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-brutal-dark border border-white/10 text-white font-roboto text-sm px-4 py-3 placeholder-white/30 focus:outline-none focus:border-brutal-red"
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Телефон *"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-brutal-dark border border-white/10 text-white font-roboto text-sm px-4 py-3 placeholder-white/30 focus:outline-none focus:border-brutal-red"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Адрес доставки *"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="w-full bg-brutal-dark border border-white/10 text-white font-roboto text-sm px-4 py-3 placeholder-white/30 focus:outline-none focus:border-brutal-red"
                  />
                  <textarea
                    rows={2}
                    placeholder="Комментарий к заказу"
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    className="w-full bg-brutal-dark border border-white/10 text-white font-roboto text-sm px-4 py-3 placeholder-white/30 focus:outline-none focus:border-brutal-red resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full brutal-btn bg-brutal-red text-white py-4 font-bold text-base mt-2"
                  >
                    Оформить заказ — {totalPrice} ₽
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
