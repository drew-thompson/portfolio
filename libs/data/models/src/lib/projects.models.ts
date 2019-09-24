import { Timestamp } from '@firebase/firestore-types';
import { Entity } from './general.models';

/**
 * A basic representation of a project.
 */
export interface ProjectMin extends Entity {
  /** The beginning of this project. */
  start: Timestamp;
  /** The end, if any, of this project. */
  end?: Timestamp;
}

// TODO: Implement full project model
export interface Project extends ProjectMin {
  organization: string;
}
