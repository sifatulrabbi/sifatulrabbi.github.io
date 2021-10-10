import React from 'react';

export interface IStyles {
  secondary?: true;
  gutterBottom?: true;
}

export interface Props extends IStyles {
  children: React.ReactNode;
  classes?: string;
}
