'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function IcebookPage() {
  useEffect(() => {
    // Particle System
    function createParticle() {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.width = particle.style.height = Math.random() * 4 + 2 + 'px';
      particle.style.animationDuration = Math.random() * 3 + 5 + 's';
      particle.style.animationDelay = Math.random() * 2 + 's';
      
      const particlesContainer = document.getElementById('particles');
      if (particlesContainer) {
        particlesContainer.appendChild(particle);
        
        setTimeout(() => {
          particle.remove();
        }, 8000);
      }
    }
    
    // Create particles continuously
    const particleInterval = setInterval(createParticle, 300);
    
    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        backToTopButton?.classList.remove('opacity-0', 'invisible', 'translate-y-10');
        backToTopButton?.classList.add('opacity-100', 'visible', 'translate-y-0');
      } else {
        backToTopButton?.classList.add('opacity-0', 'invisible', 'translate-y-10');
        backToTopButton?.classList.remove('opacity-100', 'visible', 'translate-y-0');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    const handleBackToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    
    backToTopButton?.addEventListener('click', handleBackToTop);
    
    // Add entrance animations on load
    const elements = document.querySelectorAll('.animate-slide-up');
    elements.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `${index * 0.1}s`;
    });
    
    // Interactive hover effects for social buttons
    document.querySelectorAll('.btn-glow').forEach(button => {
      button.addEventListener('mouseenter', (e) => {
        const target = e.target as HTMLElement;
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.1)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.width = ripple.style.height = '100px';
        ripple.style.marginLeft = ripple.style.marginTop = '-50px';
        
        target.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
    
    return () => {
      clearInterval(particleInterval);
      window.removeEventListener('scroll', handleScroll);
      backToTopButton?.removeEventListener('click', handleBackToTop);
    };
  }, []);

  return (
    <>
      {/* Particle Background */}
      <div id="particles" className="fixed inset-0 pointer-events-none z-0"></div>
      
      {/* Hero Section */}
      <div className="hero-bg relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-8">
            <Image 
              src="/pictures/icebook.png" 
              alt="Icebook Logo" 
              width={128}
              height={128}
              className="rounded-full"
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-white mb-4 text-glow tracking-tight">
            ICEBOOK
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>
        
        {/* Social Media Cards */}
        <div className="w-full max-w-lg mx-auto space-y-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
          {/* Twitch */}
          <a href="https://twitch.tv/icebook_" className="btn-glow glass-card rounded-2xl p-6 flex items-center justify-between group transform transition-all duration-300">
            <div className="flex items-center">
              <div>
                <h3 className="text-white font-semibold text-lg">Twitch</h3>
                <p className="text-gray-300 text-sm">Live Gaming Streams</p>
              </div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
              <i className="fas fa-external-link-alt text-white"></i>
            </div>
          </a>
          
          {/* Discord */}
          <a href="https://discord.gg/hS7dXYuYAZ" className="btn-glow glass-card rounded-2xl p-6 flex items-center justify-between group transform transition-all duration-300">
            <div className="flex items-center">
              <div>
                <h3 className="text-white font-semibold text-lg">Discord</h3>
                <p className="text-gray-300 text-sm">Community Chat</p>
              </div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
              <i className="fas fa-external-link-alt text-white"></i>
            </div>
          </a>
          
          {/* TikTok */}
          <a href="https://www.tiktok.com/@icebook6" className="btn-glow glass-card rounded-2xl p-6 flex items-center justify-between group transform transition-all duration-300">
            <div className="flex items-center">
              <div>
                <h3 className="text-white font-semibold text-lg">TikTok</h3>
                <p className="text-gray-300 text-sm">Gaming Clips</p>
              </div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
              <i className="fas fa-external-link-alt text-white"></i>
            </div>
          </a>
          
          {/* OnlyFans */}
          <a href="https://only-fans.uk/icebook" className="btn-glow glass-card rounded-2xl p-6 flex items-center justify-between group transform transition-all duration-300">
            <div className="flex items-center">
              <div>
                <h3 className="text-white font-semibold text-lg">OnlyFans</h3>
                <p className="text-gray-300 text-sm">Exclusive Content</p>
              </div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
              <i className="fas fa-external-link-alt text-white"></i>
            </div>
          </a>
        </div>
      </div>
      
      {/* Partner Section */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)'
          }}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 text-glow">Partner & Sponsoren</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <a href="https://otp.cx" className="partner-card rounded-3xl p-8 block group">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-link text-white text-3xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    OnThePixel.net
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed mb-6">
                    Offizieller Partner für Gaming-Events und Community-Aktivitäten
                  </p>
                  <div className="flex items-center text-cyan-400 font-medium group-hover:text-white transition-colors">
                    <span>Partner Website besuchen</span>
                    <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">© 2025 OnThePixel.net</p>
              <p className="text-gray-500 text-xs">OTP.cx is a domain by OnThePixel.net</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://onthepixel.net/imprint" className="text-gray-400 hover:text-white text-sm transition-colors">
                Impressum
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button id="backToTop" className="fixed bottom-8 right-8 glass rounded-full p-4 text-white opacity-0 invisible transform translate-y-10 transition-all duration-300 hover:scale-110 z-50">
        <i className="fas fa-arrow-up text-lg"></i>
      </button>
    </>
  );
}
