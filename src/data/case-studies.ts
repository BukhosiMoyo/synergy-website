export type Sector = "Public" | "Private" | "NGO" | "Other";
export type ServiceType = "Asset Management" | "Compliance" | "System Implementation" | "Reporting" | "Other";

export interface CaseStudy {
    slug: string;
    title: string;
    sector: Sector;
    serviceType: ServiceType;
    summary: string;
    highlights: string[];
    year?: string;
    featured?: boolean;
    /** Contract value in ZAR */
    contractValue?: string;
    /** Total assets managed */
    assetCount?: string;
    /** Project duration */
    duration?: string;
    /** Execution scope */
    executionLevel?: string;
    /** Audit result achieved */
    auditResult?: string;
}

export const caseStudies: CaseStudy[] = [
    // === FEATURED ===
    {
        slug: "city-of-johannesburg",
        title: "City of Johannesburg",
        sector: "Public",
        serviceType: "Asset Management",
        summary: "Comprehensive fixed asset management and verification system implementation for South Africa's largest metropolitan municipality, spanning 200,000 assets across all city departments.",
        highlights: [
            "Implemented state-of-the-art Asset Management Verification System with hardware integration.",
            "Managed end-to-end support and maintenance across 200,000 assets.",
            "Provided seamless integration with existing municipal financial systems.",
            "Delivered comprehensive training to city finance and operations staff."
        ],
        contractValue: "R1,500,000",
        assetCount: "200,000",
        duration: "8 months",
        executionLevel: "Local",
        featured: true
    },
    {
        slug: "office-of-the-presidency",
        title: "Office of the Presidency",
        sector: "Public",
        serviceType: "System Implementation",
        summary: "Asset management services and software solution implementation for the Office of the Presidency, including physical verification and reconciliation of 20,000 national assets.",
        highlights: [
            "Deployed asset management system with annual subscription model.",
            "Conducted physical verification and FAR reconciliation across presidential offices.",
            "Implemented compliance-aligned reporting for national government standards.",
            "Provided continuous support and maintenance services."
        ],
        contractValue: "R700,000",
        assetCount: "20,000",
        duration: "3 months",
        executionLevel: "National",
        featured: true
    },
    {
        slug: "city-of-tshwane",
        title: "City of Tshwane",
        sector: "Public",
        serviceType: "Asset Management",
        summary: "Six-month comprehensive project focused on enhancing the efficiency of fixed asset management for the City of Tshwane, including full physical verification and FAR reconciliation.",
        highlights: [
            "Executed full-scale physical verification across all municipal facilities.",
            "Reconciled fixed asset register with financial statements.",
            "Optimised asset tracking and custodian accountability workflows.",
            "Trained municipal staff on ongoing asset management best practices."
        ],
        duration: "6 months",
        executionLevel: "Local",
        featured: true
    },
    {
        slug: "vaal-university-of-technology",
        title: "Vaal University of Technology (VUT)",
        sector: "Public",
        serviceType: "Asset Management",
        summary: "Enhanced fixed asset management for VUT across 75,000 assets, achieving an Unqualified Audit Opinion through comprehensive physical verification, FAR reconciliation, and system deployment.",
        highlights: [
            "Managed and verified 75,000 assets across university campuses.",
            "Achieved Unqualified Audit Opinion post-project completion.",
            "Delivered physical verification and reconciliation of the entire FAR.",
            "Provided asset management and accounting services aligned to GRAP standards."
        ],
        contractValue: "R2,400,000",
        assetCount: "75,000",
        duration: "3 months",
        executionLevel: "Local",
        auditResult: "Unqualified Audit Opinion",
        featured: true
    },
    // === PUBLIC SECTOR ===
    {
        slug: "department-of-social-development",
        title: "Department of Social Development",
        sector: "Public",
        serviceType: "System Implementation",
        summary: "National-level collaboration with the Department of Social Development on asset management system implementation, physical verification, and FAR reconciliation with ongoing support and maintenance.",
        highlights: [
            "Implemented asset management system at national level.",
            "Conducted physical verification and FAR reconciliation.",
            "Provided annual system subscription with ongoing support.",
            "Ensured full compliance with government accounting standards."
        ],
        duration: "3 months",
        executionLevel: "National"
    },
    {
        slug: "cogta-national-office",
        title: "COGTA — National Office",
        sector: "Public",
        serviceType: "Asset Management",
        summary: "Fixed asset management and accounting services for the Department of Cooperative Governance and Traditional Affairs at the national level, including physical verification and FAR reconciliation.",
        highlights: [
            "Delivered fixed asset management services at national government level.",
            "Conducted comprehensive physical verification across COGTA offices.",
            "Reconciled the Fixed Asset Register with financial statements.",
            "Provided compliance-aligned reporting for national government standards."
        ],
        executionLevel: "National"
    },
    {
        slug: "gauteng-provincial-legislature",
        title: "Gauteng Provincial Legislature (GPL)",
        sector: "Public",
        serviceType: "Asset Management",
        summary: "Comprehensive asset management project for the Gauteng Provincial Legislature including physical verification and reconciliation of 30,000 assets over two months.",
        highlights: [
            "Verified and reconciled 30,000 assets across legislature facilities.",
            "Deployed asset management system with annual subscription.",
            "Aligned reporting with parastatal compliance requirements.",
            "Completed in an accelerated 2-month timeline."
        ],
        contractValue: "R1,500,000",
        assetCount: "30,000",
        duration: "2 months",
        executionLevel: "Local"
    },
    {
        slug: "gauteng-medical-supply-depot",
        title: "Gauteng Medical Supply Depot (MSD)",
        sector: "Public",
        serviceType: "System Implementation",
        summary: "Asset management system implementation and physical verification for MSD, a parastatal under the Gauteng provincial government, managing 8,000 medical supply assets.",
        highlights: [
            "Implemented full asset management system for medical supply operations.",
            "Conducted physical verification and FAR reconciliation of 8,000 items.",
            "Deployed annual system subscription with ongoing maintenance.",
            "Ensured compliance with Gauteng provincial regulatory standards."
        ],
        contractValue: "R485,000",
        assetCount: "8,000",
        duration: "4 months",
        executionLevel: "Local"
    },
    {
        slug: "fezile-dabi-district-municipality",
        title: "Fezile Dabi District Municipality",
        sector: "Public",
        serviceType: "Asset Management",
        summary: "Physical verification and reconciliation of fixed assets for Fezile Dabi District Municipality, delivering asset management and accounting services to bring the FAR into compliance.",
        highlights: [
            "Conducted physical verification across all municipal offices and facilities.",
            "Reconciled the Fixed Asset Register with financial reporting requirements.",
            "Delivered asset management and accounting services.",
            "Provided compliance documentation for audit preparation."
        ],
        contractValue: "R800,000",
        assetCount: "12,000",
        executionLevel: "Local"
    },
    {
        slug: "nkangala-tvet-college",
        title: "Nkangala TVET College (NKTVC)",
        sector: "Public",
        serviceType: "System Implementation",
        summary: "Four-month transformation of asset management at Nkangala TVET College including system implementation, physical verification, and ongoing support for 15,000 assets.",
        highlights: [
            "Implemented Asset Management System across 15,000 items.",
            "Conducted physical verification and FAR reconciliation.",
            "Established ongoing support and maintenance services.",
            "Provided comprehensive staff training on the new system."
        ],
        assetCount: "15,000",
        duration: "4 months",
        executionLevel: "Local"
    },
    {
        slug: "taletso-tvet-college",
        title: "Taletso TVET College (TLT)",
        sector: "Public",
        serviceType: "Asset Management",
        summary: "Twelve-month engagement with Taletso TVET College to enhance fixed asset management processes, including physical verification and reconciliation of 20,000 educational assets.",
        highlights: [
            "Managed comprehensive 12-month asset management programme.",
            "Verified and reconciled 20,000 assets across college campuses.",
            "Addressed challenges of managing large volumes across multiple departments.",
            "Ensured compliance with public institution audit requirements."
        ],
        contractValue: "R1,120,000",
        assetCount: "20,000",
        duration: "12 months",
        executionLevel: "Local"
    },
    {
        slug: "ehlanzeni-tvet-college",
        title: "Ehlanzeni TVET College (ETVETC)",
        sector: "Public",
        serviceType: "Asset Management",
        summary: "Two-month intensive project to address fixed asset management needs at Ehlanzeni TVET College, covering 45,000 assets with a focus on efficiency and accuracy.",
        highlights: [
            "Verified and managed 45,000 assets in just 2 months.",
            "Provided comprehensive asset management and accounting services.",
            "Conducted physical verification and FAR reconciliation.",
            "Delivered high-volume results under tight timelines."
        ],
        contractValue: "R1,350,000",
        assetCount: "45,000",
        duration: "2 months",
        executionLevel: "Local"
    },
    {
        slug: "university-of-south-africa-unisa",
        title: "University of South Africa (UNISA)",
        sector: "Public",
        serviceType: "Asset Management",
        summary: "Fixed asset management and accounting services for UNISA, including physical verification and reconciliation of the Fixed Asset Register across one of Africa's largest universities.",
        highlights: [
            "Delivered asset management services for one of Africa's largest universities.",
            "Conducted physical verification and FAR reconciliation.",
            "Provided accounting services aligned to higher education sector standards.",
            "Addressed the unique challenges of managing distributed campus assets."
        ],
        executionLevel: "National"
    },
    {
        slug: "eskom-pension-and-provident-fund",
        title: "Eskom Pension & Provident Fund (EPPF)",
        sector: "Public",
        serviceType: "Asset Management",
        summary: "Fixed asset management services for Eskom Pension & Provident Fund, including physical verification and reconciliation of the Fixed Asset Register for this major parastatal fund.",
        highlights: [
            "Managed asset portfolio for one of SA's largest pension and provident funds.",
            "Conducted physical verification and FAR reconciliation.",
            "Ensured compliance with parastatal financial standards.",
            "Delivered asset management and accounting services."
        ],
        executionLevel: "National"
    },
    // === PRIVATE SECTOR ===
    {
        slug: "danone-south-africa",
        title: "Danone South Africa",
        sector: "Private",
        serviceType: "Asset Management",
        summary: "Fixed asset management and verification services for Danone South Africa, a leading FMCG manufacturer, ensuring accurate tracking and financial alignment across production facilities.",
        highlights: [
            "Delivered asset management services for a major FMCG manufacturer.",
            "Conducted physical verification across production facilities.",
            "Reconciled the Fixed Asset Register with corporate financial systems.",
            "Provided compliance and accuracy standards for multinational reporting."
        ],
        executionLevel: "Local"
    },
    {
        slug: "kelloggs-south-africa",
        title: "Kellogg's South Africa",
        sector: "Private",
        serviceType: "Asset Management",
        summary: "Comprehensive asset management and accounting services for Kellogg's South Africa including physical verification and reconciliation of manufacturing and distribution assets.",
        highlights: [
            "Managed fixed asset verification for global FMCG brand's SA operations.",
            "Conducted physical verification and FAR reconciliation.",
            "Provided asset accounting services aligned to IFRS standards.",
            "Supported multinational corporate compliance requirements."
        ],
        executionLevel: "Local"
    },
    {
        slug: "ktvr-bus-service",
        title: "KTVR Bus Service (Pty) Ltd",
        sector: "Private",
        serviceType: "Asset Management",
        summary: "Fixed asset management and verification for KTVR Bus Service, addressing the unique challenges of tracking and managing a fleet of transportation assets.",
        highlights: [
            "Managed verification of transportation and fleet assets.",
            "Conducted physical verification and FAR reconciliation.",
            "Provided tailored solutions for transport sector asset tracking.",
            "Ensured compliance with industry-specific regulatory standards."
        ],
        executionLevel: "Local"
    },
    // === INTERNATIONAL ===
    {
        slug: "botswana-fibre-networks-bofinet",
        title: "BoFiNet (Botswana Fibre Networks)",
        sector: "Public",
        serviceType: "Asset Management",
        summary: "International engagement with Botswana Fibre Networks to enhance fixed asset management processes, demonstrating Synergy Evolution's capability to deliver at international level.",
        highlights: [
            "Delivered fixed asset management solutions at international level.",
            "Enhanced asset tracking and management processes for telecom infrastructure.",
            "Completed a 4-month intensive engagement.",
            "Demonstrated cross-border operational capability."
        ],
        duration: "4 months",
        executionLevel: "International"
    },
    {
        slug: "botswana-unified-revenue-services",
        title: "Botswana Unified Revenue Services (BURS)",
        sector: "Public",
        serviceType: "Asset Management",
        summary: "International collaboration with Botswana's revenue authority on fixed asset management, including physical verification and FAR reconciliation of 10,000 assets.",
        highlights: [
            "Delivered international-scale asset management and accounting services.",
            "Conducted physical verification and FAR reconciliation of 10,000 assets.",
            "Streamlined fixed asset management processes to international standards.",
            "Ensured compliance with Botswana's regulatory requirements."
        ],
        contractValue: "R1,200,000",
        assetCount: "10,000",
        duration: "4 months",
        executionLevel: "International"
    },
    {
        slug: "botswana-open-university",
        title: "Botswana Open University",
        sector: "Public",
        serviceType: "Asset Management",
        summary: "Fixed asset management services delivered internationally for Botswana Open University, including verification and reconciliation of the university's entire asset register.",
        highlights: [
            "Delivered asset management solutions for an international higher education institution.",
            "Conducted physical verification and FAR reconciliation.",
            "Provided compliance-aligned reporting for education sector standards.",
            "Demonstrated capability in cross-border academic institution engagements."
        ],
        executionLevel: "International"
    },
    {
        slug: "eswatini-post-and-telecommunications",
        title: "Eswatini Post & Telecommunications Corporation (EPTC)",
        sector: "Public",
        serviceType: "Asset Management",
        summary: "International fixed asset management engagement with the Eswatini Post & Telecommunications Corporation, delivering verification and reconciliation services across the Kingdom of Eswatini.",
        highlights: [
            "Delivered asset management services to the Kingdom of Eswatini.",
            "Conducted physical verification for telecommunications infrastructure assets.",
            "Reconciled the Fixed Asset Register with financial reporting requirements.",
            "Extended Synergy Evolution's reach into the SADC region."
        ],
        executionLevel: "International"
    },
    // === ADDITIONAL PUBLIC ===
    {
        slug: "south-african-national-biodiversity-institute",
        title: "South African National Biodiversity Institute (SANBI)",
        sector: "Public",
        serviceType: "Asset Management",
        summary: "Fixed asset management and accounting services for SANBI, including physical verification and reconciliation of assets across national botanical gardens and research facilities.",
        highlights: [
            "Managed assets across national botanical gardens and research centres.",
            "Conducted physical verification and FAR reconciliation.",
            "Provided accounting services aligned to national entity standards.",
            "Addressed unique challenges of managing assets across dispersed natural sites."
        ],
        executionLevel: "National"
    },
    {
        slug: "office-of-the-presidency-oop",
        title: "Office of the Presidency — Strategic PMO",
        sector: "Public",
        serviceType: "System Implementation",
        summary: "Strategic project management office services and asset management system subscription for the Office of the Presidency, ensuring continuity and compliance at the highest level of government.",
        highlights: [
            "Provided strategic PMO services at the highest level of government.",
            "Managed annual system subscription and support services.",
            "Ensured continuity of asset management operations.",
            "Delivered compliance-aligned reporting for national government standards."
        ],
        executionLevel: "National"
    },
    {
        slug: "fezile-dabi-district-municipality-phase-2",
        title: "Fezile Dabi District Municipality — Phase 2",
        sector: "Public",
        serviceType: "Compliance",
        summary: "Follow-up engagement with Fezile Dabi District Municipality focused on compliance reporting and system maintenance following the initial FAR verification and reconciliation project.",
        highlights: [
            "Continued asset management support from initial engagement.",
            "Focused on compliance reporting and audit preparation.",
            "Maintained and optimised the deployed asset management system.",
            "Strengthened municipal capacity for ongoing asset management."
        ],
        executionLevel: "Local"
    },
    {
        slug: "botswana-unified-revenue-services-phase-2",
        title: "Botswana Unified Revenue Services (BURS) — Phase 2",
        sector: "Public",
        serviceType: "Asset Management",
        summary: "Continuation of the international fixed asset management engagement with BURS, building on the initial verification and reconciliation to deliver ongoing management and compliance services.",
        highlights: [
            "Extended international engagement with BURS beyond initial project.",
            "Provided ongoing asset management and compliance services.",
            "Built on successful Phase 1 verification and reconciliation results.",
            "Demonstrated long-term partnership capability at international level."
        ],
        executionLevel: "International"
    }
];
