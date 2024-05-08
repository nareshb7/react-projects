export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    styles?: React.CSSProperties
    className?: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    styles?: React.CSSProperties
    className?: string;
}

export interface ErrorMessageProps {
    error : string
  }