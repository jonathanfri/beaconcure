import { Component, OnInit }        from '@angular/core';
import { FileService }              from 'src/app/services/file.service';
import { ActivatedRoute, Router }   from '@angular/router';
import { Table }                    from 'src/app/models/table.model';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  tables?: Table[];
  fileName?: string;

  constructor(
    private fileService: FileService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.fileName = params['fileName'];
      this.retrieveTables();
    });
  
  }

  retrieveTables(): void {
    this.fileService.getTables(this.fileName)
      .subscribe({
        next: (data) => {
          this.tables = data;         
        },
        error: (e) => console.error(e)
      });
  }

  navigate(table: Table, index: number): void {
    this.router.navigate(['files/' + this.fileName + '/tables/' + table.title]);
  }
}



