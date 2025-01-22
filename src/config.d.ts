declare module 'config/data-source' {
  const datasource: any;
  export default datasource;
}

declare module 'config/repositories-config' {
  export function useRepositories(): any;
}

declare module 'config/routing-config' {
  export const routingConfigs: any;
}

declare module 'config/server-middlewares' {
  export function useMiddlewares(app: any): any;
}
