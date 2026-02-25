import {Chalk, ChalkInstance} from "chalk";
import {BaseLoggerService}    from "./abstract_logger.service";

export class ConsoleLoggerService extends BaseLoggerService {
    private readonly console_logger: typeof console;
    private readonly log_formatter: ChalkInstance;

    private constructor() {
        super()
        this.console_logger = console
        this.log_formatter  = new Chalk()
    }

    public static getInstance() {
        if (!this.logger_service_instance) {
            this.logger_service_instance = new ConsoleLoggerService()
        }

        return this.logger_service_instance
    }


    log(message: string): void {
        this.console_logger.log(this.formatAsInfo(this.log_prefix + message))
    }

    logAndReturn<T>(data: T, message?: string): T {
        this.console_logger.log(this.formatAsInfo(this.log_prefix + (message ?? "")), data)
        return data;
    }

    error(message: string): void {
        this.console_logger.log(this.formatAsError(this.log_prefix + message));
    }

    setLogPrefix(message: string): void {
        this.log_prefix = message
    }


    private formatAsError(text: string): string {
        return this.log_formatter.red(text)
    }

    private formatAsInfo(text: string): string {
        return this.log_formatter.white(text)
    }
}