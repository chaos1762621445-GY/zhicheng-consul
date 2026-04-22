interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

// No animation - just a passthrough div. Prevents invisible content on SSR/static screenshots.
export default function MotionSection({ children, className, style }: Props) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
