export interface INews{
  source:{
    id:string,
    name:string
  }
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string
  content: string
}
export interface INewsFull{
  status: string,
  totalResults: number,
  articles: INews[]
}
export interface InPut{
  info: string
}
