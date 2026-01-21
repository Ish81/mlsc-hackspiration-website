import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can participate?",
    answer:
      "Any college student from any institution across India can participate. Whether you're a beginner or an experienced developer, Hackpiration'26 welcomes all skill levels.",
  },
  {
    question: "What is the team size?",
    answer:
      "Teams can consist of 2-4 members. Cross-college teams are allowed. Solo participation is not permitted to encourage collaboration.",
  },
  {
    question: "Is it beginner friendly?",
    answer:
      "Absolutely! We have mentors available throughout the event to help beginners. We also provide workshops and resources to help you get started.",
  },
  {
    question: "Is the hackathon offline?",
    answer:
      "Yes, Hackpiration'26 is an offline hackathon held at VIT Pune campus. All registered participants must be present at the venue on 31st January.",
  },
  {
    question: "What should we bring?",
    answer:
      "Bring your laptop, charger, student ID, and lots of enthusiasm! We'll provide food, drinks, and a great hacking environment.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/10 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-16">
          <h2 className="section-title">
            <HelpCircle size={16} className="text-accent" />
            <span>FAQ</span>
            <HelpCircle size={16} className="text-accent" />
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group border border-border/50 rounded-xl bg-card/50 backdrop-blur-sm px-6 data-[state=open]:border-primary/40 data-[state=open]:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all duration-500 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 hover:no-underline gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-primary font-mono text-sm opacity-50 group-data-[state=open]:opacity-100">
                      0{index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 pl-9">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
