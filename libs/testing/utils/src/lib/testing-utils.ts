import { Timestamp } from '@firebase/firestore-types';
import { of } from 'rxjs';

const data = of(['hi']);
const collectionStub = {
  valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data)
};

export const angularFirestoreStub = {
  collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
};

const date = new Date();
export const mockTimestamp: Timestamp = {
  seconds: date.getSeconds(),
  nanoseconds: 0,
  toDate: () => date,
  toMillis: () => date.getMilliseconds(),
  isEqual: other => date === other.toDate()
};
