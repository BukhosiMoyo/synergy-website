export type AudienceType = "Public" | "Private" | "Both";

export interface FAQ {
    question: string;
    answer: string;
}

export interface Solution {
    slug: string;
    title: string;
    summary: string;
    audience: AudienceType;
    keyFeatures: string[];
    problemsSolved: string[];
    implementationHighlights: string[];
    /** Extended description paragraphs from service PDFs */
    longDescription?: string[];
    /** Client-facing benefits */
    benefits?: string[];
    /** Frequently asked questions */
    faqs?: FAQ[];
}

export const solutions: Solution[] = [
    {
        slug: "fixed-asset-management",
        title: "Fixed Asset Management",
        summary: "A central, single source of truth for the financial value, condition, and physical location of every asset in your organization.",
        audience: "Both",
        keyFeatures: [
            "Centralized Asset Register connecting physical counts to the General Ledger",
            "Multi-site location hierarchy mapping (Region > Site > Room)",
            "Role-based access control for secure, distributed management",
            "Comprehensive audit trails for every edit, transfer, or disposal"
        ],
        problemsSolved: [
            "Disconnect between physical floor assets and financial reporting",
            "Recurring negative audit findings due to untraceable assets",
            "Siloed spreadsheet tracking across different regional departments",
            "Lack of clear accountability pipelines for high-value equipment"
        ],
        implementationHighlights: [
            "Data cleansing and legacy spreadsheet migration",
            "System configuration tailored to your organizational hierarchy",
            "Integration with existing ERPs or financial backends",
            "Role-specific training for administrators and field users"
        ],
        longDescription: [
            "Financial reconciliation involves comparing and adjusting the records in your fixed asset register with your financial statements. It's the backbone of your financial management, reflecting your company's investments and their current values.",
            "In South Africa, adhering to local accounting standards and regulations is crucial. Financial reconciliation not only ensures compliance but also guarantees accuracy in financial reporting and prevents fraud and errors from slipping through the cracks.",
            "We understand the unique landscape of South African businesses and offer tailored solutions that meet local accounting standards including GRAP, MFMA, PFMA, and IFRS."
        ],
        benefits: [
            "Accurate financial reporting essential for informed decisions and attracting investors",
            "Prevention of fraud and errors through systematic reconciliation",
            "Cost-effective outsourcing saves hiring and training an in-house team",
            "Access to specialist expertise ensuring accurate and efficient reconciliation",
            "Free up your teams to focus on core business operations"
        ],
        faqs: [
            {
                question: "What is financial reconciliation of the fixed asset register?",
                answer: "Financial reconciliation involves comparing your fixed asset register with your financial statements to ensure accuracy and compliance. In South Africa, it's crucial due to regulatory requirements and the need for transparent financial reporting."
            },
            {
                question: "How often should I reconcile my fixed asset register?",
                answer: "Ideally, you should reconcile your fixed asset register monthly or quarterly. However, the frequency may vary based on the size and complexity of your asset portfolio. Our experts can help determine the most suitable schedule for your business."
            },
            {
                question: "Can outsourcing financial reconciliation save my business time and money?",
                answer: "Yes. By partnering with Synergy Evolution, you leverage our expertise and resources, freeing up your internal teams to focus on core business activities. Outsourcing eliminates the need for investing in specialised software and training for in-house staff."
            },
            {
                question: "How does Synergy Evolution ensure compliance with SA accounting standards?",
                answer: "We stay abreast of the latest developments in South African accounting standards and regulations. Our reconciliation processes are designed to align with local requirements, ensuring your business remains compliant with applicable laws and standards."
            },
            {
                question: "What steps are taken to address discrepancies found during reconciliation?",
                answer: "Our team conducts a thorough investigation to determine the root cause of discrepancies. We work closely with your business to rectify errors and adjust records accordingly, ensuring your fixed asset register accurately reflects the true value and status of your assets."
            }
        ]
    },
    {
        slug: "asset-verification",
        title: "Asset Verification & Reconciliation",
        summary: "Rapid, large-scale physical floor sweeps utilizing mobile scanning technology to bridge the gap between your book and operational reality.",
        audience: "Both",
        keyFeatures: [
            "Barcode and QR code mobile scanning workflows",
            "Offline mode for remote or deep-facility scanning",
            "Real-time progress dashboards during live verification phases",
            "Automated discrepancy tagging (e.g., Missing, Unverified, Damaged)"
        ],
        problemsSolved: [
            "Slow, error-prone manual paper-based counting methods",
            "Ghost assets cluttering the balance sheet and inflating insurance costs",
            "Inability to verify assets securely in far-flung regional clinics or plants",
            "Audit failures due to unverifiable physical existence"
        ],
        implementationHighlights: [
            "Pre-verification planning and site mapping",
            "Deployment of trained physical enumeration teams",
            "Tagging unrecorded assets on the fly with specialized labels",
            "Final variance report generation and sign-off"
        ],
        longDescription: [
            "Physical asset audit verification and tracking is a critical process for businesses in South Africa. It involves systematically inspecting and verifying the existence, condition, and location of physical assets owned by a company.",
            "We offer comprehensive services tailored to meet the needs of South African businesses, including customised audit plans, advanced tracking systems using RFID, GPS, and barcode technology, and an experienced team with in-depth knowledge of South African regulations.",
            "Our goal is to bridge the gap between what your financial records say you own and what physically exists on the ground — eliminating ghost assets, identifying unrecorded items, and delivering a clean, audit-ready register."
        ],
        benefits: [
            "Proven track record of conducting successful audits across all South African provinces",
            "Comprehensive understanding of the South African market and regulatory landscape",
            "Advanced tracking with RFID, GPS, and barcode systems for real-time asset visibility",
            "Customised audit plans tailored to your unique requirements and business objectives",
            "Commitment to client satisfaction and data confidentiality under POPIA compliance"
        ],
        faqs: [
            {
                question: "What is the importance of asset auditing for businesses?",
                answer: "Asset auditing helps ensure accurate records, promotes transparency, and aids in regulatory compliance. By conducting regular audits, businesses can identify discrepancies, mitigate the risk of loss or theft, and make informed decisions about their asset management strategies."
            },
            {
                question: "How often should I conduct asset audits?",
                answer: "It's generally recommended to conduct audits annually or semi-annually to maintain accurate records and mitigate risks effectively. The frequency depends on factors such as business size, nature of assets, and regulatory requirements."
            },
            {
                question: "What tracking technologies do you use?",
                answer: "We utilise advanced tracking technologies such as RFID (Radio Frequency Identification), GPS (Global Positioning System), and barcode systems. These enable real-time tracking and monitoring, ensuring enhanced visibility and control over your inventory."
            },
            {
                question: "How does asset auditing help prevent asset loss and theft?",
                answer: "Asset auditing and tracking enable businesses to monitor the movement and location of their assets in real-time. By maintaining accurate records and implementing robust tracking systems, businesses can identify anomalies, deter unauthorised access, and take proactive measures to safeguard their assets."
            },
            {
                question: "Is asset auditing compliant with data protection regulations?",
                answer: "Yes. We prioritise data privacy and security throughout the auditing process, ensuring that sensitive information is handled with the utmost confidentiality and in accordance with the Protection of Personal Information Act (POPIA)."
            }
        ]
    },
    {
        slug: "lifecycle-custodian-tracking",
        title: "Lifecycle & Custodian Tracking",
        summary: "Enforce strict accountability by digitally mapping assets directly to the personnel who utilize them, tracking condition from procurement to disposal.",
        audience: "Both",
        keyFeatures: [
            "Digital custodian sign-out and return workflows",
            "Automated depreciation tracking and capitalization rules",
            "Condition logging with mobile photo attachments",
            "Scheduled maintenance alerts and warranty tracking"
        ],
        problemsSolved: [
            "High rates of internal theft or misplacement of portable equipment",
            "Losing track of warranties and paying for redundant repairs",
            "Unclear handover procedures when staff resign or transfer",
            "Operating critical machinery past safe lifecycle thresholds"
        ],
        implementationHighlights: [
            "Mapping existing HR data to establish custodian profiles",
            "Configuring condition grades and remaining useful life (RUL) limits",
            "Deploying digital acknowledgement forms to staff",
            "Establishing strict disposal and write-off protocols"
        ],
        benefits: [
            "Full accountability chain from procurement to disposal for every asset",
            "Reduced internal theft and misplacement through digital custodian sign-off",
            "Proactive maintenance scheduling that extends asset useful life",
            "Automated depreciation and capitalization aligned to GRAP/IFRS standards",
            "Clear handover workflows when staff resign, transfer, or change roles"
        ]
    },
    {
        slug: "compliance-audit-reporting",
        title: "Compliance & Audit Reporting",
        summary: "Specialized reporting engines configured to satisfy the rigorous statutory demands of the Auditor-General and private regulatory bodies.",
        audience: "Public",
        keyFeatures: [
            "GRAP, PFMA, and MFMA aligned report templates out-of-the-box",
            "Unbundled infrastructure asset reporting",
            "One-click variance and reconciliation exports",
            "Immutable change logs ready for auditor inspection"
        ],
        problemsSolved: [
            "Weeks wasted compiling bespoke compliance reports in Excel",
            "Non-compliance with complex municipal infrastructure unbundling rules",
            "Lack of supporting documentation (invoices, photos) during audits",
            "Anxiety and operational paralysis during annual audit cycles"
        ],
        implementationHighlights: [
            "Auditing reporting requirements specific to your jurisdiction",
            "Customizing export formats to match preferred statutory templates",
            "Testing report integrity against historical data baselines",
            "Pre-audit mock runs to identify gaps before the AG arrives"
        ],
        longDescription: [
            "At Synergy Evolution, we understand the importance of achieving positive audit outcomes for businesses operating in South Africa. Audits not only ensure regulatory compliance but also drive financial performance and operational efficiency.",
            "We offer comprehensive audit services tailored specifically to the needs of South African businesses. Our approach is rooted in proven methods that guarantee compliance and success in the dynamic South African market.",
            "Our team comprises qualified auditors with extensive experience in South Africa's asset management sector. We bring industry-specific knowledge and a people-first approach to every client interaction, ensuring your success is our top priority."
        ],
        benefits: [
            "Improved financial performance through identifying areas for optimisation",
            "Enhanced operational efficiency by streamlining processes and workflows",
            "Full regulatory compliance in South Africa's complex regulatory environment",
            "Customised solutions tailored to your unique challenges — not one-size-fits-all",
            "A proven track record of delivering positive audit outcomes across SA"
        ],
        faqs: [
            {
                question: "What standards do your reports comply with?",
                answer: "Our reporting engine is specifically designed to satisfy GRAP, PFMA, MFMA, and IFRS requirements. All templates are pre-configured and regularly updated to reflect the latest amendments from National Treasury and the Auditor-General."
            },
            {
                question: "Can you help us prepare for an upcoming audit?",
                answer: "Absolutely. We conduct pre-audit mock runs using your actual data to identify gaps before the Auditor-General arrives. This proactive approach dramatically reduces anxiety and operational paralysis during audit cycles."
            },
            {
                question: "Do you support municipal infrastructure unbundling?",
                answer: "Yes. We have deep expertise in the complex rules around infrastructure unbundling for municipalities, ensuring your reports accurately reflect componentised asset values and conditions as required by mSCOA."
            }
        ]
    },
    {
        slug: "system-implementation-training",
        title: "System Implementation & Training",
        summary: "We don't hand over software and leave. Our operational teams handle the heavy lifting of deployment, change management, and staff upskilling.",
        audience: "Both",
        keyFeatures: [
            "Phased rollout strategies minimizing operational downtime",
            "Development of custom Standard Operating Procedures (SOPs)",
            "On-site and remote classroom training modules",
            "Ongoing technical support and dedicated account managers"
        ],
        problemsSolved: [
            "Low user adoption rates for newly purchased enterprise software",
            "Data corruption due to untrained personnel making critical errors",
            "Lack of internal capacity to run a full-scale deployment",
            "Loss of institutional knowledge when key administrators leave"
        ],
        implementationHighlights: [
            "Comprehensive stakeholder discovery and needs mapping",
            "Drafting of tailored training materials and quick-reference guides",
            "Execution of pilot programs in controlled branch environments",
            "Continuous post-go-live monitoring and optimization"
        ],
        longDescription: [
            "Our comprehensive Asset Management Software streamlines the process of tracking, monitoring, and maintaining assets throughout their lifecycle. It's a game-changer for businesses looking to optimise their operations and maximise resource utilisation.",
            "The software offers robust features including real-time asset tracking and monitoring, automated maintenance scheduling and alerts, customisable reporting and analytics dashboards, and seamless integration capabilities with existing ERP, CRM, and accounting systems.",
            "Our dedicated team guides you through every step — from initial setup and configuration, through comprehensive training sessions tailored to your organisation's needs, to ongoing support and maintenance beyond implementation."
        ],
        benefits: [
            "Improved efficiency and productivity by eliminating manual tracking",
            "Cost reduction and resource optimisation across the asset lifecycle",
            "Enhanced compliance and risk management for regulated environments",
            "Scalable software that grows with your business and adapts to changing needs",
            "Intuitive, user-friendly interface designed with the end-user in mind"
        ],
        faqs: [
            {
                question: "What types of assets can be managed with your software?",
                answer: "Our software is highly versatile and can handle equipment, machinery, vehicles, IT assets, facilities, and more. Whether you're in manufacturing, healthcare, transportation, education, or government, the software accommodates your asset management needs."
            },
            {
                question: "Is your software suitable for small businesses or only large enterprises?",
                answer: "Our software is scalable and adaptable, making it suitable for businesses of all sizes. Whether you're a small startup or a large enterprise, it can be customised to fit your specific requirements and grow with your business."
            },
            {
                question: "How easy is it to integrate with existing systems?",
                answer: "We offer flexible integration capabilities, allowing the software to integrate with a variety of existing systems such as ERP, CRM, and accounting software. Our team works closely with yours to ensure a smooth integration process."
            },
            {
                question: "What kind of support do you provide after implementation?",
                answer: "We provide ongoing support including a dedicated account manager, regular updates and maintenance, and a responsive help desk. Our team is available to assist with any questions or issues that arise post-implementation."
            },
            {
                question: "How can I measure the ROI of implementing your software?",
                answer: "You can track metrics such as reduced downtime, increased asset utilisation, lower maintenance costs, and improved compliance. Our software also offers robust reporting and analytics capabilities, allowing you to quantify the tangible benefits your organisation gains."
            }
        ]
    }
];
