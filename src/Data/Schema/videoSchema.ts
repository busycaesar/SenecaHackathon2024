export interface Category {
    _id: number;
    title: string;
  }
  
  export interface Video {
    _id: number;
    title: string;
    author: string;
    photo: string;
    body: string;
    category: number;
    creationDate: string;
  }
  