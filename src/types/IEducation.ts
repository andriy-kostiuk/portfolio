export interface IEducation {
  title: string;
  status: string;
  date: string;
  result: string;
  desc: string;
  certificateLinks?: { label: string; url: string }[];
}
