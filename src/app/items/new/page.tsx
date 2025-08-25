"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function NewItemPage(){
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const [error,setError] = useState<string|null>(null);
  const router = useRouter();
  const createItem = async () => {
    setError(null);
    const res = await fetch("/api/items", { method: "POST", headers: { "Content-Type":"application/json" }, body: JSON.stringify({ title, description }) });
    if (!res.ok) { setError("Failed to create item"); return; }
    router.push("/items");
  };
  return (
    <main className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Create Item</h1>
      {error && <div className="text-red-600">{error}</div>}
      <label className="block text-sm font-medium text-gray-700" htmlFor="title">Title</label>
      <input id="title" className="border rounded w-full px-3 py-2" aria-label="Title" value={title} onChange={e=>setTitle(e.target.value)} />
      <label className="block text-sm font-medium text-gray-700" htmlFor="description">Description</label>
      <textarea id="description" className="border rounded w-full px-3 py-2" aria-label="Description" value={description} onChange={e=>setDescription(e.target.value)} />
      <button className="px-4 py-2 rounded bg-blue-600 text-white" onClick={createItem}>Create</button>
    </main>
  );
}
