import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-accent-cyan/90 to-accent-blue/90 text-slate-950 shadow-glow hover:from-accent-cyan hover:to-accent-blue",
  ghost: "bg-white/5 text-slate-100 hover:bg-white/10 border border-white/10",
  outline: "border border-white/15 bg-transparent text-slate-100 hover:border-accent-cyan/40 hover:text-white",
};

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  external?: boolean;
};

type ButtonAsButton = Common &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = Common &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "download" | "aria-label"> & {
    href: string;
    type?: never;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export function Button(props: ButtonProps) {
  const { children, className, variant = "primary", external } = props;
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/70 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-45";

  if ("href" in props && props.href) {
    const { href, download } = props;
    return (
      <a
        href={href}
        download={download}
        aria-label={props["aria-label"]}
        className={cx(base, variants[variant], className)}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  // Remove as props próprias do componente para não vazarem como atributos no DOM
  // (e para `className` do usuário não sobrescrever as classes calculadas).
  const {
    type = "button",
    children: _children,
    className: _className,
    variant: _variant,
    external: _external,
    href: _href,
    ...rest
  } = props as ButtonAsButton;
  return (
    <button type={type} className={cx(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}
