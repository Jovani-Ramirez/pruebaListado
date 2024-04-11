import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

import { ListUsersService } from '../../services/list-users.service';
import { GenericCardComponent } from '../generic-card/generic-card.component';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-generic-list',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatDialogModule, GenericCardComponent, MatPaginator],
  templateUrl: './generic-list.component.html',
  styleUrl: './generic-list.component.scss'
})
export class GenericListComponent implements OnInit {
  @Input() list: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public dataSource: any;

  constructor(private userService: ListUsersService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.list);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['Name', 'Phone', 'Email', 'Website'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getUserId(id: number, name: string, phone: string, email: string): void {
    this.userService.getUserById(id).subscribe(response => {
      const datos = {
        id,
        name,
        phone,
        email,
        response
      }
      this.dialog.open(GenericCardComponent, {
        data: datos,
        width: '300px',
        height: 'auto'
      });
    });
  }
}
