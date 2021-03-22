import {  AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { DeviceTable } from 'src/app/models/device-table.model';
import { Device } from 'src/app/models/device.model';
import { DeviceService } from 'src/app/services/device.service';
import { FilterService } from 'src/app/services/filter.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { GoToasterService } from '@tangoe/goponents';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  deviceTable: DeviceTable;
  devices: Device[] = [];
  query: string = '';
  displayedColumns: string[];
  uniqueCategory: string[] = [];
  dataSource = new MatTableDataSource(null);
  

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
      private deviceService: DeviceService,
      public filterService: FilterService,
      private toasterService: GoToasterService
  ) {}

  ngOnInit(): void {
    this.setupTable();
  }

  private setupTable(): void {
    this.deviceService.getAll().subscribe((data: DeviceTable) => {
      this.deviceTable = data;
      this.devices = this.deviceTable.rows;
      this.displayedColumns = this.deviceTable.headers;
      this.resetDatasource(this.devices);
      this.getUniqueCategory();
    });
  }

  public filterByQuery(query) {
    this.devices = this.filterService.searchByFilter(this.deviceTable.rows, query);
    if (this.devices.length > 0) {
      this.toasterService.toastSuccess({ message: `${this.devices.length} result(s) found` }, 1000);
    }
    this.resetDatasource(this.devices);
  }
  
  public resetDatasource(devices: Device[]) {
    this.dataSource = new MatTableDataSource(devices);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public getUniqueCategory() {
    this.uniqueCategory = [];
    this.devices.forEach((device) => {
      if (!this.uniqueCategory.includes(device.category)) {
        this.uniqueCategory.push(device.category);
      }
    })
  }
}
