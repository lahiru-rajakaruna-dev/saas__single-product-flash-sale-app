import {ILoggerService} from "./logger.interface";

export abstract class BaseLoggerService implements ILoggerService {
    protected static logger_service_instance: ILoggerService | undefined;
    protected log_prefix: string = ''

    abstract log(message: string): void

    abstract logAndReturn<T>(data: T, message?: string): T

    abstract error(message: string): void

    abstract setLogPrefix(message: string): void

}