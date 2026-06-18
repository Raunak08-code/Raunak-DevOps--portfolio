export interface EducationItem {
  degree: string;
  institution: string;
  score: string;
  year: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  github: string;
  description: string[];
  tags: string[];
}

export interface SkillGroup {
  category: string;
  skills: { name: string; proficiency: number }[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface ResumeData {
  name: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  instagram?: string;
  education: EducationItem[];
  skills: SkillGroup[];
  projects: ProjectItem[];
  problemSolvingDetails: {
    description: string[];
    leetcodeMockSolved: number;
    skillsTouched: string[];
  };
  certificationsList: string[];
  extraActivities: string[];
}
