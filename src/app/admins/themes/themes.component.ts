import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ThemeService } from 'src/app/services/admin/theme.service';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css'],
})
export class ThemesComponent implements OnInit {
  themes: Array<any> = [];
  idTheme: string = '';
  constructor(
    private themeService: ThemeService,
    private modalService: NgbModal,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getThemes();
  }
  getThemes(){
    this.themeService.getThemes().subscribe(
      (res: any) => {
        if (res.status) {
          this.themes = res.result;
        }
      },
      (error) => console.log(error)
    );
  }
  openModalDeleteTheme(id, modal) {
    this.idTheme = id;
    this.modalService.open(modal, { size: 'sm', centered: true });
  }
  deleteTheme() {
    this.themeService.deleteTheme(this.idTheme).subscribe(
      (res:any) => {
        if(res.status){
          this.getThemes();
        }
        
      },
      (error) => console.log(error)
    );
  }
  editTheme(id){
    this.router.navigate(['/admin/themes/theme/',id]);
    //console.log(id);
  }
}
