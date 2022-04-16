export interface IPhotoPost extends IPhoto {
  comments: IComment[];
}

export interface IPhoto {
  id: number;
  url: string;
}

export interface IComment {
  id: number;
  text: string;
  date: number;
}