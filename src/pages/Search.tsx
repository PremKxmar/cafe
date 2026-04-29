import { Search as SearchIcon, SlidersHorizontal, History, Star, Flame, Bell } from 'lucide-react';
import { PageProps } from '../types';

export function Search({ onNavigate }: PageProps) {
  return (
    <div className="bg-background text-on-background font-body min-h-screen pb-24 antialiased">
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-white/20 dark:border-gray-800/30 shadow-sm transition-all duration-300">
        <div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-high border-2 border-white shadow-sm flex-shrink-0">
              <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVvqxxOJqkNUbp5jp4EfPqxCXRxzlwMx26MpyOllBXMEVOsnWvityRU9ARACr-kz65_r3RUKmaOE9FL6jR7jDjvqWp3oik4idnnoFV9QsTBjUu_07pP9U5vH0BLMarEhGfhpJfdNrCzUpK9BpOxzhZT7MNmz5BrimBWjcU0Wxn7c4JofudmNuPgQaFxHEJpjXbmC7ztLsnVaiJWBQbaTOUw9jMGQJMTsHfqzmGPfed0QBWxwN0exsOuOyto2H3VrLsxz1QyjNIMG4" />
            </div>
          </div>
          <h1 className="font-['Plus_Jakarta_Sans'] font-semibold tracking-tight text-xl font-extrabold text-gray-900 dark:text-white absolute left-1/2 transform -translate-x-1/2">
            Search
          </h1>
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-lowest shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-orange-600 dark:text-orange-500 hover:opacity-80 transition-opacity active:scale-95 duration-200">
            <Bell size={20} />
          </button>
        </div>
      </header>
      
      <main className="pt-[88px] px-margin-mobile max-w-7xl mx-auto">
        <div className="mt-lg mb-xl">
          <div className="relative w-full shadow-[0_10px_30px_rgba(28,29,32,0.04)] rounded-full group">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <SearchIcon className="text-primary text-xl transition-colors group-focus-within:text-orange-600" size={20} />
            </div>
            <input className="w-full pl-14 pr-16 py-4 bg-white/90 backdrop-blur-md border border-white/20 rounded-full text-on-surface font-body-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all placeholder:text-on-surface-variant/60 shadow-sm" placeholder="Search for food or restaurants" type="text"/>
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-primary">
                <SlidersHorizontal size={16} />
              </button>
            </div>
          </div>
        </div>

        <section className="mb-xl">
          <div className="flex items-center justify-between mb-gutter">
            <h2 className="font-h2 text-h2 text-on-background">Recent Searches</h2>
            <button className="font-label text-label text-primary hover:opacity-80 transition-opacity uppercase tracking-wider">Clear</button>
          </div>
          <div className="flex flex-wrap gap-sm">
            {['Truffle Burger', 'Sushi', 'Healthy Bowls'].map((search) => (
              <button key={search} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-surface-variant shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all active:scale-95 text-on-surface font-body-sm">
                <History size={16} className="text-on-surface-variant" />
                {search}
              </button>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-h2 text-h2 text-on-background mb-gutter">Trending Now</h2>
          <div className="grid grid-cols-2 gap-gutter md:grid-cols-4 lg:gap-lg">
            {/* Large Card */}
            <div className="col-span-2 relative h-48 md:h-64 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(28,29,32,0.04)] group cursor-pointer" onClick={() => onNavigate('home')}>
              <img alt="Artisan Pizza" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjT2Wl3fCYzhPP0wxxRZvOOsxqzJmHTYItMouattICKTsYT3tOHBkKNFyeF_gcCuA2tcY3_Mi1YR7ypZebtRVqIuhtPnWfYjKHjsJLlfepbO296ZsGEomWL8XrYTx60fZqgoN3FFjPIx9zSRjuj9-6NqJRaZcKoXqXVRHcptv8pmWNFBd0GgJsoTz0zZp3g832GE_zGRUzknYqWYAr8BWW-X7FZoQdm9tTUGeH7on-xrd3pylUd-uIYsOlhVIxQkALhhQOgzx3dTA"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-md rounded-md text-white font-label text-[10px] uppercase tracking-wider mb-2 border border-white/30">Italian</span>
                    <h3 className="font-h2 text-h2 text-white leading-tight">Artisan<br/>Woodfired</h3>
                  </div>
                  <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star size={14} className="text-orange-500" fill="currentColor" />
                    <span className="font-label text-[12px] text-gray-900">4.9</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Card 1 */}
            <div className="relative h-48 md:h-64 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(28,29,32,0.04)] group cursor-pointer">
              <img alt="Premium Sushi" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhEw7G-d5nwU9_hHtam4rnHdG0I-ekmQ9RIbS7jYGAI052GkP254PQ4xHgzonnu8dYOq4cFr0UXNBf-CacIbE0ecACFGJ32CLgZEJQO1mUWQdeBU4D0lp3DqviSRXpXHo0xc6LJUsnMXn3UN8ssPanj9WM8ApydJTEypbRn844kHvtKx5qvV4AYaD4-XFrs8JjMEWnHqtQjlT7l9li1OkCvdmVQdmVVgbf3trgct11u55UWCmdPaqbPUAdYHxb321Utvkf1S1GNT4"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h3 className="font-body text-body font-semibold text-white mb-1">Omakase</h3>
                <div className="flex items-center gap-1">
                  <Star size={12} className="text-orange-400" fill="currentColor" />
                  <span className="font-label text-[10px] text-white/90">4.8</span>
                </div>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="relative h-48 md:h-64 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(28,29,32,0.04)] group cursor-pointer bg-surface-container flex flex-col justify-between p-4">
              <div className="flex justify-end">
                <div className="w-8 h-8 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center text-primary">
                  <Flame size={16} />
                </div>
              </div>
              <div>
                <h3 className="font-h2 text-[20px] text-on-surface leading-tight mb-1">Spicy<br/>Ramen</h3>
                <p className="font-body-sm text-on-surface-variant/80 text-sm">Trending near you</p>
              </div>
            </div>

            {/* Medium Card */}
            <div className="col-span-2 md:col-span-2 relative h-32 md:h-48 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(28,29,32,0.04)] bg-white border border-surface-variant flex items-center p-4 group cursor-pointer">
              <div className="flex-1 pr-4">
                <span className="inline-block px-2 py-1 bg-surface-container rounded-md text-primary font-label text-[10px] uppercase tracking-wider mb-2">Healthy</span>
                <h3 className="font-h2 text-xl text-on-surface mb-1">Açaí &amp; Fresh Bowls</h3>
                <p className="font-body-sm text-on-surface-variant line-clamp-1">Perfect for a light lunch</p>
              </div>
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm relative">
                <img alt="Healthy Bowl" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa34u9jQJ4XNeAuPmJQlUYH4UIVIkvOmMwZHRojjYN58K-3beO6hHmlKP564gCqcuVUpAJVfB1-MQz_41jtspX48kjbPZ31Rp2X8rVUyeh0Mu1raJMjcolfJCG43lvENSj7-qlMJxldCgfaz6AF36K11fm5OjvVvtbahjELPlY8Xh7K0apMJwwcLiU4ncTXHCjkg0U-wlvfM3OKCoxvwdMedVSeozESo8nc8Y6GM18wKIxr80N-MRF7GwINpAtRi7Ug5HkbveHGb8"/>
              </div>
            </div>
          </div>
         </section>
      </main>
    </div>
  );
}
