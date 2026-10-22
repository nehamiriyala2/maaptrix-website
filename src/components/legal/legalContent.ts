/*
 * Legal page content, copied verbatim from the client-supplied source document
 * (Privacy Policy, Terms of Use, Data & Security). DRAFT: pending business/legal
 * review. Do not edit the wording here without client approval. The
 * "Last Updated" date was set to 22 October 2026 at the client's request.
 *
 * Block types: a string is a paragraph, { list } is a bullet list and
 * { lines } is a group of short lines (e.g. a postal/contact block) rendered
 * one per line. Email addresses are linked automatically.
 */

export type LegalBlock = string | { list: string[] } | { lines: string[] };
export type LegalSection = { heading: string; blocks: LegalBlock[] };
export type LegalDocument = {
  title: string;
  lastUpdated?: string;
  intro: LegalBlock[];
  sections: LegalSection[];
};

const LAST_UPDATED = "Last Updated: 22 October 2026";

// Phone line added at the client's request (22 October 2026); not in the original draft.
const CONTACT_LINES = [
  "Maaptrix Private Limited",
  "Hyderabad, Telangana, India",
  "Email: hello@maaptrix.com",
  "Phone: +91 99406 36798",
];

export const PRIVACY_POLICY: LegalDocument = {
  title: "Privacy Policy",
  lastUpdated: LAST_UPDATED,
  intro: [
    "Maaptrix Private Limited (“Maaptrix”, “we”, “our” or “us”) respects the privacy of the individuals and organisations that use our websites, applications and digital products.",
    "This Privacy Policy explains how personal information may be collected, used, stored, shared and protected when you interact with Maaptrix services.",
  ],
  sections: [
    {
      heading: "1. Information We May Collect",
      blocks: [
        "Depending on the Maaptrix product or service you use, we may process information such as:",
        {
          list: [
            "Name, contact details and account information",
            "School, organisation or institution information",
            "Student information provided through authorised school accounts",
            "Parent or guardian information",
            "Driver, staff or administrator information",
            "Attendance, route, stop and transportation-related information",
            "Vehicle location and operational data where relevant to transportation services",
            "Device, application and technical usage information",
            "Support requests and communications",
            "Other information required to provide the applicable service",
          ],
        },
        "The information collected depends on the product, user role and features being used.",
      ],
    },
    {
      heading: "2. How We Use Information",
      blocks: [
        "We may process information to:",
        {
          list: [
            "Provide and operate Maaptrix products and services",
            "Authenticate users and manage access",
            "Support school administration and transportation workflows",
            "Provide route, vehicle and transportation visibility where applicable",
            "Generate operational notifications and alerts",
            "Maintain service reliability and security",
            "Provide customer and technical support",
            "Diagnose technical issues and improve our products",
            "Meet applicable legal and regulatory requirements",
          ],
        },
        "We aim to collect and process information only for legitimate and defined purposes related to providing our services.",
      ],
    },
    {
      heading: "3. Student and Children's Data",
      blocks: [
        "Some Maaptrix products are designed for use by educational institutions and may involve information relating to students and children.",
        "Schools and other authorised institutions are responsible for ensuring that information provided to Maaptrix is collected and used with the appropriate authority, permissions and consents required under applicable law.",
        "Maaptrix processes such information only for purposes connected with providing the relevant services and authorised functionality.",
        "We do not use children's personal information for targeted advertising.",
      ],
    },
    {
      heading: "4. Location and Transportation Data",
      blocks: [
        "Our school transportation products may process vehicle location, route, stop, attendance and related operational information to provide features such as live vehicle visibility, route monitoring, estimated arrival information, safety alerts and route history.",
        "Location information is processed only where required for the relevant transportation functionality and according to applicable permissions and service configurations.",
      ],
    },
    {
      heading: "5. Information Sharing",
      blocks: [
        "Maaptrix does not sell personal information.",
        "Information may be shared with authorised service providers and technology partners where reasonably necessary to operate, host, secure or support our services.",
        "We may also disclose information where required by applicable law, legal process or a valid request from an authorised governmental or regulatory authority.",
        "Service providers that process information on our behalf are expected to handle such information only for authorised purposes and subject to appropriate contractual and security requirements.",
      ],
    },
    {
      heading: "6. Data Security",
      blocks: [
        "We use reasonable technical and organisational safeguards designed to protect information against unauthorised access, alteration, disclosure, loss or misuse.",
        "No internet-based service or information system can guarantee absolute security. We therefore continuously review and improve our security practices as our products and technology evolve.",
      ],
    },
    {
      heading: "7. Data Retention",
      blocks: [
        "Personal information is retained only for as long as reasonably necessary for the purposes for which it was collected, to provide contracted services, or to satisfy applicable legal, regulatory and contractual requirements.",
        "Retention periods may vary depending on the product, information type and customer requirements.",
      ],
    },
    {
      heading: "8. Your Rights and Requests",
      blocks: [
        "Subject to applicable law and the circumstances in which Maaptrix processes your information, you may have rights relating to access, correction, updating, erasure or grievance redressal concerning your personal information.",
        "Where information is managed by a school or other customer organisation, requests may need to be submitted through that organisation.",
      ],
    },
    {
      heading: "9. Third-Party Services",
      blocks: [
        "Maaptrix products may use third-party infrastructure, mapping, notification, communication, analytics or other technology services.",
        "The use of those services may also be subject to the respective providers' privacy policies and terms.",
      ],
    },
    {
      heading: "10. Changes to This Privacy Policy",
      blocks: [
        "We may update this Privacy Policy periodically to reflect changes in our products, practices, technology or applicable requirements.",
        "The latest version will be published on our website with the updated effective date.",
      ],
    },
    {
      heading: "11. Contact Us",
      blocks: [
        "For privacy questions, requests or concerns, contact:",
        { lines: CONTACT_LINES },
        "Additional privacy or grievance contact information may be provided where required by applicable law.",
      ],
    },
  ],
};

