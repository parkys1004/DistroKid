import { ReactNode } from 'react';

export type TabId = 'distrokid' | 'spotify-auth' | 'canvas';

export interface TabItem {
  id: TabId;
  label: string;
  icon: ReactNode;
}

export interface SectionProps {
  isActive: boolean;
}
