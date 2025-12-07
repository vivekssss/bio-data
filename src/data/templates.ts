export type TemplateCategory =
  | "Software & IT"
  | "Engineering"
  | "Medical & Healthcare"
  | "Teaching & Education"
  | "Finance & Accounting"
  | "Sales & Marketing"
  | "Creative & Design"
  | "Student / Fresher"
  | "Government / PSU"
  | "Trades & Technical"
  | "Wedding"
  | "Other";

export type UseCase = "job" | "wedding" | "education" | "personal";

export interface TemplateField {
  key: string;
  label: string;
  placeholder: string;
}

export interface TemplateSection {
  id: string;
  title: string;
  description?: string;
  fields: TemplateField[];
}

export interface BiodataTemplate {
  id: string;
  slug: string;
  name: string;
  headline: string;
  category: TemplateCategory;
  useCase: UseCase;
  accentColor: string;
  tags: string[];
  sections: TemplateSection[];
}

const basePersonalSection: TemplateSection = {
  id: "personal",
  title: "Personal Details",
  description: "Basic personal information for your biodata.",
  fields: [
    { key: "fullName", label: "Full Name", placeholder: "Rahul Sharma" },
    { key: "dob", label: "Date of Birth", placeholder: "15 August 2002" },
    { key: "gender", label: "Gender", placeholder: "Male / Female / Other" },
    { key: "email", label: "Email", placeholder: "you@example.com" },
    { key: "phone", label: "Phone", placeholder: "+91-98xxxxxx00" },
    {
      key: "address",
      label: "Current Address",
      placeholder: "House no., Street, City, State, PIN",
    },
  ],
};

const baseEducationSection: TemplateSection = {
  id: "education",
  title: "Education",
  description: "Your academic qualifications.",
  fields: [
    {
      key: "education1",
      label: "Highest Qualification",
      placeholder: "B.Tech in Computer Science, XYZ University, 2024",
    },
    {
      key: "education2",
      label: "Previous Qualification",
      placeholder: "12th, CBSE, 2020 – 85%",
    },
    {
      key: "education3",
      label: "Additional Courses / Certifications",
      placeholder: "Full-Stack Web Development, Coursera, 2023",
    },
  ],
};

const baseFamilySection: TemplateSection = {
  id: "family",
  title: "Family Details",
  description: "Family background summary.",
  fields: [
    {
      key: "fatherName",
      label: "Father's Name & Occupation",
      placeholder: "Mr. Rakesh Sharma, Govt. Employee",
    },
    {
      key: "motherName",
      label: "Mother's Name & Occupation",
      placeholder: "Mrs. Sunita Sharma, Homemaker",
    },
    {
      key: "siblings",
      label: "Siblings",
      placeholder: "1 younger sister, studying in Class 10",
    },
    {
      key: "familyLocation",
      label: "Family Location",
      placeholder: "Originally from Jaipur, Rajasthan; settled in Delhi",
    },
  ],
};

