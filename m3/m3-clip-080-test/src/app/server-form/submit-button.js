"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn-primary mt-3"
      disabled={pending}
    >
      {pending ? "Saving..." : "Save"}
    </button>
  );
}
