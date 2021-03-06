import React from 'react';

export type Kind = 'info' | 'positive' | 'negative' | 'warning';
export type KindMap = Record<Kind, string>;

export interface AlertProps {
  /**
   * Set this to change alert kind
   * @default info
   */
  kind?: 'info' | 'positive' | 'negative' | 'warning';
}

const kinds: KindMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
};

export const Alert: React.FC<AlertProps> = ({ children, kind = 'info' }) => (
  <div
    className=""
    style={{
      background: kinds[kind],
    }}
  >
    {children}
  </div>
);
