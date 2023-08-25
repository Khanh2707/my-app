import { Component, Input, TemplateRef } from "@angular/core";

@Component({
    selector: 'tabs',
    template: `
        <ul class="nav">
            <li class="nav-item" *ngFor="let link of navs">
                <a class="nav-link active" href="#">
                    <ng-container *ngIf="linkTemplate;else noTemplate">
                        <!-- C1 --> 
                        <!-- [ngTemplateOutlet]="linkTemplate" [ngTemplateOutletContext]="{link: link}" -->
                        <!-- C2 -->
                        <!-- *ngTemplateOutlet="linkTemplate; context:{link: link}" -->
                        <ng-container *ngTemplateOutlet="linkTemplate; context: {label: link, className: 'linkCss'}"></ng-container>
                    </ng-container>
                    <ng-template #noTemplate>
                        {{ link }}
                    </ng-template>
                </a>
            </li>
        </ul>
    `
})
export class TabsComponent {
    @Input() navs: string[] | any;
    @Input() linkTemplate: TemplateRef<any> | any;
}