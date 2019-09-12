/**
 * @license
 * Copyright Promeets Technology Corp. All Rights Reserved.
 */

import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

export function textShadowPulse(
	radius: number = 1,
	duration: number = 300,
	defaultColor: string = 'rgba(0, 0, 0, 1)'
): AnimationTriggerMetadata {
	return trigger('textShadowPulse', [
		state('static', style({})),
		state('pulsing', style({ textShadow: `0 0 ${radius}px {{shade}}` }), {
			params: { shade: defaultColor }
		}),
		transition('static <=> pulsing', animate(duration))
	]);
}
