// App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/dessinhagmm/",
      icon: "instagram",
      color: "#E4405F"
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@studioandressa",
      icon: "tiktok",
      color: "#000000"
    },
    {
      name: "Pinterest",
      url: "https://pinterest.com/studioandressa",
      icon: "pinterest",
      color: "#BD081C"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/studioandressa",
      icon: "facebook",
      color: "#1877F2"
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

  // Função para renderizar os ícones SVG
  const renderSocialIcon = (iconName, color) => {
    switch (iconName) {
      case 'instagram':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill={color}/>
          </svg>
        );
      case 'tiktok':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" fill={color}/>
          </svg>
        );
      case 'pinterest':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" fill={color}/>
          </svg>
        );
      case 'facebook':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill={color}/>
          </svg>
        );
      default:
        return null;
    }
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
                style={{ '--social-color': social.color }}
              >
                {renderSocialIcon(social.icon, social.color)}
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
                      style={{ '--social-color': social.color }}
                    >
                      {renderSocialIcon(social.icon, social.color)}
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
                        style={{ '--social-color': social.color }}
                      >
                        {renderSocialIcon(social.icon, social.color)}
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
                    style={{ '--social-color': social.color }}
                  >
                    {renderSocialIcon(social.icon, social.color)}
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