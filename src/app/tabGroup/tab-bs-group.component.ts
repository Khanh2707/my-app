import { Component } from "@angular/core";
import { TabGroupComponent } from "./tab-group.component";

@Component({
    selector: 'tab-bs-group',
    template: `
        <ul class="nav">
            <li class="nav-item" *ngFor="let tab of tabPanelList; index as index">
                <a class="nav-link" [class.active]="index === activeIndex" (click)="activeIndexChange.emit(index)">
                    {{ tab.title }} 
                    <button class="btn btn-sm btn-danger" (click)="removeTab(tab)">x</button> 
                </a>
            </li>
        </ul>

        <div class="tab-body" *ngIf="tabPanelList.length; else noTab">
            <ng-container *ngTemplateOutlet="tabPanelList[activeIndex].contentChildTabPanel || tabPanelList[activeIndex].panelBody"></ng-container>
        </div>

        <ng-template #noTab>
            No Tab
        </ng-template>
    `,
    providers: [
        {
            provide: TabGroupComponent,
            useExisting: TabBsGroupComponent,
        }
    ]
})

export class TabBsGroupComponent extends TabGroupComponent {}