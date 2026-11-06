# @lp-labs/aspect-ratio-fit

Computes contained or covered dimensions for an aspect ratio in a target box.

Original, standalone MIT TypeScript implementation with **zero runtime or peer dependencies**. ESM/CommonJS exports and separate declarations; Node18+ and compatible ES2022 browsers. No service, filesystem, network, clock or browser globals accessed on import. Compiler/formatter dependencies are development-only.

## Install

```sh
npm install @lp-labs/aspect-ratio-fit
```

## Working example

```js
import { fitAspectRatio } from '@lp-labs/aspect-ratio-fit';
console.log(fitAspectRatio(1920, 1080, 400, 300));
```

CommonJS: `const api = require('@lp-labs/aspect-ratio-fit')`.

## Behavior, customization and limits

Fits a positive finite source rectangle inside or across a positive finite viewport, preserving aspect ratio. Cover mode may exceed one viewport dimension; placement and pixel rounding are left to the caller.

Use the explicit function arguments and public types below to customize the documented behavior. There are no hidden environment settings or sibling-library requirements. Array inputs must be dense; sparse entries are invalid. Inputs are validated before a successful result is returned. Outputs do not mutate caller-owned inputs. Hostile proxies/getters and concurrent mutation are outside the contract.

## Errors and integration

Invalid data never produces an empty success-shaped substitute. TypeError reports incompatible runtime types/nonfinite numbers; RangeError reports unsupported ranges, invalid syntax, inconsistent states and exceeded budgets. Functions that explicitly return null, false or empty arrays describe those legitimate outcomes above. Errors propagate to callers; UI applications should catch at their boundary and visibly notify users. Numerical calculations use JavaScript IEEE754 unless the API explicitly uses bigint; compare approximate numerical results with application-appropriate tolerances.

## Complete public API

```ts
export interface FitSize {
  readonly width: number;
  readonly height: number;
  readonly scale: number;
}
export declare function fitAspectRatio(
  sourceWidth: number,
  sourceHeight: number,
  boxWidth: number,
  boxHeight: number,
  mode?: 'contain' | 'cover',
): FitSize;
```

## Performance and portability

Complexity and resource ceilings are specified above. Buffered synchronous algorithms do not create workers or timers; callers can move expensive work to their own worker. Limits are enforced, not silently truncated. No runtime imports from any other library. No compatibility or completeness claims beyond the stated scope.

## Support

If this library is useful to you, consider supporting its maintenance with a [donation via PayPal](https://www.paypal.me/LibinPrasanth).

## Author

Created by [Libin Prasanth](https://www.linkedin.com/in/libinprasanth/). Connect on LinkedIn for updates and discussion.
