export interface User {
  _id: string;
  email: string;
  name: string;
  picture: string;
  ratings: Array<string>;
  sub: string;
  type: string;
}

export interface recentAssignments {
  title: string;
  active: boolean;
  _id: string;
  ai_limitation: string;
  description: string;
  professor_id: string;
  resource_file: File;
}
