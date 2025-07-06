// types/hero-icon-type.ts
import type { SVGProps, ForwardRefExoticComponent, RefAttributes } from 'react';

export type HeroIcon = ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, 'ref'> & {
    title?: string;
    titleId?: string;
} & RefAttributes<SVGSVGElement>
>;
