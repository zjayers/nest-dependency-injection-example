import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class PowerService {
  private readonly logger = new Logger(PowerService.name);

  public supplyPower(watts: number): void {
    this.logger.log(`~ Supplying: ${watts} watts of power. ~`);
  }
}
