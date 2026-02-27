'use client';

import { cn } from '@/lib/utils';
import { LogoCloud } from '@/components/ui/logo-cloud';

const clients = [
    { src: '/clients/gauteng-premier.png', alt: 'Gauteng Office of the Premier' },
    { src: '/clients/gauteng-health.png', alt: 'Gauteng Department of Health' },
    { src: '/clients/cogta.png', alt: 'COGTA' },
    { src: '/clients/mopani-tvet.png', alt: 'Mopani SE TVET College' },
    { src: '/clients/fezile-dabi.png', alt: 'Fezile Dabi District Municipality' },
    { src: '/clients/ditsong-museums.png', alt: 'Ditsong Museums of South Africa' },
    { src: '/clients/city-of-tshwane.png', alt: 'City of Tshwane' },
    { src: '/clients/nemisa.png', alt: 'NEMISA NPC' },
    { src: '/clients/aisj-south-africa.png', alt: 'AISJ South Africa' },
    { src: '/clients/cathsseta.png', alt: 'Cathsseta' },
    { src: '/clients/city-power-johannesburg.png', alt: 'City Power Johannesburg' },
    { src: '/clients/presidency-rsa.png', alt: 'The Presidency – Republic of South Africa' },
];

export default function TrustedByMarquee() {
    return (
        <section className="relative py-12 border-y border-border bg-surface overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="mb-5 text-center font-medium text-foreground text-xl tracking-tight md:text-2xl">
                    <span className="text-muted">Trusted by leading organisations.</span>
                    <br />
                    <span className="font-semibold">Delivering results across sectors.</span>
                </h2>

                <div className="mx-auto my-5 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

                <LogoCloud
                    logos={clients}
                    className="[&_img]:h-12 [&_img]:md:h-14 [&_img]:opacity-60 [&_img]:hover:opacity-100 [&_img]:transition-opacity [&_img]:duration-300 [&_img]:grayscale [&_img]:hover:grayscale-0 [&_img]:dark:brightness-100 [&_img]:dark:invert-0"
                />

                <div className="mt-5 h-px bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
            </div>
        </section>
    );
}
