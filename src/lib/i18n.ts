export type Language = "en" | "hi";

export const languageLabels: Record<Language, string> = {
  en: "English",
  hi: "हिन्दी",
};

const sectionTitleMap: Record<string, { hi: string }> = {
  "Personal Details": { hi: "व्यक्तिगत विवरण" },
  Education: { hi: "शैक्षणिक विवरण" },
  "Family Details": { hi: "परिवार का विवरण" },
  "Projects & Experience": { hi: "प्रोजेक्ट और अनुभव" },
  "Skills & Tools": { hi: "कौशल और उपकरण" },
  "Analytics Profile": { hi: "एनालिटिक्स प्रोफ़ाइल" },
  "Design Profile": { hi: "डिज़ाइन प्रोफ़ाइल" },
  "Skills & Industrial Exposure": { hi: "कौशल और औद्योगिक अनुभव" },
  "Site Experience & Projects": { hi: "साइट अनुभव और प्रोजेक्ट" },
  "Registration & Qualifications": { hi: "रजिस्ट्रेशन और योग्यताएँ" },
  "Clinical Experience": { hi: "क्लिनिकल अनुभव" },
  "Nursing Experience": { hi: "नर्सिंग अनुभव" },
  "Teaching Profile": { hi: "शिक्षण प्रोफ़ाइल" },
  "Academic Profile": { hi: "शैक्षणिक प्रोफ़ाइल" },
  "Finance & Accounts Skills": { hi: "वित्त और अकाउंट्स कौशल" },
  "Banking Profile": { hi: "बैंकिंग प्रोफ़ाइल" },
  "Sales Profile": { hi: "सेल्स प्रोफ़ाइल" },
  "Digital Marketing Profile": { hi: "डिजिटल मार्केटिंग प्रोफ़ाइल" },
  "Strengths & Activities": { hi: "मजबूतियाँ और गतिविधियाँ" },
  "Internship Goals": { hi: "इंटर्नशिप लक्ष्य" },
  "Government Exam Details": { hi: "सरकारी परीक्षा विवरण" },
  "Trade Education": { hi: "ट्रेड शिक्षा" },
  "Work Experience": { hi: "कार्य अनुभव" },
  "Wedding & Personal Preferences": { hi: "शादी और व्यक्तिगत पसंद" },
  "Wedding & Lifestyle Details": { hi: "शादी और जीवनशैली विवरण" },
  "NRI Details": { hi: "एनआरआई विवरण" },
  "Values & Lifestyle": { hi: "मूल्य और जीवनशैली" },
  "Rental Details": { hi: "किराया से जुड़ी जानकारी" },
  "Volunteer Experience": { hi: "स्वयंसेवी अनुभव" },
};

