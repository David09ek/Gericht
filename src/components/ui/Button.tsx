import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

type Variant = "solid" | "ghost";

function classes(variant: Variant, className?: string) {
  return [styles.button, variant === "ghost" && styles.ghost, className]
    .filter(Boolean)
    .join(" ");
}

type ButtonProps = { variant?: Variant } & ComponentPropsWithoutRef<"button">;

export function Button({ variant = "solid", className, ...props }: ButtonProps) {
  return <button className={classes(variant, className)} {...props} />;
}

type ButtonLinkProps = { variant?: Variant; href: string } & Omit<
  ComponentPropsWithoutRef<"a">,
  "href"
>;

/** Same visual treatment, rendered as a link for navigation. */
export function ButtonLink({ variant = "solid", className, href, ...props }: ButtonLinkProps) {
  return <Link href={href} className={classes(variant, className)} {...props} />;
}
