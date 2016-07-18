import {Component} from "angular2/core"
import {HTTP_PROVIDERS} from "angular2/http"
import "rxjs/Rx"
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from "angular2/router"
import {WelcomeComponent} from "./home/welcome.component"

@Component({
    selector: "rt-app",
    templateUrl: "app/app.component.html",
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: "/home", name: "Home", component: WelcomeComponent, useAsDefault: true}
])
export class AppComponent {
    public pageTitle: string = "Release Tracker"
}