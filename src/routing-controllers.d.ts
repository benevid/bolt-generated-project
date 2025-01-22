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
