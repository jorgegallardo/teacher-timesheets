import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DownloadComponent } from './download/download.component';
import { CreateComponent } from './create/create.component';

const appRoutes: Routes = [
  { path: '', component: CreateComponent },
  { path: 'create', component: CreateComponent },
  { path: 'download', component: DownloadComponent },
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
