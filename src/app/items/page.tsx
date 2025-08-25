import Link from "next/link";
async function fetchItems() {
  const res = await fetch("/api/items", { cache: "no-store" });
  return res.ok ? res.json() : [];
}
export default async function ItemsPage() {
  const items = await fetchItems();
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">24 Best Small Business Tools for 2025 – Tested &amp; Ranked: Items</h1>
      <Link className="text-blue-600 underline" href="/items/new">Create New</Link>
      <ul className="divide-y">
        {Array.isArray(items) && items.map((it: any) => (
          <li key={it.id} className="py-3">
            <div className="font-medium">{it.title}</div>
            {it.description && (<p className="text-sm text-gray-600">{it.description}</p>)}
          </li>
        ))}
      </ul>
    </main>
  );
}
