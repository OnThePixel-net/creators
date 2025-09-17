import Link from 'next/link';

// TypeScript Interfaces
interface Platform {
  Icons: string;
  Link: string;
}

interface CreatorData {
  Minecraft_username: string; // Fixed typo
  Name: string;
  Platforms: Platform[];
}

interface ApiResponse {
  data: CreatorData[];
}

export default async function HomePage() {
  // Fetch all creators
  let creators: CreatorData[] = [];
  
  try {
    const res = await fetch('https://cms.onthepixel.net/items/Creators', {
      // Add cache revalidation for better performance
      next: { revalidate: 300 } // 5 minutes
    });
    
    if (!res.ok) throw new Error('API Error');
    
    const data: ApiResponse = await res.json();
    creators = data.data || [];
  } catch (error) {
    console.error('Error fetching creators:', error);
    // Fallback: empty creators array will show error state
  }

  return (
    <>
      {/* FontAwesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v6.0.0/css/all.css"
      />
      
      <div className="min-h-screen bg-gray-900 relative overflow-hidden">
        {/* Background Stars */}
        <div className="absolute inset-0">
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-60" style={{top: '10%', left: '15%', animationDelay: '0s'}}></div>
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-40" style={{top: '80%', left: '25%', animationDelay: '1s'}}></div>
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-60" style={{top: '30%', left: '85%', animationDelay: '2s'}}></div>
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-40" style={{top: '70%', left: '10%', animationDelay: '1.5s'}}></div>
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-60" style={{top: '20%', left: '70%', animationDelay: '0.5s'}}></div>
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-40" style={{top: '60%', left: '90%', animationDelay: '2.5s'}}></div>
          <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-60" style={{top: '40%', left: '20%', animationDelay: '3s'}}></div>
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-40" style={{top: '90%', left: '60%', animationDelay: '2s'}}></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex flex-col px-6 py-12">
          
          {/* Hero Section */}
          <div className="text-center mb-16 pt-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Creator Hub
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
              Entdecke unsere Content Creators und folge ihnen auf all ihren Social Media Kanälen
            </p>
            <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
              <i className="fas fa-users text-4xl text-blue-400 mb-4"></i>
            </div>
          </div>

          {/* Error State */}
          {creators.length === 0 && (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-exclamation-triangle text-red-400 text-4xl mb-4"></i>
                <h2 className="text-2xl font-bold text-white mb-2">Creators nicht verfügbar</h2>
                <p className="text-white/60">Die Creator-Daten konnten nicht geladen werden.</p>
              </div>
            </div>
          )}

          {/* Creators Grid - Using Next.js Link for better performance */}
          {creators.length > 0 && (
            <div className="flex-1 max-w-6xl mx-auto w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {creators.map((creator, index) => (
                  <Link
                    key={creator.Name}
                    href={`/${creator.Name}`}
                    className="block w-full py-4 px-6 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20 animate-slide-up"
                    style={{animationDelay: `${0.6 + index * 0.1}s`}}
                  >
                    <div className="flex items-center justify-center">
                      <span className="text-lg font-medium capitalize">
                        {`/${creator.Name}`}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Partner Section */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white/90 mb-6">Partner</h2>
            <a 
              href="https://otp.cx" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block max-w-md w-full py-4 px-6 bg-emerald-500/20 backdrop-blur-sm text-white rounded-lg hover:bg-emerald-500/30 transition-all duration-300 hover:scale-105 border border-emerald-400/30"
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
    </>
  );
}
