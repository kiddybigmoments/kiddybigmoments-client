import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  //Todo: Resolve links
  private menuItemsArray: any[] = [
    { title: 'Photos', link: '/photo-view' },
    { title: 'Videos', link: '#' },
    {
      title: 'Album',
      link: '#',
      subItems: [
        { title: 'First Child', link: '#' },
        { title: 'Second Child', link: '#' }
      ]
    },
    {
      title: 'Configure',
      link: '#',
      subItems: [
        { title: 'Profile', link: '#' },
        { title: 'Kids Profile', link: '#' }
      ]
    }
  ]

  public onMenuClose() {
    console.log('menu closed')
  }
  public onMenuOpen() {
    console.log('menu Opened')
  }
  private onItemSelect(item: any) {
    console.log(item)
  }
}
