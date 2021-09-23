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
    if (this.dataSis === null && this.dataDia == null) 
    {
      const alert = await this.alertController.create
      ({
        header: 'Error del sistema',
        message: 'Por favor ingrese los datos correspondientes.',
        buttons: ['Reintentar']
      });
      await alert.present();
    
    }
    
    else if (this.dataSis < this.dataDia) 
    {
      const alert = await this.alertController.create
      ({
        header: 'Error del sistema',
        message: 'Por favor ingrese los datos correctamente.',
        buttons: ['Reintentar']
      });
      await alert.present();
    }

    else 
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
      else if (this.total >= 140)
      {
        const alert = await this.alertController.create
        ({
        header: 'Resultado',
        message: "PAM: "+(this.total)+"<br>"+"<br>"+"ESTADO: Emergencia hipertensiva.",
        buttons: ['Aceptar']
        });
        await alert.present();
      }
    }
  }
}
