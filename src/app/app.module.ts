import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DownloadComponent } from './download/download.component';
import { CreateComponent } from './create/create.component';
// import { DownloadGuard } from './download/download-guard.service';
import { CreateCanDeactivateGuard } from './create/create-guard.service';

const appRoutes: Routes = [
  { path: '', component: CreateComponent },
  {
    path: 'create',
    component: CreateComponent,
    canDeactivate: [CreateCanDeactivateGuard],
  },
  {
    path: 'download',
    component: DownloadComponent,
    //canActivate: [DownloadGuard],
  },
];

@NgModule({
  declarations: [AppComponent, DownloadComponent, CreateComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
