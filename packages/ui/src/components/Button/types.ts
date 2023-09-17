import { ReactNode } from "react";

export type ButtonProps = {
  variant?: 'primary' | 'secondary'
  onClick: () => void,
  children: ReactNode
};
