import { FC, ButtonHTMLAttributes } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "save" | "cancel";
}

const Button: FC<ButtonProps> = ({ variant = "primary", children, ...rest }) => {
    return (
        <button className={`btn ${variant}`} {...rest}>
            {children}
        </button>
    );
};

export { Button };
