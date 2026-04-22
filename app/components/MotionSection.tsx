interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function MotionSection({ children, className, style }: Props) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