export const templates: BiodataTemplate[] = [
  {
    id: "software-engineer-classic",
    slug: "software-engineer-classic",
    name: "Software Engineer (Classic)",
    headline: "Clean one-page biodata for software and IT roles.",
    category: "Software & IT",
    useCase: "job",
    accentColor: "#2563eb",
    tags: ["software", "developer", "it", "fresher"],
    sections: [
      basePersonalSection,
      baseEducationSection,
      {
        id: "experience",
        title: "Projects & Experience",
        description: "Show your practical work and internships.",
        fields: [
          {
            key: "project1",
            label: "Key Project / Internship 1",
            placeholder:
              "Full-stack task manager app using React, Node.js and MongoDB.",
          },
          {
            key: "project2",
            label: "Key Project / Internship 2",
            placeholder:
              "Android app for college attendance tracking, Kotlin + Firebase.",
          },
          {
            key: "skills",
            label: "Technical Skills",
            placeholder:
              "JavaScript, TypeScript, React, Next.js, Node.js, SQL, Git",
          },
        ],
      },
    ],
  },
  {
    id: "frontend-developer-modern",
    slug: "frontend-developer-modern",
    name: "Frontend Developer (Modern UI)",
    headline:
      "Modern, visually-focused biodata for frontend and UI developers.",
    category: "Software & IT",
    useCase: "job",
    accentColor: "#22c55e",
    tags: ["frontend", "react", "ui", "web"],
    sections: [
      basePersonalSection,
      baseEducationSection,
      {
        id: "skills-ui",
        title: "Skills & Tools",
        description: "Highlight design and frontend-specific skills.",
        fields: [
          {
            key: "skillsFrontend",
            label: "Frontend Skills",
            placeholder:
              "HTML5, CSS3, Tailwind CSS, JavaScript, TypeScript, React, Next.js",
          },
          {
            key: "designTools",
            label: "Design Tools",
            placeholder: "Figma, Adobe XD, Framer, Canva",
          },
          {
            key: "portfolio",
            label: "Portfolio Link",
            placeholder: "https://your-portfolio.com",
          },
        ],
      },
    ],
  },
  {
    id: "data-analyst-structured",
    slug: "data-analyst-structured",
    name: "Data Analyst (Structured)",
    headline: "Structured biodata focused on numbers and tools.",
    category: "Software & IT",
    useCase: "job",
    accentColor: "#06b6d4",
    tags: ["data", "analyst", "excel", "sql"],
    sections: [
      basePersonalSection,
      baseEducationSection,
      {
        id: "analytics",
        title: "Analytics Profile",
        description: "Showcase tools, dashboards and case studies.",
        fields: [
          {
            key: "tools",
            label: "Tools & Technologies",
            placeholder: "Excel, SQL, Power BI, Tableau, Python (Pandas)",
          },
          {
            key: "analyticsProject1",
            label: "Analytics Project 1",
            placeholder:
              "Sales dashboard for retail chain with monthly and regional views.",
          },
          {
            key: "analyticsProject2",
            label: "Analytics Project 2",
            placeholder:
              "Customer churn prediction model using Python and scikit-learn.",
          },
        ],
      },
    ],
  },
  {
    id: "ui-ux-designer-creative",
    slug: "ui-ux-designer-creative",
    name: "UI/UX Designer (Creative)",
    headline:
      "Designer-friendly biodata with focus on portfolio and case studies.",
    category: "Creative & Design",
    useCase: "job",
    accentColor: "#ec4899",
    tags: ["ui", "ux", "designer", "figma"],
    sections: [
      basePersonalSection,
      baseEducationSection,
      {
        id: "designProfile",
        title: "Design Profile",
        description: "Summarise your design philosophy and strengths.",
        fields: [
          {
            key: "summary",
            label: "Short Summary",
            placeholder:
              "UI/UX designer focused on simple, human-friendly digital products.",
          },
          {
            key: "portfolioLink",
            label: "Portfolio",
            placeholder: "Behance / Dribbble / Personal website",
          },
          {
            key: "caseStudy",
            label: "Hero Case Study",
            placeholder:
              "Redesigned college website to improve admissions inquiries by 40%.",
          },
        ],
      },
    ],
  },
  {
    id: "mechanical-engineer-technical",
    slug: "mechanical-engineer-technical",
    name: "Mechanical Engineer (Technical)",
    headline: "Technical biodata for mechanical engineering roles.",
    category: "Engineering",
    useCase: "job",
    accentColor: "#f97316",
    tags: ["mechanical", "engineer", "production"],
    sections: [
      basePersonalSection,
      baseEducationSection,
      {
        id: "mechSkills",
        title: "Skills & Industrial Exposure",
        fields: [
          {
            key: "mechSkills",
            label: "Technical Skills",
            placeholder: "AutoCAD, SolidWorks, ANSYS, CNC, Quality Control",
          },
          {
            key: "industrialTraining",
            label: "Industrial Training",
            placeholder:
              "Summer training at ABC Auto Ltd., assembly line and quality checks.",
          },
          {
            key: "project",
            label: "B.Tech Major Project",
            placeholder:
              "Design and fabrication of solar-powered water pumping system.",
          },
        ],
      },
    ],
  },
  {
    id: "civil-engineer-site",
    slug: "civil-engineer-site",
    name: "Civil Engineer (Site)",
    headline: "Site-focused biodata for civil engineering profiles.",
    category: "Engineering",
    useCase: "job",
    accentColor: "#22c55e",
    tags: ["civil", "engineer", "site", "construction"],
    sections: [
      basePersonalSection,
      baseEducationSection,
      {
        id: "civilExperience",
        title: "Site Experience & Projects",
        fields: [
          {
            key: "siteProject1",
            label: "Site / Project 1",
            placeholder:
              "Supervision of G+4 residential project, managing labour and billing.",
          },
          {
            key: "siteProject2",
            label: "Site / Project 2",
            placeholder:
              "Roadwork project including quantity estimation and surveying.",
          },
          {
            key: "civilSkills",
            label: "Technical Skills",
            placeholder: "AutoCAD, STAAD Pro, MS Project, Surveying instruments",
          },
        ],
      },
    ],
  },
  {
    id: "doctor-clinical",
    slug: "doctor-clinical",
    name: "Doctor (Clinical Biodata)",
    headline:
      "Professional biodata for MBBS/MD doctors applying to hospitals.",
    category: "Medical & Healthcare",
    useCase: "job",
    accentColor: "#0ea5e9",
    tags: ["doctor", "mbbs", "md", "hospital"],
    sections: [
      basePersonalSection,
      {
        id: "registration",
        title: "Registration & Qualifications",
        fields: [
          {
            key: "registrationNo",
            label: "Medical Registration Number",
            placeholder: "Registered with MCI / State Medical Council",
          },
          {
            key: "degrees",
            label: "Degrees",
            placeholder: "MBBS, MD (Medicine) – College, University, Year",
          },
          {
            key: "fellowships",
            label: "Fellowships / Certifications",
            placeholder: "Fellowship in Critical Care, XYZ Institute",
          },
        ],
      },
      {
        id: "clinicalExperience",
        title: "Clinical Experience",
        fields: [
          {
            key: "experience1",
            label: "Hospital / Role 1",
            placeholder:
              "Junior Resident, Department of Medicine, ABC Hospital (2022–2024)",
          },
          {
            key: "experience2",
            label: "Hospital / Role 2",
            placeholder:
              "Emergency duty and ward rounds, ICU exposure, procedures handled.",
          },
        ],
      },
    ],
  },
  {
    id: "nurse-care",
    slug: "nurse-care",
    name: "Nurse (Patient Care)",
    headline: "Caring profile for nursing and patient support roles.",
    category: "Medical & Healthcare",
    useCase: "job",
    accentColor: "#22c55e",
    tags: ["nurse", "gnm", "bsc nursing"],
    sections: [
      basePersonalSection,
      baseEducationSection,
      {
        id: "nursingExperience",
        title: "Nursing Experience",
        fields: [
          {
            key: "hospital",
            label: "Hospital / Clinic Experience",
            placeholder:
              "Staff Nurse at XYZ Hospital, handling ICU and ward patients.",
          },
          {
            key: "skillsNursing",
            label: "Key Nursing Skills",
            placeholder:
              "IV insertion, vital monitoring, patient counselling, records.",
          },
        ],
      },
    ],
  },
  {
    id: "school-teacher",
    slug: "school-teacher",
    name: "School Teacher",
    headline: "Teacher biodata for school-level teaching roles.",
    category: "Teaching & Education",
    useCase: "job",
    accentColor: "#a855f7",
    tags: ["teacher", "school", "b.ed"],
    sections: [
      basePersonalSection,
      baseEducationSection,
      {
        id: "teachingProfile",
        title: "Teaching Profile",
        fields: [
          {
            key: "subjects",
            label: "Subjects / Classes",
            placeholder: "Mathematics for classes 6–10",
          },
          {
            key: "experienceTeaching",
            label: "Teaching Experience",
            placeholder:
              "3 years as TGT Maths at ABC Public School, CBSE curriculum.",
          },
          {
            key: "activities",
            label: "Co-curricular Activities",
            placeholder:
              "Maths club in-charge, exam paper setting, parent counselling.",
          },
        ],
      },
    ],
  },
  {
    id: "college-professor",
    slug: "college-professor",
    name: "College Professor / Lecturer",
    headline: "Academic biodata for lecturer / assistant professor roles.",
    category: "Teaching & Education",
    useCase: "job",
    accentColor: "#f97316",
    tags: ["professor", "lecturer", "academics"],
    sections: [
      basePersonalSection,
      baseEducationSection,
      {
        id: "academics",
        title: "Academic Profile",
        fields: [
          {
            key: "specialization",
            label: "Area of Specialization",
            placeholder: "Computer Networks, Network Security",
          },
          {
            key: "publications",
            label: "Publications / Conferences",
            placeholder: "2 IEEE conference papers, 1 journal publication.",
          },
          {
            key: "teachingExp",
            label: "Teaching Experience",
            placeholder:
              "Assistant Professor at XYZ College, 4 years, B.Tech and M.Tech courses.",
          },
        ],
      },
    ],
  },
  {
    id: "accountant-profile",
    slug: "accountant-profile",
    name: "Accountant",
    headline: "Finance biodata for accounts and finance roles.",
    category: "Finance & Accounting",
    useCase: "job",
    accentColor: "#22c55e",
    tags: ["accountant", "tally", "gst"],
    sections: [
      basePersonalSection,
      baseEducationSection,
      {
        id: "financeSkills",
        title: "Finance & Accounts Skills",
        fields: [
          {
            key: "accountingTools",
            label: "Tools",
            placeholder: "Tally, MS Excel, GST portal, Income Tax portal",
          },
          {
            key: "experienceFinance",
            label: "Work Experience",
            placeholder:
              "2 years as Accounts Executive, handling vouchers, GST returns, TDS.",
          },
        ],
      },
    ],
  },
  {
    id: "banker-finance",
    slug: "banker-finance",
    name: "Banking / Finance Professional",
    headline: "Professional biodata for banking and finance roles.",
    category: "Finance & Accounting",
    useCase: "job",
    accentColor: "#0ea5e9",
    tags: ["bank", "finance", "nbfc"],
    sections: [
      basePersonalSection,
      baseEducationSection,
      {
        id: "bankingProfile",
        title: "Banking Profile",
        fields: [
          {
            key: "experienceBank",
            label: "Bank / Branch Experience",
            placeholder:
              "Customer Service Officer at XYZ Bank, handling accounts and KYC.",
          },
          {
            key: "certificationsBank",
            label: "Certifications",
            placeholder: "NISM, NCFM, JAIIB (if applicable)",
          },
        ],
      },
    ],
  },
  {
    id: "sales-executive",
    slug: "sales-executive",
    name: "Sales Executive",
    headline: "Target-driven biodata for sales profiles.",
    category: "Sales & Marketing",
    useCase: "job",
    accentColor: "#ef4444",
    tags: ["sales", "field", "b2b", "b2c"],
    sections: [
      basePersonalSection,
      baseEducationSection,
      {
        id: "salesProfile",
        title: "Sales Profile",
        fields: [
          {
            key: "experienceSales",
            label: "Sales Experience",
            placeholder:
              "3 years in B2B software sales, North India region.",
          },
          {
            key: "achievementsSales",
            label: "Key Achievements",
            placeholder:
              "Achieved 120% of targets for 4 consecutive quarters.",
          },
        ],
      },
    ],
  },
  {
    id: "digital-marketer",
    slug: "digital-marketer",
    name: "Digital Marketer",
    headline: "Online marketing biodata for social and performance roles.",
    category: "Sales & Marketing",
    useCase: "job",
    accentColor: "#f97316",
    tags: ["digital", "seo", "social media"],
    sections: [
      basePersonalSection,
      baseEducationSection,
      {
        id: "marketingSkills",
        title: "Digital Marketing Profile",
        fields: [
          {
            key: "channels",
            label: "Channels",
            placeholder: "SEO, SEM, Facebook Ads, Instagram, Email Marketing",
          },
          {
            key: "campaigns",
            label: "Key Campaigns",
            placeholder:
              "Lead generation campaign for ed-tech course with 25% lower CPL.",
          },
        ],
      },
    ],
  },
  {
    id: "fresher-general",
    slug: "fresher-general",
    name: "Fresher (Any Field)",
    headline: "Simple biodata for fresh graduates in any stream.",
    category: "Student / Fresher",
    useCase: "job",
    accentColor: "#22c55e",
    tags: ["fresher", "graduate", "first job"],
    sections: [
      basePersonalSection,
      baseEducationSection,
      {
        id: "strengths",
        title: "Strengths & Activities",
        fields: [
          {
            key: "careerObjective",
            label: "Career Objective",
            placeholder:
              "To start my career in a growth-oriented organisation where I can learn and contribute.",
          },
          {
            key: "strengths",
            label: "Strengths",
            placeholder:
              "Quick learner, good communication skills, team player.",
          },
          {
            key: "activitiesFresher",
            label: "College Activities",
            placeholder:
              "Member of cultural committee, organised annual fest.",
          },
        ],
      },
    ],
  },
  {
    id: "internship-student",
    slug: "internship-student",
    name: "Student Internship",
    headline: "Compact biodata for internship applications.",
    category: "Student / Fresher",
    useCase: "education",
    accentColor: "#0ea5e9",
    tags: ["student", "internship"],
    sections: [
      basePersonalSection,
      baseEducationSection,
      {
        id: "internshipGoals",
        title: "Internship Goals",
        fields: [
          {
            key: "objectiveIntern",
            label: "Objective",
            placeholder:
              "To gain practical exposure in software development while pursuing my degree.",
          },
          {
            key: "skillsIntern",
            label: "Skills",
            placeholder: "C, C++, Java, basic HTML/CSS, problem solving.",
          },
        ],
      },
    ],
  },
  {
    id: "government-job",
    slug: "government-job",
    name: "Government / PSU Job",
    headline: "Formal biodata format for government and PSU roles.",
    category: "Government / PSU",
    useCase: "job",
    accentColor: "#1d4ed8",
    tags: ["govt", "psu", "formal"],
    sections: [
      basePersonalSection,
      baseEducationSection,
      {
        id: "govtDetails",
        title: "Government Exam Details",
        fields: [
          {
            key: "examCleared",
            label: "Exams Cleared",
            placeholder: "RRB NTPC 2023, SSC CGL 2022 (Tier 1)",
          },
          {
            key: "category",
            label: "Category / Caste",
            placeholder: "General / OBC / SC / ST / EWS",
          },
        ],
      },
    ],
  },
  {
    id: "electrician-technician",
    slug: "electrician-technician",
    name: "Electrician / Technician",
    headline: "Skill-based biodata for technical and trade roles.",
    category: "Trades & Technical",
    useCase: "job",
    accentColor: "#facc15",
    tags: ["electrician", "technician", "iti"],
    sections: [
      basePersonalSection,
      {
        id: "tradeEducation",
        title: "Trade Education",
        fields: [
          {
            key: "tradeCourse",
            label: "Trade Course",
            placeholder: "ITI Electrician, XYZ ITI, 2 years",
          },
          {
            key: "experienceTrade",
            label: "Experience",
            placeholder:
              "3 years experience in residential and commercial wiring.",
          },
        ],
      },
    ],
  },
  {
    id: "plumber-technician",
    slug: "plumber-technician",
    name: "Plumber / Maintenance",
    headline: "Simple biodata for plumbing and maintenance roles.",
    category: "Trades & Technical",
    useCase: "job",
    accentColor: "#22c55e",
    tags: ["plumber", "maintenance"],
    sections: [
      basePersonalSection,
      {
        id: "plumberExperience",
        title: "Work Experience",
        fields: [
          {
            key: "experiencePlumber",
            label: "Experience",
            placeholder:
              "5 years experience in residential plumbing and maintenance.",
          },
        ],
      },
    ],
  },
  {
    id: "wedding-groom-traditional",
    slug: "wedding-groom-traditional",
    name: "Wedding Biodata (Groom)",
    headline:
      "Traditional Indian wedding biodata format for grooms, with family and preferences.",
    category: "Wedding",
    useCase: "wedding",
    accentColor: "#e11d48",
    tags: ["wedding", "groom", "marriage"],
    sections: [
      basePersonalSection,
      baseEducationSection,
      baseFamilySection,
      {
        id: "weddingDetailsGroom",
        title: "Wedding & Personal Preferences",
        fields: [
          {
            key: "height",
            label: "Height",
            placeholder: "5'9\" (175 cm)",
          },
          {
            key: "religionCaste",
            label: "Religion / Caste",
            placeholder: "Hindu, Brahmin",
          },
          {
            key: "occupation",
            label: "Current Occupation",
            placeholder: "Software Engineer at MNC in Bangalore",
          },
          {
            key: "partnerPreference",
            label: "Partner Preferences",
            placeholder:
              "Educated, working, understanding partner from similar cultural background.",
          },
        ],
      },
    ],
  },
  {
    id: "wedding-bride-traditional",
    slug: "wedding-bride-traditional",
    name: "Wedding Biodata (Bride)",
    headline:
      "Traditional wedding biodata format for brides with education and family details.",
    category: "Wedding",
    useCase: "wedding",
    accentColor: "#db2777",
    tags: ["wedding", "bride", "marriage"],
    sections: [
      basePersonalSection,
      baseEducationSection,
      baseFamilySection,
      {
        id: "weddingDetailsBride",
        title: "Wedding & Lifestyle Details",
        fields: [
          {
            key: "heightBride",
            label: "Height",
            placeholder: "5'4\" (162 cm)",
          },
          {
            key: "religionCasteBride",
            label: "Religion / Caste",
            placeholder: "Hindu, Khatri",
          },
          {
            key: "occupationBride",
            label: "Current Occupation",
            placeholder: "Senior Analyst at consulting firm in Gurgaon",
          },
          {
            key: "hobbiesBride",
            label: "Hobbies",
            placeholder: "Reading, music, travelling, cooking.",
          },
        ],
      },
    ],
  },
  {
    id: "wedding-nri",
    slug: "wedding-nri",
    name: "Wedding Biodata (NRI)",
    headline:
      "Modern biodata for NRI brides/grooms with abroad details.",
    category: "Wedding",
    useCase: "wedding",
    accentColor: "#0284c7",
    tags: ["wedding", "nri", "abroad"],
    sections: [
      basePersonalSection,
      baseEducationSection,
      baseFamilySection,
      {
        id: "nriDetails",
        title: "NRI Details",
        fields: [
          {
            key: "country",
            label: "Country of Residence",
            placeholder: "Canada / USA / UK / Australia",
          },
          {
            key: "visaStatus",
            label: "Visa / PR Status",
            placeholder: "Permanent Resident / Work Permit / Citizen",
          },
          {
            key: "jobAbroad",
            label: "Job Details Abroad",
            placeholder:
              "Working as Software Engineer in Toronto with XYZ Corp.",
          },
        ],
      },
    ],
  },
  {
    id: "wedding-simple-modern",
    slug: "wedding-simple-modern",
    name: "Wedding Biodata (Simple Modern)",
    headline:
      "Minimal, modern wedding biodata focused on education and values.",
    category: "Wedding",
    useCase: "wedding",
    accentColor: "#22c55e",
    tags: ["wedding", "simple", "modern"],
    sections: [
      basePersonalSection,
      baseEducationSection,
      {
        id: "values",
        title: "Values & Lifestyle",
        fields: [
          {
            key: "languages",
            label: "Languages Known",
            placeholder: "English, Hindi, regional language",
          },
          {
            key: "values",
            label: "Values",
            placeholder: "Respect for family, honesty, growth mindset.",
          },
        ],
      },
    ],
  },
  {
    id: "rental-tenant-profile",
    slug: "rental-tenant-profile",
    name: "Rental / PG Tenant Profile",
    headline:
      "Biodata-style profile for renting a flat, PG or hostel.",
    category: "Other",
    useCase: "personal",
    accentColor: "#0ea5e9",
    tags: ["rental", "tenant", "flat"],
    sections: [
      basePersonalSection,
      {
        id: "rentalDetails",
        title: "Rental Details",
        fields: [
          {
            key: "employment",
            label: "Employment / Study Details",
            placeholder: "Working at XYZ Company / Studying at ABC College",
          },
          {
            key: "stayDuration",
            label: "Expected Duration of Stay",
            placeholder: "12 months / 2 years",
          },
          {
            key: "references",
            label: "References",
            placeholder: "Previous landlord / office HR contact (optional)",
          },
        ],
      },
    ],
  },
  {
    id: "ngo-volunteer-profile",
    slug: "ngo-volunteer-profile",
    name: "NGO / Volunteer Profile",
    headline: "Simple profile for volunteering and NGO work.",
    category: "Other",
    useCase: "personal",
    accentColor: "#22c55e",
    tags: ["ngo", "volunteer", "social work"],
    sections: [
      basePersonalSection,
      {
        id: "volunteerDetails",
        title: "Volunteer Experience",
        fields: [
          {
            key: "ngoWork",
            label: "NGO / Initiative",
            placeholder:
              "Volunteered with XYZ NGO for teaching underprivileged children.",
          },
          {
            key: "availability",
            label: "Availability",
            placeholder: "Weekends / Evenings / Full-time (summer)",
          },
        ],
      },
    ],
  },
];

export function getTemplateBySlug(slug: string): BiodataTemplate | undefined {
  return templates.find((template) => template.slug === slug);
}

export const allCategories: TemplateCategory[] = Array.from(
  new Set(templates.map((t) => t.category)),
).sort();

export const useCaseFilters: { id: UseCase | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "job", label: "Job biodata" },
  { id: "wedding", label: "Wedding" },
  { id: "education", label: "Internship / Education" },
  { id: "personal", label: "Other / Personal" },
];
