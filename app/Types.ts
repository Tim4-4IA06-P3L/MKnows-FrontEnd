export interface Thumbnail {
  id: number,
  documentId: string,
  name: string,
  url: string,
  mime: string,
}

export interface Document {
  id: number,
  documentId: string,
  name: string,
  url: string,
  mime: string,
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

export interface Training {
  id: number,
  documentId: string,
  Title: string,
  TrainingType: string,
  NewTraining: boolean,
  Thumbnail: Thumbnail,
  Document: Document,
}