import React from "react";

interface ErrorMessage {
  error: string;
}

export default function Errors({ error }: ErrorMessage) {
  return <p className="text-center text-red-600">{error}</p>;
}
