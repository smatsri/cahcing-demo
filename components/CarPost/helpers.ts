import { SyntheticEvent } from 'react';

export const preventDefault = (cb?: () => void) => (e: SyntheticEvent) => {
  e.preventDefault();
  e.stopPropagation();
  if (cb) cb();
};
