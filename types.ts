
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: 'active' | 'beta' | 'concept';
}

export interface Capability {
  category: string;
  items: string[];
  icon: string;
}
