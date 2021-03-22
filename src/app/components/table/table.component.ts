import {  AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { DeviceTable } from 'src/app/models/device-table.model';
import { Device } from 'src/app/models/device.model';
import { DeviceService } from 'src/app/services/device.service';
import { FilterService } from 'src/app/services/filter.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

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
  dataSource = new MatTableDataSource(null);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private deviceService: DeviceService,
      private filterService: FilterService
  ) { 
  }

  ngOnInit(): void {
    this.setupTable();
  }

  private setupTable(): void {
    this.deviceService.getAll().subscribe((data: DeviceTable) => {
      this.deviceTable = data;
      this.devices = this.deviceTable.rows;
      this.displayedColumns = this.deviceTable.headers;
      this.resetDatasource(this.devices);
    });
  }

  public filterByQuery(model) {
    this.devices = this.filterService.searchByFilter(this.deviceTable.rows, model);
    this.resetDatasource(this.devices);
  }
  
  public resetDatasource(devices: Device[]) {
    this.dataSource = new MatTableDataSource(devices);
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
