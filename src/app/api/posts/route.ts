import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

// TYPESCRIPT HAPPY
type PostCreateInput = {
  title: string;
  excerpt: string;
  content: string;
  entrada: string;
  image?: string;
};

// GET /api/posts => ALL ENTRIES
export async function GET() {
  try {
    const posts = await prisma.entry.findMany({
      select: {
        id: true,
        title: true,
        excerpt: true,
        entrada: true,
        createdAt: true,
        image: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    // NEXTRESPONSE = RESPONSE (kinda obvious)
    return NextResponse.json(posts);
  } catch (error) {
    console.error('[POSTS_GET] Error:', error);
    return NextResponse.json(
      { error: 'Error al obtener los artículos' },
      { status: 500 },
    );
  }
}

// POST /api/posts => CREATE ENTRY
export async function POST(req: Request) {
  try {
    const body: PostCreateInput = await req.json();

    // Validación básica
    if (!body.title || !body.excerpt || !body.content || !body.entrada) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 },
      );
    }

    // Crear el post
    const newPost = await prisma.entry.create({
      data: {
        title: body.title,
        excerpt: body.excerpt,
        content: body.content,
        entrada: body.entrada,
        image: body.image || null,
      },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('[POSTS_POST] Error:', error);
    return NextResponse.json(
      { error: 'Error al crear el artículo' },
      { status: 500 },
    );
  }
}
