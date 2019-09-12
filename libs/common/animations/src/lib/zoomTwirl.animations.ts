/**
 * @license
 * Copyright Promeets Technology Corp. All Rights Reserved.
 */

import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export function zoomTwirl(duration: number = 300): AnimationTriggerMetadata {
	return trigger('zoomTwirl', [
		transition(':enter', [
			style({
				transform: 'scale(0) rotate(60deg) translateX(75%) translateY(15%)'
			}),
			animate(duration)
		]),
		transition(':leave', [
			style({ position: 'absolute' }),
			animate(
				duration,
				style({
					transform: 'scale(0) rotate(60deg) translateX(75%) translateY(15%)'
				})
			)
		])
	]);
}
