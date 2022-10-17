import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesComponent } from './components/files/files.component';
import { TablesComponent } from './components/tables/tables.component';
import { TableDetailsComponent } from './components/table-details/table-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'files', pathMatch: 'full' },
  { path: 'files', component: FilesComponent },
  { path: 'files/:fileName', component: TablesComponent },
  { path: 'files/:fileName/tables/:tableTitle', component: TableDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
