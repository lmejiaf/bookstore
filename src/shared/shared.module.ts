import { Module } from '@nestjs/common';
import { MapperService } from '../shared/mapper.service';

@Module({
    providers: [MapperService],
    exports: [MapperService]
})
export class SharedModule {

}
