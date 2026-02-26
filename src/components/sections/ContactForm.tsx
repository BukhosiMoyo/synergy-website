'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

const SECTORS = ['Public Sector', 'Private Sector', 'NGO / Non-Profit'];
const SERVICES = [
    'Asset Verification',
    'GRAP / IFRS Compliance',
    'FAR Reconciliation',
    'PMO Services',
    'Skills Transfer & Training',
    'Asset Management Software',
    'Other',
];

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        // Simulate a network request (replace with real endpoint later)
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setLoading(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="bg-background border border-border rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
                <CheckCircle2 className="w-16 h-16 text-highlight mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-3">
                    Message Sent!
                </h3>
                <p className="text-muted leading-relaxed max-w-sm">
                    Thank you for reaching out. A lead consultant will contact you
                    within 24 hours.
                </p>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-background border border-border rounded-2xl p-8 space-y-5"
        >
            {/* Full Name */}
            <div>
                <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-foreground mb-1.5"
                >
                    Full Name
                </label>
                <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors text-sm"
                />
            </div>

            {/* Organization */}
            <div>
                <label
                    htmlFor="contact-org"
                    className="block text-sm font-semibold text-foreground mb-1.5"
                >
                    Organisation / Department
                </label>
                <input
                    id="contact-org"
                    name="organization"
                    type="text"
                    required
                    placeholder="e.g. City of Tshwane, Dept of Health"
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors text-sm"
                />
            </div>

            {/* Sector + Service (side-by-side) */}
            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label
                        htmlFor="contact-sector"
                        className="block text-sm font-semibold text-foreground mb-1.5"
                    >
                        Sector
                    </label>
                    <select
                        id="contact-sector"
                        name="sector"
                        required
                        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors text-sm appearance-none"
                    >
                        <option value="">Select sector…</option>
                        {SECTORS.map((s) => (
                            <option key={s} value={s}>
                                {s}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label
                        htmlFor="contact-service"
                        className="block text-sm font-semibold text-foreground mb-1.5"
                    >
                        Service of Interest
                    </label>
                    <select
                        id="contact-service"
                        name="service"
                        required
                        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors text-sm appearance-none"
                    >
                        <option value="">Select service…</option>
                        {SERVICES.map((s) => (
                            <option key={s} value={s}>
                                {s}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Message */}
            <div>
                <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-foreground mb-1.5"
                >
                    Message
                </label>
                <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Briefly describe your current asset management challenges…"
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors text-sm resize-none"
                />
            </div>

            {/* Submit */}
            <Button
                type="submit"
                size="lg"
                className="w-full py-4"
                disabled={loading}
            >
                {loading ? (
                    <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending…
                    </>
                ) : (
                    <>
                        Send Message
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                )}
            </Button>
        </form>
    );
}
