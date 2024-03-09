import { Base, base, db } from '@lib/db';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export const GET = async () => {
  const baseItems: Array<Base> = await db.select().from(base);

  return NextResponse.json({ baseItems });
};
