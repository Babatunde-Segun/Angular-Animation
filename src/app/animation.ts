import {
  transition,
  style,
  query,
  trigger,
  animateChild,
  animate,
  group,
  stagger,
  state,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('HomePage <=> HeroListPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ right: '-100%' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('300ms ease-out', style({ left: '100%' }))], {
        optional: true,
      }),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
        optional: true,
      }),
    ]),
  ]),
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ],
      { optional: true }
    ),
    query(':enter', [style({ left: '-100%' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [animate('200ms ease-out', style({ right: '100%', opacity: 0 }))],
        {
          optional: true,
        }
      ),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], {
        optional: true,
      }),
      query('@*', animateChild(), { optional: true }),
    ]),
  ]),
]);

export const staggerAnimation = trigger('pageAnimations', [
  transition(':enter', [
    query('.hero', [
      style({ opacity: 0, transform: 'translateY(-50px)' }),
      stagger(100, [
        animate(
          '500ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ opacity: 1, transform: 'none' })
        ),
      ]),
    ]),
  ]),
]);

export const filterStaggerAnimation = trigger('filterAnimation', [
  transition(':enter, * => 0, * => -1', []),
  transition(':increment', [
    query(
      ':enter',
      [
        style({ opacity: 0, width: 0 }),
        stagger(50, [
          animate('300ms ease-out', style({ opacity: 1, width: '*' })),
        ]),
      ],
      { optional: true }
    ),
  ]),
  transition(':decrement', [
    query(':leave', [
      stagger(50, [animate('300ms ease-out', style({ opacity: 0, width: 0 }))]),
    ]),
  ]),
]);

export const flyAnimation = trigger('flyInOut', [
  state(
    'in',
    style({
      width: '*',
      transform: 'translateX(0)',
      opacity: 1,
    })
  ),
  transition(':enter', [
    style({ width: 100, transform: 'translateX(50px)', opacity: 0 }),
    group([
      animate(
        '0.3s 0.1s ease',
        style({
          transform: 'translateX(0)',
          width: '*',
        })
      ),
      animate(
        '0.3s ease',
        style({
          opacity: 1,
        })
      ),
    ]),
  ]),
  transition(':leave', [
    group([
      animate(
        '0.3s ease',
        style({
          transform: 'translateX(50px)',
          width: 100,
        })
      ),
      animate(
        '0.3s 0.2s ease',
        style({
          opacity: 0,
        })
      ),
    ]),
  ]),
]);
