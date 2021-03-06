import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;

  private pages = [
    'Events',
    'Events B',
    'Events C',
    'Share Your Snaps A',
    'Weekly Publication',
    'Add Event'
  ];

  private data = [
    {path: 'events-list', icon: "flask", title: "Events"},
    {path: "snaps-a", icon: "wifi", title: "Share Your Snaps"},
    {path: "event-a", icon: "paper-plane", title: "Testing Drop"}
  ];

  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 0; i < this.pages.length; i++) {
      this.items.push({
        title: this.pages[i],
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }



  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
