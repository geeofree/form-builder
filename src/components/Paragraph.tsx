import classNames from "classnames";
import { HTMLAttributes } from "react";

export type Paragraph = HTMLAttributes<HTMLParagraphElement>;

export function Paragraph(props: Paragraph) {
  const { className, ...otherProps } = props;
  return <p className={classNames("text-sm", className)} {...otherProps} />;
}
