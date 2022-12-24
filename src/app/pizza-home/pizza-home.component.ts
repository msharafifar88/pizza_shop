import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-pizza-home',
  templateUrl: './pizza-home.component.html',
  styleUrls: ['./pizza-home.component.css']
})
export class PizzaHomeComponent implements OnInit {
  toopings: any[] = [];
  offer1: string = ''
  offer2: string = '';
  offer3: string = '';

  totalpriceSmall: number = 0;
  totalpriceMedium: number = 0;
  totalpriceLarg: number = 0;
  totalpriceXlarg: number = 0;

  ngOnInit() {
    //{ name: 'Tomatoes($1.00)', cost: 1, small: false, medium: false, larg: false, xlarg: false },
    this.toopings = [
      { name: 'Tomatoes($1.00)', cost: 1, isVeggy: true ,offerName:''},
      { name: 'Onions($0.50)', cost: 0.5, isVeggy: true },
      { name: 'Bell pepper($1.00)', cost: 1, isVeggy: true },
      { name: 'Mushrooms($1.20)', cost: 1.20, isVeggy: true },
      { name: 'Pineapple($0.75)', cost: 0.75, isVeggy: true },
      { name: 'Sausage($1.00)', cost: 1, isVeggy: false },
      { name: 'Pepperoni($2.00)', cost: 2, isVeggy: false },
      { name: 'Barbecue chicken($3.00)', cost: 3, isVeggy: false },
    ];
    this.toopings.forEach(element => {
      element.small = false;
      element.medium = false;
      element.larg = false;
      element.xlarg = false;
    });


  }

  calcCountTopping(toppingname: string) {
    let flag = false;
    this.toopings.filter((elm: any) => !elm.isVeggy).forEach(element => {
      if(element.name === toppingname)
       flag = true;
    });
    if(flag)
      return 2;
    else
    return 1;
  }

  calculateTotalSmall() {
    this.totalpriceSmall = 0;
    this.offer1,this.offer2,this.offer3 = '';
    this.toopings.filter((elm: any) => elm.small).forEach((elm: any) => {
      this.totalpriceSmall += elm.cost;
    });
    if (this.totalpriceSmall)
      this.totalpriceSmall += 5;
  }

  calculateTotalMedium() {

    this.totalpriceMedium = 0;
    this.offer1='';
    this.offer2='';
    this.offer3 = '';
    let count = 0;
    this.toopings.forEach((elm: any) => {
      if (elm.medium) {
        this.totalpriceMedium += elm.cost;
        count ++;
      }
    });
    if (this.totalpriceMedium)
      this.totalpriceMedium += 7;
    if (count == 2){
      this.offer1 = 'offer1';
      this.totalpriceMedium = 5;
      }
    if (count == 4){
      this.offer2 = 'offer2';
      this.totalpriceMedium = 9;}
  }
  calculateTotalLarg() {
    this.offer1,this.offer2,this.offer3 = '';
    this.totalpriceLarg = 0;
    let count = 0;
    this.toopings.forEach((elm: any) => {
      if (elm.larg) {
        this.totalpriceLarg += elm.cost;
        count += this.calcCountTopping(elm.name)
        console.log(count);
      }
    });
    if (this.totalpriceLarg){
      this.totalpriceLarg += 8;
      if (count == 4){
      this.offer3  = 'offer3';
      this.totalpriceLarg = this.totalpriceLarg/2;
      }
    }
  }
  calculateTotalXlarg() {
    this.offer1,this.offer2,this.offer3 = '';
    this.totalpriceXlarg = 0;

    this.toopings.forEach((elm: any) => {
      if (elm.xlarg)
        this.totalpriceXlarg += elm.cost;
    });
    if (this.totalpriceXlarg)
      this.totalpriceXlarg += 9;
  }


}
