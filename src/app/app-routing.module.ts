import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestComponent} from "./test/test.component";
import {ConnectionComponent} from "./connection/connection.component";

const routes: Routes = [
  {path: 'test', component: TestComponent},
  {path: 'connection', component: ConnectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
