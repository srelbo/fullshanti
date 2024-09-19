/* eslint-disable @next/next/no-img-element */
/**
 * Show a list of images of a diety
 */

import { Diety } from '@/src/types/Diety';

interface DietyProps {
  diety: Diety;
}

export default function DietyPage({ diety }: DietyProps) {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <img
        className='w-full h-full rounded-full'
        src={diety.image}
        alt={diety.name}
      />

      <h2 className='text-xl font-bold'>{diety.name}</h2>
      <p className='text-sm'>{diety.description}</p>
    </div>
  );
}
