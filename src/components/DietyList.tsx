import { Diety } from '../types/Diety';
import DietyPage from './DietyPage';

interface DietyListProps {
  dietyList: Array<Diety>;
}

export default function DietyListPage({ dietyList }: DietyListProps) {
  return (
    <div className='flex flex-col gap-4'>
      {dietyList.map((diety) => (
        <DietyPage key={diety.name} diety={diety} />
      ))}
    </div>
  );
}
