import { Utensils, Search, Receipt, User } from 'lucide-react';

interface BottomNavBarProps {
  current: string;
  onChange: (page: string) => void;
}

export function BottomNavBar({ current, onChange }: BottomNavBarProps) {
  const navItems = [
    { id: 'home', icon: Utensils, label: 'Menu' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'orders', icon: Receipt, label: 'Orders' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-4 pb-[env(safe-area-inset-bottom,16px)] bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-t-[32px] md:hidden z-50 shadow-[0_-4px_20px_0_rgba(0,0,0,0.04)] border-t border-white/20 dark:border-gray-800/30">
      {navItems.map((item) => {
        const isActive = current === item.id;
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={`flex flex-col items-center justify-center w-16 h-12 active:scale-90 transition-all duration-200 ${
              isActive
                ? 'text-orange-600 dark:text-orange-500 scale-110'
                : 'text-gray-400 dark:text-gray-500 hover:text-orange-500'
            }`}
          >
            {isActive ? (
              <div className="flex flex-col items-center justify-center bg-orange-50/50 dark:bg-orange-900/20 rounded-full px-4 py-1">
                <Icon size={24} strokeWidth={2.5} fill="currentColor" />
                <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-bold mt-1">
                  {item.label}
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <Icon size={24} strokeWidth={2} />
                <span className="font-['Plus_Jakarta_Sans'] text-[10px] font-medium mt-1">
                  {item.label}
                </span>
              </div>
            )}
          </button>
        );
      })}
    </nav>
  );
}
