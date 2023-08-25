import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { AlbumListComponent } from './album/album-list.component';
import { AlbumDetailComponent } from './album/album-detail.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabGroupComponent } from './tabGroup/tab-group.component';
import { TabPanelComponent } from './tabGroup/tab-panel.component';
import { TabBsGroupComponent } from './tabGroup/tab-bs-group.component';
import { CounterComponent } from './counter/counter.component';
import { TabContentDirective } from './tabGroup/tab-content.directive';
import { PipeFormatAddress } from './pipe-format/format-address.pipe';
import { PipeAdult } from './pipe-format/format-adult.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StyleBindingComponent,
    AlbumListComponent,
    AlbumDetailComponent,
    ToggleComponent,
    TabsComponent,
    TabGroupComponent,
    TabPanelComponent,
    TabBsGroupComponent,
    CounterComponent,
    TabContentDirective,
    PipeFormatAddress,
    PipeAdult,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
