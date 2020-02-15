export interface ICurrentShowData {
  show:{
    name: string,
    language: string,
    status: string,
    rating:{
      average:number
    },
    image:{
      medium:string
    },
    summary:string
  }
}