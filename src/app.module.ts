import { Module } from '@nestjs/common';
    import { TypeOrmModule } from '@nestjs/typeorm';
    import { UserModule } from './user/user.module';
    import { VideoModule } from './video/video.module';
    import { ConfigModule } from '@nestjs/config';

    @Module({
      imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
          type: 'postgres',
          url: process.env.DATABASE_URL,
          autoLoadEntities: true,
          synchronize: true,
        }),
        UserModule,
        VideoModule,
      ],
    })
    export class AppModule {}
