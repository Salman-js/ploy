export interface CardProps {
  image: string;
  title: string;
  category: string;
  onClick: () => void;
  group: 'popular' | 'suggested';
}
export type JobCardProps = Omit<CardProps, 'group'>;
