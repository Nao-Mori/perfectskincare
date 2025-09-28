'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export default function Modal({
  open,
  onClose,
  title,
  children,
  footer,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}) {

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      <div className="relative z-[10000] w-full max-w-md rounded-2xl bg-white shadow-xl">
        <div className="relative w-full max-w-md rounded-2xl bg-white px-5 py-3">
          <div className="flex items-center justify-between">
            {title ? (
              <h3 id="modal-title" className="text-base font-semibold">
                {title}
              </h3>
            ) : <span className="sr-only" />}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="rounded p-1 hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="text-sm text-gray-700 p-4">{children}</div>
          {footer && <div className="mt-4 flex justify-end gap-2">{footer}</div>}
        </div>
      </div>
    </div>,
    document.body
  );
}
