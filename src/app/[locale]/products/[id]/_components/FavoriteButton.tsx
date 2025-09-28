'use client';

import { Heart } from 'lucide-react';
import { useFavorite } from '../_hooks/useFavorite';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import Modal from '@/components/ui/Modal';
import LoginButton from '@/components/ui/LoginButton';

export default function FavoriteButton({
  productId,
  initial,
}: { productId: number; initial?: boolean }) {
  const { status } = useSession();
  const authed = status === 'authenticated';

  const { isFavorite, toggle, isPending } = useFavorite(String(productId), initial);
  const [showModal, setShowModal] = useState(false);

  const onClick = () => {
    if (authed) toggle();
    else setShowModal(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        disabled={status === 'loading' || isPending}
        aria-pressed={authed ? isFavorite : false}
        aria-label={authed ? (isFavorite ? 'Unfavorite' : 'Favorite') : 'Sign in to favorite'}
        className="mt-5 ml-2 rounded-full p-2 disabled:opacity-60"
      >
        <Heart
          className="h-4 w-6"
          style={{ fill: isFavorite ? 'red' : 'transparent', color: isFavorite ? 'red' : 'currentColor' }}
        />
      </button>
      <Modal open={showModal} onClose={()=>setShowModal(false)} title={"Login to add to your favorites!"}>
        <LoginButton />
      </Modal>
    </>
  );
}