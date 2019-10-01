import { Timestamp } from '@firebase/firestore-types';
import { PaletteColor } from '@portfolio/data/enums';
import { Entity } from './general.models';

/**
 * A basic representation of a project.
 */
export interface ProjectMin extends Entity {
  /** The beginning of this project. */
  start: Timestamp;
  /** The end, if any, of this project. */
  end?: Timestamp;
  /** The theme color to use when displaying this project. */
  color?: PaletteColor;
}

// TODO: Implement full project model
export interface Project extends ProjectMin {
  organization: string;
}
