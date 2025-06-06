import { IconType } from '@/modules/Shared/SharedSvg/SharedSvg';

export interface IExperience {
  company: string;
  duration: string;
  position: string;
  list: string[];
  icon: IconType;
  technologies?: string[];
}
