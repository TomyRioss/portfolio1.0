import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

interface RouteParams {
  params: {
    entrada: string;
  };
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ entrada: string }> },
): Promise<NextResponse> {
  try {
    const entry = await prisma.entry.findUnique({
      where: { entrada: (await params).entrada },
      select: {
        id: true,
        title: true,
        content: true,
        excerpt: true,
        entrada: true,
        createdAt: true,
        image: true,
      },
    });

    if (!entry) {
      return NextResponse.json(
        { message: 'Entrada no encontrada' },
        { status: 404 },
      );
    }

    return NextResponse.json(entry);
  } catch (error) {
    console.error('Error en GET /api/posts/[entrada]:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor' },
      { status: 500 },
    );
  }
}
