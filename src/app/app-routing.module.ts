import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NodeComponent } from "./node/node.component";
import { AngularComponent } from "./angular/angular.component";
import { NpmComponent } from "./npm/npm.component";
import { MongoComponent } from "./mongo/mongo.component";
import { ExpressComponent } from "./express/express.component";
import { AwsComponent } from "./aws/aws.component";
import { GitComponent } from "./git/git.component";
import { DefaultComponent } from "./default/default.component";
import { MainComponent } from "./main/main.component";
import { SpaComponent } from "./spa/spa.component";
import { Ng1Component } from "./ng1/ng1.component";
import { Ng2Component } from "./ng2/ng2.component";
import { Ng3Component } from "./ng3/ng3.component";
import { Ng4Component } from "./ng4/ng4.component";
import { Ng5Component } from "./ng5/ng5.component";
import { Ng6Component } from "./ng6/ng6.component";
import { Ng7Component } from "./ng7/ng7.component";
import { Ng8Component } from "./ng8/ng8.component";
import { Ng9Component } from "./ng9/ng9.component";
import { Ng10Component } from "./ng10/ng10.component";
import { Ng11Component } from "./ng11/ng11.component";
import { Ng12Component } from "./ng12/ng12.component";
import { Ng13Component } from "./ng13/ng13.component";
import { Ng14Component } from "./ng14/ng14.component";
import { Ng15Component } from "./ng15/ng15.component";
import { Ng16Component } from "./ng16/ng16.component";
import { Ng17Component } from "./ng17/ng17.component";
import { Ng18Component } from './ng18/ng18.component';
import { Ng19Component } from './ng19/ng19.component';
import { Ng20Component } from './ng20/ng20.component';


const routes: Routes = [
  {
    path: "main",
    component: MainComponent,
    children: [
      { path: "1", component: DefaultComponent },
      { path: "2", component: NodeComponent },
      { path: "3", component: SpaComponent },
      { path: "4", component: AngularComponent },
      { path: "5", component: NpmComponent },
      { path: "6", component: MongoComponent },
      { path: "7", component: ExpressComponent },
      { path: "8", component: GitComponent },
      { path: "9", component: AwsComponent },
      { path: "10", component: Ng1Component },
      { path: "11", component: Ng2Component },
      { path: "12", component: Ng3Component },
      { path: "13", component: Ng4Component },
      { path: "14", component: Ng5Component },
      { path: "15", component: Ng6Component },
      { path: "16", component: Ng7Component },
      { path: "17", component: Ng8Component },
      { path: "18", component: Ng9Component },
      { path: "19", component: Ng10Component },
      { path: "20", component: Ng11Component },
      { path: "21", component: Ng12Component },
      { path: "22", component: Ng13Component },
      { path: "23", component: Ng14Component },
      { path: "24", component: Ng15Component },
      { path: "25", component: Ng16Component },
      { path: "26", component: Ng17Component },
      { path: "27", component: Ng18Component },
      { path: "28", component: Ng19Component },
      { path: "29", component: Ng20Component },


      {
        path: "**",
        redirectTo: "1",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "main",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "main",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
