import { Module } from '@nestjs/common';
    import { TypeOrmModule } from '@nestjs/typeorm';
    import { Video } from './video.entity';

    @Module({
      imports: [TypeOrmModule.forFeature([Video])],
      controllers: [],
      providers: [],
    })
    export class VideoModule {}
 