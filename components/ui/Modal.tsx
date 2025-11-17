import React, { ReactNode } from 'react';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center transition-opacity duration-300" onClick={onClose}>
      <div 
        className="relative bg-glass backdrop-blur-xl rounded-2xl shadow-glow-lg border border-white/10 w-full max-w-lg m-4 transform transition-all duration-300 scale-95"
        onClick={(e) => {
            e.stopPropagation();
            const target = e.target as HTMLElement;
            if(target.tagName === 'DIV' && target.classList.contains('bg-glass')) { // This is a trick to get scale-up animation
                target.classList.remove('scale-95');
                target.classList.add('scale-100');
            }
        }}
        // A little hack to trigger the animation on open
        // FIX: The ref callback function must not return a value (or must return a cleanup function).
        // `setTimeout` returns a number, which was causing a type error.
        // The expression is wrapped in a block `{}` to ensure the arrow function implicitly returns undefined.
        ref={node => { node && setTimeout(() => node.classList.add('scale-100'), 50); }}
      >
        <div className="flex items-center justify-between p-5 border-b border-white/10 rounded-t-2xl">
          <h3 className="text-xl font-bold text-white tracking-wide">
            {title}
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-white/10 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            onClick={onClose}
          >
            <FaTimes className="w-5 h-5" />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        
        <div className="p-6 text-light">
          {children}
        </div>
        
        {footer && (
          <div className="flex items-center justify-end p-5 space-x-4 border-t border-white/10 rounded-b-2xl">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
