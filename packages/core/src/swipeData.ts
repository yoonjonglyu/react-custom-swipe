import { SwipeStateProps } from './state';

export const getStart = (e: Partial<TouchEvent & MouseEvent>) => {
  const x = e.targetTouches ? e.targetTouches[0].pageX : e.pageX || 0;
  const y = e.targetTouches ? e.targetTouches[0].pageY : e.pageY || 0;
  return { x, y };
};
export const getMove = (
  e: Partial<TouchEvent & MouseEvent>,
  swipeState: SwipeStateProps,
) => {
  const x = e.targetTouches ? e.targetTouches[0].pageX : e.pageX || 0;
  const y = e.targetTouches ? e.targetTouches[0].pageY : e.pageY || 0;
  const offset = x - swipeState.startX - swipeState.currentX;

  return { x, y, offset };
};
export const getEnd = (
  e: Partial<TouchEvent & MouseEvent>,
  swipeState: SwipeStateProps,
) => {
  const x = e.changedTouches ? e.changedTouches[0].pageX : e.pageX || 0;
  const y = e.changedTouches ? e.changedTouches[0].pageY : e.pageY || 0;
  const offset = swipeState.startX - x;
  return { x, y, offset };
};
