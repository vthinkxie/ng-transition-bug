import {
  Component,
  ViewContainerRef,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector
} from "@angular/core";

@Component({
  selector: "attach-component",
  template: "attached"
})
export class AttachComponent {}

@Component({
  selector: "transition-component",
  template: "<ng-content></ng-content>",
  host: {
    "[class.transition]": "true"
  }
})
export class TransitionComponent {
  constructor() {}
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(
    private injector: Injector,
    private viewContainerRef: ViewContainerRef,
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      AttachComponent
    );
    const view = factory.create(this.injector);
    // transition will not be triggered if comment this line
    this.applicationRef.attachView(view.hostView);
  }
}
