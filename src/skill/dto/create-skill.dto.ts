import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { customErrorMessages } from "src/common/length.error";


export class CreateSkillDto {
    @IsString()
    designation: string;
  }
