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
