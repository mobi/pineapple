import { Component, OnInit } from '@angular/core';
import { DeviceTable } from 'src/app/models/device-table.model';
import { Device } from 'src/app/models/device.model';
import { DeviceFilter } from 'src/app/models/device-filter.enum';
import { DeviceService } from 'src/app/services/device.service';
import { FilterService } from 'src/app/services/filter.service';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  deviceTable: DeviceTable;
  devices: Device[] = [];
  query: string = '';
  displayedColumns: string[];

  constructor(private deviceService: DeviceService,
      private filterService: FilterService
  ) { 
  }

  ngOnInit(): void {
    // this.setupTable().subscribe();
    this.setupTable();
  }

  private setupTable(): void {
    this.deviceService.getAll().subscribe((data: DeviceTable) => {
      this.deviceTable = data;
      this.devices = this.deviceTable.rows;
      this.displayedColumns = this.deviceTable.headers;
    });
  }
  
  // private setupTable() {
  //   return this.deviceService
  //     .getAll().pipe(
  //         map((data) => {
  //           this.deviceTable =data;
  //           this.devices = this.deviceTable.rows;
  //         } 
  //     ))
  // }

  public filterByQuery(model) {
    this.devices = this.filterService.searchByFilter(this.deviceTable.rows, model);
  }
}
