import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Creator Hub - OnThePixel.net",
  description: "Entdecke unsere Content Creator und folge ihnen auf all ihren Social Media Kanälen.",
};

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 relative overflow-hidden">
        {/* Background Stars */}
        <div className="absolute inset-0">
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-60" style={{top: '10%', left: '15%', animationDelay: '0s'}}></div>
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-40" style={{top: '80%', left: '25%', animationDelay: '1s'}}></div>
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-60" style={{top: '30%', left: '85%', animationDelay: '2s'}}></div>
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-40" style={{top: '70%', left: '10%', animationDelay: '1.5s'}}></div>
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-60" style={{top: '20%', left: '70%', animationDelay: '0.5s'}}></div>
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-40" style={{top: '60%', left: '90%', animationDelay: '2.5s'}}></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-2">
                Creator Hub
              </h1>
              <p className="text-white/70 text-lg">
                OnThePixel.net
              </p>
            </div>
            
            {/* Info */}
            <div className="text-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm text-white rounded-lg p-6 border border-white/20">
                <i className="fas fa-info-circle text-2xl text-blue-400 mb-4"></i>
                <h2 className="text-xl font-bold mb-2">Creator Links</h2>
                <p className="text-white/80 mb-4">
                  Um die Social Media Links eines Creators zu sehen, besuche:
                </p>
                <code className="bg-black/30 px-3 py-1 rounded text-emerald-400 text-sm">
                  /[creator-name]
                </code>
              </div>
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