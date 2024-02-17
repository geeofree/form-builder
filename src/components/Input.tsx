import classNames from "classnames";
import { InputHTMLAttributes } from "react";

export type Input = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: Input) {
  const { className, ...otherProps } = props;
  return (
    <input
      type="text"
      className={classNames("p-2 border border-gray-300 rounded", className)}
      {...otherProps}
    />
  );
}
