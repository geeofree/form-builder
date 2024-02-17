import { ComponentProps } from "react";
import classNames from "classnames";
import NextLink from "next/link";

export type Link = ComponentProps<typeof NextLink>;

export function Link(props: Link) {
  const { className, ...otherProps } = props;
  return (
    <NextLink
      className={classNames(
        "text-blue-600 hover:text-blue-800 active:text-blue-900 visited:text-purple-700 visited:hover:text-purple-800",
        className,
      )}
      {...otherProps}
    />
  );
}
