// Content for the service pages at /services/[slug].
// Edit the wording here; the page layout lives in components/ServicePage.tsx.

export type Item = { title: string; text: string };

export type Service = {
  slug: string;
  /** Short name used on cards, menus and breadcrumbs */
  name: string;
  cardDescription: string;
  metaTitle: string;
  metaDescription: string;
  serviceType: string;
  h1: string;
  intro: string[];
  image: string;
  imageAlt: string;
  sections: { heading: string; intro?: string; items: Item[] }[];
  process: { heading: string; steps: Item[] };
  engagement: { heading: string; options: Item[]; note: string };
  examples: { heading: string; intro: string; items: Item[] };
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "consulting",
    name: "Consulting",
    cardDescription: "Plans, reviews and straight answers on your technology decisions.",
    metaTitle: "IT Consulting for Small and Medium Businesses",
    metaDescription:
      "IT consulting for small and medium businesses in India and Australia: cloud and Azure planning, integration design, application modernisation and technical reviews.",
    serviceType: "IT consulting",
    h1: "IT consulting for small and medium businesses",
    intro: [
      "Most small and medium businesses don't need a large consulting firm. They need someone who understands the technology, can look at how things are set up today, and give a straight answer on what to change first.",
      "That's the work we do. We help business owners, operations managers and in-house IT teams in India and Australia plan cloud moves, sort out systems that don't talk to each other, and decide whether to fix, upgrade or replace an application. Everything is done online.",
    ],
    image: "/images/consulting.avif",
    imageAlt: "Consultant walking a client through a project plan and growth chart",
    sections: [
      {
        heading: "Where we can help",
        items: [
          { title: "Cloud and Azure planning", text: "Working out what should move to the cloud, in what order, and roughly what it will cost to run each month." },
          { title: "Integration design", text: "Mapping how data moves between your ERP, HR, CRM and finance systems, and designing a setup that doesn't depend on manual exports and spreadsheets." },
          { title: "Application modernisation", text: "Reviewing older .NET or front-end applications and recommending whether to upgrade, re-platform or rebuild." },
          { title: "Architecture and code reviews", text: "An independent look at an existing system, or at a vendor's proposal, before you commit budget to it." },
          { title: "Azure cost and security checks", text: "Finding resources you pay for but don't use, and closing obvious gaps in access control and configuration." },
          { title: "Website and search visibility", text: "Working out why your website isn't bringing in enquiries and what to fix first, from page speed to how Google reads your pages." },
        ],
      },
    ],
    process: {
      heading: "How an engagement works",
      steps: [
        { title: "Initial call", text: "We talk through the problem, your current setup and what a good outcome looks like. If we're not the right fit, we'll tell you." },
        { title: "Review", text: "We look at the systems, code or documents involved. For most reviews this needs read-only access to the relevant environments." },
        { title: "Recommendations", text: "You get a written summary with findings, options, rough effort estimates and a suggested order of work." },
        { title: "Delivery, if you want it", text: "We can carry out the work ourselves, or stay on to review progress while your own team or another vendor does it." },
      ],
    },
    engagement: {
      heading: "Ways to work with us",
      options: [
        { title: "One-off review", text: "A fixed-scope assessment of one system, project or decision, with a written report at the end." },
        { title: "Hourly or daily advisory", text: "Time booked as you need it, for questions, design sessions or checking a vendor's work." },
        { title: "Monthly retainer", text: "A set number of hours each month, for businesses that want ongoing technical guidance without hiring full-time." },
      ],
      note: "There's no fixed price list. Pricing depends on scope, and we'll send a quote after the first call.",
    },
    examples: {
      heading: "Typical engagements",
      intro: "A few examples of the kind of problem a consulting engagement is suited to:",
      items: [
        { title: "Double data entry", text: "A distribution business re-keys orders from its online store into its accounting system every day. We map the data flow and recommend an integration approach, with tools and rough costs." },
        { title: "Upgrade or rebuild?", text: "A company relies on an ageing .NET Framework application and isn't sure whether to upgrade it or start again. We review the code and hosting and set out the cost and risk of each option." },
        { title: "A growing Azure bill", text: "Monthly Azure costs keep rising and nobody is sure why. We go through the subscription, find idle and oversized resources, and list the changes to make." },
      ],
    },
    faqs: [
      { q: "Do you work with businesses outside India?", a: "Yes. We work online with clients in India and Australia and schedule calls to suit both time zones." },
      { q: "Do we need to be using Azure already?", a: "No. Some clients are planning their first move to the cloud; others already run on Azure and want a second opinion." },
      { q: "How much does consulting cost?", a: "It depends on the scope and how you want to work with us. There's no fixed price list; we'll send a quote after the first call." },
      { q: "Can you also do the work you recommend?", a: "Yes. We handle Azure integration, application development and migration, and SEO ourselves. You're under no obligation to use us for the delivery." },
      { q: "What do you need from us to get started?", a: "A short description of the problem. For a review, we'll also need access to the relevant systems or documents. We're happy to sign an NDA first." },
    ],
  },
  {
    slug: "azure-integration",
    name: "Azure Integration",
    cardDescription: "Connect SAP, Dynamics 365, Salesforce, Workday and other systems on Azure.",
    metaTitle: "Azure Integration Services",
    metaDescription:
      "Azure integration for small and medium businesses: Logic Apps, Data Factory, Functions, API Management and Service Bus, connecting SAP, Dynamics 365, Salesforce and Workday.",
    serviceType: "Cloud integration",
    h1: "Azure integration services",
    intro: [
      "When business systems don't talk to each other, people fill the gap by hand: exporting CSV files, copying records between screens and fixing mismatches at month end. Integration work removes those steps and the errors that come with them.",
      "We build integrations on Microsoft Azure for small and medium businesses in India and Australia. That includes connecting applications such as SAP, Dynamics 365, Salesforce and Workday, building data pipelines for reporting, and moving on-premises workloads to Azure.",
    ],
    image: "/images/azure-integration.avif",
    imageAlt: "Diagram of business systems connected through a central cloud integration hub",
    sections: [
      {
        heading: "Azure services we work with",
        items: [
          { title: "Logic Apps", text: "Workflow-based integrations between SaaS applications, email, file shares and APIs, using built-in connectors for most common business systems." },
          { title: "Azure Data Factory", text: "Scheduled and event-driven pipelines that copy and transform data between databases, files and applications." },
          { title: "Azure Functions", text: "Small pieces of custom code for logic that doesn't fit a connector, such as data mapping, validation or calling an unusual API." },
          { title: "API Management", text: "A single, secured entry point for your APIs, with keys, rate limits, versioning and usage monitoring." },
          { title: "Service Bus", text: "Reliable messaging between systems, so nothing is lost when one side is slow or offline." },
          { title: "Azure Synapse Analytics", text: "Bringing data from several systems into one place for reporting and analysis." },
        ],
      },
      {
        heading: "Systems we connect",
        items: [
          { title: "SAP", text: "Orders, invoices, materials and master data exchanged between SAP and your other applications." },
          { title: "Dynamics 365", text: "Customer, sales and finance data shared between Dynamics 365 and the rest of your systems." },
          { title: "Salesforce", text: "Leads, accounts and opportunities kept in step with ERP and billing." },
          { title: "Workday", text: "Employee and organisation data sent to payroll, identity and other HR tools." },
          { title: "Databases, files and custom APIs", text: "SQL Server, SFTP file drops, spreadsheets and in-house systems that don't have a ready-made connector." },
        ],
      },
      {
        heading: "Migration to Azure",
        intro: "Many integration projects start with moving something that already exists. We also take on migrations on their own.",
        items: [
          { title: "On-premises to Azure", text: "Moving servers, databases and scheduled jobs to Azure services, with a cut-over plan that keeps downtime short." },
          { title: "Legacy integrations", text: "Replacing old SSIS packages, BizTalk flows or scripts running on a server with Logic Apps, Data Factory or Functions." },
          { title: ".NET applications", text: "Moving .NET applications to Azure App Service or containers, including upgrading from .NET Framework where needed." },
        ],
      },
    ],
    process: {
      heading: "How a project runs",
      steps: [
        { title: "Scoping", text: "We list the systems involved, what data needs to move and how often, and what should happen when something fails." },
        { title: "Design", text: "You get a short design document covering the data flows, Azure services, security set-up and estimated monthly running cost." },
        { title: "Build and test", text: "We build in a test environment first, using sample or masked data, and walk you through the results." },
        { title: "Go-live", text: "We deploy to production, set up monitoring and alerts, and hand over documentation." },
        { title: "Support", text: "Optional ongoing support covers monitoring, fixes and changes as your systems change." },
      ],
    },
    engagement: {
      heading: "Ways to work with us",
      options: [
        { title: "One-time delivery", text: "We scope, build and hand over a working integration with documentation. You own and run it from there." },
        { title: "Delivery plus ongoing support", text: "After go-live we monitor the integration, deal with failures and make changes, on a monthly or yearly arrangement." },
        { title: "Support for existing integrations", text: "If someone else built your Azure integrations, we can take over support, fix recurring issues and document what's there." },
      ],
      note: "There's no fixed price list. Pricing depends on the number of systems and flows, and we'll quote after scoping.",
    },
    examples: {
      heading: "Typical projects",
      intro: "Examples of the size and type of project we take on:",
      items: [
        { title: "Salesforce to accounting", text: "When a deal is marked as won in Salesforce, a Logic App creates the customer and invoice in the finance system and writes the invoice number back to Salesforce." },
        { title: "Workday to downstream systems", text: "A nightly Data Factory pipeline sends new starters and leavers from Workday to payroll and to Microsoft Entra ID for account set-up." },
        { title: "One reporting database", text: "Daily pipelines copy sales, stock and finance data from three systems into a single Azure SQL database that feeds Power BI reports." },
        { title: "Retiring a script server", text: "A set of Windows scheduled scripts is rebuilt as Azure Functions with logging and alerts, and the old server is switched off." },
      ],
    },
    faqs: [
      { q: "Do we need an existing Azure subscription?", a: "No. We can help you set one up in your company's name so you own it, or we can work inside the subscription you already have." },
      { q: "Who pays for the Azure resources?", a: "You pay Microsoft directly through your own subscription. We estimate the monthly running cost during the design stage, so you know what to expect." },
      { q: "How long does an integration project take?", a: "It depends on how many systems are involved and how clean the data is. A single flow between two systems is often a few weeks of work; larger projects take longer. You'll get a timeline after scoping." },
      { q: "What happens when an integration fails?", a: "Every integration we build has logging and alerts. Failed messages are kept so they can be corrected and re-sent instead of being lost." },
      { q: "Can you work alongside our in-house IT team?", a: "Yes. A common split is that we handle the Azure side while your team looks after the business systems." },
    ],
  },
  {
    slug: "development",
    name: "Development & Migration",
    cardDescription: ".NET and React development, and upgrades of older applications.",
    metaTitle: ".NET and React Development and Migration",
    metaDescription:
      "Custom .NET and React development and migration of older applications: .NET Framework to modern .NET, legacy front ends to React, and on-premises apps to Azure.",
    serviceType: "Software development",
    h1: "Software development and migration",
    intro: [
      "We build and modernise business applications with .NET and React. Our work is split between new builds and bringing older applications up to date.",
      "Migration is a large part of that. Many businesses depend on an application written years ago that still works but is getting harder to host, secure and change. We move it to current frameworks and hosting without losing what it already does.",
    ],
    image: "/images/software-development.avif",
    imageAlt: "Developer working on application code across several monitors",
    sections: [
      {
        heading: "Migration work",
        items: [
          { title: ".NET Framework to modern .NET", text: "Upgrading applications from .NET Framework 4.x to current .NET, including libraries, configuration and hosting changes." },
          { title: "Legacy front ends to React", text: "Replacing Web Forms, older MVC views, AngularJS or jQuery front ends with React, one section at a time where possible." },
          { title: "On-premises to Azure", text: "Moving applications and databases from local servers to Azure App Service, Azure SQL or containers." },
          { title: "Database upgrades", text: "Moving off old SQL Server versions, tidying up schemas and fixing slow queries along the way." },
        ],
      },
      {
        heading: "New development",
        items: [
          { title: "Web applications", text: "Internal tools, customer portals and admin dashboards, with React on the front end and ASP.NET Core APIs behind them." },
          { title: "APIs and back-end services", text: "ASP.NET Core Web APIs and background services designed to connect with your other systems." },
          { title: "Work on existing applications", text: "New features, bug fixes and performance improvements to applications you already have." },
        ],
      },
      {
        heading: "Technology we use",
        items: [
          { title: "Back end", text: "C#, ASP.NET Core and Entity Framework." },
          { title: "Front end", text: "React, TypeScript and Next.js." },
          { title: "Data", text: "SQL Server and Azure SQL." },
          { title: "Hosting and delivery", text: "Azure App Service, Azure Functions and containers, with builds and deployments through Azure DevOps or GitHub." },
        ],
      },
    ],
    process: {
      heading: "How we approach a migration",
      steps: [
        { title: "Assessment", text: "We review the code, dependencies, hosting and database, and list everything that will need to change." },
        { title: "Plan", text: "We agree the approach: upgrade in place, migrate in stages, or rebuild. Staged migrations let the old and new versions run side by side." },
        { title: "Migrate and test", text: "The work is done in small, testable steps, with existing behaviour checked at each stage." },
        { title: "Cut-over", text: "We deploy, watch the application closely for the first few days, and keep a rollback plan ready." },
      ],
    },
    engagement: {
      heading: "Ways to work with us",
      options: [
        { title: "Fixed-scope project", text: "A defined build or migration with an agreed scope, timeline and quote." },
        { title: "Ongoing development", text: "A monthly arrangement for businesses with a steady list of changes and new features." },
        { title: "Support and maintenance", text: "Bug fixes, security updates and small changes for an application after it goes live." },
      ],
      note: "There's no fixed price list. We'll quote after reviewing the application or requirements.",
    },
    examples: {
      heading: "Typical projects",
      intro: "Examples of the kind of development and migration work we take on:",
      items: [
        { title: "Web Forms to React", text: "An internal order-tracking system built on ASP.NET Web Forms is rebuilt with a React front end and an ASP.NET Core API, and moved to Azure App Service. The existing database stays in place." },
        { title: "Overnight job to Azure Functions", text: "A .NET Framework Windows service that processes files overnight is upgraded to current .NET and re-hosted as an Azure Function with alerts on failure." },
        { title: "Page-by-page front-end migration", text: "A customer portal built with jQuery is moved to React one page at a time, so customers keep using it while the migration runs." },
      ],
    },
    faqs: [
      { q: "Can you migrate an application without rewriting it?", a: "Often, yes. Many .NET Framework applications can be upgraded in place with targeted changes. After the assessment we'll tell you whether an upgrade or a rebuild makes more sense." },
      { q: "Will the application be down during the migration?", a: "We plan for as little downtime as possible. With a staged approach and a tested cut-over plan, the switch is usually a short window scheduled outside business hours." },
      { q: "Who owns the code?", a: "You do. The code lives in your repository and belongs to your business." },
      { q: "Do you only work with .NET and React?", a: "They're our main stack and where we're strongest. If a project needs something else, we'll say so upfront." },
      { q: "Can you take over an application another developer built?", a: "Yes. We start with a short review so that we both know what we're taking on." },
    ],
  },
  {
    slug: "seo",
    name: "SEO Services",
    cardDescription: "Technical fixes, local SEO and content, on monthly, yearly or one-time plans.",
    metaTitle: "SEO Services for Small and Medium Businesses",
    metaDescription:
      "SEO for small and medium businesses in India and Australia: technical fixes, on-page optimisation, local SEO and monthly reporting, on one-time, monthly or yearly plans.",
    serviceType: "Search engine optimisation",
    h1: "SEO services for small and medium businesses",
    intro: [
      "If your website isn't bringing in enquiries, the cause is usually a mix of technical problems, pages that don't match what people search for, and a weak local presence. SEO work fixes those, starting with whatever will make the biggest difference.",
      "We provide SEO for small and medium businesses in India and Australia. Because we're developers as well, we can fix technical problems in your site ourselves instead of only listing them in a report.",
    ],
    image: "/images/seo.avif",
    imageAlt: "Search results page with a website moving up the rankings",
    sections: [
      {
        heading: "What's included",
        items: [
          { title: "Technical SEO", text: "Crawling and indexing, page speed, mobile layout, broken links, redirects, sitemaps and structured data." },
          { title: "On-page optimisation", text: "Page titles, descriptions, headings and content matched to the terms your customers actually search for." },
          { title: "Keyword research", text: "Finding the searches that lead to enquiries and sales, not just traffic, for your products, services and locations." },
          { title: "Local SEO", text: "Setting up and maintaining your Google Business Profile, directory listings and location pages, so you appear in map results." },
          { title: "Content", text: "Service pages, FAQs and articles written around the questions your customers ask." },
          { title: "Reporting", text: "A plain-language monthly report covering rankings, traffic, enquiries and the work done that month." },
        ],
      },
    ],
    process: {
      heading: "How we start",
      steps: [
        { title: "Audit", text: "We check your site, Google Search Console data, competitors and local listings, and record where things stand today." },
        { title: "Priorities", text: "You get a short, ordered list of what to fix and why, starting with the changes most likely to bring in enquiries." },
        { title: "Fixes", text: "We make the technical and on-page changes ourselves, or work with whoever manages your website." },
        { title: "Ongoing work", text: "On monthly and yearly plans, we continue with content, local SEO and technical upkeep, and report on results each month." },
      ],
    },
    engagement: {
      heading: "Plans",
      options: [
        { title: "One-time audit and fix", text: "A full review of your site, followed by fixing the technical and on-page issues we find. A good fit for new sites or sites that have never had SEO work." },
        { title: "Monthly SEO", text: "Ongoing work each month on content, local SEO and technical upkeep, with a monthly report." },
        { title: "Yearly SEO", text: "The same ongoing work agreed for 12 months, with a year-long plan of priorities set at the start." },
      ],
      note: "There's no fixed price list. Pricing depends on the size of your site and your goals, and we'll quote after a first look.",
    },
    examples: {
      heading: "Typical SEO work",
      intro: "Examples of the problems we're usually asked to fix:",
      items: [
        { title: "Missing from map results", text: "A physiotherapy clinic doesn't show up when people search nearby. We rebuild its Google Business Profile, add a page for each service and suburb, and clean up duplicate listings." },
        { title: "Pages Google isn't indexing", text: "An online store has hundreds of product pages missing from Google. We fix the sitemap, internal links and duplicate pages created by product filters." },
        { title: "Slow site, identical titles", text: "A services business has a site that loads slowly on phones, and every page has the same title. We fix page speed and write a unique title and description for each page." },
      ],
    },
    faqs: [
      { q: "How long does SEO take to show results?", a: "Technical fixes can make a difference within weeks, once Google recrawls your site. Rankings for competitive searches usually take several months of steady work." },
      { q: "Do you guarantee first-page rankings?", a: "No. Nobody controls Google's rankings, and anyone who guarantees them should be treated with caution. We commit to doing the work properly and reporting honestly on the results." },
      { q: "Which website platforms do you work with?", a: "We work with most common platforms, including WordPress, Shopify, Wix and custom-built sites. Some platforms limit what can be changed, and we'll tell you where that applies." },
      { q: "What access do you need?", a: "For the audit, read access to Google Search Console and Google Analytics is enough. To make fixes, we'll need editor access to your website or its code." },
      { q: "What's the difference between the monthly and yearly plans?", a: "The work is the same. The yearly plan sets out a 12-month plan of priorities at the start, which suits businesses that want a longer-term commitment." },
    ],
  },
  {
    slug: "skill-building",
    name: "IT Training",
    cardDescription: "Online training in Azure, cloud, Python, SQL and AI.",
    metaTitle: "IT Training in Azure, Cloud, Python, SQL and AI",
    metaDescription:
      "Practical online IT training in Azure, AWS, Google Cloud, Python, SQL, AI and cybersecurity for professionals, graduates and teams.",
    serviceType: "IT training",
    h1: "Skill-building training",
    intro: [
      "Our training is based on the same work we do for clients: cloud, data, integration and application development. Sessions are practical, with exercises based on real project situations rather than slides alone.",
      "Training is delivered online, for individuals moving into cloud and data roles and for teams that need to get up to speed on a particular technology.",
    ],
    image: "/images/skill-building.avif",
    imageAlt: "Hands-on IT skill-building training session",
    sections: [
      {
        heading: "Topics we cover",
        items: [
          { title: "Microsoft Azure", text: "Fundamentals, Data Factory, Synapse, Functions, App Service, networking, identity and security." },
          { title: "AWS", text: "EC2, S3, Lambda, IAM, VPC networking and RDS, plus monitoring and cost control." },
          { title: "Google Cloud", text: "Compute Engine, Cloud Storage, BigQuery, IAM and networking." },
          { title: "Python", text: "From the core language through to working with files, JSON and CSV, pandas, testing and automation." },
          { title: "SQL", text: "Queries and joins through to window functions, stored procedures, indexing and performance tuning." },
          { title: "AI and generative AI", text: "Machine learning basics, NLP, transformers and practical use of large language models." },
          { title: "Cybersecurity", text: "Security fundamentals, cloud security, identity and access management, and incident response." },
          { title: "Web development", text: "HTML, JavaScript and jQuery for people starting out in front-end work." },
        ],
      },
      {
        heading: "How training works",
        items: [
          { title: "Online sessions", text: "All training is delivered online, so you can join from anywhere." },
          { title: "Hands-on exercises", text: "Each topic includes exercises and small case studies, not just theory." },
          { title: "Interview preparation", text: "Courses include common interview questions for the topic, for people preparing for a new role." },
        ],
      },
    ],
    process: {
      heading: "Getting started",
      steps: [
        { title: "Tell us your goal", text: "Let us know which topic you're interested in and your current experience." },
        { title: "Choose a format", text: "We'll suggest the course or format that fits, for an individual or a team." },
        { title: "Train", text: "Work through the sessions and exercises, with time to ask questions." },
      ],
    },
    engagement: {
      heading: "Training options",
      options: [
        { title: "Individual learners", text: "Join a course on a specific topic, such as Azure data engineering or Python." },
        { title: "Team training", text: "A course adapted to your team's current level and the tools you use at work." },
        { title: "One-to-one mentoring", text: "Focused sessions for someone preparing for a new role or working through a real project." },
      ],
      note: "Fees depend on the course and format. Contact us for current details.",
    },
    examples: {
      heading: "Who our training suits",
      intro: "Training is a good fit if, for example:",
      items: [
        { title: "Moving into cloud or data", text: "You work in IT support, testing or development and want to move into an Azure or data engineering role." },
        { title: "A team adopting Azure", text: "Your company is moving to Azure and your developers or analysts need to learn Data Factory, Functions or Synapse." },
        { title: "Getting interview-ready", text: "You have the basics in Python or SQL and want structured practice before technical interviews." },
      ],
    },
    faqs: [
      { q: "Do I need prior experience?", a: "It depends on the course. Python, SQL and web development start from the basics. The cloud and AI courses assume some familiarity with programming or IT." },
      { q: "How is the training delivered?", a: "Online. Contact us for the current schedule and format of the course you're interested in." },
      { q: "Can you run training for our team?", a: "Yes. We can adapt a course to your team's current level and the tools you already use." },
      { q: "Can I focus on specific topics?", a: "Yes. Tell us what you need for your role or a current project, and we'll suggest which parts of a course to focus on." },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
