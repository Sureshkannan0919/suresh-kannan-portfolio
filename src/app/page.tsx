import { Header } from "@/components/portfolio/header";
import { InfiniteScroller } from "@/components/portfolio/infinite-scroller";
import { ContactSection } from "@/components/portfolio/contact-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <InfiniteScroller />
      </main>
      <footer className="py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Profolio. All Rights Reserved.
      </footer>
    </div>
  );
}
