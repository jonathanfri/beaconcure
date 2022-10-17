import { Component, OnInit }  from '@angular/core';
import { FileService }        from 'src/app/services/file.service';
import { Router }             from '@angular/router'

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  fileNames?: [];
  
  constructor( private fileService: FileService,
    // private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveFiles();
  }

  retrieveFiles(): void {
    this.fileService.getAllFiles()
      .subscribe({
        next: (data) => {
          this.fileNames = data;
          // console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  navigate(fileName: string, index: number): void {
    this.router.navigate(['files/' + fileName]);
  }
}
