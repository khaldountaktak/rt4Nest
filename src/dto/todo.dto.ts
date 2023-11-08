import { IsNotEmpty, MaxLength, MinLength, IsIn } from "class-validator";
import { customErrorMessages } from "../common/length.error";


export class TodoDto {
    @MinLength(3, { message: customErrorMessages.name.minLength })
    @MaxLength(10, { message: customErrorMessages.name.maxLength })
    @IsNotEmpty({ message: customErrorMessages.name.required })
    name: string;

    @MinLength(10, { message: customErrorMessages.description.minLength })
    @IsNotEmpty({ message: customErrorMessages.description.required })
    description: string;
}
