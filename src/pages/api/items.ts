import type { NextApiRequest, NextApiResponse } from "next";
let mem: Array<{ id: string; title: string; description?: string; createdAt: string }>=[];
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      return res.status(200).json(mem);
    }
    if (req.method === "POST") {
      const { title, description } = (req.body || {}) as any;
      if (typeof title !== "string" || title.trim().length < 3) return res.status(400).json({ error: "Invalid title" });
      const item = { id: Math.random().toString(36).slice(2), title: title.trim(), description, createdAt: new Date().toISOString() };
      mem.unshift(item);
      return res.status(201).json(item);
    }
    res.setHeader("Allow", ["GET","POST"]);
    return res.status(405).end("Method Not Allowed");
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || "Server error" });
  }
}