const fieldLabelMap: Record<string, { hi: string }> = {
  "Full Name": { hi: "पूरा नाम" },
  "Date of Birth": { hi: "जन्म तिथि" },
  Gender: { hi: "लिंग" },
  Email: { hi: "ईमेल" },
  Phone: { hi: "फ़ोन" },
  "Current Address": { hi: "वर्तमान पता" },
  "Highest Qualification": { hi: "उच्चतम योग्यता" },
  "Previous Qualification": { hi: "पूर्व योग्यता" },
  "Additional Courses / Certifications": {
    hi: "अतिरिक्त कोर्स / प्रमाणपत्र",
  },
  "Father's Name & Occupation": { hi: "पिता का नाम और व्यवसाय" },
  "Mother's Name & Occupation": { hi: "माता का नाम और व्यवसाय" },
  Siblings: { hi: "भाई-बहन" },
  "Family Location": { hi: "परिवार का निवास स्थान" },
  "Key Project / Internship 1": { hi: "मुख्य प्रोजेक्ट / इंटर्नशिप 1" },
  "Key Project / Internship 2": { hi: "मुख्य प्रोजेक्ट / इंटर्नशिप 2" },
  "Technical Skills": { hi: "तकनीकी कौशल" },
  "Frontend Skills": { hi: "फ्रंटएंड कौशल" },
  "Design Tools": { hi: "डिज़ाइन उपकरण" },
  "Portfolio Link": { hi: "पोर्टफोलियो लिंक" },
  Summary: { hi: "सारांश" },
  "Short Summary": { hi: "संक्षिप्त सारांश" },
  Portfolio: { hi: "पोर्टफोलियो" },
  "Hero Case Study": { hi: "मुख्य केस स्टडी" },
  "Industrial Training": { hi: "औद्योगिक प्रशिक्षण" },
  "B.Tech Major Project": { hi: "बी.टेक मेजर प्रोजेक्ट" },
  "Site / Project 1": { hi: "साइट / प्रोजेक्ट 1" },
  "Site / Project 2": { hi: "साइट / प्रोजेक्ट 2" },
  "Medical Registration Number": { hi: "मेडिकल रजिस्ट्रेशन नंबर" },
  Degrees: { hi: "डिग्रियाँ" },
  "Fellowships / Certifications": { hi: "फेलोशिप / प्रमाणपत्र" },
  "Hospital / Role 1": { hi: "अस्पताल / भूमिका 1" },
  "Hospital / Role 2": { hi: "अस्पताल / भूमिका 2" },
  "Hospital / Clinic Experience": { hi: "अस्पताल / क्लिनिक अनुभव" },
  "Key Nursing Skills": { hi: "मुख्य नर्सिंग कौशल" },
  "Subjects / Classes": { hi: "विषय / कक्षाएँ" },
  "Teaching Experience": { hi: "शिक्षण अनुभव" },
  "Co-curricular Activities": { hi: "सह-पाठ्यक्रम गतिविधियाँ" },
  "Area of Specialization": { hi: "विशेषज्ञता का क्षेत्र" },
  "Publications / Conferences": { hi: "प्रकाशन / सम्मेलन" },
  "Tools": { hi: "उपकरण" },
  "Work Experience": { hi: "कार्य अनुभव" },
  "Bank / Branch Experience": { hi: "बैंक / शाखा अनुभव" },
  Certifications: { hi: "प्रमाणपत्र" },
  "Sales Experience": { hi: "सेल्स अनुभव" },
  "Key Achievements": { hi: "मुख्य उपलब्धियाँ" },
  Channels: { hi: "चैनल" },
  "Key Campaigns": { hi: "मुख्य कैंपेन" },
  "Career Objective": { hi: "करियर उद्देश्य" },
  Strengths: { hi: "मजबूतियाँ" },
  "College Activities": { hi: "कॉलेज गतिविधियाँ" },
  Objective: { hi: "उद्देश्य" },
  Skills: { hi: "कौशल" },
  "Exams Cleared": { hi: "उत्तीर्ण परीक्षाएँ" },
  "Category / Caste": { hi: "वर्ग / जाति" },
  "Trade Course": { hi: "ट्रेड कोर्स" },
  Experience: { hi: "अनुभव" },
  Height: { hi: "कद" },
  "Religion / Caste": { hi: "धर्म / जाति" },
  "Current Occupation": { hi: "वर्तमान व्यवसाय" },
  "Partner Preferences": { hi: "जीवनसाथी की पसंद" },
  Hobbies: { hi: "शौक" },
  "Languages Known": { hi: "भाषाएँ" },
  Values: { hi: "मूल्य" },
  "Employment / Study Details": { hi: "रोजगार / अध्ययन विवरण" },
  "Expected Duration of Stay": { hi: "रुकने की अपेक्षित अवधि" },
  References: { hi: "संदर्भ" },
  "NGO / Initiative": { hi: "एनजीओ / पहल" },
  Availability: { hi: "उपलब्धता" },
  "Country of Residence": { hi: "निवास देश" },
  "Visa / PR Status": { hi: "वीज़ा / पीआर स्थिति" },
  "Job Details Abroad": { hi: "विदेश में नौकरी का विवरण" },
};

const placeholderMap: Record<string, { hi: string }> = {
  "Rahul Sharma": { hi: "राहुल शर्मा" },
  "15 August 2002": { hi: "15 अगस्त 2002" },
  "Male / Female / Other": { hi: "पुरुष / महिला / अन्य" },
  "you@example.com": { hi: "you@example.com" },
  "House no., Street, City, State, PIN": {
    hi: "मकान नंबर, गली, शहर, राज्य, पिनकोड",
  },
  "B.Tech in Computer Science, XYZ University, 2024": {
    hi: "बी.टेक कंप्यूटर साइंस, XYZ यूनिवर्सिटी, 2024",
  },
  "12th, CBSE, 2020 – 85%": { hi: "12वीं, CBSE, 2020 – 85%" },
  "Full-Stack Web Development, Coursera, 2023": {
    hi: "फुल-स्टैक वेब डेवलपमेंट, Coursera, 2023",
  },
  "HTML5, CSS3, Tailwind CSS, JavaScript, TypeScript, React, Next.js": {
    hi: "HTML5, CSS3, Tailwind CSS, JavaScript, TypeScript, React, Next.js",
  },
  "Figma, Adobe XD, Framer, Canva": {
    hi: "Figma, Adobe XD, Framer, Canva",
  },
  "https://your-portfolio.com": { hi: "https://your-portfolio.com" },
};

export function translateSectionTitle(title: string, language: Language): string {
  if (language === "hi") {
    const entry = sectionTitleMap[title];
    if (entry?.hi) return entry.hi;
  }
  return title;
}

export function translateFieldLabel(label: string, language: Language): string {
  if (language === "hi") {
    const entry = fieldLabelMap[label];
    if (entry?.hi) return entry.hi;
  }
  return label;
}

export function translatePlaceholder(
  text: string,
  language: Language,
): string {
  if (language === "hi") {
    const entry = placeholderMap[text];
    if (entry?.hi) return entry.hi;
  }
  return text;
}

export function translateUseCase(
  useCase: string,
  language: Language,
): string {
  if (language === "hi") {
    if (useCase === "job") return "नौकरी";
    if (useCase === "wedding") return "शादी";
    if (useCase === "education") return "इंटर्नशिप / शिक्षा";
    if (useCase === "personal") return "अन्य / व्यक्तिगत";
  }
  return useCase;
}
