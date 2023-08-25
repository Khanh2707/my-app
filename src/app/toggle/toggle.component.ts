import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'toggle',
    template: `
        <ng-content select=".header"></ng-content>
        <ng-content select="p, span"></ng-content>
        <div class="toggle-wrapper" [class.checked]="checked" tabindex="0" (click)="toggle()">
            <div class="toggle"></div>
        </div>
    `,
    styles: [
        `
            .toggle-wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                trasition: all 0.2s;
                width: 100px;
                height: 100px;
                border-radius: 50%;
                background-color: #fe4551;
                box-shadow: 0 20px 20px 0 rgba(#fe4551, 0.3);
                outline: none;
            }

            .toggle-wrapper:active {
                /* width: 95px;
                height: 95px; */
                box-shadow: 0 15px 15px 0 rgba(#fe4551, 0.5);
            }

            .toggle-wrapper .toggle {
                width: 17px;
                height: 17px;
            }

            .toggle {
                transition: all 0.2s ease-in-out;
                width: 20px;
                height: 20px;
                background-color: transparent;
                border: 10px solid #fff;
                border-radius: 50%;
                cursor: pointer;
                animation: red 0.7s linear forwards;
            }

            .toggle-wrapper.checked {
                background-color: #48e98a;
                box-shadow: 0 20px 20px 0 rgba(#48e98a, 0.3);
            }

            .toggle-wrapper.checked:active {
                box-shadow: 0 15px 15px 0 rgba(#48e98a, 0.5);
            }

            .toggle-wrapper.checked .toggle {
                width: 0;
                background-color: #fff;
                border-color: transparent;
                border-radius: 30px;
                animation: green 0.7s linear forwards !important;
            }
        `
    ]
})

export class ToggleComponent {
    @Input() checked: boolean | any;
    @Output() checkedChange = new EventEmitter<boolean>();

    toggle() {
        this.checkedChange.emit(!this.checked);
    }
}