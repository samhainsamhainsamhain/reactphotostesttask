export type SmallPhotos = PhotoInterface[];

export interface BigPhoto extends PhotoInterface {
  comments: CommentInterface[];
}

export interface PhotoInterface {
  id: number;
  url: string;
}

export interface CommentInterface {
  id: number;
  text: string;
  date: number;
}