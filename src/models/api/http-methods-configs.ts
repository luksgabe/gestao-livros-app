export type GetConfig = {
    route?: string | undefined
    params?: any | undefined
    promiseTrackerArea?: string | undefined
  }
  
  export type PostConfig = {
    route?: string | undefined
    data?: any | undefined
    promiseTrackerArea?: string | undefined
  }
  
  export type PutConfig = {
    route: string
    data?: any | undefined
    promiseTrackerArea?: string | undefined
  }
  
  export type DelConfig = {
    route: string
    promiseTrackerArea?: string | undefined
  }
  