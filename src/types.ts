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
  github?: string;
  live?: string;
  docker?: string;
  report?: string;
  status?: string;
  description: string[];
  tags: string[];
}

export interface LearningModule {
  title: string;
  status: string;
  description: string;
  link: string;
}

export interface LearningProgress {
  platform: string;
  username: string;
  level: string;
  completedModules: number;
  modules: LearningModule[];
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
  dockerHub?: string;
  instagram?: string;
  education: EducationItem[];
  skills: SkillGroup[];
  projects: ProjectItem[];
  learningProgress: LearningProgress;
  problemSolvingDetails: {
    description: string[];
    leetcodeMockSolved: number;
    skillsTouched: string[];
  };
  certificationsList: string[];
  extraActivities: string[];
}
