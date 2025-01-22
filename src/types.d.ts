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

declare module 'routing-controllers' {
  import { Middleware } from 'koa';

  export function useKoaServer(app: any, options?: any): any;
  export function useContainer(container: any): void;

  export interface KoaMiddlewareInterface {
    use(context: any, next: (err?: any) => any): Promise<any>;
  }

  export function Middleware(options?: { type?: string }): ClassDecorator;
  export function getMetadataArgsStorage(): any;
}
