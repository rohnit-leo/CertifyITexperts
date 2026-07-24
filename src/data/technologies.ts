export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  logoUrl: string;
  pdfUrl: string;
  logoBg?: string;
}

export const CATEGORIES = [
  'Cloud, DevOps & Infrastructure',
  'Cybersecurity & Networking',
  'Enterprise Platforms',
  'Agile & Project Management',
  'AI & Automation'
];

export const TECHNOLOGIES: Technology[] = [
  {
    id: 'aws',
    name: 'AWS',
    category: 'Cloud, DevOps & Infrastructure',
    description: 'Amazon Web Services cloud computing certifications.',
    logoUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/logos/aws-svgrepo-com.svg',
    pdfUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/certificationpdf/AWS_Latest_Certifications_2026.pdf'
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    category: 'Cloud, DevOps & Infrastructure',
    description: 'Microsoft Azure cloud and enterprise platform certifications.',
    logoUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/logos/microsoft-logo-svgrepo-com.svg',
    pdfUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/certificationpdf/Microsoft_Latest_Certifications_2026.pdf'
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    category: 'Enterprise Platforms',
    description: 'Customer relationship management and enterprise cloud.',
    logoUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/logos/salesforce-svgrepo-com.svg',
    pdfUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/certificationpdf/salesforce_mulesoft_tableau_certifications_2026.pdf'
  },
  {
    id: 'servicenow',
    name: 'ServiceNow',
    category: 'Enterprise Platforms',
    description: 'IT service management and enterprise workflow automation.',
    logoUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/logos/ServiceNow_idM0Y4akhW_1.png',
    pdfUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/certificationpdf/ServiceNow_Pearson_VUE_Certifications_2026.pdf'
  },
  {
    id: 'ec-council',
    name: 'EC-Council',
    category: 'Cybersecurity & Networking',
    description: 'Certified Ethical Hacker (CEH) and cybersecurity certifications.',
    logoUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-23%20at%207.04.13%20PM.jpeg',
    pdfUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/ecc_certification_exams_2026.pdf'
  },
  {
    id: 'databricks',
    name: 'Databricks',
    category: 'Cloud, DevOps & Infrastructure',
    description: 'Data engineering, machine learning, and Databricks platform.',
    logoUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-23%20at%207.59.18%20PM.jpeg',
    pdfUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/databricks_certification_exams_2026.pdf'
  },
  {
    id: 'peoplecert',
    name: 'PeopleCert',
    category: 'Agile & Project Management',
    description: 'ITIL, PRINCE2, and enterprise IT service management certifications.',
    logoUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-23%20at%208.00.47%20PM.jpeg',
    pdfUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/PeopleCert_Certifications_Guide.pdf'
  },
  {
    id: 'terraform',
    name: 'HashiCorp Terraform',
    category: 'Cloud, DevOps & Infrastructure',
    description: 'Infrastructure as Code (IaC) and cloud automation certifications.',
    logoUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-23%20at%207.56.36%20PM.jpeg',
    pdfUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/terraform_certification_exams_2026.pdf'
  },
  {
    id: 'pmi',
    name: 'Project Management Institute (PMI)',
    category: 'Agile & Project Management',
    description: 'PMP, CAPM, and global project management certifications.',
    logoUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-23%20at%206.39.24%20PM.jpeg',
    pdfUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/PeopleCert_Certifications_Guide.pdf'
  },
  {
    id: 'isaca',
    name: 'ISACA',
    category: 'Cybersecurity & Networking',
    description: 'CISA, CISM, CRISC, and IT governance & audit certifications.',
    logoUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-23%20at%206.39.24%20PM%20%281%29.jpeg',
    pdfUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/certificationpdf/isaca_certification_exams_2026.pdf'
  },
  {
    id: 'comptia',
    name: 'CompTIA',
    category: 'Cybersecurity & Networking',
    description: 'Vendor-neutral IT certifications from basics to advanced security.',
    logoUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/logos/CompTIA_idueqtN0WC_1.png',
    pdfUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/certificationpdf/CompTIA_Certifications_2026.pdf'
  },
  {
    id: 'cisco',
    name: 'Cisco',
    category: 'Cybersecurity & Networking',
    description: 'Networking, cybersecurity, and enterprise routing.',
    logoUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/logos/Cisco_Logo_1.png',
    pdfUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/certificationpdf/cisco_certification_exams_2026.pdf',
    logoBg: 'bg-gray-900'
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'Cloud, DevOps & Infrastructure',
    description: 'Container orchestration and microservices management.',
    logoUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/logos/Kubernetes_idgLDLNSuc_1.png',
    pdfUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/certificationpdf/Kubernetes_Certifications_PSI.pdf'
  },
  {
    id: 'pegasystems',
    name: 'Pegasystems',
    category: 'Enterprise Platforms',
    description: 'Business process management and customer relationship management.',
    logoUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/logos/Pegasystems_idIT4x47zK_0.png',
    pdfUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/certificationpdf/Pega_Certifications_2026.pdf'
  },
  {
    id: 'scaled-agile',
    name: 'Scaled Agile',
    category: 'Agile & Project Management',
    description: 'Leading SAFe and agile framework for enterprises.',
    logoUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/logos/Scaled_Agile_idOUoNvbXE_0.png',
    pdfUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/certificationpdf/Scaled_Agile_Certifications_Guide.pdf',
    logoBg: 'bg-black'
  },
  {
    id: 'anthropic-claude',
    name: 'Anthropic Claude',
    category: 'AI & Automation',
    description: 'Anthropic AI integration and advanced reasoning models.',
    logoUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/logos/Claude_Logo_1.png',
    pdfUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/certificationpdf/anthropic_claude_certifications_2026.pdf'
  },
  {
    id: 'iiba',
    name: 'IIBA',
    category: 'Agile & Project Management',
    description: 'Business analysis professional certifications.',
    logoUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/logos/IIBA_idKNfNcYid_0.png',
    pdfUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/certificationpdf/iiba_certification_exams_2026.pdf'
  },
  {
    id: 'oracle',
    name: 'Oracle',
    category: 'Enterprise Platforms',
    description: 'Database management and enterprise applications.',
    logoUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/logos/oracle-svgrepo-com.svg',
    pdfUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/certificationpdf/oracle_certification_directory.pdf'
  },
  {
    id: 'scrum-org',
    name: 'Scrum.org',
    category: 'Agile & Project Management',
    description: 'Professional Scrum training and agile certifications.',
    logoUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/logos/Scrum-org_idywgM-n5m_0.png',
    pdfUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/certificationpdf/scrum_org_certification_directory.pdf'
  },
  {
    id: 'uipath',
    name: 'UiPath',
    category: 'AI & Automation',
    description: 'Robotic Process Automation and intelligent automation.',
    logoUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/logos/UiPath_id_6hYBRTt_1.png',
    pdfUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/certificationpdf/uipath_certification_exams_2026.pdf'
  },
  {
    id: 'wiz',
    name: 'Wiz',
    category: 'Cybersecurity & Networking',
    description: 'Cloud security posture management.',
    logoUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/logos/Wiz_idApmKxSg0_1.png',
    pdfUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/certificationpdf/wiz_certification_directory_2026.pdf'
  },
  {
    id: 'zscaler',
    name: 'Zscaler',
    category: 'Cybersecurity & Networking',
    description: 'Cloud security and zero trust network access.',
    logoUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/logos/Zscaler_idz0j5A6bB_1.png',
    pdfUrl: 'https://a8cw5fshupvoh5ik.public.blob.vercel-storage.com/certificationpdf/zscaler_certification_directory_2026.pdf'
  }
];
