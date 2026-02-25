import {ILoggerService} from "../logger_module/logger.interface";
import {ICacheService}  from './cache.interface';


export abstract class BaseCacheService implements ICacheService {

    protected static readonly DEFAULT_TTL = 1000 * 60;
    protected static CacheServiceInstance: ICacheService | undefined
    protected readonly logger: ILoggerService;

    constructor(logger: ILoggerService) {
        this.logger = logger
    }


    abstract getItem<T extends Record<string, any>>(key: string): T | undefined


    abstract setItem<T extends Record<string, any>>(key: string, item: T): boolean


    abstract updateItem<T extends Record<string, any>>(key: string, item: T): boolean


    abstract hasItem(key: string): boolean
}


