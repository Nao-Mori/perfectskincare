'use client';

import FeedbackPopup from "@/components/FeedbackPopup";
import Spinner from "@/components/ui/Spinner";
import { categories } from "@/data/categories";
import { useAddProduct } from "@/hooks/useAddProduct";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function AddProductPage() {
  const [name, setName] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [productId, setProductId] = useState<string | null>(null);
  const { mutateAsync, isPending, error } = useAddProduct();

  const t = useTranslations("Controls");
  const tProduct = useTranslations("Product");

  const clearFields = () => {
    setName("");
    setImage(null);
    setCategory("");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!name || !image || !category) {
      setMessage('Please provide both name and image');
      return;
    }
    const { productId } =  await mutateAsync({ file: image, name, category });
    setProductId(productId);
    clearFields();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">{t("addProduct")}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder={tProduct("name")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-base"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="input-base"
          required
        />
        <label className="block">
          <div className="relative">
            <select className="select-base" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="" disabled>{tProduct("category")}</option>
              {categories.map((value:string)=>(
                <option key={value} value={value}>{tProduct(`categories.${value}`)}</option>
              ))}
            </select>
            <svg className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
            >
              <path d="M5.25 7.5l4.5 4.5 4.5-4.5" />
            </svg>
          </div>
        </label>
        {isPending ? (
          <Spinner size="sm" />
        ) : (
          <button
            type="submit"
            className="btn--gradient"
          >
            {t("addProduct")}
          </button>
        )}
        <FeedbackPopup error={error} message={message} productId={productId} />
      </form>
    </div>
  );
}