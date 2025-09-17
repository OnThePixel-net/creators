import { Metadata } from 'next';

// TypeScript Interfaces - Next.js 15 Format
interface Platform {
  Icons: string;
  Link: string;
}

interface CreatorData {
  Minecarft_username: string;
  Name: string;
  Platforms: Platform[];
}

interface CreatorPageProps {
  params: Promise<{ creator: string }>;
}

// Utility Functions
const getIconClass = (platform: string): string => {
  const iconMap: Record<string, string> = {
    'twitch': 'fab fa-twitch',
    'discord': 'fab fa-discord',
    'youtube': 'fab fa-youtube',
    'tiktok': 'fab fa-tiktok',
    'x_twitter': 'fab fa-twitter',
    'instagram': 'fab fa-instagram',
    'facebook': 'fab fa-facebook-f',
    'snapchat': 'fab fa-snapchat-ghost',
    'linkedin': 'fab fa-linkedin-in',
    'github': 'fab fa-github',
    'spotify': 'fab fa-spotify'
  };
  return iconMap[platform.toLowerCase()] || 'fas fa-link';
};

// Main Component
export default async function CreatorPage({ params }: CreatorPageProps) {
  const { creator } = await params; // ✅ Await params
  
  // Fetch creator data
  let creatorData: CreatorData;
  
  try {
    const res = await fetch(`https://cms.onthepixel.net/items/Creators?filter[Name][_eq]=${creator}`);
    if (!res.ok) throw new Error('API Error');
    
    const { data }: { data: CreatorData[] } = await res.json();
    if (!data || data.length === 0) throw new Error('Creator not found');
    
    creatorData = data[0];
  } catch (_error) { // ✅ Fixed: prefixed with underscore to indicate intentionally unused
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <div className="text-center">
          <i className="fas fa-exclamation-triangle text-red-400 text-4xl mb-4"></i>
          <h1 className="text-2xl font-bold text-white mb-2">Creator nicht gefunden</h1>
          <p className="text-white/60">Der gesuchte Creator konnte nicht gefunden werden.</p>
        </div>
      </div>
    );
  }

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
                {creatorData.Name}
              </h1>
            </div>
            
            {/* Social Media Links */}
            <div className="space-y-3 mb-8">
              {creatorData.Platforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 px-6 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
                >
                  <div className="flex items-center justify-center">
                    <i className={`${getIconClass(platform.Icons)} mr-3 text-xl`}></i>
                    <span className="text-lg font-medium capitalize">
                      {platform.Icons.replace('_', ' ')}
                    </span>
                  </div>
                </a>
              ))}
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

// Metadata Generation - auch mit async params
export async function generateMetadata({ params }: CreatorPageProps): Promise<Metadata> {
  const { creator } = await params; // ✅ Await params hier auch
  
  try {
    const res = await fetch(`https://cms.onthepixel.net/items/Creators?filter[Name][_eq]=${creator}`);
    if (!res.ok) throw new Error('Creator not found');
    
    const { data }: { data: CreatorData[] } = await res.json();
    if (!data || data.length === 0) throw new Error('Creator not found');
    
    const creatorData = data[0];
    
    return {
      title: `${creatorData.Name} – Content Creator | OnThePixel`,
      description: `Folge ${creatorData.Name} auf all seinen Social Media Kanälen. Entdecke Content auf Twitch, Discord, TikTok und mehr.`,
      keywords: `${creatorData.Name}, Content Creator, OnThePixel, Gaming, Streaming, Community`,
      openGraph: {
        title: `${creatorData.Name} – Content Creator`,
        description: `Folge ${creatorData.Name} auf all seinen Social Media Kanälen`,
        type: 'profile',
        siteName: 'OnThePixel.net'
      },
      twitter: {
        card: 'summary_large_image',
        title: `${creatorData.Name} – Content Creator`,
        description: `Folge ${creatorData.Name} auf all seinen Social Media Kanälen`
      }
    };
  } catch (_error) { // ✅ Fixed: prefixed with underscore to indicate intentionally unused
    return {
      title: 'Creator nicht gefunden – OnThePixel',
      description: 'Der gesuchte Creator konnte nicht gefunden werden.',
    };
  }
}
