import { FormEvent, ReactNode } from "react";
import Link from "next/link";

export type ButtonProps = {
  href?: string;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit';
  children: ReactNode;
}

export default function Button({ onClick, href, target, rel, type, className, children, ...props }: ButtonProps) {
  if (href) {
    return (
      <Link 
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      onClick={onClick}
      type={type}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};
