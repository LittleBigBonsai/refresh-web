import { Component } from '@angular/core';
import { AuthenticationService } from '../../../api/authentication.service'
import { PageTitleComponent } from '../../../components/ui/text/page-title.component';

@Component({
    selector: 'app-logout',
    standalone: true,
    imports: [
        PageTitleComponent
    ],
    templateUrl: './logout.component.html'
})
export class LogoutComponent {
    constructor(private auth: AuthenticationService) {}
    ngOnInit() {
        this.auth.LogOut();
    }
}
