'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

type AddProductInput = { file: File; name: string; category: string };

export function useAddProduct() {
  const qc = useQueryClient();

  return useMutation({
    mutationKey: ['add-product'],
    retry: 0,
    mutationFn: async ({ file, name, category }: AddProductInput) => {
      const pres = await fetch('/api/uploads/s3', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ fileType: file.type, fileName: file.name })
      });
      if (!pres.ok) throw new Error('Failed to create upload URL');
      const { uploadUrl, key } = await pres.json();

      const put = await fetch(uploadUrl, {
        method: 'PUT',
        headers: { 'content-type': file.type },
        body: file
      })

      if (!put.ok) throw new Error(`S3 upload failed (${put.status})`);

      const save = await fetch('/api/products/add', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name, category, image: key })
      });
      const product = await save.json();
      if (!save.ok) throw new Error(product.error || 'Failed to save product');

      return product;
    },
    onSuccess: (product) => {
      qc.invalidateQueries({ queryKey: ['products'] });
      if (product?.id) qc.invalidateQueries({ queryKey: ['product', product.id] });
    },
  });
}