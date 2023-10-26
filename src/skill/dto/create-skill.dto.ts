import { IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { customErrorMessages } from "src/common/length.error";


export class CreateSkillDto {
    @MinLength(5, { message: customErrorMessages.name.minLength })
    @MaxLength(20, { message: customErrorMessages.name.maxLength })
    @IsNotEmpty({ message: customErrorMessages.name.required })
    designation: string;

    
}