export const TERMS_OF_USE: LegalDocument = {
  title: "Terms of Use",
  lastUpdated: LAST_UPDATED,
  intro: [
    "These Terms of Use govern access to and use of websites, applications, platforms and services provided by Maaptrix Private Limited (“Maaptrix”, “we”, “our” or “us”).",
    "By accessing or using a Maaptrix service, users agree to use the service in accordance with these Terms and any applicable agreement between Maaptrix and the subscribing organisation.",
  ],
  sections: [
    {
      heading: "1. Our Services",
      blocks: [
        "Maaptrix develops and operates digital products designed to simplify real-world operations.",
        "Individual products may provide functionality including school administration, transportation management, vehicle visibility, attendance, notifications, reporting and other operational capabilities.",
        "Features may vary depending on the product, subscription, configuration and user role.",
      ],
    },
    {
      heading: "2. Authorised Use",
      blocks: [
        "Users may access Maaptrix services only through accounts and permissions authorised by Maaptrix or the subscribing organisation.",
        "Users must not:",
        {
          list: [
            "Attempt unauthorised access to accounts, systems or data",
            "Share credentials with unauthorised persons",
            "Interfere with the operation or security of the service",
            "Attempt to circumvent security controls",
            "Reverse engineer or misuse the platform except where expressly permitted by applicable law",
            "Use the service for unlawful, fraudulent or harmful purposes",
            "Access information for purposes unrelated to the user's authorised role",
          ],
        },
      ],
    },
    {
      heading: "3. Account Responsibility",
      blocks: [
        "Users are responsible for maintaining the confidentiality of their account credentials and for promptly reporting suspected unauthorised access.",
        "Schools and organisations are responsible for appropriately managing users, roles and permissions under their administrative control.",
      ],
    },
    {
      heading: "4. Customer Information",
      blocks: [
        "Customers and authorised users are responsible for ensuring that information submitted to Maaptrix is accurate, lawful and provided with the necessary authority, permissions and consents.",
        "Where information relates to students, parents, employees, drivers or other individuals, the subscribing organisation remains responsible for ensuring that its collection and use of such information complies with applicable requirements.",
      ],
    },
    {
      heading: "5. Availability and Changes",
      blocks: [
        "Maaptrix works to provide dependable services but does not guarantee uninterrupted or error-free operation unless expressly stated in a separate written service-level agreement.",
        "Services may occasionally be unavailable due to maintenance, upgrades, third-party dependencies, connectivity issues or circumstances beyond our reasonable control.",
        "We may improve, modify or update features as our products evolve.",
      ],
    },
    {
      heading: "6. Third-Party Services",
      blocks: [
        "Some functionality may depend on third-party services such as cloud infrastructure, mapping, messaging, communication or notification providers.",
        "Availability and performance of such functionality may therefore also depend on those third-party services.",
      ],
    },
    {
      heading: "7. Intellectual Property",
      blocks: [
        "Maaptrix products, software, designs, branding, documentation and related intellectual property are owned by or licensed to Maaptrix Private Limited.",
        "Access to a Maaptrix service does not transfer ownership of the underlying software or intellectual property to the user or subscribing organisation.",
      ],
    },
    {
      heading: "8. Responsible Use of Location Information",
      blocks: [
        "Location and transportation information made available through Maaptrix must be used only for legitimate operational, safety and authorised service purposes.",
        "Users must not misuse location information for unauthorised monitoring, surveillance or other unlawful purposes.",
      ],
    },
    {
      heading: "9. Limitation of Service Information",
      blocks: [
        "Information such as vehicle location, estimated arrival times, notifications and route information may depend on GPS accuracy, mobile connectivity, device availability and third-party services.",
        "Such information should therefore be treated as operational assistance rather than an absolute guarantee of location, timing or safety.",
      ],
    },
    {
      heading: "10. Suspension or Termination",
      blocks: [
        "Access may be restricted or suspended where reasonably necessary to protect users, customers, Maaptrix systems or information, or where there is a material violation of these Terms or the applicable customer agreement.",
        "Subscription termination and related obligations may also be governed by the applicable commercial agreement.",
      ],
    },
    {
      heading: "11. Governing Terms",
      blocks: [
        "Additional product-specific, subscription, commercial, privacy or service terms may apply.",
        "Where an organisation has entered into a separate written agreement with Maaptrix, that agreement will govern to the extent of any conflict with these general website Terms of Use.",
      ],
    },
    {
      heading: "12. Contact",
      blocks: ["Questions regarding these Terms may be sent to:", { lines: CONTACT_LINES }],
    },
  ],
};

