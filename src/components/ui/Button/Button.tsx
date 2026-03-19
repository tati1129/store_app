import type {  FC, ReactNode } from 'react'
import clsx from 'clsx';
import styles from "./Button.module.css"

interface Props {
children : ReactNode;
onClick: () => void;
variant?: "primary" | "secondary" | "danger";
}
export const Button : FC<Props> = ({children, onClick, variant = "primary"}) => {
  return (
    <button type='button' onClick={onClick} className={clsx(styles.button, styles[variant])} > {children} </button>
  );
};