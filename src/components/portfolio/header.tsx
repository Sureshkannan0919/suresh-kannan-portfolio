import { PORTFOLIO_DATA } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const sections = ["about", "experience", "projects", "skills", "contact"];
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block font-headline">
              {PORTFOLIO_DATA.name}
            </span>
            <span className="hidden text-sm text-muted-foreground sm:inline-block">/ {PORTFOLIO_DATA.title}</span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center space-x-1">
            {sections.map((section) => (
              <Button key={section} variant="ghost" asChild>
                <a href={`#${section}`} className="capitalize">
                  {section}
                </a>
              </Button>
            ))}
          </nav>
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="mb-4">
                <SheetTitle className="text-left font-headline text-2xl">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col">
                <nav className="flex flex-col gap-4">
                  {sections.map((section) => (
                    <a
                      key={section}
                      href={`#${section}`}
                      className="capitalize text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {section}
                    </a>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
