'use client';

import { useEffect, useMemo, useState } from 'react';
import Modal from './ui/Modal';
import { Link } from '@/i18n/navigation';

function getErrorMessage(error: unknown) {
  if (typeof error === 'string') return error;
  if (error instanceof Error) {
    return error.message;
  }
  return 'Unknown error occurred';
}

export default function FeedbackPopup({
  error,
  message,
  productId,
}: {
  error?: unknown;
  message: string | null;
  productId: string | null;
}) {
  const [open, setOpen] = useState(false);

  const isError = Boolean(error || message);
  const body = useMemo(
    () => (isError ? getErrorMessage(error) : (message ?? 'Product was added')),
    [isError, error, message]
  );

  useEffect(() => {
    setOpen(Boolean(error || message || productId));
  }, [error, message, productId]);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      title={isError ? 'Error' : 'Success'}
      footer={
        isError ? (
          <button className="btn--outlined" onClick={() => setOpen(false)}>
            Close
          </button>
        ) : productId ? (
          <>
            <button className="btn--outlined" onClick={() => setOpen(false)}>
              Not now
            </button>
            <Link className="btn" href={productId}>
              Leave a first review
            </Link>
          </>
        ) : null
      }
    >
      {body}
    </Modal>
  );
}
