import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/8d66b3ea-5df4-40b5-afef-808845ecf260/files/66fbd068-5c80-4b01-a891-5ba8290891dd.jpg";
const INTERIOR_IMG = "https://cdn.poehali.dev/projects/8d66b3ea-5df4-40b5-afef-808845ecf260/files/4e742dc0-6745-4a4f-bf50-79958285533e.jpg";
const MENU_IMG = "https://cdn.poehali.dev/projects/8d66b3ea-5df4-40b5-afef-808845ecf260/files/eff19fd8-ed2a-4b40-b590-97d8a9d5c17e.jpg";

const menuItems = [
  { name: "BUTCH CLASSIC", desc: "Двойная котлета смэш, чеддер, маринованный лук, фирменный соус", price: "490 ₽", tag: "ХИТ" },
  { name: "IRON BEAST", desc: "Говядина, бекон, яйцо, трюфельный майонез, горчица, томат", price: "590 ₽", tag: null },
  { name: "DEATH BY CHEESE", desc: "Тройной чеддер, сырный соус, лук фри, горчица, смэш-котлета", price: "540 ₽", tag: "СЫРО" },
  { name: "THE INFERNO", desc: "Халапеньо, сальса, авокадо, говядина, хрустящий лук", price: "560 ₽", tag: "ОГОНЬ" },
  { name: "SMOKEHOUSE", desc: "Копчёная грудинка, BBQ соус, маринованные огурцы, чеддер", price: "580 ₽", tag: null },
  { name: "DARK TRUFFLE", desc: "Трюфельный соус, грибы, дижонская горчица, двойная котлета", price: "650 ₽", tag: "ПРЕМИУМ" },
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

const reviews = [
  { name: "Максим К.", text: "Лучшие бургеры в городе. Без сомнений. BUTCH CLASSIC — это отдельная религия.", stars: 5, date: "апрель 2026" },
  { name: "Алина В.", text: "THE INFERNO — не для слабаков. Горит во рту, но хочется ещё.", stars: 5, date: "март 2026" },
  { name: "Дмитрий П.", text: "Брутально, вкусно, быстро. Больше не хожу в другие места.", stars: 5, date: "март 2026" },
  { name: "Светлана Р.", text: "DEATH BY CHEESE — шедевр. Три вида сыра — это не шутка.", stars: 5, date: "февраль 2026" },
];

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brutal-dark text-white">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brutal-dark/95 backdrop-blur border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#home" className="font-oswald text-2xl font-bold tracking-widest">
            <span className="text-brutal-red">BUTCH</span>
            <span className="text-white"> BURGER</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </div>

          <a
            href="#contacts"
            className="hidden md:flex brutal-btn bg-brutal-red text-white px-5 py-2 text-sm items-center gap-2"
          >
            <Icon name="Phone" size={14} />
            Забронировать стол
          </a>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-brutal-charcoal border-t border-white/10 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="nav-link text-base" onClick={() => setMobileMenuOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-brutal-dark via-brutal-dark/85 to-brutal-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brutal-dark/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-brutal-red" />
              <span className="font-condensed text-brutal-yellow uppercase tracking-[0.3em] text-sm">
                Смэш-бургеры · Угольный гриль
              </span>
            </div>

            <h1 className="font-oswald font-bold leading-none mb-6" style={{ fontSize: "clamp(4rem, 12vw, 9rem)" }}>
              ЕДА <br />
              <span className="text-brutal-red">БЕЗ</span> <br />
              ЖАЛОСТИ
            </h1>

            <p className="font-condensed text-lg text-white/65 mb-10 max-w-md leading-relaxed">
              Мы не делаем фастфуд. Мы делаем бургеры так, как они должны быть сделаны —
              с уважением к мясу и без компромиссов.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#menu" className="brutal-btn bg-brutal-red text-white px-10 py-4 text-center text-base">
                Смотреть меню
              </a>
              <a href="#contacts" className="brutal-btn border-2 border-white/25 text-white px-10 py-4 text-center text-base hover:border-brutal-yellow hover:text-brutal-yellow transition-colors">
                Найти нас
              </a>
            </div>

            <div className="mt-16 flex gap-12">
              {[
                { num: "2019", label: "Год открытия" },
                { num: "6", label: "Бургеров в меню" },
                { num: "4.9★", label: "Рейтинг" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-oswald text-4xl font-bold text-brutal-yellow">{s.num}</div>
                  <div className="font-condensed text-white/45 text-xs uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-brutal-dark" style={{ clipPath: "polygon(0 100%, 100% 30%, 100% 100%)" }} />
      </section>

      {/* MENU */}
      <section id="menu" className="py-24 bg-brutal-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-brutal-red" />
                <span className="font-condensed text-brutal-yellow uppercase tracking-widest text-xs">Меню</span>
              </div>
              <h2 className="section-title text-white">
                ВЫБЕРИ <br /><span className="text-brutal-red">СВОЁ</span> ОРУЖИЕ
              </h2>
            </div>
            <p className="hidden md:block font-condensed text-white/35 text-right max-w-xs leading-relaxed">
              Каждый бургер — ручная работа.<br />Только свежие ингредиенты каждый день.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {menuItems.map((item) => (
              <div key={item.name} className="bg-brutal-dark p-8 group hover:bg-brutal-charcoal transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-oswald text-2xl font-bold text-white group-hover:text-brutal-yellow transition-colors">
                    {item.name}
                  </h3>
                  {item.tag && (
                    <span className="font-condensed text-xs bg-brutal-red text-white px-2 py-0.5 uppercase tracking-wider flex-shrink-0 ml-3">
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="font-roboto text-white/45 text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="font-oswald text-2xl font-bold text-brutal-yellow">{item.price}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-brutal-charcoal border-l-4 border-brutal-red p-6">
            <div className="flex flex-wrap gap-8">
              {[
                { name: "Картошка фри", price: "190 ₽" },
                { name: "Луковые кольца", price: "220 ₽" },
                { name: "Фирменный соус", price: "60 ₽" },
                { name: "Напитки", price: "от 150 ₽" },
              ].map((s) => (
                <div key={s.name} className="flex items-center gap-3">
                  <span className="font-condensed text-white/50 text-sm uppercase">{s.name}</span>
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
              <img src={INTERIOR_IMG} alt="Интерьер BUTCH BURGER" className="w-full h-[520px] object-cover" />
              <div className="absolute -bottom-6 -right-6 bg-brutal-red p-6 hidden md:block">
                <div className="font-oswald text-5xl font-bold text-white">2019</div>
                <div className="font-condensed text-white/70 text-sm uppercase tracking-widest">Год основания</div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-brutal-red" />
                <span className="font-condensed text-brutal-yellow uppercase tracking-widest text-xs">О нас</span>
              </div>
              <h2 className="section-title text-white mb-8">
                МЫ НЕ <br /><span className="text-brutal-red">ШУТИМ</span><br /> С ЕДОЙ
              </h2>
              <p className="font-roboto text-white/55 leading-relaxed mb-5">
                BUTCH BURGER — это место, где уважают мясо. Мы начинали с маленькой кухни
                и одного рецепта, который заставлял людей возвращаться снова и снова.
              </p>
              <p className="font-roboto text-white/55 leading-relaxed mb-10">
                Принцип один: никаких полуфабрикатов, никакой заморозки. Каждый бургер —
                ручная работа из свежей говядины, которая поступает к нам каждое утро.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "Flame", label: "Угольный гриль", desc: "Настоящий смэш-метод" },
                  { icon: "UtensilsCrossed", label: "Свежая говядина", desc: "Поставка каждое утро" },
                  { icon: "Users", label: "Живая атмосфера", desc: "Место встречи друзей" },
                  { icon: "Star", label: "Рейтинг 4.9", desc: "На всех площадках" },
                ].map((f) => (
                  <div key={f.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-brutal-red flex items-center justify-center flex-shrink-0">
                      <Icon name={f.icon} size={18} fallback="CheckCircle" />
                    </div>
                    <div>
                      <div className="font-oswald text-white font-semibold text-sm uppercase">{f.label}</div>
                      <div className="font-condensed text-white/35 text-xs">{f.desc}</div>
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
            <span className="font-condensed text-brutal-yellow uppercase tracking-widest text-xs">Галерея</span>
          </div>
          <h2 className="section-title text-white mb-14">
            СМОТРИ <span className="text-brutal-red">И</span> ЗАВИДУЙ
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="col-span-2">
              <img src={HERO_IMG} alt="Фирменный бургер" className="w-full object-cover" style={{ height: "400px" }} />
            </div>
            <div className="flex flex-col gap-3">
              <img src={INTERIOR_IMG} alt="Интерьер" className="w-full object-cover" style={{ height: "193px" }} />
              <img src={MENU_IMG} alt="Меню" className="w-full object-cover" style={{ height: "193px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section id="delivery" className="py-24 bg-brutal-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-brutal-red" />
            <span className="font-condensed text-brutal-yellow uppercase tracking-widest text-xs">Доставка</span>
          </div>
          <h2 className="section-title text-white mb-14">
            ПРИВЕЗЁМ <br /><span className="text-brutal-red">БЫСТРО</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10">
            {[
              { icon: "MapPin", title: "Зона доставки", text: "Весь центр города и прилегающие районы в радиусе 7 км." },
              { icon: "Timer", title: "Время доставки", text: "В среднем 28 минут. Задержались? Следующий заказ со скидкой 15%." },
              { icon: "Wallet", title: "Стоимость", text: "149 ₽ при заказе до 1000 ₽. Бесплатно от 1000 ₽. Самовывоз бесплатен." },
            ].map((c, i) => (
              <div key={c.title} className={`p-8 ${i < 2 ? "md:border-r border-white/10" : ""} border-b md:border-b-0 border-white/10`}>
                <div className="w-12 h-12 bg-brutal-red flex items-center justify-center mb-5">
                  <Icon name={c.icon} size={22} fallback="CheckCircle" />
                </div>
                <h3 className="font-oswald text-xl font-bold text-white uppercase mb-3">{c.title}</h3>
                <p className="font-roboto text-white/45 text-sm leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-brutal-ash border-l-4 border-brutal-yellow p-6 flex items-start gap-4">
            <Icon name="Clock" size={22} fallback="Clock" />
            <div>
              <div className="font-oswald text-white font-bold uppercase text-base mb-1">Режим работы</div>
              <div className="font-condensed text-white/55">
                Пн–Чт: 11:00–23:00 &nbsp;·&nbsp; Пт–Вс: 11:00–01:00
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
            <span className="font-condensed text-brutal-yellow uppercase tracking-widest text-xs">Отзывы</span>
          </div>
          <h2 className="section-title text-white mb-14">
            ЧТО <span className="text-brutal-red">ГОВОРЯТ</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-brutal-charcoal p-8 border-t-2 border-brutal-red hover:border-brutal-yellow transition-colors">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <span key={j} className="text-brutal-yellow text-lg">★</span>
                  ))}
                </div>
                <p className="font-roboto text-white/65 leading-relaxed mb-6 italic">«{r.text}»</p>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="font-oswald text-white font-semibold uppercase text-sm">{r.name}</span>
                  <span className="font-condensed text-white/25 text-xs uppercase tracking-wider">{r.date}</span>
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
            <span className="font-condensed text-brutal-yellow uppercase tracking-widest text-xs">Контакты</span>
          </div>
          <h2 className="section-title text-white mb-14">
            НАЙДИ <span className="text-brutal-red">НАС</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              {[
                { icon: "MapPin", title: "Адрес", text: "ул. Гагарина, 42, 2-й этаж", sub: "Рядом с ТЦ «Центральный»" },
                { icon: "Phone", title: "Телефон", text: "+7 (900) 000-00-00", sub: "Ежедневно в часы работы" },
                { icon: "Clock", title: "Режим работы", text: "Пн–Чт 11:00–23:00", sub: "Пт–Вс 11:00–01:00" },
                { icon: "Instagram", title: "Инстаграм", text: "@butchburger", sub: "Фото, акции, новинки" },
              ].map((c) => (
                <div key={c.title} className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-brutal-red flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon} size={20} fallback="MapPin" />
                  </div>
                  <div>
                    <div className="font-condensed text-white/35 text-xs uppercase tracking-widest mb-1">{c.title}</div>
                    <div className="font-oswald text-white text-xl font-semibold">{c.text}</div>
                    <div className="font-condensed text-white/40 text-sm">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative bg-brutal-ash h-[400px] flex items-center justify-center overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.1) 39px, rgba(255,255,255,0.1) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.1) 39px, rgba(255,255,255,0.1) 40px)"
                }}
              />
              <div className="text-center z-10">
                <div className="w-16 h-16 bg-brutal-red flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} fallback="MapPin" />
                </div>
                <div className="font-oswald text-white text-xl uppercase font-bold">ул. Гагарина, 42</div>
                <div className="font-condensed text-white/40 text-sm mt-1">2-й этаж · Центр города</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brutal-dark border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-oswald text-2xl font-bold tracking-widest">
            <span className="text-brutal-red">BUTCH</span>
            <span className="text-white"> BURGER</span>
          </div>
          <div className="hidden md:flex gap-6 flex-wrap justify-center">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="nav-link text-xs">{l.label}</a>
            ))}
          </div>
          <div className="font-condensed text-white/20 text-xs uppercase tracking-wider">
            © 2026 Butch Burger
          </div>
        </div>
      </footer>

    </div>
  );
}
