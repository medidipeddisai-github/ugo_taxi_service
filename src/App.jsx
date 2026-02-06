import React, { useState, useEffect } from 'react';
import './App.css';
import autoImg from './assets/ugo_auto.png'
import carBikeImg from './assets/ugo_car_bike.png'
import screen1 from "./assets/screens/screen1.jpeg";
import screen2 from "./assets/screens/screen2.jpeg";
import screen3 from "./assets/screens/screen3.jpeg";
import screen4 from "./assets/screens/screen4.jpeg";
import screen5 from "./assets/screens/screen5.jpeg";
import screen6 from "./assets/screens/screen6.jpeg";
import screen7 from "./assets/screens/screen7.jpeg";
import screen8 from "./assets/screens/screen8.jpeg";
import screen9 from "./assets/screens/screen9.jpeg";
import screen10 from "./assets/screens/screen10.jpeg";
import logos from "./assets/ugo_logo.png";

const UgoTaxiWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeTab, setActiveTab] = useState('scanner');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'features', 'howitworks', 'app', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const appScreens = [
  screen1,
  screen2,
  screen3,
  screen4,
  screen5,
  screen6,
  screen7,
  screen8,
  screen9,
  screen10,
];

  const features = [
    {
      icon: '💰',
      title: "Budget Friendly",
      description: "Affordable and convenient cab and bike booking services at your fingertips. Travel smart, save more with every ride."
    },
    {
      icon: '🕐',
      title: "24 Hours Support",
      description: "Round-the-clock customer support, ready to assist you 24/7. We're here for you anytime, day or night."
    },
    {
      icon: '📱',
      title: "Easy Booking",
      description: "Seamless booking process with both QR scanner and traditional app booking. Just a few taps or a quick scan away!"
    },
    {
      icon: '🛡️',
      title: "Safety First",
      description: "Your safety is our top priority. We ensure secure rides with trusted drivers and well-maintained vehicles."
    }
  ];

  const scannerBookingSteps = [
    {
      icon: '📍',
      title: "Reach Driver Location",
      description: "Go to your nearest UGO driver at pickup points like Hitec City, Airport, or any designated location."
    },
    {
      icon: '🎯',
      title: "Select Destination",
      description: "Tell the driver your destination. Driver will display the QR code with ride details on their device."
    },
    {
      icon: '📷',
      title: "Scan QR Code",
      description: "Open UGO app, scan the driver's QR code to view fare and confirm your ride instantly."
    },
    {
      icon: '🚗',
      title: "Enjoy Your Ride",
      description: "Once confirmed, your ride starts immediately. Pay at the end and rate your experience!"
    }
  ];

  const normalBookingSteps = [
    {
      icon: '📱',
      title: "Open App",
      description: "Download UGO TAXI app from Play Store or App Store and open after giving necessary permissions."
    },
    {
      icon: '📍',
      title: "Book a Ride",
      description: "Select your pickup location and destination, then click 'Book a Ride' to see available drivers."
    },
    {
      icon: '💳',
      title: "Select Payment",
      description: "Choose your preferred payment option - Cash, UPI, Cards, Wallets, etc."
    },
    {
      icon: '🚗',
      title: "Enjoy Your Ride",
      description: "After payment confirmation, our driver will reach you. Track in real-time and enjoy your ride!"
    }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo">
              <img src={logos} alt="UGO Taxi Logo" className="logo-img" />
              {/* <h1>UGO TAXI</h1>
              <p className="tagline">Your Ride, Your Way</p> */}
            </div>

            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              {['home', 'about', 'features', 'howitworks', 'app', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                >
                  {section === 'howitworks' ? 'How It Works' : section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            {/* <div className="nav-contact">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="contact-btn whatsapp">
                <span>📱</span>
              </a>
              <a href="tel:+919876543289
              
              " className="contact-btn phone">
                <span>📞</span>
              </a>
            </div> */}

            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">India's Most Innovative Taxi Service</h1>
              <p className="hero-description">
                Welcome to UGO TAXI SERVICES - Your Ultimate Travel Companion! Experience revolutionary QR Scanner Booking 
                or traditional app booking. Choose from our diverse fleet of bikes, autos, and cabs for a personalized 
                and convenient travel experience. Scan & Go or Book & Go - The choice is yours!
              </p>
              <div className="hero-buttons">
                <a href="#" className="btn btn-primary">Download on Play Store</a>
                <a href="#" className="btn btn-secondary">Download on App Store</a>
              </div>
            </div>
            <div className="hero-image">
              <div className="blob blob-1"></div>
              <div className="blob blob-2"></div>
              <img
                src={autoImg}
                alt="Auto Taxi Service"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img
                src={carBikeImg}
                alt="Bike and Car Rides"
              
              />
            </div>
            <div className="about-text">
              <h2 className="section-title">About UGO TAXI</h2>
              <h3 className="section-subtitle">Built For Everyone Who Wants Comfort and Safe Driving</h3>
              <p>
                UGO TAXI is proud to introduce India's first QR Scanner-based taxi booking system alongside traditional 
                app booking. We're revolutionizing the way people book rides with instant QR code scanning technology.
              </p>
              <p>
                The main intention of UGO TAXI is to do justice to both drivers and passengers. You can travel wherever 
                you need to, book rides on time at very low prices, and our network is reliable and skilled. Whether you 
                choose our innovative scanner booking at pickup points or traditional app booking from anywhere, we've got you covered.
              </p>
              <p>
                Above all, we are always committed to giving you complete safety and comfort in every journey. Both riders 
                and passengers are two eyes for us. It is our responsibility to take care. We promise, believe, and bless us. 
                Thank you!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Amazing Features</h2>
            <p className="section-description">Experience the best of both worlds with UGO TAXI</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="howitworks" className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How It Works?</h2>
            <p className="section-description">Choose your preferred booking method</p>
          </div>

          <div className="tabs">
            <div className="tab-buttons">
              <button
                onClick={() => setActiveTab('scanner')}
                className={`tab-btn ${activeTab === 'scanner' ? 'active' : ''}`}
              >
                <span className="tab-icon">🔳</span>
                Scanner Booking
              </button>
              <button
                onClick={() => setActiveTab('normal')}
                className={`tab-btn ${activeTab === 'normal' ? 'active' : ''}`}
              >
                <span className="tab-icon">📱</span>
                Normal Booking
              </button>
            </div>

            {activeTab === 'scanner' && (
              <div className="tab-content">
                <div className="booking-info">
                  <h3>🎯 QR Scanner Booking - Instant & Easy!</h3>
                  <p>
                    Perfect for commuters at busy locations like Hitec City, Airport, Malls, and Metro Stations. 
                    No waiting time - just walk up to a UGO driver, scan their QR code, and start your ride instantly!
                  </p>
                </div>
                <div className="steps-grid">
                  {scannerBookingSteps.map((step, index) => (
                    <div key={index} className="step-card">
                      <div className="step-number">{index + 1}</div>
                      <div className="step-icon">{step.icon}</div>
                      <h3 className="step-title">{step.title}</h3>
                      <p className="step-description">{step.description}</p>
                      {index < scannerBookingSteps.length - 1 && <div className="step-arrow">→</div>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'normal' && (
              <div className="tab-content">
                <div className="booking-info booking-info-blue">
                  <h3>📱 Traditional App Booking</h3>
                  <p>
                    Book from anywhere, anytime! Perfect when you need a ride to come to your location. 
                    Our app connects you with nearby drivers instantly with real-time tracking.
                  </p>
                </div>
                <div className="steps-grid">
                  {normalBookingSteps.map((step, index) => (
                    <div key={index} className="step-card step-card-blue">
                      <div className="step-number step-number-blue">{index + 1}</div>
                      <div className="step-icon">{step.icon}</div>
                      <h3 className="step-title">{step.title}</h3>
                      <p className="step-description">{step.description}</p>
                      {index < normalBookingSteps.length - 1 && <div className="step-arrow">→</div>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* App Screens Section */}
      <section id="app" className="app-screens">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">App Screens</h2>
            <p className="section-description">Amazing visual interface - Upload screenshots to see them here</p>
          </div>
          
          <div className="screens-wrapper">
           <div className="screens-container">
            {appScreens.map((screen, index) => (
              <div key={index} className="screen-card">
                <img
                  src={screen}
                  alt={`App Screen ${index + 1}`}
                  className="app-screen-image"
                />
              </div>
            ))}
          </div>
            <div className="scroll-indicator">← Scroll to view more screens →</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-description">We'd love to hear from you</p>
          </div>

          <div className="contact-content">
            <div className="contact-form-wrapper">
              <form className="contact-form">
                <div className="form-group">
                  <label>Name:</label>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input type="email" placeholder="your.email@example.com" />
                </div>
                <div className="form-group">
                  <label>Phone:</label>
                  <input type="tel" placeholder="+91 9876543210" />
                </div>
                <div className="form-group">
                  <label>Message:</label>
                  <textarea rows="4" placeholder="Your message..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-full">Submit</button>
              </form>
            </div>

            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-text">
                  <h3>Phone</h3>
                  <p>+91 9876543210</p>
                  <p>+91 9876543211</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-text">
                  <h3>Email</h3>
                  <p>ugotaxiservices.com</p>
                  <p>info@ugotaxi.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-text">
                  <h3>Address</h3>
                  <p>Hitec City, Hyderabad</p>
                  <p>Telangana 500081</p>
                </div>
              </div>

              <div className="map-container">
              <iframe
                title="UGO Taxi Location"
                src="https://www.google.com/maps?q=Hitec%20City%20Hyderabad&output=embed"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-col footer-col-main">
              <h3 className="footer-logo">UGO TAXI</h3>
              <p>
                Welcome to UGO TAXI SERVICES - Your Ultimate Travel Companion! Choose from our innovative 
                QR Scanner booking or traditional app booking for a personalized and convenient travel experience.
              </p>
            </div>

            <div className="footer-col">
              <h4>Useful Links</h4>
              <ul>
                {['Home', 'About', 'Features', 'How It Works', 'App Screens', 'Contact'].map((link) => (
                  <li key={link}>
                    <button onClick={() => scrollToSection(link.toLowerCase().replace(' ', ''))}>
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4>Need Help?</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Cancellation Policy</a></li>
                <li><a href="#">Refund Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© Copyrights 2025 UGO TAXI Services. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="floating-buttons">
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="float-btn whatsapp-float">
          <span>📱</span>
        </a>
        <a href="tel:+919876543210" className="float-btn phone-float">
          <span>📞</span>
        </a>
      </div>
    </div>
  );
};

export default UgoTaxiWebsite;
