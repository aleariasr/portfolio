import { LinkButton } from "@/components/ui/LinkButton";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/Section";
import { services } from "@/content/services";
import { routes } from "@/content/site";

export function ServicesSection() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="What I Do"
        title="Software built around how your business actually runs."
        description="Not templates. Systems designed from your real workflow, with the data and audit trail to back it up."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.slug}>
            <h3 className="text-xl font-bold tracking-tight">{service.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{service.forWho}</p>

            <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-foreground">
              {service.whatYouGet.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-muted-foreground" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <LinkButton href={routes.services} variant="secondary">
          See all services
        </LinkButton>
      </div>
    </Section>
  );
}
