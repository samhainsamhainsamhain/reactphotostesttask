export type SmallPhotos = Photo[];

export interface BigPhoto extends Photo {
  comments: Comment[];
}

export interface Photo {
  id: number;
  url: string;
}

export interface Comment {
  id: number;
  text: string;
  date: number;
}