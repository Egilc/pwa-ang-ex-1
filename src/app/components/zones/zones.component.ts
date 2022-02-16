import { Component, OnInit } from '@angular/core';
import { ApiAlarmClientService } from 'src/app/services/api-alarm-client.service'
import { Zone } from 'src/app/models/AlarmStatus';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {

  constructor(private apiAlarmClient:ApiAlarmClientService) { }
  zones: Zone[] = [];
  ngOnInit(): void {
  }

  
}
