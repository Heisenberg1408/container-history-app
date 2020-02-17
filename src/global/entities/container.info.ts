import { ContainerHistory } from './container.history';

export class ContainerInfo {
  constructor(
    public id: string,
    public owner: string,
    public history: ContainerHistory[]
  ) {}
}
