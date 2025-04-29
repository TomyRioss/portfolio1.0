import prisma from '@/lib/prisma';

async function Page({ params }: { params: Promise<{ entrada: string }> }) {
  const { entrada } = await params;

  const data = await prisma.entry.findUnique({
    where: { entrada },
  });

  if (!data) return <div>Entrada no encontrada</div>;

  return (
    <div className="h-screen">
      <h1 className="text-black">{data.title}</h1>
      <p>{data.entrada}</p>
    </div>
  );
}
export default Page;
