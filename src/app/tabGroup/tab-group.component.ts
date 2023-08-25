import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from "@angular/core";
import { TabPanelComponent } from "./tab-panel.component";

@Component({
    selector: 'tab-group',
    template: `
        <div class="tab-header">
            <div class="tab-header-items" *ngFor="let tab of tabPanelList; index as index" (click)="activeIndexChange.emit(index)" 
            [class.active]="index === activeIndex">
                {{ tab.title }}&#160;
                <button (click)="removeTab(tab)">x</button>
            </div>
        </div>

        <div class="tab-body" *ngIf="tabPanelList.length; else noTab">
            <ng-container *ngTemplateOutlet="tabPanelList[activeIndex].panelBody"></ng-container>
        </div>

        <ng-template #noTab>
            No Tab
        </ng-template>
    `,
    styles: [
        `
            .tab-header-items.active {
                color: red;
            }
        `
    ]
})
export class TabGroupComponent {
    tabPanelList: TabPanelComponent[] = [];
    @Input() activeIndex = 0;
    @Output() activeIndexChange = new EventEmitter<number>();

    @ContentChildren(TabPanelComponent) tabPanelListContentChildren: QueryList<TabPanelComponent> | any;

    ngAfterContentInit() {
        console.log(this.tabPanelListContentChildren);
        this.tabPanelListContentChildren.changes.subscribe(console.log);
    }

    addTab(tab: TabPanelComponent) {
        // this.tabPanelList = [...this.tabPanelList, tab];
        this.tabPanelList.push(tab);
    }

    removeTab(tab: TabPanelComponent) {
        let found = -1;
        this.tabPanelList = this.tabPanelList.filter((tabPanel, index) => {
            if (tabPanel === tab) {
                found = index;
                return false;
            }
            return true;
        })

        if (found === this.activeIndex) {
            this.activeIndexChange.emit(found === this.tabPanelList.length ? found - 1 : found);
        }
    }
}