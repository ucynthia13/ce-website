import { cn } from "@/lib/utils";
type SectionTitleProps = {
  title: string;
  className?: string
}
const SectionTitle = ({
  title,
  className
}: SectionTitleProps) => {
  return (
    <h2 className={cn("text-3xl mb-12 font-medium", className)}>{title}</h2>
  );
};

export default SectionTitle;
