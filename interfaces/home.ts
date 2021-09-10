import { NextRouter } from "next/router"

export interface HomeProps {
  books: {
    book_list: book[]
  }
}

export type book = {
	"id": number
  "title": string,
  "author": string,
  "date_posted": Date,
  "seller": string,
  "seller_username": string,
  "description": string,
  "condition": number,
  "price": number,
}

export type bookListApiRes = {
	book_list: book[]
}

export interface SearchBarProps {
  styles: {readonly [key: string]: string;},
  setSearchValue: React.Dispatch<React.SetStateAction<string>>,
  
}

export interface MenuProps {
  router: NextRouter,
  styles: {readonly [key: string]: string;},
}

export interface BookCardProps {
  book: book,
  styles: {readonly [key: string]: string;},
}

export interface StaticPropsBook {
  books: bookListApiRes
}

export interface StaticPathsBook {
  paths: Array<{params: { id: String}}>
}

export interface BookProps {
	book: book
}