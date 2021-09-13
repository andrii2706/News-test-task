export interface IPopularity{
  source:{
    id:string,
    name:string
  },
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string
}
export interface IPopularityFull {
  status: string,
  totalResults: number,
  articles: IPopularity[]
}
