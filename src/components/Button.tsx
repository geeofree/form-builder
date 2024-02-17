import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

type ButtonVariants =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "alert"
  | "error";

const ButtonVariantMap: Record<ButtonVariants, string> = {
  default:
    "bg-gray-200 rounded hover:bg-gray-300 active:bg-gray-400 disabled:bg-gray-100 disabled:text-gray-400",
  primary:
    "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-300 text-white rounded",
  secondary: "",
  success: "",
  alert: "",
  error: "",
};

export type Button = {
  variant?: ButtonVariants;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: Button) {
  const { className, variant, ...otherProps } = props;
  return (
    <button
      type="button"
      className={classNames(
        "p-2 disabled:cursor-not-allowed",
        variant
          ? ButtonVariantMap[variant] ?? ButtonVariantMap.default
          : ButtonVariantMap.default,
        className,
      )}
      {...otherProps}
    />
  );
}
