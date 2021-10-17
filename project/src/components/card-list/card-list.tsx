import { Offers } from '../../types/Offers';
import Card from '../card/card';

type Settings = {
  offers: Offers
}

function CardList(props: Settings): JSX.Element{
  const {offers} = props;
  return (
    <div className='cities__places-list places__list tabs__content'>
      {
        offers.map((offer, id) => {
          const keyValue = `${id}-${offer.name}`;
          return(
            <div key={keyValue}>
              <Card offer = {offer}/>
            </div>
          );
        })
      }
    </div>
  );
}

export default CardList;
