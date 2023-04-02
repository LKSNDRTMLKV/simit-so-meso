import { type ButtonHTMLAttributes, type DetailedHTMLProps, type ReactNode } from "react";

interface Props extends DetailedHTMLProps
<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  shouldFill?: boolean;
  className?: string;
}

const IconButton = ({ children, shouldFill, className, ...rest }: Props) => {
  return (
    <button
      className={`flex w-10 h-10 items-center justify-center [&_svg]:w-6 [&_svg]:h-6 
      ${shouldFill ? "[&_svg>*]:fill-primaryText" : ""} 
      ${className ? className : ""}`}
      {...rest}
    >
      {children}
    </button>
  )
};

export default IconButton;
