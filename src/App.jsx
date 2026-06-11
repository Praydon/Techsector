import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      number: '01',
      title: 'PDR удаление вмятин',
      description: 'Технология безпокрасочного удаления вмятин. Сохраняем заводское ЛКП и ценность автомобиля.'
    },
    {
      number: '02',
      title: 'Реставрация ЛКП',
      description: 'Восстановление лакокрасочного покрытия с сохранением оригинальной структуры и цвета.'
    },
    {
      number: '03',
      title: 'Полировка кузова',
      description: 'Удаление царапин, потёртостей и помутнений. Возвращаем блеск заводского покрытия.'
    },
    {
      number: '04',
      title: 'Покраска элементов',
      description: 'Профессиональная покраска с подбором цвета и многослойным нанесением материалов.'
    },
    {
      number: '05',
      title: 'Восстановление геометрии',
      description: 'Стапельные работы для восстановления геометрии кузова после серьёзных повреждений.'
    },
    {
      number: '06',
      title: 'Выезд / консультация',
      description: 'Бесплатная консультация и выезд мастера для оценки повреждений на месте.'
    }
  ];

  const reviews = [
    {
      name: 'Игорь',
      text: 'Было серьёзно повреждено крыло, красить и шпаклевать не хотелось. Мастер дал честную оценку, был на связи, отправлял фото и видео. Результатом полностью доволен.',
      rating: 5
    },
    {
      name: 'Adilet',
      text: 'Нужно было удалить вмятину без покраски. Выбрал Techsector по отзывам и не прогадал. Машину забрал в тот же день, результатом доволен.',
      rating: 5
    },
    {
      name: 'Zhaneta',
      text: 'Была вмятина на багажнике. Сделали по технологии PDR — место повреждения теперь вообще не найти. Быстро, аккуратно и без лишних затрат.',
      rating: 5
    }
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo-block">
              <div className="logo">TECHSECTOR</div>
              <div className="logo-subtitle">PDR SERVICE / ALMATY</div>
            </div>

            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
              <a href="#pdr">PDR</a>
              <a href="#services">Услуги</a>
              <a href="#before-after">До / После</a>
              <a href="#reviews">Отзывы</a>
              <a href="#contact">Контакты</a>
            </nav>

            <a href="https://wa.me/77079002227" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>

            <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="pdr">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content fade-in">
            <div className="demo-badge">Demo concept / предварительная версия сайта</div>

            <h1 className="hero-title">
              УДАЛЯЕМ ВМЯТИНЫ<br />
              <span className="text-red">БЕЗ ПОКРАСКИ</span>
            </h1>

            <p className="hero-subtitle">
              PDR, реставрация ЛКП и кузовной ремонт в Алматы. Возвращаем автомобилю первозданный вид без лишнего перекраса и навязанных работ.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary btn-large">
                Получить бесплатную консультацию
              </a>
              <a href="https://wa.me/77079002227" className="btn btn-secondary btn-large" target="_blank" rel="noopener noreferrer">
                Написать в WhatsApp
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-number">4.9</div>
                <div className="stat-label">рейтинг</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">180+</div>
                <div className="stat-label">оценок</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10:00–20:00</div>
                <div className="stat-label">график</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">PDR</div>
                <div className="stat-label">без покраски</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <h2 className="section-title fade-in">
            НЕ ПРОСТО РЕМОНТ.<br />
            <span className="text-red">ВОССТАНОВЛЕНИЕ ВНЕШНЕГО ВИДА.</span>
          </h2>

          <div className="services-grid">
            {services.map((service, index) => (
              <a key={index} href="#contact" className="service-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="service-number">{service.number}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-arrow">→</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="before-after" id="before-after">
        <div className="container">
          <h2 className="section-title fade-in">
            БЫЛО ЗАМЕТНО.<br />
            <span className="text-red">СТАЛО НЕ НАЙТИ.</span>
          </h2>

          <div className="before-after-content fade-in">
            <div className="before-after-grid">
              <div className="before-after-item">
                <div className="before-after-image">
                  <div className="image-placeholder">
                    <span className="badge">BEFORE</span>
                  </div>
                </div>
              </div>
              <div className="before-after-item">
                <div className="before-after-image">
                  <div className="image-placeholder">
                    <span className="badge badge-red">AFTER</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="before-after-text">
              <p>
                Каждый случай оценивается индивидуально. Главная цель — сохранить заводское ЛКП и вернуть автомобилю аккуратный внешний вид.
              </p>

              <div className="tags">
                <span className="tag">Без шпаклёвки</span>
                <span className="tag">Без лишнего перекраса</span>
                <span className="tag">Фото/видео отчёт</span>
                <span className="tag">Честная оценка</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <div className="container">
          <h2 className="section-title fade-in">
            ПОЧЕМУ ВЫБИРАЮТ<br />
            <span className="text-red">TECHSECTOR</span>
          </h2>

          <div className="why-choose-content fade-in">
            <div className="why-visual">
              <div className="image-placeholder large">
                <div className="visual-overlay">
                  <div className="visual-text">PREMIUM<br />AUTO STUDIO</div>
                </div>
              </div>
            </div>

            <div className="why-list">
              <div className="why-item">
                <div className="why-icon">01</div>
                <div className="why-text">
                  <h3>PDR без покраски</h3>
                  <p>Сохраняем заводское покрытие, когда это возможно</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-icon">02</div>
                <div className="why-text">
                  <h3>Честная оценка</h3>
                  <p>Заранее объясняем, какой результат реально получить</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-icon">03</div>
                <div className="why-text">
                  <h3>На связи в процессе</h3>
                  <p>Отправляем фото и видео по ходу работы</p>
                </div>
              </div>

              <div className="why-item">
                <div className="why-icon">04</div>
                <div className="why-text">
                  <h3>Быстрые сроки</h3>
                  <p>Многие работы выполняются за 1 день</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews" id="reviews">
        <div className="container">
          <h2 className="section-title fade-in">
            180+ ОЦЕНОК. 4.9 РЕЙТИНГ.<br />
            <span className="text-red">РЕЗУЛЬТАТ ГОВОРИТ САМ.</span>
          </h2>

          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="review-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="review-header">
                  <div className="review-avatar">{review.name[0]}</div>
                  <div className="review-info">
                    <div className="review-name">{review.name}</div>
                    <div className="review-stars">
                      {'★'.repeat(review.rating)}
                    </div>
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="contact" id="contact">
        <div className="contact-bg"></div>
        <div className="container">
          <div className="contact-grid fade-in">
            <div className="contact-left">
              <div className="contact-badge">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</div>

              <h2 className="contact-title">
                ОТПРАВЬТЕ ФОТО ВМЯТИНЫ<br />
                И <span className="text-red">ПОЛУЧИТЕ ОЦЕНКУ</span>
              </h2>

              <p className="contact-description">
                Прикрепите фото или видео повреждения в WhatsApp. Мастер подскажет, можно ли удалить вмятину без покраски, и сориентирует по дальнейшим шагам.
              </p>

              <div className="contact-buttons">
                <a href="https://wa.me/77079002227" className="btn btn-primary btn-large" target="_blank" rel="noopener noreferrer">
                  Отправить фото в WhatsApp
                </a>
                <a href="https://instagram.com/techsector_alma_ata" className="btn btn-secondary btn-large" target="_blank" rel="noopener noreferrer">
                  Открыть Instagram
                </a>
              </div>

              <div className="contact-trust">
                Оценка по фото • Без навязанных работ • Ответим в рабочее время
              </div>
            </div>

            <div className="contact-right">
              <div className="contact-card">
                <h3 className="contact-card-title">Как это работает</h3>

                <div className="contact-steps">
                  <div className="contact-step">
                    <div className="step-number">01</div>
                    <div className="step-content">
                      <div className="step-title">Отправьте фото в WhatsApp</div>
                      <div className="step-text">Снимите вмятину с 2–3 ракурсов.</div>
                    </div>
                  </div>

                  <div className="contact-step">
                    <div className="step-number">02</div>
                    <div className="step-content">
                      <div className="step-title">Получите первичную оценку</div>
                      <div className="step-text">Мастер подскажет, подходит ли PDR без покраски.</div>
                    </div>
                  </div>

                  <div className="contact-step">
                    <div className="step-number">03</div>
                    <div className="step-content">
                      <div className="step-title">Запишитесь на осмотр</div>
                      <div className="step-text">Если нужно, согласуем удобное время в студии.</div>
                    </div>
                  </div>
                </div>

                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <span className="info-label">WhatsApp:</span>
                    <span className="info-value">+7 707 900 22 27</span>
                  </div>
                  <div className="contact-info-item">
                    <span className="info-label">Instagram:</span>
                    <span className="info-value">@techsector_alma_ata</span>
                  </div>
                  <div className="contact-info-item">
                    <span className="info-label">График:</span>
                    <span className="info-value">10:00–20:00</span>
                  </div>
                  <div className="contact-info-item">
                    <span className="info-label">Город:</span>
                    <span className="info-value">Алматы</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">TECHSECTOR</div>
              <p className="footer-text">
                PDR / кузовной ремонт / реставрация ЛКП<br />
                Almaty workshop<br />
                <span className="text-red">Demo concept</span>
              </p>
            </div>

            <div className="footer-links">
              <a href="#pdr">PDR</a>
              <a href="#services">Услуги</a>
              <a href="#before-after">До / После</a>
              <a href="#reviews">Отзывы</a>
              <a href="#contact">Контакты</a>
            </div>

            <div className="footer-social">
              <a href="https://wa.me/77079002227" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href="https://instagram.com/techsector_alma_ata" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Techsector. Premium automotive restoration.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
