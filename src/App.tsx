import { useState } from 'react';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Orders } from './pages/Orders';
import { Profile } from './pages/Profile';
import { Cart } from './pages/Cart';
import { Tracking } from './pages/Tracking';
import { BottomNavBar } from './components/BottomNavBar';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'search':
        return <Search onNavigate={setCurrentPage} />;
      case 'orders':
        return <Orders onNavigate={setCurrentPage} />;
      case 'profile':
        return <Profile onNavigate={setCurrentPage} />;
      case 'cart':
        return <Cart onNavigate={setCurrentPage} />;
      case 'tracking':
        return <Tracking onNavigate={setCurrentPage} />;
      default:
        return <div className="p-8 text-center mt-20">Work in progress: {currentPage}</div>;
    }
  };

  const showNav = ['home', 'search', 'orders', 'profile'].includes(currentPage);

  return (
    <div className="bg-background text-on-background min-h-screen selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div
           key={currentPage}
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -10 }}
           transition={{ duration: 0.2 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
      {showNav && <BottomNavBar current={currentPage} onChange={setCurrentPage} />}
    </div>
  );
}
