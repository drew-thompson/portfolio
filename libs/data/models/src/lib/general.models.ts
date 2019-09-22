/**
 * Used in conjuction with `<a/>` elements to connect a `routerLink` with text.
 * @example
 * <a [routerLink]="link.url">{{ link.title }}</a>
 */
export interface Link {
  /** The text to be displayed for this link. */
  title: string;
  /** The app URL to navigate to upon clicking this link. */
  url: string;
}

/**
 * A `mat-tile` represented within a `mat-grid-list`.
 */
export interface Tile {
  /** Text to display within tile. */
  text?: string;
  /** Background color of tile. */
  color?: string;
  /** Number of columns this tile is intended to consume. */
  cols?: number;
  /** Number of rows this tile is intended to consume. */
  rows?: number;
}

/**
 * An available section of the site to be viewed.
 */
export interface Topic extends Card, Link {
  /** Title subject of the topic. */
  title: string;
  /** Secondary description of the topic. */
  subtitle: string;
  /** More extensive description of the topic. */
  description: string;
}

/** Available options for a typical card. */
export interface Card {
  /** Title subject of the card. */
  title?: string;
  subtitle?: string;
  content?: string;
  image?: string;
  avatar?: string;
}

/**
 * An individual project.
 */
export interface Project extends Link {
  start: string;
  end?: string;
}
