import { MaxLength, MinLength } from "class-validator";
import { StatusEnum } from "src/todo/status.enum";
import { customErrorMessages } from "src/common/length.error";



export class updateTodoDto {
    @MinLength(3, { message: customErrorMessages.name.minLength })
    @MaxLength(10, { message: customErrorMessages.name.maxLength })
    name: string;
    
    @MinLength(3, { message: customErrorMessages.name.minLength })
    description: string;

    status: StatusEnum;

}