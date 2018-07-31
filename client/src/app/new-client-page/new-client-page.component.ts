import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Client} from "../shared/layouts/interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ClientServices} from "../shared/layouts/services/client.services";
import {MaterialService} from "../shared/classes/material.service";
import {of} from "rxjs/index";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-new-client-page',
  templateUrl: './new-client-page.component.html',
  styleUrls: ['./new-client-page.component.css']
})
export class NewClientPageComponent implements OnInit {

  @ViewChild('input') inputRef: ElementRef
  form: FormGroup
  isNew = true
  client: Client

  constructor(private route: ActivatedRoute,
              private clientsService: ClientServices,
              private router: Router) {
  }

  ngOnInit() {

    this.form = new FormGroup({
      lastName: new FormControl(null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      middleName: new FormControl(null),
      passport: new FormControl(null),
      numberMobile: new FormControl(null, Validators.required),
      homePhoneNumber: new FormControl(null),
      workPhoneNumber: new FormControl(null),
      email: new FormControl(null),
      city: new FormControl(null, Validators.required),
      address: new FormControl(null),
      numberHouseOrFlat: new FormControl(null)
    })

    this.form.disable()

    this.route.params
      .pipe(
        switchMap(
          (params: Params) => {
            if (params['id']) {
              this.isNew = false
              return this.clientsService.getById(params['id'])
            }

            return of(null)
          }
        )
      )
      .subscribe(
        (client: Client) => {
          console.log(client)
          if (client) {
            this.client = client
            this.form.patchValue({
              firstName: client.firstName,
              lastName: client.lastName,
              middleName: client.middleName,
              passport: client.passport,
              numberMobile: client.numberMobile,
              homePhoneNumber: client.homePhoneNumber,
              workPhoneNumber: client.workPhoneNumber,
              email: client.email,
              city: client.city,
              address: client.address,
              numberHouseOrFlat: client.numberHouseOrFlat
            })
            MaterialService.updateTextInputs()
          }


          this.form.enable()
        },
        error => MaterialService.toast(error.error.message)
      )
  }

  onSubmit() {
    const newClient: Client = {
      lastName: this.form.value.lastName,
      firstName: this.form.value.firstName,
      middleName: this.form.value.middleName,
      passport: this.form.value.passport,
      numberMobile: this.form.value.numberMobile,
      homePhoneNumber: this.form.value.homePhoneNumber,
      workPhoneNumber: this.form.value.workPhoneNumber,
      email: this.form.value.email,
      city: this.form.value.city,
      numberHouseOrFlat: this.form.value.numberHouseOrFlat,
      address: this.form.value.address
    }

    this.form.disable()
    if (this.isNew) {
      this.clientsService.create(newClient).subscribe(
        () => {
          MaterialService.toast('Клиент создан')
          this.router.navigate(['/client'])
          this.form.enable()
        },
        error => MaterialService.toast(error.error.message),
      )
    } else {
      this.clientsService.update(this.client._id, newClient).subscribe(
        () => {
          MaterialService.toast('Изменения сохранены')
          this.router.navigate(['/client'])
          this.form.enable()
        },
        error => MaterialService.toast(error.error.message),
      )

    }
  }

}
