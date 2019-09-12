/**
 * @license
 * Copyright Promeets Technology Corp. All Rights Reserved.
 */

import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

export function scaleInOut(duration: number = 300): AnimationTriggerMetadata {
	return trigger('scaleInOut', [
		transition(':enter', [style({ transform: 'scale(0)' }), animate(duration)]),
		transition(':leave', [style({ position: 'absolute' }), animate(duration, style({ transform: 'scale(1)' }))])
	]);
}

export function scaleIn(duration: number = 300): AnimationTriggerMetadata {
	return trigger('scaleIn', [transition(':enter', [style({ transform: 'scale(0)' }), animate(duration)])]);
}

export function scaleOut(duration: number = 300): AnimationTriggerMetadata {
	return trigger('scaleOut', [
		transition(':leave', [style({ position: 'absolute' }), animate(duration, style({ transform: 'scale(1)' }))])
	]);
}

export function pulse(duration: number = 300, max: number = 1.1): AnimationTriggerMetadata {
	return trigger('pulse', [
		state('static', style({ transform: 'scale(1)' })),
		state('expanded', style({ transform: `scale3d(${max}, ${max}, 1)` })),
		transition('static <=> expanded', animate(duration))
	]);
}
