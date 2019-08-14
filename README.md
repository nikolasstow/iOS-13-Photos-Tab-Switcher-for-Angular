# iOS 13 Photos Tab/Switcher for Angular

iOS 13 Photos Tab/Switcher for Angular and Ionic, or simply ios-switcher, is a component for building a tab/switcher similar to the one found in the iOS 13 Photos app.
*Please forgive me, I am fairly new to Angular. Any input would be greatly appreciated: nikolasstow@gmail.com*

## How to Install

Unfortunately there is no way to install from the command line, though that will be fixed in future versions.
To install this component clone or download the repo and place the folder within your app.
By default the component will switch to Dark Mode when that has been enabled on the device, to disabled this delete any `@media (prefers-color-scheme: dark)` css queries in **ios-switcher.component.css** and **tab/tab.component.css**.

## Getting Started

### app.module.ts
Import the iOSSwitcherModule into your app.module.ts
```javascript
import { iOSSwitcherModule } from "../your_directory/ios-switcher/ios-switcher.module";

@NgModule({
  imports: [
    iOSSwitcherModule
  ]
})
```

### app.component.ts
Import the iOSSwitcherPage model into your component, then create an array of type iOSSwitcherPage and bind it to the `<ios-switcher/>` element in your HTML.
```javascript
import { iOSSwitcherPage } from "../components/ios-switcher/ios-switcher.model";

@Component({
  selector: 'your_component',
  template: `<ios-switcher [pages]="switcherPages"></ios-switcher>`,
  styleUrls: ['./your_component.component.css'],
})
export class YourComponent implements OnInit {

  switcherPages: Array<iOSSwitcherPage> = [
    {
      name: 'Years',
      handler: () => {
        // Code here will run when 'Years' is clicked/tapped
      }
    },
    {
      name: 'Months',
      handler: () => {
        // Code here will run when 'Months' is clicked/tapped
      }
    },
    {
      name: 'Days',
      handler: () => {
        // Code here will run when 'Days' is clicked/tapped
      }
    },
    {
      name: 'All Photos',
      selected: true,
      handler: () => {
        // Code here will run when 'All Photos' is clicked/tapped
      }
    }
  ];

  // ...

}
```