import { IconType } from '@/modules/Shared/SharedSvg/SharedSvg';

export interface Service {
  title: string;
  icon: Extract<IconType, 'frontend' | 'backend'>;
  list: string[];
}
