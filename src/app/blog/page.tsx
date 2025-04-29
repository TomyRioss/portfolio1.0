'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// TYPESCRIPT FRIENDLY
type PostPreview = {
  id: number;
  title: string;
  excerpt: string;
  entrada: string;
  createdAt: string;
};

export default function PostsPage() {
  const [posts, setPosts] = useState<PostPreview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        // GET /api/posts => ALL ENTRIES
        const res = await fetch('/api/posts');
        if (!res.ok) throw new Error('Error fetching posts');
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  // LOADING STATE
  if (loading)
    return <div className="text-center py-8">Cargando artículos...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 h-screen">
      <h1 className="text-3xl font-bold mb-8">Últimos Artículos</h1>

      <div className="space-y-6">
        {posts.map(post => (
          <article key={post.id} className="border-b pb-6">
            <Link
              href={`/blog/${encodeURIComponent(post.entrada)}`}
              className="group"
            >
              <h2 className="text-2xl font-semibold group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <span>
                  {/* FORMATED DATE */}
                  {new Date(post.createdAt).toLocaleDateString('es-ES', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                <span className="ml-4 text-blue-600 group-hover:underline">
                  Leer más →
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
