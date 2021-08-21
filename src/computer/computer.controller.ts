import { Controller, Get } from '@nestjs/common';
import { CpuService } from '../cpu/cpu.service';
import { DiskService, OperationResult } from '../disk/disk.service';

@Controller('compute')
export class ComputerController {
  constructor(
    private readonly cpuService: CpuService,
    private readonly diskService: DiskService,
  ) {}

  @Get()
  public runComputations() {
    const sum: number = this.cpuService.computeSumOf(1, 2);
    const operationResult: OperationResult =
      this.diskService.writeBytesToDisk(20);

    return {
      operationResult,
      sum,
    };
  }
}
