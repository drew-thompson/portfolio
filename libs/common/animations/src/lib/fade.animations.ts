/**
 * @license
 * Copyright Promeets Technology Corp. All Rights Reserved.
 */

import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export function fade(duration: number = 250): AnimationTriggerMetadata {
	return trigger('fade', [
		transition(':enter', [style({ opacity: 0 }), animate(duration)]),
		transition(':leave', [animate(duration, style({ opacity: 0 }))])
	]);
}

export function fadeIn(duration: number = 250): AnimationTriggerMetadata {
	return trigger('fadeIn', [transition(':enter', [style({ opacity: 0 }), animate(duration)])]);
}

export function fadeOut(duration: number = 250, absolute: boolean = true): AnimationTriggerMetadata {
	return trigger('fadeOut', [
		transition(':leave', [absolute ? style({ position: 'absolute' }) : style({}), animate(duration, style({ opacity: 0 }))])
	]);
}
