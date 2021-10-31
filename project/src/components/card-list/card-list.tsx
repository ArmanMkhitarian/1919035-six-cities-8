import { Offers } from '../../types/Offers';
import Card from '../card/card';
import React from 'react';

type Settings = {
  offers: Offers,
  onListItemHover: (id: string | null) => void;
}

function CardList(props: Settings): JSX.Element{
  const [ActiveOfferId, setActiveOfferId] = React.useState<string | null>(null);
  const {offers, onListItemHover} = props;
  onListItemHover(ActiveOfferId);
  return (
    <div className='cities__places-list places__list tabs__content'>
      {
        offers.map((offer, id) => {
          const keyValue = `${id}-${offer.title}`;
          return(
            <div key={keyValue}>
              <Card offer = {offer} onActive ={setActiveOfferId}/>
            </div>
          );
        })
      }
    </div>
  );
}

export default CardList;
