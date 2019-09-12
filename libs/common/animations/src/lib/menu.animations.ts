/**
 * @license
 * Copyright Promeets Technology Corp. All Rights Reserved.
 */

import { animate, animateChild, AnimationTriggerMetadata, query, state, style, transition, trigger } from '@angular/animations';

const enum Metric {
	Pixels = 'px',
	Percentage = '%'
}

export function menu(
	delay: number = 0,
	parentTiming: number = 250,
	childTimings: number[] = [200, 150],
	childTranslations: number[] = [10, 10],
	translationMetric: Metric = Metric.Pixels
): AnimationTriggerMetadata[] {
	return [
		trigger('menu', [
			state(
				'collapsed',
				style({
					opacity: 0,
					height: 0,
					transform: `translateX(-${childTranslations[0]}${translationMetric.toString()}) translateY(-${
						childTranslations[1]
					}${translationMetric.toString()}) `
				})
			),
			state('expanded', style({ height: '*', opacity: 1 })),
			transition('collapsed => expanded', [animate(`${parentTiming}ms ease-in-out`), query('@filters', animateChild({ delay }))]),
			transition('expanded => collapsed', [query('@filters', animateChild({ delay })), animate(`${parentTiming}ms ease-in-out`)])
		]),
		trigger('filters', [
			state(
				'hidden',
				style({
					opacity: 0,
					transform: `translateX(-${childTranslations[0]}${translationMetric.toString()}) translateY(-${
						childTranslations[1]
					}${translationMetric.toString()})`
				})
			),
			state('visible', style({ opacity: 1, transform: 'translate(0)' })),
			transition('hidden => visible', animate(childTimings[0])),
			transition('visible => hidden', animate(childTimings[1]))
		])
	];
}
