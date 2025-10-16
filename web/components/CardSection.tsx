"use client";

import { PropsWithChildren } from "react";
import { Section } from "@/components/Section";
import { InteractiveCard } from "@/components/InteractiveCard";

type CardSectionProps = PropsWithChildren<{
  id: string;
  title?: string;
  subtitle?: string;
  className?: string;
  cardClassName?: string;
}>;

export function CardSection({ id, title, subtitle, className, cardClassName, children }: CardSectionProps) {
  return (
    <Section id={id} title={title} subtitle={subtitle} className={className}>
      <InteractiveCard className={cardClassName ?? "p-6 md:p-8"}>
        {children}
      </InteractiveCard>
    </Section>
  );
}


