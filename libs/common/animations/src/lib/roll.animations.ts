/**
 * @license
 * Copyright Promeets Technology Corp. All Rights Reserved.
 */

import { animate, AnimationTransitionMetadata, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export function roll(duration: number = 300): AnimationTriggerMetadata {
	return trigger('roll', [animateIn(duration), animateOut(duration)]);
}

export function rollIn(duration: number = 300): AnimationTriggerMetadata {
	return trigger('rollIn', [animateIn(duration)]);
}

export function rollOut(duration: number = 300): AnimationTriggerMetadata {
	return trigger('rollOut', [animateOut(duration)]);
}

export function animateIn(duration: number): AnimationTransitionMetadata {
	return transition(':enter', [
		style({
			transform: 'scale(0) rotate(60deg) translateX(75%) translateY(15%)'
		}),
		animate(duration)
	]);
}

export function animateOut(duration: number): AnimationTransitionMetadata {
	return transition(':leave', [
		style({ position: 'absolute' }),
		animate(
			duration,
			style({
				transform: 'scale(0) rotate(60deg) translateX(75%) translateY(15%)'
			})
		)
	]);
}
