import { join } from 'path';
import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file'

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.printf(({ level, message, timestamp }) => `[${timestamp}] ${level}: ${message}`)
  ),
  defaultMeta: { service: 'caching-demo' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(({ level, message, timestamp }) => `[${timestamp}] ${level}: ${message}`)
      ),
    }),
    new transports.DailyRotateFile({
      filename: join('logs', 'application-%DATE%.log'),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
      format: format.json()
    })
  ],
});

export default logger;
