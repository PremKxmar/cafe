import { ChevronLeft, Minus, Plus, Tag, ArrowRight } from 'lucide-react';
import { PageProps } from '../types';

export function Cart({ onNavigate }: PageProps) {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col pb-32">
      <header className="flex items-center justify-between px-margin-mobile h-16 sticky top-0 bg-background/90 backdrop-blur-xl z-40 border-b border-surface-variant/30">
        <button 
          onClick={() => onNavigate('home')}
          className="text-on-background hover:text-primary transition-colors flex items-center justify-center w-10 h-10 active:scale-95 bg-surface-container-lowest rounded-full shadow-[0_4px_12px_rgba(26,29,32,0.04)]"
        >
          <ChevronLeft size={20} />
        </button>
        <h1 className="font-h2 text-h2 text-center flex-1 pr-10">Your Cart</h1>
      </header>

      <main className="flex-1 px-margin-mobile pt-md flex flex-col gap-lg max-w-3xl mx-auto w-full">
        <section className="flex flex-col gap-md">
          {/* Item 1 */}
          <div className="bg-surface-container-lowest rounded-xl p-md flex gap-md shadow-[0_10px_30px_rgba(26,29,32,0.04)] items-center">
            <img alt="Truffle Burger" className="w-24 h-24 rounded-lg object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq18WOVMUZUoZBmoFRE1pC-rBmFemSkf6VOeMbSJWCa3HTXYTb36bDC3ESptXgp-fVVOh-DnOtvlbRKfSa5iEjQm_CbgfxLVeh3T0huzYQ1DQak5n-Rn3VSYLWcUIBOWWRm3lIVmm6JryF8m9NUzbZL91yBUL33WQrNhSAbOgULz9wqa_Aa5EcgS4lmQ18FwVOikm0JiaeVGq1pJ9MwDSJuxevpdRroxthlRDr7Y3vqsWPmJ_Bj4rrYFp-X8hZLB5Bt5kEk4UpCTk"/>
            <div className="flex-1 flex flex-col justify-center min-w-0">
              <h3 className="font-label text-on-background font-bold text-base line-clamp-1">Truffle Beef Burger</h3>
              <p className="font-body-sm text-on-surface-variant line-clamp-1">No onions, extra truffle mayo</p>
              <p className="font-label text-primary mt-xs">$18.49</p>
            </div>
            <div className="flex items-center gap-xs bg-surface-container-low rounded-full p-1 border border-surface-variant/30">
              <button className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm hover:bg-primary-fixed active:scale-90 transition-all">
                <Minus size={18} />
              </button>
              <span className="font-label text-on-surface w-6 text-center">2</span>
              <button className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm hover:bg-primary-fixed active:scale-90 transition-all">
                <Plus size={18} />
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-surface-container-lowest rounded-xl p-md flex gap-md shadow-[0_10px_30px_rgba(26,29,32,0.04)] items-center">
            <img alt="Sweet Potato Fries" className="w-24 h-24 rounded-lg object-cover flex-shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw2hHQRR0gvIGwBb-oH8JzTF31IWQnRlMz8dmoa9N3bu2zJFw0GP2l5LJeJ-ByzDGIeUpEJ9pLtPArFpjNXs_nO8aJ3WC72RrYGl_Zm47tge8R3Ve_VEziV9ZBV8CtOkA7u6sVckHSrpsQ7KvnIhwAEsXtZa1EEniXqZ4-xvZ4eBSm6jLx6VCfph-zkmLxkB7CHA7pP_Ewi51tjRT73h6kprN2yX-PANL6VuzBkSPAR3yGoX44qT6IHw1CdG_5i_0J9Pu4zfNKN5o"/>
            <div className="flex-1 flex flex-col justify-center min-w-0">
              <h3 className="font-label text-on-background font-bold text-base line-clamp-1">Sweet Potato Fries</h3>
              <p className="font-body-sm text-on-surface-variant line-clamp-1">Garlic aioli dip</p>
              <p className="font-label text-primary mt-xs">$6.49</p>
            </div>
            <div className="flex items-center gap-xs bg-surface-container-low rounded-full p-1 border border-surface-variant/30">
              <button className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-on-surface-variant shadow-sm hover:bg-primary-fixed active:scale-90 transition-all">
                <Minus size={18} />
              </button>
              <span className="font-label text-on-surface w-6 text-center">1</span>
              <button className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm hover:bg-primary-fixed active:scale-90 transition-all">
                <Plus size={18} />
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="relative flex items-center shadow-[0_10px_30px_rgba(26,29,32,0.02)]">
            <Tag className="absolute left-md text-on-surface-variant pointer-events-none" size={20} />
            <input className="w-full bg-surface-container-lowest rounded-[16px] py-[14px] pl-[48px] pr-[100px] font-body text-body text-on-background border-none focus:ring-2 focus:ring-primary focus:bg-white placeholder:text-on-surface-variant/60 outline-none" placeholder="Have a promo code?" type="text"/>
            <button className="absolute right-xs top-xs bottom-xs bg-primary text-on-primary font-label text-label px-md rounded-[12px] hover:bg-surface-tint active:scale-95 transition-all flex items-center justify-center">
              Apply
            </button>
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_10px_30px_rgba(26,29,32,0.04)] flex flex-col gap-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-[radial-gradient(circle,theme(colors.background)_4px,transparent_4px)] bg-[size:16px_16px] bg-repeat-x -mt-2"></div>
          <h3 className="font-label text-on-background uppercase tracking-widest mb-xs text-center opacity-50 font-bold text-base mt-2">Order Summary</h3>
          <div className="flex justify-between items-center font-body-sm text-on-surface-variant">
            <span>Subtotal</span>
            <span className="text-on-background font-medium">$24.98</span>
          </div>
          <div className="flex justify-between items-center font-body-sm text-on-surface-variant">
            <span>Delivery Fee</span>
            <span className="text-on-background font-medium">$2.99</span>
          </div>
          <div className="flex justify-between items-center font-body-sm text-on-surface-variant">
            <span>Taxes</span>
            <span className="text-on-background font-medium">$1.50</span>
          </div>
          <div className="h-px w-full border-t border-dashed border-outline-variant/50 my-sm"></div>
          <div className="flex justify-between items-center font-h1 text-h1 text-on-background">
            <span>Total</span>
            <span className="text-primary">$29.47</span>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 w-full p-margin-mobile bg-gradient-to-t from-background via-background/90 to-transparent z-50 pt-10">
        <button 
          onClick={() => onNavigate('tracking')}
          className="w-full max-w-3xl mx-auto h-16 bg-primary text-on-primary rounded-full flex items-center p-1 relative shadow-[0_8px_30px_rgba(184,19,14,0.25)] hover:bg-surface-tint active:scale-[0.98] transition-all group overflow-hidden border border-white/10"
        >
          <div className="w-14 h-14 bg-on-primary rounded-full flex items-center justify-center text-primary z-10 group-hover:translate-x-3 transition-transform duration-300 shadow-sm">
            <ArrowRight size={20} />
          </div>
          <span className="absolute w-full text-center font-label text-label text-on-primary tracking-[0.1em] z-0 pl-14">Swipe to Checkout</span>
        </button>
      </div>
    </div>
  );
}
