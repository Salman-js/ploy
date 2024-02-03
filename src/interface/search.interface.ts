export interface IFilter {
  title?: string;
  experience?: ('Intern' | 'Entry' | 'Intermediate' | 'Senior')[];
  jobType?: ('FullTime' | 'PartTime' | 'Contract')[];
  workStyle?: ('Remote' | 'OnSite')[];
  category?: string[];
}
