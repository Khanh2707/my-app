import { Component } from "@angular/core";
import { Album, albums } from "./album.model";

@Component({
    selector: 'album-list',
    template: `
        <!-- giá trị của event chính là giá trị mà component con emit cho component cha -->
        <!-- sự kiện selected chính là tên biến output binding của component con -->
        <album-detail *ngFor="let album of albums" [album]="album" (selected)="isSelected($event)"></album-detail>
        <br>
        <div>
            selected album: {{ selectedAlbum.userId }} - {{ selectedAlbum.id }} - {{ selectedAlbum.title }}
        </div>
    `
})

export class AlbumListComponent {
    albums = albums;
    selectedAlbum = albums[0];

    isSelected(selectedAlbum: Album) {
        this.selectedAlbum = selectedAlbum;
    }
}