"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function BookingForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("/api/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (res.ok && result.success) {
                setIsSuccess(true);
            } else {
                setErrorMessage(result.message || "Something went wrong. Please try again.");
            }
        } catch {
            setErrorMessage("Network error. Please try again or use our alternative contact methods.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="bg-surface border-2 border-primary/20 rounded-2xl p-8 md:p-12 text-center shadow-lg">
                <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-foreground mb-4">Request Received</h3>
                <p className="text-lg text-muted mb-8 max-w-md mx-auto">
                    Thank you for reaching out. A platform specialist will review your details and contact you shortly to confirm your consultation slot.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button onClick={() => window.location.href = "/asset-management"} className="w-full sm:w-auto">
                        Explore Our Platform
                    </Button>
                    <Button variant="outline" onClick={() => setIsSuccess(false)} className="w-full sm:w-auto">
                        Submit Another Request
                    </Button>
                </div>
            </div>
        );
    }

    const inputClasses = "w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted/50";
    const labelClasses = "block text-sm font-semibold text-foreground mb-2";

    return (
        <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-2xl p-6 md:p-10 shadow-lg relative overflow-hidden">
            {isSubmitting && (
                <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm z-10 flex items-center justify-center flex-col gap-4">
                    <Loader2 className="w-10 h-10 text-primary animate-spin" />
                    <p className="text-foreground font-medium animate-pulse">Processing request...</p>
                </div>
            )}

            {errorMessage && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm font-medium">
                    {errorMessage}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Full Name */}
                <div>
                    <label htmlFor="fullName" className={labelClasses}>Full Name *</label>
                    <input type="text" id="fullName" name="fullName" required className={inputClasses} placeholder="John Doe" />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className={labelClasses}>Work Email *</label>
                    <input type="email" id="email" name="email" required className={inputClasses} placeholder="john@organization.gov.za" />
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className={labelClasses}>Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required className={inputClasses} placeholder="+27 00 000 0000" />
                </div>

                {/* Organization */}
                <div>
                    <label htmlFor="organization" className={labelClasses}>Organization / Company *</label>
                    <input type="text" id="organization" name="organization" required className={inputClasses} placeholder="Department of Health" />
                </div>

                {/* Role/Title */}
                <div>
                    <label htmlFor="role" className={labelClasses}>Role / Title</label>
                    <input type="text" id="role" name="role" className={inputClasses} placeholder="Director of Asset Management" />
                </div>

                {/* Sector */}
                <div>
                    <label htmlFor="sector" className={labelClasses}>Sector *</label>
                    <select id="sector" name="sector" required className={inputClasses}>
                        <option value="">Select your sector...</option>
                        <option value="Public Sector / Government">Public Sector / Government</option>
                        <option value="Private Sector">Private Sector</option>
                        <option value="NGO / Non-profit">NGO / Non-profit</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Interest */}
                <div className="md:col-span-2">
                    <label htmlFor="interest" className={labelClasses}>Primary Interest *</label>
                    <select id="interest" name="interest" required className={inputClasses}>
                        <option value="">What can we help you with?</option>
                        <option value="Fixed Asset Management / Verification">Fixed Asset Management & Verification</option>
                        <option value="Digital Platform / Website">Website & Digital Presence</option>
                        <option value="Reporting & Compliance Workflows">Reporting & Compliance Workflows</option>
                        <option value="General Consultation">General Strategic Consultation</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                    <label htmlFor="message" className={labelClasses}>Message / Goals *</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className={`${inputClasses} resize-none`}
                        placeholder="Briefly describe your current challenges or what you hope to achieve..."
                    />
                </div>

                {/* Contact Method */}
                <div>
                    <label htmlFor="contactMethod" className={labelClasses}>Preferred Contact Method *</label>
                    <select id="contactMethod" name="contactMethod" required className={inputClasses}>
                        <option value="Email">Email</option>
                        <option value="Phone Call">Phone Call</option>
                        <option value="WhatsApp">WhatsApp</option>
                    </select>
                </div>

                {/* Meeting Time */}
                <div>
                    <label htmlFor="meetingTime" className={labelClasses}>Preferred Meeting Time</label>
                    <select id="meetingTime" name="meetingTime" className={inputClasses}>
                        <option value="">No preference</option>
                        <option value="Morning">Morning (08:00 - 12:00)</option>
                        <option value="Afternoon">Afternoon (12:00 - 17:00)</option>
                    </select>
                </div>

                {/* Consent Checkbox */}
                <div className="md:col-span-2 mt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center mt-0.5">
                            <input type="checkbox" name="consent" required className="peer sr-only" />
                            <div className="w-5 h-5 border-2 border-muted/50 rounded flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary/50 transition-colors">
                                <CheckCircle2 className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100" />
                            </div>
                        </div>
                        <span className="text-sm text-muted group-hover:text-foreground transition-colors leading-relaxed">
                            I agree to be contacted about this enquiry and acknowledge that my details will be used in accordance with the privacy policy to process my request. *
                        </span>
                    </label>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-border">
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto px-10">
                    Submit Booking Request
                </Button>
                <a href="mailto:contact@synergyevolution.com" className="text-sm font-medium text-muted hover:text-foreground underline underline-offset-4 transition-colors">
                    Email Us Instead
                </a>
            </div>
        </form>
    );
}
