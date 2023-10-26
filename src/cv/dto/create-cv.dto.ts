import { IsNotEmpty, MaxLength, MinLength, IsIn } from "class-validator";
import { customErrorMessages } from "src/common/length.error";


export class CreateCvDto {
    @MinLength(3, { message: customErrorMessages.name.minLength })
    @MaxLength(10, { message: customErrorMessages.name.maxLength })
    @IsNotEmpty({ message: customErrorMessages.name.required })
    name: string;

    @MinLength(3, { message: customErrorMessages.name.minLength })
    @MaxLength(15, { message: customErrorMessages.name.maxLength })
    @IsNotEmpty({ message: customErrorMessages.name.required })
    firstname: string;

    age: number;
    cin: number;
    job: string;
    path: string;
}
