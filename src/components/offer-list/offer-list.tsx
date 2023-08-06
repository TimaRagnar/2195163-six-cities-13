import OfferCard from '../offer-card/offer-card';
import { Offers } from '../../types/offer';
import classNames from 'classnames';

type OfferListProps = {
  type: 'cities' | 'near';
  offers: Offers;
  onListItemHover?: (id: string) => void;
}

function OfferList({type, offers, onListItemHover}: OfferListProps): JSX.Element {
  const handleCardHover = (id: string) => {
    if (onListItemHover) {
      onListItemHover(id);
    }
  };

  const offerListClass = classNames({
    'places__list': true,
    'cities__places-list': type === 'cities',
    'near-places__list': type === 'near',
    'tabs__content': type === 'cities'
  });

  return (
    <div className={offerListClass}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          {...offer}
          handleCardHover={() => handleCardHover(offer.id)}
        />)
      )}
    </div>
  );
}

export default OfferList;
