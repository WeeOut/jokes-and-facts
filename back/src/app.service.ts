import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CatFactApiResult } from './type';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getCatFact(): Promise<string> {
    const { data } = await firstValueFrom(
      this.httpService.get<CatFactApiResult>('https://catfact.ninja/fact'),
    );

    return data.fact;
  }
}
