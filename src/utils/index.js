export const random = (min, max) => {
  let _min = min;
  let _max = max;

  if (!Number.isInteger(max)) {
    _max = min || 1;
    _min = 0;
  }

  return _min + Math.random() * (_max - _min);
};
