import { Component, OnInit } from '@angular/core';
import { DeviceTable } from 'src/app/models/device-table.model';
import { Device } from 'src/app/models/device.model';
import { DeviceFilter } from 'src/app/models/device-filter.enum';
import { DeviceService } from 'src/app/services/device.service';
import { FilterService } from 'src/app/services/filter.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  deviceTable: DeviceTable;
  devices: Device[] = [];
  query: string = '';

  constructor(private deviceService: DeviceService,
      private filterService: FilterService
    ) { }

  ngOnInit(): void {
    this.setupTable();
  }

  private setupTable(): void {
    this.deviceService.getAll().subscribe((data: DeviceTable) => {
      console.log(data);
      this.deviceTable = data;
      this.devices = this.deviceTable && this.deviceTable.rows;
    });
  }

  // public filterByPerson(person: string) {
  //   this.deviceTable.rows = this.filterService.searchByFilter(this.devices, person);
  // }
  // public filterByGroup(query: string) {
  //   this.devices.forEach((device) => {
  //     console.log(JSON.stringify(device));
  //   })
  //   this.deviceTable.rows = this.filterService.searchByFilter(this.devices, query);
  // }
  public filterByQuery(model) {
    this.deviceTable.rows = this.filterService.searchByFilter(this.devices, model);
  }
  // public filterByCategory(model) {
  //   this.deviceTable.rows = this.filterService.searchByFilter(this.devices, model);
  // } 
}
