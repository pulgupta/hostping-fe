import { Component, OnInit } from '@angular/core';
import { HostpingService } from 'src/app/service/hostping.service';
import { PongMessage } from 'src/app/model/pong-message';

@Component({
  selector: 'app-hostping',
  templateUrl: './hostping.component.html',
  styleUrls: ['./hostping.component.css']
})
export class HostpingComponent implements OnInit {

  pongMessage: PongMessage = null;
  constructor(private _hostpingService: HostpingService) { }

  ngOnInit() {
    this.getHostPing();
  }

  getHostPing() {
    this._hostpingService.getPongMessage()
      .subscribe((data: PongMessage) => this.pongMessage = data);
  }
}
