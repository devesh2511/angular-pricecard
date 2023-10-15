import { Component } from '@angular/core';
import { CardsComponent } from './cards/cards.component';



interface Plans {
  plan: string;
  price: string;
  unMutedArray: string[];
  mutedArray: string[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularCards';

  subscriptions: Array<Plans> = [


    {
      plan: "Free",
      price: "$0",
      unMutedArray: ["Single User", "5GB Storage", "Unlimited Public Projects", "Community Access",],
      mutedArray: ["Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain", "Monthly Status Reports"]
    },


    {
      plan: "Plus",
      price: "$9",
      unMutedArray: ["5 Users", "50GB Storage", "Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain"],
      mutedArray: ["Monthly Status Reports"]
    },


    {
      plan: "Pro",
      price: "$49",
      unMutedArray: ["Unlimited Users", "150GB Storage", "Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Unlimited Free Subdomains", "Monthly Status Reports"],
      mutedArray: []
    }


  ]
};

