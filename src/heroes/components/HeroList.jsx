import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../helpers';
import { useMemo } from 'react';

export const HeroList = ({ pusblisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(pusblisher, [pusblisher]));
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
