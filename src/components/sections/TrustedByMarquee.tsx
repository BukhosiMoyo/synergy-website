'use client';

import Image from 'next/image';

const clients = [
    { name: 'Gauteng Office of the Premier', logo: '/clients/gauteng-premier.png' },
    { name: 'Gauteng Department of Health', logo: '/clients/gauteng-health.png' },
    { name: 'COGTA', logo: '/clients/cogta.png' },
    { name: 'Mopani SE TVET College', logo: '/clients/mopani-tvet.png' },
    { name: 'Fezile Dabi District Municipality', logo: '/clients/fezile-dabi.png' },
    { name: 'Ditsong Museums of South Africa', logo: '/clients/ditsong-museums.png' },
    { name: 'City of Tshwane', logo: '/clients/city-of-tshwane.png' },
    { name: 'NEMISA NPC', logo: '/clients/nemisa.png' },
    { name: 'AISJ South Africa', logo: '/clients/aisj-south-africa.png' },
    { name: 'Cathsseta', logo: '/clients/cathsseta.png' },
    { name: 'City Power Johannesburg', logo: '/clients/city-power-johannesburg.png' },
    { name: 'The Presidency – Republic of South Africa', logo: '/clients/presidency-rsa.png' },
];

export default function TrustedByMarquee() {
    return (
        <section className="py-12 border-y border-border bg-surface overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted">
                    Trusted By Leading Organisations
                </p>
            </div>

            {/* Marquee wrapper */}
            <div className="relative">
                {/* Gradient fade edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[var(--color-surface)] to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[var(--color-surface)] to-transparent" />

                {/* Scrolling track */}
                <div className="flex animate-marquee whitespace-nowrap">
                    {/* Double the logos for seamless loop */}
                    {[...clients, ...clients].map((client, i) => (
                        <div
                            key={`${client.name}-${i}`}
                            className="inline-flex items-center justify-center mx-8 flex-shrink-0"
                        >
                            <Image
                                src={client.logo}
                                alt={client.name}
                                width={120}
                                height={60}
                                className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
