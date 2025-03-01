import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faEnvelope, faKey, faPerson } from '@fortawesome/free-solid-svg-icons';
import { PageTitleComponent } from '../../../components/ui/text/page-title.component';
import { FormComponent } from '../../../components/ui/form/form.component';
import { ButtonSubmitFormComponent } from '../../../components/ui/form/button-submit-form.component';
import { AuthenticationService } from '../../../api/authentication.service';
import { sha512Async } from '../../../helpers/crypto';
import {TextboxComponent} from "../../../components/ui/form/textbox.component";

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [
        PageTitleComponent,
        FormComponent,
        TextboxComponent,
        ButtonSubmitFormComponent
    ],
    templateUrl: './signup.component.html',
})
export class SignupComponent {
    form = new FormGroup({
        username: new FormControl(),
        emailAddress: new FormControl(),
        password: new FormControl(),
    });

    constructor(private auth: AuthenticationService) {}

    submit() {
        const username: string = this.form.controls.username.getRawValue();
        const emailAddress: string = this.form.controls.emailAddress.getRawValue();
        const password: string = this.form.controls.password.getRawValue();

        sha512Async(password).then(passwordSha512 => {
            this.auth.Register(username, emailAddress, passwordSha512);
        })
    }

    protected readonly faEnvelope = faEnvelope;
    protected readonly faKey = faKey;
    protected readonly faPerson = faPerson;
}
