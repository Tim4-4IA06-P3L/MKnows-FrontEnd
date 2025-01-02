export interface BootcampPage {
  params: {
    id: string;
  };
}

export interface Thumbnail {
  url: string,
  documentId: string,
  id: number
}

export interface Document {
  id: number,
  documentId: string,
  url: string
}

export interface Category {
  id: number,
  documentId: string,
  Category: string,
  programs: Bootcamp[]
}

export interface Bootcamp {
  id: number,
  documentId: string,
  Title: string,
  Level: string,
  Category: Category,
  Description: string
  Thumbnail: Thumbnail,
  Document: Document
}