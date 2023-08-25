import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Album } from "./album.model";

@Component({
    selector: 'album-detail',
    template: `
        <div>
            {{ album.userId }} - {{ album.id }} - {{ album.title }}
            <button style="margin-left: 1rem;" (click)="selected.emit(album)">Select Album</button>
        </div>
    `
})

export class AlbumDetailComponent {
    @Input() album: Album | any;
    // Output Binding (Event Up): child component interact with parent component
    // Event emitter được thiết kế để báo cho component cha khi component con có sự thay đổi.
    // Thông qua biến @Output, EventEmitter sẽ bắn một value nào đó ra ngoài, và component cha sẽ bắt được value này.
    @Output() selected = new EventEmitter<Album>();
}