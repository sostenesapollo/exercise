import pino from "pino";

export default class LoggingService {

    /**
     * logger is the custom logger service that is being used.
     * @private
     * @memberof LoggingService
     */
    private readonly logger

    /**
     * Creates an instance of LoggingService.
     * @param {pino.LoggerOptions} configs
     * @memberof LoggingService
     */
    constructor(configs: pino.LoggerOptions) {
        this.logger = pino(configs)
    }
    /**
     * Log a custom message that is passed by the message.
     *
     * @param {string} message
     * @memberof LoggingService
     */
    log(message: any) {
        this.logger.info(message)
    }

}