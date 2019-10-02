import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

const timing = 250;

export const listing: AnimationTriggerMetadata = trigger('listing', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(.5rem)' }),
    animate(`${timing / 2}ms ${timing}ms ease-out`, style({ opacity: 1, transform: 'translateX(0rem)' }))
  ]),
  transition(':leave', [
    animate(`${timing}ms ease-out`, style({ opacity: 0, transform: 'translateX(-.5rem)', height: 0 }))
  ])
]);

export const detail: AnimationTriggerMetadata = trigger('detail', [
  state('true', style({ opacity: 1, transform: 'translateX(0rem)' })),
  state('false', style({ opacity: 0, transform: 'translateX(-.5rem)', height: 0 })),
  transition('false => true', [animate(`${timing / 2}ms ${timing}ms ease-in-out`)]),
  transition('true => false', [animate(`${timing}ms ${timing * 0.85}ms ease-in-out`)])
]);
