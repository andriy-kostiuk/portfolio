import { ReactElement, SVGProps } from 'react';

export interface IExperience {
  company: string;
  duration: string;
  position: string;
  list: string[];
  icon: ReactElement<SVGProps<SVGSVGElement>>;
  technologies?: string[];
}
