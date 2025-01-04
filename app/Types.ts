export interface Thumbnail {
  url: string,
  documentId: string,
  id: number
}

export interface Document {
  id: number,
  documentId: string,
  name: string,
  url: string,
  type: string,
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