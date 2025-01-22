export class CreateVideoDto {
      name: string;
      url: string;
      lastDiarizationJobId: string;
    }

    export class UpdateVideoDto {
      name?: string;
      url?: string;
      lastDiarizationJobId?: string;
    }
