import { myLib } from '@my-org/my-lib';
export function myLib2(): string {
  return 'my-lib-2';
}

export function myNewFeature3(): string {
  return myLib();
}
