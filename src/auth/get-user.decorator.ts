import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './user.entity';

export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): User | string => {
    //console.log('CTX : ', ctx.switchToHttp().getRequest());
    const req = ctx.switchToHttp().getRequest();
    console.log('décorator GetUSER : ', req.user);

    return _data === 'id' ? req.user.id : req.user;
  },
);
