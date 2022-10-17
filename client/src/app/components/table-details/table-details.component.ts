import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';
import { FileService }              from 'src/app/services/file.service';
import { Table }                    from 'src/app/models/table.model';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.css']
})
export class TableDetailsComponent implements OnInit {

  table?:       Table = {};
  fileName?:    string;    
  tableTitle?:  string;

  constructor(
    private fileService: FileService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.fileName = params['fileName'];
      this.tableTitle = params['tableTitle'];
      this.retrieveTable();
    });
  
  }

  retrieveTable(): void {
    this.fileService.getTable(this.fileName, this.tableTitle)
      .subscribe({
        next: (data) => {
          this.table = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
