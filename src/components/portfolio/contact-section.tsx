import { PORTFOLIO_DATA } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="bg-muted/50 text-center">
      <SectionHeader>Get In Touch</SectionHeader>
      <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
        I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind, want to connect, or just say hello!
      </p>
      <div className="mt-8">
        <Button size="lg" asChild>
            <a href={`mailto:${PORTFOLIO_DATA.email}`}>
                <Mail className="mr-2 h-5 w-5"/>
                {PORTFOLIO_DATA.email}
            </a>
        </Button>
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <a href={PORTFOLIO_DATA.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href={PORTFOLIO_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href={PORTFOLIO_DATA.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter />
          </a>
        </Button>
      </div>
    </SectionWrapper>
  );
}
