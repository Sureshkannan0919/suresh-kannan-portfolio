import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function SectionWrapper({ children, className, ...props }: SectionWrapperProps) {
  return (
    <section
      className={cn("container max-w-4xl px-4 py-16 sm:py-24", className)}
      {...props}
    >
      {children}
    </section>
  );
}

export function SectionHeader({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <div className={cn("mb-12 text-center", className)} {...props}>
            <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                {children}
            </h2>
        </div>
    )
}
