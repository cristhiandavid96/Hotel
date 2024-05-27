import { Component, OnInit } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { emailValidator } from "src/app/theme/utils/app-validators";
import { AppService } from "../../app.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  public contactForm: UntypedFormGroup;
  public contactReserve: UntypedFormGroup;
  public lat: number = 40.678178;
  public lng: number = -73.944158;
  public zoom: number = 12;
  public stateTransaction;
  public users = [];
  public optionsGender = [];
  public optionsDocument = [];
  constructor(
    public formBuilder: UntypedFormBuilder,
    public snackBar: MatSnackBar,
    public fb: UntypedFormBuilder,
    public appService: AppService
  ) {}

  ngOnInit() {
    this.stateTransaction = JSON.parse(
      localStorage.getItem("stateTransaction")
    );
    this.optionsGender = this.appService.getGender();
    this.optionsDocument = this.appService.getOptionsDocument();

    for (let index = 0; index < this.stateTransaction.numAdults; index++) {
      this.users.push(
        (this.contactForm = this.fb.group({
          name: ["", Validators.required],
          gender: null,
          date: null,
          typeDocument: null,
          numDocument: ["", Validators.required],
          email: [
            "",
            Validators.compose([Validators.required, emailValidator]),
          ],
          phone: ["", Validators.required],
          nameEmergency: ["", Validators.required],
          phoneEmergency: ["", Validators.required],
        }))
      );
    }
  }

  public onClose(values: Object): void {
   
    this.snackBar.open("se ha reservado correctamente!", "-", {
      panelClass: "success",
      verticalPosition: "top",
      duration: 3000,
    });
  }
  public onContactFormSubmit(values: Object): void {
    /*if (this.contactForm.valid) {
      this.snackBar.open('se ha reservado correctamente!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
    }*/
  }
}
