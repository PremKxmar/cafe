import { Bell } from 'lucide-react';

export function TopAppBar() {
  return (
    <>
      {/* Desktop Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-white/20 dark:border-gray-800/20 shadow-[0_10px_30px_rgba(26,29,32,0.04)] hidden md:flex">
        <div className="flex justify-between items-center h-16 px-6 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <img
              alt="User Profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-primary-container"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVvqxxOJqkNUbp5jp4EfPqxCXRxzlwMx26MpyOllBXMEVOsnWvityRU9ARACr-kz65_r3RUKmaOE9FL6jR7jDjvqWp3oik4idnnoFV9QsTBjUu_07pP9U5vH0BLMarEhGfhpJfdNrCzUpK9BpOxzhZT7MNmz5BrimBWjcU0Wxn7c4JofudmNuPgQaFxHEJpjXbmC7ztLsnVaiJWBQbaTOUw9jMGQJMTsHfqzmGPfed0QBWxwN0exsOuOyto2H3VrLsxz1QyjNIMG4"
            />
            <div>
              <h1 className="font-h1 text-h1 text-xl font-bold text-gray-900 tracking-tight">
                Epicure
              </h1>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Good morning, Alex!
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <nav className="flex gap-6">
              <a href="#" className="font-label text-base text-primary hover:opacity-80 transition-opacity">Menu</a>
              <a href="#" className="font-label text-base text-gray-400 hover:text-primary transition-colors">Search</a>
              <a href="#" className="font-label text-base text-gray-400 hover:text-primary transition-colors">Orders</a>
            </nav>
            <div className="relative cursor-pointer hover:opacity-80 transition-opacity">
              <Bell className="text-gray-600" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white"></span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <div className="md:hidden pt-[env(safe-area-inset-top,16px)] px-margin-mobile pt-lg pb-md flex justify-between items-center bg-background sticky top-0 z-40">
        <div className="flex items-center gap-md">
          <img
            alt="User Profile"
            className="w-12 h-12 rounded-full object-cover shadow-sm"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVvqxxOJqkNUbp5jp4EfPqxCXRxzlwMx26MpyOllBXMEVOsnWvityRU9ARACr-kz65_r3RUKmaOE9FL6jR7jDjvqWp3oik4idnnoFV9QsTBjUu_07pP9U5vH0BLMarEhGfhpJfdNrCzUpK9BpOxzhZT7MNmz5BrimBWjcU0Wxn7c4JofudmNuPgQaFxHEJpjXbmC7ztLsnVaiJWBQbaTOUw9jMGQJMTsHfqzmGPfed0QBWxwN0exsOuOyto2H3VrLsxz1QyjNIMG4"
          />
          <div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Good morning,
            </p>
            <h1 className="font-h2 text-h2 text-on-background">Alex!</h1>
          </div>
        </div>
        <div className="relative w-12 h-12 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(26,29,32,0.04)]">
          <Bell className="text-on-background" />
          <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white"></span>
        </div>
      </div>
    </>
  );
}
