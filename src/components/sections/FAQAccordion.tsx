'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQ } from '@/data/solutions';

interface FAQAccordionProps {
    faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="space-y-3">
            {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                    <div
                        key={idx}
                        className={`bg-background border rounded-xl overflow-hidden transition-colors ${isOpen ? 'border-accent/30' : 'border-border'
                            }`}
                    >
                        <button
                            type="button"
                            onClick={() => setOpenIndex(isOpen ? null : idx)}
                            className="w-full flex items-center justify-between px-6 py-5 text-left group"
                        >
                            <span className="text-foreground font-semibold pr-4 leading-snug">
                                {faq.question}
                            </span>
                            <ChevronDown
                                className={`w-5 h-5 text-muted shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-accent' : ''
                                    }`}
                            />
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <p className="px-6 pb-5 text-muted leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
