type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

const GlassCard = ({ children, className = "" }: GlassCardProps) => {
  return (
    <div className={`glass p-6 rounded-xl shadow-xl ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
