import {
  NestInterceptor,
  ExecutionContext,
  Injectable,
  CallHandler,
} from '@nestjs/common';
import { classToPlain } from 'class-transformer';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(_context: ExecutionContext, next: CallHandler<any>) {
    return next.handle().pipe(
      tap((data) => {
        console.log('No plain', data);
        console.log('Plain', classToPlain(data));
      }),
      map((data) => classToPlain(data)),
    );
  }
}
