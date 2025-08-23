'use client';

import Spinner from "@/components/ui/Spinner";
import { useState } from "react";

export default function AddProductPage() {
  const [name, setName] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !image) {
      setMessage('Please provide both name and image');
      return;
    }

    setSending(true);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);

    //REMOVE Later
    console.log(formData);
    try {
      const res = await fetch('/api/products/add', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Failed to add product');

      setMessage('Product added!');
      setName('');
      setImage(null);
      setSending(false);
    } catch (err) {
      setSending(false);
      if (err instanceof Error) {
        setMessage(err.message);
      } else {
        setMessage('An unknown error occurred');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-3 py-2 rounded"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="border px-3 py-2 rounded"
          required
        />
        {sending ? (
          <Spinner />
        ) : (
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Product
          </button>
        )}
        {message && <p className="text-sm mt-2">{message}</p>}
      </form>
    </div>
  );
}