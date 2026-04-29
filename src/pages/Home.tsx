import { Search, SlidersHorizontal, Heart, Star, Plus, ArrowRight } from 'lucide-react';
import { TopAppBar } from '../components/TopAppBar';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="pb-[120px]">
      <TopAppBar />
      <main className="max-w-7xl mx-auto md:pt-24 px-margin-mobile md:px-6">
        {/* Search Bar */}
        <div className="mt-base mb-lg">
          <div className="relative flex items-center w-full h-14 rounded-full bg-[#F1F3F5] px-4 overflow-hidden">
            <Search className="text-on-surface-variant ml-2" size={20} />
            <input
              className="w-full h-full bg-transparent border-none focus:ring-0 font-body text-body text-on-background outline-none placeholder:text-on-surface-variant/60 ml-2"
              placeholder="What are you craving?"
              type="text"
            />
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm ml-2 shrink-0">
              <SlidersHorizontal className="text-on-background text-sm" size={16} />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-xl -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0">
          <div className="flex gap-sm overflow-x-auto hide-scrollbar pb-2">
            <button className="px-6 py-2.5 rounded-full bg-primary text-on-primary font-label text-label whitespace-nowrap shadow-[0_4px_14px_rgba(220,50,37,0.2)]">
              All
            </button>
            {['Burgers', 'Pizza', 'Healthy', 'Sushi', 'Dessert'].map((category) => (
              <button
                key={category}
                className="px-6 py-2.5 rounded-full bg-surface-container-lowest text-on-background border border-outline-variant/30 font-label text-label whitespace-nowrap shadow-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Section */}
        <section className="mb-xl">
          <div className="flex justify-between items-end mb-gutter">
            <h2 className="font-h2 text-h2 text-on-background">Featured</h2>
            <button className="font-label text-label text-primary hover:text-primary-container transition-colors">
              See All
            </button>
          </div>
          <div className="flex gap-gutter overflow-x-auto hide-scrollbar -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0 pb-4">
            
            {/* Featured Card 1 */}
            <div className="w-[280px] md:w-[320px] shrink-0 bg-surface-container-lowest rounded-[24px] shadow-[0_10px_30px_rgba(26,29,32,0.04)] overflow-hidden flex flex-col group cursor-pointer">
              <div className="relative h-[200px] w-full overflow-hidden">
                <img
                  alt="Gourmet Burger"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuByU1rQz5VvPX_HfVqz9t8fc4spJBCSrjEPkpNOQY5BwDzvYXTZFkj2J8uWOlARRqUjDYgLgw6lnvrlWHf9PYLKsXzs1q3Z3ZHDnl1MridZwEQ_620TOyLKvzIh47tEjlOkQceLKXInH5nmXYd4sCikzKPA63Wn_IjWktYTHIev_g7-_GetHLh8zPrUQRDPazswFQB4AIDsdZZJF3vYwVOBXX6ZKlkv5cbLKifBqZFLJqgp4SzGBM2b3froeChPmLbthH5wcS7Zt-g"
                />
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-on-background shadow-sm">
                  <Heart size={16} />
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full font-label text-[10px] text-on-background flex items-center gap-1 shadow-sm">
                    <Star size={12} fill="#F59E0B" color="#F59E0B" /> 4.8
                  </span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full font-label text-[10px] text-on-background shadow-sm">
                    15-20 min
                  </span>
                </div>
              </div>
              <div className="p-md flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-body text-body font-semibold text-on-background mb-1">
                    Truffle Mushroom Burger
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                    Wagyu beef patty, truffle mayo, swiss cheese
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-h2 text-[20px] leading-tight font-bold text-on-background">
                    $18.50
                  </span>
                  <button className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-[0_4px_14px_rgba(220,50,37,0.2)] hover:bg-primary-container transition-colors">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Card 2 */}
            <div className="w-[280px] md:w-[320px] shrink-0 bg-surface-container-lowest rounded-[24px] shadow-[0_10px_30px_rgba(26,29,32,0.04)] overflow-hidden flex flex-col group cursor-pointer">
              <div className="relative h-[200px] w-full overflow-hidden">
                <img
                  alt="Artisan Pizza"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTheEEg-Y-CCYWob_S1DvmZtc3WPNlJW6yjKGxAcxI-nGjEzuk5wLgXz3JZvqmNpoa04UomxQI4X1nKziRi_5EiyHRmwaikYdFUOanJ4-K7CDI347Rd4TnZEIdZ9Pu5AUgrjI4-W70gfCx9svtJ-BvCrYpoxblSn1mkQ-4FgEk9-Agl2R1FY4BSj4Zc1xqvMr7CjU4jHEhMlP-57H6xyA7XFw70JgDzNJYEghqV-VO9yW8-f8yB_df_pXozXZxbNrg9v1oOd52C_s"
                />
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-on-background shadow-sm">
                  <Heart size={16} />
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full font-label text-[10px] text-on-background flex items-center gap-1 shadow-sm">
                    <Star size={12} fill="#F59E0B" color="#F59E0B" /> 4.9
                  </span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full font-label text-[10px] text-on-background shadow-sm">
                    20-25 min
                  </span>
                </div>
              </div>
              <div className="p-md flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-body text-body font-semibold text-on-background mb-1">
                    Burrata Margherita
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                    Fresh burrata, san marzano tomatoes, basil
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-h2 text-[20px] leading-tight font-bold text-on-background">
                    $22.00
                  </span>
                  <button className="w-10 h-10 rounded-full bg-surface-container-lowest border border-outline-variant text-on-background flex items-center justify-center hover:bg-surface-container transition-colors">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Spacer for scroll */}
            <div className="w-2 shrink-0 md:hidden"></div>
          </div>
        </section>

        {/* Popular List Section */}
        <section className="mb-xl">
          <h2 className="font-h2 text-h2 text-on-background mb-gutter">Popular Near You</h2>
          <div className="flex flex-col gap-sm">
            {/* List Item 1 */}
            <div className="bg-surface-container-lowest rounded-[20px] p-3 flex gap-4 shadow-[0_10px_30px_rgba(26,29,32,0.04)] items-center relative overflow-hidden group">
              <div className="w-[100px] h-[100px] rounded-xl overflow-hidden shrink-0 relative">
                <img
                  alt="Healthy Bowl"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIgXs0WuRXU_IcMiYGLCKOzo2xdNCxF48ap6_rDWfECiGh5l0qvo0J8dSda0ScTU79RCVIFMEUlccnW8ALl5EEC4hB-g-aZ-XiAM-l0BCmRJ_Pet3N_ZOhhgRN6d0Hw1gdCs63tzRxLk69OE_i3Xgkc34VyFx3v9mYlhZDQg2QwySmg9Omjey3O-T-dyqgkKYMlNRYVHQbRV69GGaJSxB8BS3S7CPh8sHwmRnbIO1Nlu6iAGTEKHdR_8KesIgH0-8NoNmmuP12nFA"
                />
              </div>
              <div className="flex flex-col justify-center flex-grow py-1 pr-8">
                <h3 className="font-body text-body font-semibold text-on-background">Superfood Grain Bowl</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-1 mb-2">
                  Quinoa, avocado, roasted sweet potato, kale, tahini dressing.
                </p>
                <span className="font-label text-label font-bold text-on-background">$14.95</span>
              </div>
              <button className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors">
                <Plus size={16} />
              </button>
            </div>

            {/* List Item 2 */}
            <div className="bg-surface-container-lowest rounded-[20px] p-3 flex gap-4 shadow-[0_10px_30px_rgba(26,29,32,0.04)] items-center relative overflow-hidden group">
              <div className="w-[100px] h-[100px] rounded-xl overflow-hidden shrink-0 relative">
                <img
                  alt="Sushi Roll"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS6z3qNE5G9P-X5-jK0WXofFvQ0jKgxOpAhrilCxCwO-qQX1267wp853KI9qmCSiDTHpDIhjV9XA1X4AXyRGmfgZW-ZzVhRBYLVYXAQNVsR2Bw_O9hXY-WGvH8aalIb6HKyyIR9UpXX_djmr1Bm6bt5Ok4mNTnjIQD1_zLSAFUiHosMaeoM25i5gvjjzdZ4rYXD666qqdogn9nIxprcILe_wAanYvjvhc4wm4lSzwCClSEKZXc-DjVQqHLP2kRiuhxbYYHHimx51E"
                />
              </div>
              <div className="flex flex-col justify-center flex-grow py-1 pr-8">
                <h3 className="font-body text-body font-semibold text-on-background">Spicy Tuna Crunch Roll</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-1 mb-2">
                  Fresh yellowfin, tempura flakes, spicy mayo, eel sauce.
                </p>
                <span className="font-label text-label font-bold text-on-background">$16.50</span>
              </div>
              <button className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors">
                <Plus size={16} />
              </button>
            </div>

            {/* List Item 3 */}
            <div className="bg-surface-container-lowest rounded-[20px] p-3 flex gap-4 shadow-[0_10px_30px_rgba(26,29,32,0.04)] items-center relative overflow-hidden group">
              <div className="w-[100px] h-[100px] rounded-xl overflow-hidden shrink-0 relative">
                <img
                  alt="Cheesecake"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM7Za6BgeLSl9Plfj27DqgPvfxjMA-dEIpKo9WbrD0g3YZpY0NuUf5tAlRScIsYJLB5VJMhQ_r9fD-RzqZ5SFa4dAkdrE5aYMRUcI_slgVVKP6DfMKiBXMThn6DFTR1obh59Kf8DZeppGf0sGUtI2RWAlRQPVXz5vhIm3s3X_lZC6OtE7ZA343clXSOZicqBN4skS3n53FKHiouSmuO32WjHrYrYIi_GLcfydKH3nGNE9zoe45FigVcaeJHoHhXCogqAxWVs5eCqM"
                />
              </div>
              <div className="flex flex-col justify-center flex-grow py-1 pr-8">
                <h3 className="font-body text-body font-semibold text-on-background">Strawberry Cheesecake</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-1 mb-2">
                  Classic NY style with fresh strawberry compote.
                </p>
                <span className="font-label text-label font-bold text-on-background">$8.00</span>
              </div>
              <button className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors">
                <Plus size={16} />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Cart (Glassmorphic) */}
      <div className="fixed bottom-24 left-0 w-full px-margin-mobile z-40 md:bottom-8 md:max-w-md md:left-1/2 md:-translate-x-1/2">
        <div className="bg-surface-container-lowest/80 backdrop-blur-xl border border-white/40 shadow-[0_20px_40px_rgba(26,29,32,0.08)] rounded-full px-6 py-4 flex justify-between items-center relative overflow-hidden">
          <div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none"></div>
          <div className="flex flex-col">
            <span className="font-label text-[11px] text-on-surface-variant uppercase tracking-wider mb-0.5">
              Your Order
            </span>
            <span className="font-body text-body font-bold text-on-background">
              2 Items <span className="text-on-surface-variant font-normal mx-1">|</span> $24.98
            </span>
          </div>
          <button 
            onClick={() => onNavigate('cart')}
            className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label text-label flex items-center gap-2 shadow-[0_4px_14px_rgba(220,50,37,0.3)] hover:bg-primary-container transition-colors"
          >
            View Cart <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
