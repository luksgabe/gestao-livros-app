export const buildURL = (url: string, route?: string) =>
  route ? `${url}/${route}` : url