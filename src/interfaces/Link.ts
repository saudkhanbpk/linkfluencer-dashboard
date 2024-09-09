export interface ILink extends Document {
  filter(arg0: (item: any) => boolean): unknown;
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
