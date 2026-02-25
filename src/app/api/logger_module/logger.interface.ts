export interface ILoggerService {

    setLogPrefix(message: string): void

    log(message: string): void

    logAndReturn<T>(data: T, message?: string): T

    error(message: string): void
}

export const LOGGERS = ['CONSOLE'] as const