import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
    //oadChildren: './event-a/event-a.module#EventAPageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { 
    path: 'events-home', 
    loadChildren: './events-home/events-home.module#EventsHomePageModule' 
  },
  { 
    path: 'snaps-a', 
    loadChildren: './snaps-a/snaps-a.module#SnapsAPageModule' 
  },
  { 
    path: 'events-list', 
    loadChildren: './events-list/events-list.module#EventsListPageModule' 
  },
  { path: 'snaps-list', loadChildren: './snaps-list/snaps-list.module#SnapsListPageModule' },
  { path: 'import-calendar', loadChildren: './import-calendar/import-calendar.module#ImportCalendarPageModule' },
  { path: 'add-event', loadChildren: './add-event/add-event.module#AddEventPageModule' },
  { path: 'upload-aphoto', loadChildren: './upload-aphoto/upload-aphoto.module#UploadAPhotoPageModule' },
  { path: 'event-categories', loadChildren: './event-categories/event-categories.module#EventCategoriesPageModule' },
  { path: 'event-info', loadChildren: './event-info/event-info.module#EventInfoPageModule' },
  { path: 'event-location', loadChildren: './event-location/event-location.module#EventLocationPageModule' },
  { path: 'events-list', loadChildren: './events-list/events-list.module#EventsListPageModule' },
  { path: 'import-calendar', loadChildren: './import-calendar/import-calendar.module#ImportCalendarPageModule' },
  { path: 'add-event', loadChildren: './add-event/add-event.module#AddEventPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
