export interface Department {
  _id: number;
  title: string;
  description: string;
}

export interface Member {
  _id: number;
  image: string;
  firstName: string;
  lastName: string;
  designation: string;
  department: number;
  linkedinLink: string;
}
