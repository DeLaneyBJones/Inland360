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
    path: 'events-list', 
    loadChildren: './events-list/events-list.module#EventsListPageModule' 
  },
  { 
    path: 'events-home', 
    loadChildren: './events-home/events-home.module#EventsHomePageModule' 
  },
  {
     path: 'snaps-list', loadChildren: './snaps-list/snaps-list.module#SnapsListPageModule' 
  },
  { 
    path: 'snaps-upload', loadChildren: './snaps-upload/snaps-upload.module#SnapsUploadPageModule' 
  },
  { 
    path: 'snaps-recent', loadChildren: './snaps-recent/snaps-recent.module#SnapsRecentPageModule' 
  },
  { 
    path: 'snaps-category-list', loadChildren: './snaps-category-list/snaps-category-list.module#SnapsCategoryListPageModule' 
  },
  { path: 'import-calendar', loadChildren: './import-calendar/import-calendar.module#ImportCalendarPageModule' },
  { path: 'event-info', loadChildren: './event-info/event-info.module#EventInfoPageModule' },
  { path: 'event-location', loadChildren: './event-location/event-location.module#EventLocationPageModule' },
  { path: 'events-list', loadChildren: './events-list/events-list.module#EventsListPageModule' },
  { path: 'import-calendar', loadChildren: './import-calendar/import-calendar.module#ImportCalendarPageModule' },
  { path: 'add-event', loadChildren: './add-event/add-event.module#AddEventPageModule' },
  { path: 'event-info', loadChildren: './event-info/event-info.module#EventInfoPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
