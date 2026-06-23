/*
 * Project data for the portfolio.
 *
 * HOW TO ADD A PROJECT (later):
 *   1. Drop your render images into the "assets/photos/" folder.
 *   2. Copy one of the objects below, give it a new "id" (must be unique),
 *      and update the fields.
 *   3. List your image file names in "images" (first one is used as the cover).
 *
 * Project 3 still uses placeholder content — replace when ready.
 */
const PROJECTS = [
  {
    id: 1,
    title: "Inter-University Campus",
    category: "Educational Campus",
    location: "Tyumen, Russia",
    year: "2025",
    role: "BIM Manager",
    scale: "158,000 m² · 10 buildings",
    disciplines: "5 disciplines · 9 campus buildings",
    summary:
      "A multidisciplinary educational campus with a total area of 158,000 m², consisting of 10 buildings. The development includes academic and research facilities, laboratories, accommodation facilities for students and faculty, and sports complexes, creating an integrated environment for education, innovation, and collaboration.",
    responsibilities: [
      "Led BIM coordination activities for 5 disciplines across 9 campus buildings.",
      "Developed and implemented BIM Execution Plans (BEP) and Employer's Information Requirements (EIR).",
      "Administered Common Data Environment (CDE) and Revit Server, ensuring structured data management and collaboration workflows.",
      "Coordinated BIM processes and supported multidisciplinary design teams in Revit environment.",
      "Performed model quality control, including clash detection and model validation using Navisworks.",
      "Developed Revit automation tools using Dynamo scripts and optimized scheduling/specification workflows.",
      "Created Revit templates, families, and internal BIM standards.",
      "Developed technical guidelines and training materials for design teams on Revit workflows and automation tools.",
      "Provided technical BIM support to project designers and coordinators.",
    ],
    images: ["assets/photos/1_1.png", "assets/photos/1_2.png"],
  },
  {
    id: 2,
    title: "Factory Administration Building",
    category: "Industrial Administration",
    location: "Perm, Russia",
    year: "2025",
    role: "BIM Manager",
    scale: "4,450 m²",
    disciplines: "AR · SR · MEP",
    summary:
      "A 4,450 m² administrative building developed for an industrial manufacturing facility in Perm, Russia. The project provides office and operational spaces supporting the management and coordination of the plant's activities.",
    responsibilities: [
      "Managed BIM coordination.",
      "Developed and implemented BIM Execution Plans (BEP) and Employer's Information Requirements (EIR).",
      "Administered Common Data Environment (CDE) and Revit Server, ensuring structured data management and collaboration workflows.",
      "Coordinated BIM processes and supported multidisciplinary design teams in Revit environment.",
      "Performed model quality control, including clash detection and model validation using Navisworks.",
      "Developed Revit automation tools using Dynamo scripts and optimized scheduling/specification workflows.",
      "Developed Revit templates, families, and internal BIM standards.",
      "Developed technical guidelines and training materials for design teams on Revit workflows and automation tools.",
      "Provided technical BIM support to project designers and coordinators.",
    ],
    images: ["assets/photos/2_1.png", "assets/photos/2_2.png", "assets/photos/2_3.png"],
  },
  {
    id: 3,
    title: "Riverside Residential Development",
    category: "Residential / Mixed-use",
    location: "Moscow, Russia",
    year: "2025",
    role: "BIM Coordinator",
    scale: "≈ 120,000 m²",
    disciplines: "Up to 10 disciplines",
    summary:
      "A landmark riverside residential and mixed-use development. I coordinated BIM development across up to ten disciplines, managed external subcontractors and established the project's BIM workflows and CDE structure.",
    responsibilities: [
      "Coordinated BIM development across up to 10 disciplines.",
      "Managed external BIM subcontractors and contract administration.",
      "Established project BIM workflows, CDE structure and IFC export mapping.",
      "Developed federated models and performed clash detection using Navisworks and BIM Vision.",
      "Reviewed model data and prepared IFC deliverables for regulatory submission.",
    ],
    images: ["assets/photos/3_1.png", "assets/photos/3_2.png"],
  },
];
