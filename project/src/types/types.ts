import {State} from './state';

export type City = {
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  }
  name: string;
};

export type ReselectType<S> = (state: State) => S;
