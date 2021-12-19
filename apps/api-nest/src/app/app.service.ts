import { Injectable } from '@nestjs/common';
import { Item } from '@my-monorepo/common';
@Injectable()
export class AppService {
  getData(): Item {
    return ({ name: 'Welcome to api-nest!', id: 1 });
  }
}
