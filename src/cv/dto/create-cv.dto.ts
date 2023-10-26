import { IsNotEmpty, MaxLength, MinLength, IsIn, IsString, IsNumber, IsOptional, IsArray, ValidateNested } from "class-validator";
import { customErrorMessages } from "src/common/length.error";
import { CreateSkillDto } from "src/skill/dto/create-skill.dto";



export class CreateCvDto {
    @IsString()
    name: string;
  
    @IsString()
    firstname: string;
  
    @IsNumber()
    age: number;
  
    @IsNumber()
    cin: number;
  
    @IsString()
    job: string;
  
    @IsString()
    path: string;
  
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true }) // If you have a nested DTO for skills, use ValidateNested
    skills: CreateSkillDto[];
  }
  
