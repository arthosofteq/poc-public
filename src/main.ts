import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { NestApplicationOptions } from '@nestjs/common';
import * as bodyParser from 'body-parser';
import { get } from 'src/utils/config';
import { AppModule } from './app.module';
import SWAGGER_CONFIG from '../config/swagger';

export async function bootstrap(): Promise<void> {
    const serverConfig = get('server');
    const port = serverConfig.port;

    const options: NestApplicationOptions = {};

    const app = await NestFactory.create(AppModule, options);
    app.use(bodyParser.json({ limit: '512mb' }));
    app.use(bodyParser.urlencoded({ limit: '512mb', extended: true }));
    app.enableCors();
    app.setGlobalPrefix(serverConfig.globalPrefix);

    // swagger
    SwaggerModule.setup(
        serverConfig.docPrefix,
        app,
        SwaggerModule.createDocument(app, SWAGGER_CONFIG),
    );

    await app.listen(port);
}

bootstrap();
