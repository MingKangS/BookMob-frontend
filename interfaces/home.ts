import { NextRouter } from "next/router"

export interface HomeProps {
  books: {
    book_list: book[]
  }
}

export type book = {
  "title": string,
  "author": string,
  "date_posted": Date,
  "seller": string,
  "seller_username": string,
  "description": string,
  "condition": number,
  "price": number,
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