
export interface DesignProject {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface DesignBrief {
  goal: string;
  targetAudience: string;
  colorPalette: string[];
  suggestedElements: string[];
  estimatedTimeline: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  price: string;
}
