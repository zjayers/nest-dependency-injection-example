import { Injectable, Logger } from '@nestjs/common';
import { PowerService } from '../power/power.service';

export enum OperationResult {
  COMPLETE,
  ERROR,
}

@Injectable()
export class DiskService {
  private readonly WATTS = 20;
  private readonly MAX_BYTES: number = 30;

  private readonly logger = new Logger(DiskService.name);

  constructor(private readonly powerService: PowerService) {}

  public writeBytesToDisk(numberOfBytes: number): OperationResult {
    this.logger.log(`DISK: Requesting ${this.WATTS} watts of power...`);
    this.powerService.supplyPower(this.WATTS);

    return this.MAX_BYTES < numberOfBytes
      ? OperationResult.ERROR
      : OperationResult.COMPLETE;
  }
}
