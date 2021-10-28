

export enum AppRoute {
  Login = '/login',
  Favorites ='/favorites',
  FavoritesEmpty = '/favorites-empty',
  Root = '/',
  Offer = '/offer:id',
  Main = '/main'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum SortType {
  Popular = 'Popular',
  PriceIncrease = 'Price: low to high',
  PriceDecrease = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}
