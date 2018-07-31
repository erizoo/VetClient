import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {ClientServices} from "../shared/layouts/services/client.services";
import {Client} from "../shared/layouts/interfaces";

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit {

  clients$: Observable<Client[]>

  constructor(private clientsService: ClientServices) {
  }

  ngOnInit() {
    this.clients$ = this.clientsService.fetch()   // Возвращает список всех категорий
  }

}
