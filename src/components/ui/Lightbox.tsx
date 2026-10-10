import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxItem {
  title: string;
  caption: string;
  image?: string;
}

export interface LightboxProps<T extends LightboxItem> {
  items: T[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  render: (item: T, index: number) => React.ReactNode;
  closeLabel?: string;
}

/**
 * Modal image viewer with keyboard support: Escape closes, arrow keys step
 * through the set, focus is trapped inside the dialog and focus returns to the
 * trigger on close. Body scroll is locked while open.
 */
export function Lightbox<T extends LightboxItem>({
  items,
  index,
  onClose,
  onPrev,
  onNext,
  render,
  closeLabel = 'Close',
}: LightboxProps<T>) {
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        onNext();
      } else if (e.key === 'Tab') {
        // Focus trap: cycle within the dialog.
        const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    if (index === null) return;

    restoreFocusRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    // Move focus into the dialog.
    const timer = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>('button')?.focus();
    }, 0);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(timer);
      restoreFocusRef.current?.focus?.();
    };
  }, [index, handleKeyDown]);

  if (index === null) return null;

  const item = items[index];
  if (!item) return null;

  const hasMultiple = items.length > 1;

  return createPortal(
    <div
      className="fixed inset-0 z-[70] flex flex-col bg-ink-950/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — image ${index + 1} of ${items.length}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-8">
        <p className="truncate text-sm font-medium text-white/80">{item.title}</p>
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {/* Image */}
      <div
        ref={panelRef}
        className="relative flex min-h-0 flex-1 items-center justify-center px-4 py-6 sm:px-16"
      >
        {hasMultiple ? (
          <>
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous image"
              className="absolute left-2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-4"
            >
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next image"
              className="absolute right-2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-4"
            >
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </>
        ) : null}

        <div className="flex h-full w-full items-center justify-center">
          <div className="max-h-full w-full max-w-4xl overflow-hidden rounded-2xl">
            {render(item, index)}
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className="border-t border-white/10 px-5 py-4 sm:px-8">
        <div className="mx-auto flex max-w-4xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-pretty text-sm leading-relaxed text-white/70">{item.caption}</p>
          {hasMultiple ? (
            <p className="shrink-0 text-xs font-medium tabular-nums text-white/45">
              {index + 1} / {items.length}
            </p>
          ) : null}
        </div>
        {hasMultiple ? (
          <p className="mt-2 text-center text-xs text-white/35">
            Use the arrow keys to move between images, Escape to close.
          </p>
        ) : null}
      </div>
    </div>,
    document.body,
  );
}
