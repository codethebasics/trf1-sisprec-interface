import { trigger, state, style, animate, transition } from '@angular/animations';

export const fadeInAnimation = trigger('fadeInAnimation', [
  state('void', style({ opacity: 0 })),
  transition(':enter', [
    animate('300ms', style({ opacity: 1 }))
  ]),
]);

export const fadeOutAnimation = trigger('fadeOutAnimation', [
    state('void', style({ opacity: 1 })),
    transition(':leave', [
      animate('300ms', style({ opacity: 0 }))
    ]),
]);

export const slideInAnimation = trigger('slideInAnimation', [
    state('void', style({ transform: 'translateX(-100%)' })),
    state('*', style({ transform: 'translateX(0)' })),
    transition(':enter', animate('300ms')),
    transition(':leave', animate('300ms')),
]);
