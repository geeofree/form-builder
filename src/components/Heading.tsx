import classNames from "classnames";
import { HTMLAttributes } from "react";

export type Heading = HTMLAttributes<HTMLHeadingElement>;

export function Heading(props: Heading) {
  const { className, ...otherProps } = props;
  return <h1 className={classNames("text-2xl", className)} {...otherProps} />;
}
