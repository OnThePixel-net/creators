‘use client’;

import Link from ‘next/link’;

export default function NotFound() {
return (
<>
<div className="min-h-screen bg-gray-900 relative overflow-hidden">
{/* Background Stars */}
<div className="absolute inset-0">
<div className=“absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-60” style={{top: ‘10%’, left: ‘15%’, animationDelay: ‘0s’}}></div>
<div className=“absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-40” style={{top: ‘80%’, left: ‘25%’, animationDelay: ‘1s’}}></div>
<div className=“absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-60” style={{top: ‘30%’, left: ‘85%’, animationDelay: ‘2s’}}></div>
<div className=“absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-40” style={{top: ‘70%’, left: ‘10%’, animationDelay: ‘1.5s’}}></div>
<div className=“absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-60” style={{top: ‘20%’, left: ‘70%’, animationDelay: ‘0.5s’}}></div>
<div className=“absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-40” style={{top: ‘60%’, left: ‘90%’, animationDelay: ‘2.5s’}}></div>
</div>
    {/* Main Content */}
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        
        {/* 404 Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <i className="fas fa-search text-6xl text-red-400 mb-4"></i>
          </div>
          <h1 className="text-6xl font-bold text-white mb-4">
            404
          </h1>
          <h2 className="text-2xl font-bold text-white mb-2">
            Seite nicht gefunden
          </h2>
          <p className="text-white/70 text-lg">
            Die gesuchte Seite existiert nicht oder wurde verschoben.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-3 mb-8">
          <Link
            href="/"
            className="block w-full py-4 px-6 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
          >
            <div className="flex items-center justify-center">
              <i className="fas fa-home mr-3 text-xl"></i>
              <span className="text-lg font-medium">Zur Startseite</span>
            </div>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="block w-full py-4 px-6 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
          >
            <div className="flex items-center justify-center">
              <i className="fas fa-arrow-left mr-3 text-xl"></i>
              <span className="text-lg font-medium">Zurück</span>
            </div>
          </button>
        </div>
        
        
        {/* Partner */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-white/90 mb-4">Partner</h2>
          <a 
            href="https://otp.cx" 
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-4 px-6 bg-emerald-500/20 backdrop-blur-sm text-white rounded-lg hover:bg-emerald-500/30 transition-all duration-300 hover:scale-105 border border-emerald-400/30"
          >
            <div className="flex items-center justify-center">
              <i className="fas fa-link mr-3 text-xl text-emerald-400"></i>
              <span className="text-lg font-medium">OnThePixel.net</span>
            </div>
          </a>
        </div>
        
        {/* Footer */}
        <div className="text-center">
          <div className="mb-4">
            <a 
              href="https://onthepixel.net/imprint" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white/80 text-sm transition-colors underline"
            >
              Impressum
            </a>
          </div>
          <div className="text-white/50 text-sm">
            <p>&copy; 2025 OnThePixel.net</p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</>
);
}