import { Timestamp } from '@firebase/firestore-types';
import { Entity } from './general.models';

export interface Post extends Entity {
  createdAt: Timestamp;
}
