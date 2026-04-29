import { Check, Clock, ArrowLeft, MapPin } from 'lucide-react';
import { PageProps } from '../types';

export function Tracking({ onNavigate }: PageProps) {
  return (
    <div className="bg-background font-body text-body text-on-background min-h-screen flex flex-col items-center relative overflow-x-hidden antialiased selection:bg-primary-container selection:text-on-primary-container">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-60 mix-blend-multiply">
        <div className="absolute top-[-10%] left-[-20%] w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] bg-secondary-container/20 blur-[100px] rounded-full"></div>
        <div className="absolute top-[10%] right-[-10%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-primary-container/10 blur-[80px] rounded-full"></div>
      </div>

      <main className="w-full max-w-[480px] px-margin-mobile py-xl flex flex-col items-center relative z-10 pb-20">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mt-lg mb-xl w-full animate-[fadeIn_0.5s_ease-out]">
          <div className="relative flex items-center justify-center mb-lg">
            <div className="absolute inset-0 bg-secondary-container rounded-full blur-[24px] opacity-70 animate-pulse scale-110"></div>
            <div className="relative w-[120px] h-[120px] bg-secondary-container rounded-full flex items-center justify-center border-[6px] border-surface-container-lowest shadow-[0_20px_40px_rgba(0,108,73,0.15)] z-10">
              <Check className="text-secondary" size={64} strokeWidth={3} />
            </div>
          </div>
          <h1 className="font-h1 text-h1 text-on-background mb-xs tracking-tight">Order Placed!</h1>
          <p className="font-body text-body text-on-surface-variant max-w-[280px]">
            Your food is being prepared... 
            <span className="inline-flex items-center justify-center font-label text-label text-primary bg-primary-container/10 px-sm py-xs rounded-full mt-2 ml-1 align-middle">
              <Clock size={14} className="mr-1" />
              25 mins
            </span>
          </p>
        </div>

        {/* Order Info Card */}
        <div className="w-full bg-surface-container-lowest/80 backdrop-blur-[24px] rounded-[24px] p-lg shadow-[0_10px_40px_rgba(40,23,21,0.04)] border border-white/60 mb-lg flex flex-col gap-md transition-all duration-300">
          <div className="flex justify-between items-center">
            <span className="font-label text-label text-outline uppercase tracking-wider">Order Number</span>
            <span className="font-body text-body text-on-background font-medium">#ORD-84729</span>
          </div>
          <div className="h-[1px] w-full bg-outline-variant/30"></div>
          <div className="flex items-start gap-md">
            <div className="mt-1 w-10 h-10 shrink-0 bg-surface-container rounded-full flex items-center justify-center text-primary">
              <MapPin size={20} />
            </div>
            <div className="flex flex-col gap-xs">
              <span className="font-label text-label text-outline uppercase tracking-wider">Delivery Address</span>
              <span className="font-body text-body text-on-background leading-tight">123 Epicurean Boulevard,<br/>Penthouse Suite 4B</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="w-full bg-surface-container-lowest/80 backdrop-blur-[24px] rounded-[24px] p-lg shadow-[0_10px_40px_rgba(40,23,21,0.04)] border border-white/60 mb-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-lg">
            <h2 className="font-h2 text-h2 text-on-background">Live Tracking</h2>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          </div>
          
          <div className="relative pl-[32px]">
            <div className="absolute left-[15px] top-[16px] bottom-[24px] w-[2px] bg-outline-variant/30 z-0"></div>
            <div className="absolute left-[15px] top-[16px] h-[50px] w-[2px] bg-primary z-0"></div>
            
            <div className="relative z-10 flex items-start pb-[32px]">
              <div className="absolute left-[-32px] top-0 w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center border-4 border-surface-container-lowest shadow-sm">
                <Check className="text-secondary" size={14} strokeWidth={3} />
              </div>
              <div className="flex flex-col">
                <span className="font-body text-body text-on-background font-medium">Order Received</span>
                <span className="font-label text-label text-on-surface-variant/70 mt-1">12:45 PM</span>
              </div>
            </div>

            <div className="relative z-10 flex items-start pb-[32px]">
              <div className="absolute left-[-32px] top-0 flex items-center justify-center w-8 h-8">
                <div className="absolute w-8 h-8 bg-primary/20 rounded-full animate-ping"></div>
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-surface-container-lowest z-10"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-body text-body text-primary font-semibold">Preparing</span>
                <span className="font-label text-label text-primary/80 mt-1">The chef is crafting your meal</span>
              </div>
            </div>

            <div className="relative z-10 flex items-start pb-[32px] opacity-60">
              <div className="absolute left-[-32px] top-0 flex items-center justify-center w-8 h-8">
                <div className="w-3 h-3 bg-outline rounded-full border-2 border-surface-container-lowest"></div>
              </div>
              <div className="flex flex-col pt-1">
                <span className="font-body text-body text-on-surface-variant font-medium">On the Way</span>
              </div>
            </div>

            <div className="relative z-10 flex items-start opacity-60">
              <div className="absolute left-[-32px] top-0 flex items-center justify-center w-8 h-8">
                <div className="w-3 h-3 bg-outline rounded-full border-2 border-surface-container-lowest"></div>
              </div>
              <div className="flex flex-col pt-1">
                <span className="font-body text-body text-on-surface-variant font-medium">Delivered</span>
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={() => onNavigate('home')}
          className="w-full py-md rounded-full bg-surface-container-highest/60 backdrop-blur-md border border-outline-variant/30 text-on-surface font-label text-label hover:bg-surface-variant transition-all active:scale-[0.98] flex items-center justify-center gap-xs mt-auto"
        >
          <ArrowLeft size={18} />
          Back to Home
        </button>
      </main>
    </div>
  );
}
