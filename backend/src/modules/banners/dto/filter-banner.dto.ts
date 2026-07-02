import { IsOptional } from "class-validator";

export class FilterBanner {
    @IsOptional()
    isActive: string
}
