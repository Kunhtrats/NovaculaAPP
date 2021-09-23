import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component
({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage implements OnInit 
{

  constructor
  (
    private alertController: AlertController,
    private router          : Router,
  ) 
  { }

  ngOnInit() 
  {
  }
  public dataAltura: number;
  public dataPeso: number;
  public total: number;

  async calcularIMC()

  {
    this.total = Math.round((this.dataPeso/(this.dataAltura/100*this.dataAltura/100)))
    switch(true)
    {
      case (this.total < 18.4):
      const alert1 = await this.alertController.create
      ({
        header: 'Resultado',
        message: "IMC: "+(this.total)+"<br>"+"<br>"+"ESTADO: Peso bajo.",
        buttons: ['Aceptar']
      });
      await alert1.present();
      break;
  
      case (this.total >= 18.5 && this.total <= 24.9):
      const alert2 = await this.alertController.create
      ({
        header: 'Resultado',
        message: "IMC: "+(this.total)+"<br>"+"<br>"+"ESTADO: Peso normal.",
        buttons: ['Aceptar']
      });
      await alert2.present();
      break;

      case (this.total >= 25 && this.total <= 29.9):
      const alert3 = await this.alertController.create
      ({
        header: 'Resultado',
        message: "IMC: "+(this.total)+"<br>"+"<br>"+"ESTADO: Sobrepeso.",
        buttons: ['Aceptar']
      });
      await alert3.present();
      break;

      case (this.total >= 30 && this.total <= 34.9):
        const alert4 = await this.alertController.create
        ({
          header: 'Resultado',
          message: "IMC: "+(this.total)+"<br>"+"<br>"+"ESTADO: Obesidad grado 1.",
          buttons: ['Aceptar']
        });
        await alert4.present();
        break;

      case (this.total >= 35 && this.total <= 39.9):
        const alert5 = await this.alertController.create
        ({
          header: 'Resultado',
          message: "IMC: "+(this.total)+"<br>"+"<br>"+"ESTADO: Obesidad grado 2.",
          buttons: ['Aceptar']
        });
        await alert5.present();
        break;
      
      case (this.total >= 40):
        const alert6 = await this.alertController.create
        ({
          header: 'Resultado',
          message: "IMC: "+(this.total)+"<br>"+"<br>"+"ESTADO: Obesidad mórbida.",
          buttons: ['Aceptar']
        });
        await alert6.present();
        break;
  
      
      }
    }
  }
