import { Component, ContentChild, Input, TemplateRef, ViewChild } from "@angular/core";
import { TabGroupComponent } from "./tab-group.component";
import { TabContentDirective } from "./tab-content.directive";

@Component({
    selector: 'tab-panel',
    template: `
        <ng-template>
            <ng-content></ng-content>
        </ng-template>
    `
})
export class TabPanelComponent {
    @Input() title: string | any;
    @ViewChild(TemplateRef, {static: true}) panelBody: TemplateRef<any> | any;
    @ContentChild(TabContentDirective, {static: true, read: TemplateRef}) contentChildTabPanel: TemplateRef<any> | any;

    constructor(private tabGroup: TabGroupComponent) {}

    ngOnInit() {
        console.log(this.contentChildTabPanel);
        this.tabGroup.addTab(this);
    }

    ngOnDestroy() {
        this.tabGroup.removeTab(this);
    }
}