import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)
  // Enable trust proxy to handle X-Forwarded-For headers
  app.getHttpAdapter().getInstance().enable('trust proxy')
  // set prefix for every endpoint to api/v1
  app.setGlobalPrefix('api/v1', { exclude: [''] })
  // whitelist configured fields and throw error for non whitelisted fields
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true
  }))
  // cors configurations - allow origins from environment variable or defaults
  const allowedOrigins = [
    'http://localhost:5173',
    'https://www.anhsangtuthien.com',
  ]  
  const corsOrigins = configService.get<string>('CORS_ORIGINS')
  if (corsOrigins) {
    allowedOrigins.push(...corsOrigins.split(',').map(origin => origin.trim()))
  }
  app.enableCors({
    origin: allowedOrigins,
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false,
    'credentials': true,
  })
  await app.listen(4000)
}
bootstrap()