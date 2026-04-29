import { Bell, Edit2, User, MapPin, CreditCard, Receipt, Settings, HelpCircle, LogOut, ChevronRight } from 'lucide-react';
import { PageProps } from '../types';

export function Profile({ onNavigate }: PageProps) {
  return (
    <div className="bg-background font-body min-h-screen pb-24 md:pb-0 pt-20">
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-white/20 dark:border-gray-800/30 shadow-sm flex justify-between items-center px-6 py-4 max-w-7xl mx-auto left-0 right-0">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-highest">
            <img alt="User profile photo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5kWVAZG5iLLaSUnbYZ1Gx7B-8kOQRSfqP5o5lJMLHDJtd3W5JhNVY16LR6YODL-JTDzp4O5ofrtAfP5TXE8-cudX9AfesNVaQM9qxHs1R3JAU8sTRjbSe2A782Udxg4dOgFZhgwI17rqfI7FnaPegM-DdvDceWIY9I-X2Ztu9JL8xmj6E3t5AsfpK7gI15XqnFnvPpYCFA6EBpPApXlyEwPERqY0cNcT4rm3lMtUgC_GZKGv-jo-Xt5nnckw-zMjtZe2voAXUHSc"/>
          </div>
          <h1 className="text-xl font-extrabold text-gray-900 dark:text-white font-['Plus_Jakarta_Sans'] font-semibold tracking-tight">Gourmet Express</h1>
        </div>
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-500 hover:opacity-80 transition-opacity active:scale-95 transition-transform duration-200">
          <Bell size={20} />
        </button>
      </header>

      <main className="max-w-3xl mx-auto px-margin-mobile w-full flex flex-col gap-lg mt-md">
        <div className="pt-sm">
          <h2 className="font-h1 text-h1 text-on-background">Profile</h2>
        </div>

        <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_10px_30px_rgba(26,29,32,0.04)] rounded-[24px] p-lg flex flex-col items-center justify-center text-center gap-md">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-surface-container border-4 border-white shadow-sm relative group cursor-pointer">
            <img alt="Alex Johnson" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVvqxxOJqkNUbp5jp4EfPqxCXRxzlwMx26MpyOllBXMEVOsnWvityRU9ARACr-kz65_r3RUKmaOE9FL6jR7jDjvqWp3oik4idnnoFV9QsTBjUu_07pP9U5vH0BLMarEhGfhpJfdNrCzUpK9BpOxzhZT7MNmz5BrimBWjcU0Wxn7c4JofudmNuPgQaFxHEJpjXbmC7ztLsnVaiJWBQbaTOUw9jMGQJMTsHfqzmGPfed0QBWxwN0exsOuOyto2H3VrLsxz1QyjNIMG4"/>
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Edit2 className="text-white" size={20} />
            </div>
          </div>
          <div>
            <h3 className="font-h2 text-h2 text-on-background">Alex Johnson</h3>
            <p className="font-body text-body text-outline mt-1">alex.j@example.com</p>
          </div>
          <button className="mt-sm bg-primary/10 text-primary font-label text-label px-lg py-sm rounded-full hover:bg-primary/20 transition-colors pointer-cursor cursor-pointer">
            Edit Profile
          </button>
        </div>

        <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_10px_30px_rgba(26,29,32,0.04)] rounded-[24px] overflow-hidden flex flex-col">
          {[
            { icon: User, label: 'Personal Info' },
            { icon: MapPin, label: 'Addresses' },
            { icon: CreditCard, label: 'Payment Methods' },
            { icon: Receipt, label: 'Order History' },
            { icon: Settings, label: 'Settings' },
            { icon: HelpCircle, label: 'Help & Support' },
          ].map((item, idx) => (
            <button key={item.label} className="w-full flex items-center justify-between p-md border-b border-surface-variant hover:bg-surface-container-lowest/50 transition-colors group">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <item.icon size={20} />
                </div>
                <span className="font-body text-body text-on-background font-medium">{item.label}</span>
              </div>
              <ChevronRight className="text-outline" size={20} />
            </button>
          ))}
        </div>

        <button className="w-full py-md flex items-center justify-center gap-sm text-error font-body text-body font-medium hover:bg-error-container/50 rounded-xl transition-colors mb-xl -mt-sm">
          <LogOut size={20} />
          Log Out
        </button>
      </main>
    </div>
  );
}
