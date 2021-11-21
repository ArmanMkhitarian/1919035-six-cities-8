

export enum AppRoute {
  Login = '/login',
  Favorites ='/favorites',
  FavoritesEmpty = '/favorites-empty',
  Root = '/',
  Offer = '/hotels/:id',
  Main = '/main',
  NotFound = '/notfound'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  Offers = 'offers',
  Offer = 'offer',
  User = 'user',
}

export enum DataStatus {
  IsSended ='IS_SENDED',
  NotSended ='NOT_SENDED',
  Default = 'DEFAULT',
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

export enum APIRoute {
  Offers = '/hotels',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Offer = '/hotels/',
  Comments = '/comments'
}

export const ERROR_MESSAGE = 'Ошибка';
export const MonthNames: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