export const DATA_SECURITY: LegalDocument = {
  title: "Data & Security",
  lastUpdated: LAST_UPDATED,
  intro: [],
  sections: [
    {
      heading: "Designed with Security and Privacy in Mind",
      blocks: [
        "Maaptrix understands that our customers may rely on our products for important operational information, including information relating to schools, students, parents, staff, transportation and vehicles.",
        "We therefore consider security and privacy throughout the design, development and operation of our products.",
      ],
    },
    {
      heading: "Data Protection",
      blocks: [
        "We apply reasonable technical and organisational safeguards designed to protect information from unauthorised access, alteration, disclosure, loss or misuse.",
        "Our security practices are reviewed and improved as our products, infrastructure and operational requirements evolve.",
      ],
    },
    {
      heading: "Access Control",
      blocks: [
        "Access to Maaptrix products is designed around authorised users and defined roles.",
        "Different users—such as administrators, staff, drivers and parents—may receive different levels of access depending on their responsibilities and the applicable product configuration.",
        "Users should only have access to information necessary for their authorised role.",
      ],
    },
    {
      heading: "Secure Communication",
      blocks: [
        "Where supported by our infrastructure and services, data transmitted between applications, users and backend services is protected using industry-standard secure communication mechanisms.",
      ],
    },
    {
      heading: "Location Data",
      blocks: [
        "Transportation products may process vehicle location and route information to provide live visibility, route monitoring, estimated arrival information, alerts and operational history.",
        "Access to such information is restricted according to authorised roles and intended service functionality.",
      ],
    },
    {
      heading: "Student Information",
      blocks: [
        "Student information processed through Maaptrix products is intended solely for authorised educational, administrative, transportation, communication and safety-related purposes.",
        "Maaptrix does not use student information for targeted advertising.",
      ],
    },
    {
      heading: "Infrastructure and Service Providers",
      blocks: [
        "Maaptrix may use established cloud and technology service providers to host, operate and support its products.",
        "Where third parties process information on our behalf, we seek to use appropriate contractual, operational and security safeguards consistent with the nature of the services being provided.",
      ],
    },
    {
      heading: "Data Retention",
      blocks: [
        "Information is retained according to the requirements of the applicable service, customer relationship and legal obligations.",
        "Where information is no longer reasonably required, it may be deleted or anonymised in accordance with applicable policies and requirements.",
      ],
    },
    {
      heading: "Security Monitoring and Improvement",
      blocks: [
        "We continually evaluate our applications and infrastructure and work to address identified security risks.",
        "Security controls and practices may evolve as technology, threats and regulatory requirements change.",
      ],
    },
    {
      heading: "Responsible Disclosure",
      blocks: [
        "If you believe you have identified a potential security vulnerability involving a Maaptrix product or service, please report it responsibly to:",
        { lines: ["hello@maaptrix.com"] },
        "Please provide sufficient information for us to investigate the issue and avoid publicly disclosing the vulnerability until we have had a reasonable opportunity to assess and address it.",
      ],
    },
    {
      heading: "Security Questions",
      blocks: [
        "Schools and organisations evaluating Maaptrix may contact us for additional information regarding our data handling and security practices.",
        { lines: CONTACT_LINES },
      ],
    },
  ],
};
