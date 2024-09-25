import { Injectable, Logger } from "@nestjs/common";
import { interval, map, Observable } from "rxjs";

@Injectable()
export class EmployeeService {
    private readonly logger: Logger = new Logger(EmployeeService.name);

    stream(): Observable<number> {
        return interval(1000).pipe(
            map(() => Math.random())
        );
    }
}