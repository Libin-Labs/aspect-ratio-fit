export interface FitSize {
  readonly width: number;
  readonly height: number;
  readonly scale: number;
}
export function fitAspectRatio(
  sourceWidth: number,
  sourceHeight: number,
  boxWidth: number,
  boxHeight: number,
  mode: 'contain' | 'cover' = 'contain',
): FitSize {
  const values = [sourceWidth, sourceHeight, boxWidth, boxHeight];
  if (!values.every(Number.isFinite)) throw new TypeError('Dimensions must be finite');
  if (values.some((value) => value <= 0) || !['contain', 'cover'].includes(mode))
    throw new RangeError('Dimensions and mode must be valid');
  const sx = boxWidth / sourceWidth,
    sy = boxHeight / sourceHeight,
    scale = mode === 'contain' ? Math.min(sx, sy) : Math.max(sx, sy);
  return { width: sourceWidth * scale, height: sourceHeight * scale, scale };
}
