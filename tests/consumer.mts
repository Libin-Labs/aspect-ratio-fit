import * as api from '@lp-labs/aspect-ratio-fit';
import { fitAspectRatio } from '@lp-labs/aspect-ratio-fit';
console.log(fitAspectRatio(1920, 1080, 400, 300));
// @ts-expect-error invalid argument must be rejected by declarations
api.fitAspectRatio('wide', 9, 400, 300);
