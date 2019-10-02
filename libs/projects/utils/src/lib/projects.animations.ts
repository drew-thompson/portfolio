import {
  animate,
  animateChild,
  AnimationTriggerMetadata,
  query,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

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
  transition('false <=> true', [animate(`${timing / 2}ms ${timing}ms ease-in-out`)])
]);

export const splash: AnimationTriggerMetadata = trigger('splash', [
  state('false', style({ overflow: 'hidden', paddingTop: 0, height: 0 })),
  state('true', style({ height: '*' })),
  transition('* => *', [animate(`${timing}ms ease-in-out`)])
]);

export const complexSplash: AnimationTriggerMetadata[] = [
  trigger('splash', [
    state('true', style({ height: '*' })),
    state('false', style({ height: 0, overflow: 'hidden', paddingTop: 0 })),
    transition('false => true', [
      animate(`${timing}ms ${timing / 2}ms ease-in-out`),
      query('@content', animateChild({ delay: timing }))
    ]),
    transition('true => false', [
      query('@content', animateChild({ delay: 0 })),
      animate(`${timing}ms ${timing / 2}ms ease-in-out`)
    ])
  ]),
  trigger('content', [
    state('false', style({ height: 0 })),
    state('true', style({ height: '*' })),
    transition('false => true', animate(`${timing}ms ease-in-out`)),
    transition('true => false', animate(`${timing}ms ease-in-out`))
  ])
];
