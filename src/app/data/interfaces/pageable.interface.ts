import { IProfile } from './profile.interface';

export interface IPageable<T> {
  items: T[];
  page: number;
  pages: number;
  size: number;
  total: number;
}
