import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { TimesheetsService } from '../timesheets.service';

// @Injectable({ providedIn: 'root' })
// export class DownloadGuard implements CanActivate {
//   constructor(
//     private timesheetsService: TimesheetsService,
//     private router: Router
//   ) {}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean> | Promise<boolean> | boolean {
//     return this.timesheetsService
//       .submitTimesheet()
//       .then((downloadReady: boolean) => {
//         if (downloadReady) {
//           return true;
//         } else {
//           this.router.navigate(['/create']);
//         }
//       });
//   }
// }
