import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: NextRequest,
  { params }: { params: { entrada: string } },
) {
  try {
    const entrada = await prisma.entry.findUnique({
      where: {
        entrada: params.entrada,
      },
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

    return NextResponse.json(entrada);
  } catch (error) {
    console.error('Error crítico:', error);
    return new Response(
      JSON.stringify({ message: 'Error interno del servidor' }),
      { status: 500 },
    );
  }
}

export const dynamic = 'force-dynamic';
