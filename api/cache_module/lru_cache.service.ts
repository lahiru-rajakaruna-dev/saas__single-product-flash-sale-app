import {LRUCache}         from "lru-cache";
import {ILoggerService}   from "../logger_module/logger.interface";
import {BaseCacheService} from "./abstract_cache.service";
import {ICacheService}    from "./cache.interface";

export class LRUCacheService extends BaseCacheService {
    private readonly lru_cache: LRUCache<string, Record<string, any>>

    private constructor() {
        // TODO ADD LOGGER
        super({} as ILoggerService)

        const cache_ttl = process.env.CACHE_TTL ? parseInt(process.env.CACHE_TTL) : BaseCacheService.DEFAULT_TTL
        this.lru_cache  = new LRUCache<string, Record<string, any>>({
                                                                        ttl         : cache_ttl,
                                                                        ttlAutopurge: true,
                                                                        max         : 100,
                                                                    })
    }

    public static getInstance(): ICacheService {
        if (!this.CacheServiceInstance) {
            this.CacheServiceInstance = new LRUCacheService()
        }

        return this.CacheServiceInstance
    }

    setItem<T extends Record<string, any>>(key: string, item: T): boolean {
        try {
            this.lru_cache.set(key, item)
            return true
        } catch (e) {
            this.logger.error((e as Error).message)
            return false;
        }
    }

    getItem<T extends Record<string, any>>(key: string): T | undefined {
        try {
            const item = this.lru_cache.get(key) as T
            return this.logger.logAndReturn(item)
        } catch (e) {
            this.logger.error((e as Error).message)
            return undefined;
        }
    }

    updateItem<T extends Record<string, any>>(key: string, item: T): boolean {
        try {
            this.lru_cache.set(key, item)
            return true
        } catch (e) {
            this.logger.error((e as Error).message)
            return false
        }
    }

    hasItem(key: string): boolean {
        return this.lru_cache.has(key);
    }

}
