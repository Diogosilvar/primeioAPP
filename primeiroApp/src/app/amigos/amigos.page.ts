import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

  public contatos : Array<Object> = [];
  constructor(public navCtrl: NavController) { 
    this.contatos = [
      {
        "nome" : "Diogo",
        "img": "https://ionicframework.com/docs/demos/api/list/avatar-yoda.png",
        "idade": 21,
        "niv_amizade": ""
      },
      {
        "nome" : "Home simpson",
        "img": "https://ionicframework.com/docs/demos/api/list/avatar-han.png",
        "idade": 35,
        "niv_amizade": ""
      },
      {
        "nome" : "Luiz Ghost",
        "img": "https://ionicframework.com/docs/demos/api/list/avatar-ben.png",
        "idade": 41,
        "niv_amizade": ""
      },
    ]
  }

  ngOnInit() {
  }

}

