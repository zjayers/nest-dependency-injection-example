import { Injectable, Logger } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
  private readonly WATTS: number = 15;
  private readonly logger = new Logger(CpuService.name);

  constructor(private readonly powerService: PowerService) {}

  public computeSumOf(a: number, b: number): number {
    this.logger.log(`CPU: Requesting ${this.WATTS} watts of power...`);
    this.powerService.supplyPower(this.WATTS);

    return a + b;
  }
}
