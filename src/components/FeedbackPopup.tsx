"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./ui/Modal";

function getErrorMessage(err: unknown) {
  if (typeof err === "string") return err;
  if (err && typeof err === "object" && "message" in err) {
    return String((err as any).message);
  }
  return "Unknown error occurred";
}

export default function FeedbackPopup({
  error,
  message,
  id,
}: {
  error?: unknown;
  message: string | null;
  id: string | null;
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const isError = Boolean(error || message);
  const body = useMemo(
    () => (isError ? getErrorMessage(error) : message ?? "Product was added"),
    [isError, error, message]
  );

  useEffect(() => {
    setOpen(Boolean(error || message || id));
  }, [error, message]);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      title={isError ? "Error" : "Success"}
      footer={
        isError ? (
          <button
            className="btn--outlined"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        ) : (
          <>
            <button
              className="btn--outlined"
              onClick={() => setOpen(false)}
            >
              Not now
            </button>
            <button
              onClick={() => router.push(`products/${id}/reviews/add`)}
            >
              Leave a first review
            </button>
          </>
        )
      }
    >
      {body}
    </Modal>
  );
}