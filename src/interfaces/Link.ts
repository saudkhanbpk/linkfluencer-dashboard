export interface ILink extends Document {
  _id: string;
  originalUrl: string;
  shortUrl: string;
  createdBy: string;
  brand: string | null;
  clickCount: number;
  targetSite: string;
  prefix: string | null;
  tags: Array<string> | null;
}
