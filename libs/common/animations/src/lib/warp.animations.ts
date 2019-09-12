/**
 * @license
 * Copyright Promeets Technology Corp. All Rights Reserved.
 */

import {
	animate,
	AnimationTransitionMetadata,
	AnimationTriggerMetadata,
	keyframes,
	style,
	transition,
	trigger
} from '@angular/animations';

export function warp(inDuration: number = 500, fadePoint: number = 0.5, outDuration: number = 300): AnimationTriggerMetadata {
	return trigger('warp', [transitionWarpIn(inDuration, fadePoint), transitionWarpOut(outDuration)]);
}

export function warpIn(duration: number = 800, fadePoint: number = 0.5): AnimationTriggerMetadata {
	return trigger('warpIn', [transitionWarpIn(duration, fadePoint)]);
}

export function warpOut(duration: number = 300, fadePoint: number = 0.5): AnimationTriggerMetadata {
	return trigger('warpOut', [transitionWarpOut(duration)]);
}

export function transitionWarpIn(duration: number, fadePoint: number = 0.5): AnimationTransitionMetadata {
	return transition(':enter', [
		animate(
			duration,
			keyframes([
				style({ opacity: 0, height: 0, padding: 0, margin: 0, offset: 0 }),
				style({
					opacity: 0,
					padding: '*',
					margin: '*',
					height: '*',
					offset: fadePoint
				}),
				style({ opacity: 1, offset: 1 })
			])
		)
	]);
}

export function transitionWarpOut(duration: number): AnimationTransitionMetadata {
	return transition(':leave', [
		style({ overflow: 'hidden' }),
		animate(`${duration}ms ease-in-out`, style({ height: 0, padding: 0, margin: 0 }))
	]);
}
