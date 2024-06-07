import { ReactNode } from "react";

export interface CardProps {
  width: number;
  height: number;
  backgroundColor?: string;
  children?: ReactNode;
}
export interface ContainerProps {
  width: number;
  height: number;
}
