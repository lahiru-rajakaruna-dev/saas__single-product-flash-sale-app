import * as dotenv                    from 'dotenv'
import NodeCache                      from 'node-cache';
import path                           from 'node:path';
import {ILoggerService}               from "../logger_module/logger.interface";
import {BaseCacheService, ISingleton} from './abstract_cache.service';
import {ICacheService}                from "./cache.interface";


dotenv.config({
                  path: [
                      path.resolve(process.cwd(), './env.development'),
                      path.resolve(process.cwd(), './env.production')
                  ]
              })


export class NodeCacheService extends BaseCacheService {
    private readonly cache_provider: NodeCache;


    private constructor() {
        // TODO ADD LOGGER FACTORY HERE
        super({} as ILoggerService)

        const cache_ttl = process.env.CACHE_TTLE
            ? parseInt(process.env.CACHE_TTL as string)
            : BaseCacheService.DEFAULT_TTL;

        this.cache_provider = new NodeCache({
                                                deleteOnExpire: true,
                                                checkperiod   : 1000 * 60,
                                                stdTTL        : cache_ttl!,
                                            })
    }

    static getInstance(): ICacheService {
        if (!this.CacheServiceInstance) {
            this.CacheServiceInstance = new NodeCacheService()
        }
        return this.CacheServiceInstance;
    }

    setItem<T>(key: string, item: T): boolean {
        try {

            this.cache_provider.set(key, item)
            return true
        } catch (e) {
            this.logger.error((e as Error).message)
            return false;
        }
    }

    getItem<T>(key: string): T | undefined {
        try {
            this.logger.logAndReturn(this.cache_provider.get(key))
        } catch (e) {
            this.logger.error((e as Error).message)
            return undefined;
        }
    }

    updateItem<T>(key: string, item: T): boolean {
        try {
            this.cache_provider.set(key, item)
            return true
        } catch (e) {
            this.logger.error((e as Error).message)
            return false;
        }
    }

    hasItem(key: string): boolean {
        try {
            return this.cache_provider.has(key)
        } catch (e) {
            this.logger.error((e as Error).message)
            return false;
        }
    }
}