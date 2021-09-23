import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component
({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit 
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

  public dataSis: number;
  public dataDia: number;
  public total: number;

  async calcular()
  {
    this.total = Math.round((1*this.dataSis+(2*this.dataDia))/3)
      if (this.total >= 110 && this.total < 140)
      {
        const alert = await this.alertController.create
      ({
        header: 'Resultado',
        message: "PAM: "+(this.total)+"<br>"+"<br>"+"ESTADO: Crisis hipertensiva.",
        buttons: ['Aceptar']
      });
      await alert.present();
      }
      else if (this.total >= 140 && this.total <= 300)
      {
        const alert = await this.alertController.create
        ({
        header: 'Resultado',
        message: "PAM: "+(this.total)+"<br>"+"<br>"+"ESTADO: Emergencia hipertensiva.",
        buttons: ['Aceptar']
        });
        await alert.present();
      }
      else if (this.total < 110 && this.total > 40)
      {
        const alert = await this.alertController.create
        ({
        header: 'Resultado',
        message: "PAM: "+(this.total)+"<br>"+"<br>"+"ESTADO: Presión arterial normal.",
        buttons: ['Aceptar']
        });
        await alert.present();
      }
      else if (this.total < 40 && this.total >= 0 && this.total > 300)
      {
        const alert = await this.alertController.create
        ({
        header: 'Error de aplicación',
        message: "Ingrese datos coherentes.",
        buttons: ['Reintentar']
        });
        await alert.present();
      }
      else
      {
        const alert = await this.alertController.create
        ({
        header: 'Error de aplicación',
        message: "Ingrese datos correctos.",
        buttons: ['Reintentar']
        });
        await alert.present();
      }
   }
}
