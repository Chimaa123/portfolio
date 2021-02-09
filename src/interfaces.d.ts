export interface ProjectType {
  title: string;
  description: string;
  duty: string[];
  main_photo: string;
  photos: string[];
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface ContactType {
  icon: string;
  title: string;
  description: string;
  link?: string;
}

export interface Menu {
  label: string;
  code: string;
}
