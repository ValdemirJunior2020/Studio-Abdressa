// App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/studioandressa",
      icon: "fab fa-instagram"
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@studioandressa",
      icon: "fab fa-tiktok"
    },
    {
      name: "Pinterest",
      url: "https://pinterest.com/studioandressa",
      icon: "fab fa-pinterest"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/studioandressa",
      icon: "fab fa-facebook"
    }
  ];

  const services = [
    {
      title: "Design de Sobrancelhas",
      description: "Modelagem perfeita para realçar sua beleza natural",
      icon: "✏️"
    },
    {
      title: "Henna",
      description: "Pigmentação temporária para sobrancelhas mais definidas",
      icon: "🎨"
    },
    {
      title: "Brow Lamination",
      description: "Alisamento e direcionamento dos fios para efeito preenchido",
      icon: "✨"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "A Andressa é incrível! Minhas sobrancelhas ficaram perfeitas!",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "Ambiente aconchegante e profissional muito qualificada!",
      rating: 5
    },
    {
      name: "Juliana Santos",
      text: "Melhor design que já fiz! Recomendo muito!",
      rating: 5
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+554499198183";
    const message = "Olá! Gostaria de agendar um horário para design de sobrancelhas.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>Studio Andressa</h1>
            <span>Design de Sobrancelhas</span>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home">Início</a>
            <a href="#services">Serviços</a>
            <a href="#about">Sobre</a>
            <a href="#testimonials">Depoimentos</a>
            <a href="#contact">Contato</a>
          </nav>

          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Realce sua Beleza Natural</h1>
          <p>Design de sobrancelhas profissional para valorizar seus traços únicos</p>
          <button className="cta-button" onClick={handleWhatsAppClick}>
            Agendar Horário
            <i className="fab fa-whatsapp"></i>
          </button>
          
          {/* Social Media Links */}
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <button
                key={index}
                className="social-button"
                onClick={() => handleSocialClick(social.url)}
                aria-label={social.name}
              >
                <i className={social.icon}></i>
              </button>
            ))}
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/547724406_24451775317825331_3625003812805253691_n.jpg?stp=cp6_dst-jpg_p526x296_tt6&_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-zkYmY1ZV-IQ7kNvwHNwoAJ&_nc_oc=Adk_WFY44pGjQAVifKwquIfGDiwJ_dKg3WyEO3OkAMJgvPyj8-H-QvOvUS-vxfzpAzg&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=uwENNRYeijECdmuU1xSCbQ&oh=00_AfiUSWrnFgREyPbjVrCQYtJ1oPJUiY-PH3a2Ucx92S_sfw&oe=690ECEAA" 
            alt="Andressa - Especialista em Design de Sobrancelhas"
            className="profile-image"
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Nossos Serviços</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Sobre Mim</h2>
              <p>
                Sou Andressa, especialista em design de sobrancelhas com mais de 5 anos 
                de experiência. Meu objetivo é realçar sua beleza natural através de 
                técnicas precisas e personalizadas.
              </p>
              <p>
                Utilizo apenas produtos de alta qualidade e técnicas modernas para 
                garantir o melhor resultado para cada cliente.
              </p>
              
              {/* Social Media in About Section */}
              <div className="about-social">
                <h3>Siga nas Redes Sociais</h3>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <button
                      key={index}
                      className="social-button"
                      onClick={() => handleSocialClick(social.url)}
                      aria-label={social.name}
                    >
                      <i className={social.icon}></i>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="about-image">
              <img 
                src="https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/547724406_24451775317825331_3625003812805253691_n.jpg?stp=cp6_dst-jpg_p526x296_tt6&_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-zkYmY1ZV-IQ7kNvwHNwoAJ&_nc_oc=Adk_WFY44pGjQAVifKwquIfGDiwJ_dKg3WyEO3OkAMJgvPyj8-H-QvOvUS-vxfzpAzg&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=uwENNRYeijECdmuU1xSCbQ&oh=00_AfiUSWrnFgREyPbjVrCQYtJ1oPJUiY-PH3a2Ucx92S_sfw&oe=690ECEAA" 
                alt="Andressa - Especialista em Design de Sobrancelhas"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>O que Nossas Clientes Dizem</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="stars">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p>"{testimonial.text}"</p>
                <h4>- {testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Entre em Contato</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <i className="fab fa-whatsapp"></i>
                <div>
                  <h3>WhatsApp</h3>
                  <p>+55 44 9919-8183</p>
                  <button className="contact-button" onClick={handleWhatsAppClick}>
                    Enviar Mensagem
                  </button>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h3>Horário de Atendimento</h3>
                  <p>Segunda a Sábado: 9h às 18h</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Localização</h3>
                  <p>Studio Andressa - Maringá/PR</p>
                </div>
              </div>
              
              {/* Social Media in Contact Section */}
              <div className="contact-item">
                <i className="fas fa-share-alt"></i>
                <div>
                  <h3>Redes Sociais</h3>
                  <div className="social-links">
                    {socialLinks.map((social, index) => (
                      <button
                        key={index}
                        className="social-button small"
                        onClick={() => handleSocialClick(social.url)}
                        aria-label={social.name}
                      >
                        <i className={social.icon}></i>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <div className="whatsapp-float" onClick={handleWhatsAppClick}>
        <i className="fab fa-whatsapp"></i>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Studio Andressa</h3>
              <p>Design de Sobrancelhas Profissional</p>
            </div>
            <div className="footer-section">
              <h3>Contato</h3>
              <p>WhatsApp: +55 44 9919-8183</p>
              <p>Maringá - PR</p>
            </div>
            <div className="footer-section">
              <h3>Siga-nos</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className="social-button small"
                    onClick={() => handleSocialClick(social.url)}
                    aria-label={social.name}
                  >
                    <i className={social.icon}></i>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Studio Andressa - Design de Sobrancelhas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;