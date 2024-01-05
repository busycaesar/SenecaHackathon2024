export interface Department {
  _id: number;
  title: string;
  description: string;
}

export interface Member {
  _id: number;
  firstName: string;
  lastName: string;
  designation: string;
  department: number;
  linkedinLink: string;
}
