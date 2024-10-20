import { cn } from '../../lib/utils';

const Label = ({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "font-dm-sans font-medium text-xs text-custom-gray-400 mb-1",
        className
      )}
    >
      {value}
    </div>
  );
};

export default Label;
