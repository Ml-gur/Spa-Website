import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/homepage-african-luxury-spa' },
    { name: 'Treatments', path: '/treatment-experiences' },
    { name: 'Our Team', path: '/expert-team-showcase' },
    { name: 'Heritage', path: '/cultural-heritage-hub' },
    { name: 'Book Now', path: '/booking-intelligence-portal' }
  ];

  const treatments = [
    'Traditional Shea Butter Ritual',
    'Baobab Oil Renewal',
    'Kenyan Coffee Body Polish',
    'African Facial Treatments',
    'Cultural Wellness Packages'
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com/serenityspa' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/serenityspa' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/serenityspa' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/company/serenityspa' }
  ];

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Karibu! I'd like to learn more about Serenity Spa Kenya services.");
    window.open(`https://wa.me/254700000000?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9ZM19 21H5V3H13V9H19V21ZM12 8C14.8 8 17 10.2 17 13S14.8 18 12 18S7 15.8 7 13S9.2 8 12 8ZM12 10C10.3 10 9 11.3 9 13S10.3 16 12 16S15 14.7 15 13S13.7 10 12 10Z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold">Serenity Spa</span>
                <span className="font-accent text-sm text-accent">Kenya</span>
              </div>
            </div>
            
            <p className="font-body text-white/80 mb-6 leading-relaxed">
              Where heritage meets luxury. Experience authentic African beauty traditions in Kenya's most sophisticated wellness sanctuary.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={16} className="text-accent" />
                <span className="font-body text-sm text-white/80">Westlands Square, Nairobi</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={16} className="text-accent" />
                <span className="font-body text-sm text-white/80">+254 700 000 000</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={16} className="text-accent" />
                <span className="font-body text-sm text-white/80">karibu@serenityspa.ke</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-white/80 hover:text-accent transition-cultural text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-6">Our Treatments</h3>
            <ul className="space-y-3">
              {treatments.map((treatment, index) => (
                <li key={index}>
                  <Link
                    to="/treatment-experiences"
                    className="font-body text-white/80 hover:text-accent transition-cultural text-sm"
                  >
                    {treatment}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-6">Stay Connected</h3>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="font-body text-white/80 text-sm mb-4">
                Subscribe for beauty tips and exclusive offers
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 text-sm focus:outline-none focus:border-accent"
                />
                <Button
                  variant="default"
                  size="sm"
                  iconName="Send"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-6">
              <p className="font-body text-white/80 text-sm mb-4">Follow us on social media</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-cultural"
                  >
                    <Icon name={social.icon} size={18} className="text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Button
              variant="outline"
              size="sm"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={handleWhatsAppContact}
              className="border-success text-success hover:bg-success hover:text-success-foreground w-full"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>

        {/* Cultural Divider */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full opacity-50"></div>
        </div>

        {/* Operating Hours */}
        <div className="text-center mb-8">
          <h4 className="font-heading text-lg font-bold mb-4">Operating Hours</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="font-body text-accent">Mon - Fri:</span>
              <span className="font-body text-white/80 ml-2">8:00 AM - 8:00 PM</span>
            </div>
            <div>
              <span className="font-body text-accent">Saturday:</span>
              <span className="font-body text-white/80 ml-2">9:00 AM - 7:00 PM</span>
            </div>
            <div>
              <span className="font-body text-accent">Sunday:</span>
              <span className="font-body text-white/80 ml-2">10:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="font-body text-white/60 text-sm">
                © {currentYear} Serenity Spa Kenya. All rights reserved.
              </p>
              <p className="font-accent text-white/40 text-xs italic">
                Celebrating African beauty traditions since 2020
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <a href="#" className="font-body text-white/60 hover:text-accent transition-cultural">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-white/60 hover:text-accent transition-cultural">
                Terms of Service
              </a>
              <a href="#" className="font-body text-white/60 hover:text-accent transition-cultural">
                Cancellation Policy
              </a>
            </div>
          </div>

          {/* Cultural Message */}
          <div className="text-center mt-4 pt-4 border-t border-white/5">
            <p className="font-accent text-accent/80 text-sm italic">
              "Asante sana for choosing Serenity Spa Kenya - Where your natural beauty meets ancestral wisdom"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;