import DietyListPage from '@/src/components/DietyList';
import { Diety } from '@/src/types/Diety';

const dietyList: Array<Diety> = [
  {
    name: 'Koori Chata Ayyanar',
    description: '',
    image:
      '/koori-chatha-iyannar-temple-ramanathapuram-temples-1ynreipgi8-250.webp',
  },
];

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <DietyListPage dietyList={dietyList} />
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'></footer>
    </div>
  );
}
