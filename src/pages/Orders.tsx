import { Bell, Utensils, RefreshCw, Fish, Pizza } from 'lucide-react';
import { PageProps } from '../types';

export function Orders({ onNavigate }: PageProps) {
  return (
    <div className="bg-background font-body text-body text-on-background pb-32 pt-20 min-h-screen">
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-white/20 dark:border-gray-800/30 shadow-sm">
        <div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <img alt="User profile photo" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1LjfPpSLAgYnUCVb_7DxnzmfiqFlMUFJnWNJDaWxEigusnI-FPxcnIveF6AyNNed9vlWXNs7K01hbLg5v-42gsbfbz7tnK_Oh1OToPhrHjfwcqGEA9sECC9eGhUtiPnpWhbxCJ2yyBHVwP7Ej0WNtabPc2G3mLS726kMEBxIg9TrJNwOwR1qojA_mV4teZj3zANLrA2dlK2rLZEWjgTPR6ibMeE82cD1czMBi_zhNj0GBCKsrmcueKc1jcrURBbXAVZN0UnTxVPs"/>
          </div>
          <h1 className="text-xl font-extrabold text-gray-900 dark:text-white font-['Plus_Jakarta_Sans'] font-semibold tracking-tight">Gourmet Express</h1>
          <button className="text-orange-600 dark:text-orange-500 hover:opacity-80 transition-opacity active:scale-95 transition-transform duration-200">
            <Bell size={20} />
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-margin-mobile md:px-lg mt-md">
        <h2 className="font-h1 text-h1 text-on-background mb-lg">My Orders</h2>
        
        {/* Tabs */}
        <div className="flex gap-gutter mb-lg border-b border-outline-variant pb-xs">
          <button className="font-label text-label text-primary border-b-2 border-primary pb-sm px-xs">Active Orders</button>
          <button className="font-label text-label text-on-surface-variant pb-sm px-xs hover:text-primary transition-colors">Past Orders</button>
        </div>
        
        {/* Active Order Card */}
        <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_10px_30px_rgba(26,29,32,0.04)] rounded-xl p-md mb-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
          <div className="flex justify-between items-start mb-md relative z-10">
            <div>
              <div className="inline-flex items-center gap-xs px-sm py-xs rounded-full bg-surface-container-high text-primary font-label text-label mb-sm">
                <Utensils size={16} />
                Preparing
              </div>
              <h3 className="font-h2 text-h2 text-on-background max-w-[200px]">Truffle Mushroom Burger</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Order #GE-8492 • Est. Delivery: 20-30 min</p>
            </div>
            <div className="w-24 h-24 rounded-lg overflow-hidden shadow-sm shrink-0">
              <img alt="Truffle Mushroom Burger" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPBLlhC96BG2lX1mL5QSm_JBVrVPM9m4lzuNHN-OLYtKnAqbXDW5HmeRT3sdUzKjog0vyz8fxl4C8tMgIWRzjM7dkZHVjjZYFFCWWkaE6R2JFtG-9Ss2PL3bE6uBA1FBjvyZUtlZt2GNpAqV0XbGXV92OUF4PiVLlNxyH38u5CdNmqPZ1G37T6x9RnptD4K4GeH8KoJuMxsYV06ZKD29Em6BPbOLu3BgKT1D_SUk81urqlyfIzVVKpLU2nF3bcqFe5fKyzQauPjZI"/>
            </div>
          </div>
          <div className="w-full bg-surface-container-high rounded-full h-2 mb-md relative z-10">
            <div className="bg-primary h-2 rounded-full w-1/3"></div>
          </div>
          <div className="flex gap-sm relative z-10 w-full overflow-hidden shrink-0 min-w-0">
            <button 
              onClick={() => onNavigate('tracking')}
              className="flex-1 shrink-0 bg-primary text-on-primary font-label text-label py-sm rounded-full shadow-[0_4px_12px_rgba(220,50,37,0.2)] hover:opacity-90 transition-opacity min-w-0 overflow-hidden whitespace-nowrap">Track Order</button>
            <button className="flex-1 shrink-0 bg-surface-container text-primary font-label text-label py-sm rounded-full hover:bg-surface-container-high transition-colors min-w-0 overflow-hidden whitespace-nowrap px-2">View Details</button>
          </div>
        </div>

        <h3 className="font-h2 text-h2 text-on-background mb-md">Past Orders</h3>
        <div className="space-y-gutter">
          {/* Past Order Item 1 */}
          <div className="bg-surface-container-lowest rounded-xl p-md flex items-center justify-between shadow-[0_10px_30px_rgba(26,29,32,0.04)] hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-md">
              <div className="w-16 h-16 rounded-lg bg-surface-variant flex items-center justify-center text-primary shrink-0">
                <Fish size={32} />
              </div>
              <div className="min-w-0 pr-4">
                <h4 className="font-body text-body font-semibold text-on-background line-clamp-1">Spicy Salmon Poke Bowl</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Oct 24, 2023 • $22.50</p>
              </div>
            </div>
            <button className="bg-surface-container text-primary font-label text-label px-md py-sm rounded-full hover:bg-surface-container-high transition-colors flex items-center gap-xs shrink-0 whitespace-nowrap">
              <RefreshCw size={16} />
              <span className="hidden sm:inline">Reorder</span>
            </button>
          </div>

          {/* Past Order Item 2 */}
          <div className="bg-surface-container-lowest rounded-xl p-md flex items-center justify-between shadow-[0_10px_30px_rgba(26,29,32,0.04)] hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-md">
              <div className="w-16 h-16 rounded-lg bg-surface-variant flex items-center justify-center text-primary shrink-0">
                <Pizza size={32} />
              </div>
              <div className="min-w-0 pr-4">
                <h4 className="font-body text-body font-semibold text-on-background line-clamp-1">Artisan Margherita Pizza</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Oct 18, 2023 • $18.00</p>
              </div>
            </div>
            <button className="bg-surface-container text-primary font-label text-label px-md py-sm rounded-full hover:bg-surface-container-high transition-colors flex items-center gap-xs shrink-0 whitespace-nowrap">
              <RefreshCw size={16} />
              <span className="hidden sm:inline">Reorder</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
