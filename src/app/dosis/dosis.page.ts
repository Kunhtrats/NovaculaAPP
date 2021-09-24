import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component
({
  selector: 'app-dosis',
  templateUrl: './dosis.page.html',
  styleUrls: ['./dosis.page.scss'],
})
export class DosisPage implements OnInit 
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
  public dataReceta: number;
  public dataDispo: number;
  public dataSolu: number;
  public total: number;

  async calcular()
  {
    this.total = Math.round((this.dataReceta*this.dataDispo)/this.dataSolu)
    switch(true)
    {
      case (this.total > 0 ):
      const alert1 = await this.alertController.create
      ({
        header: 'Resultado',
        message: "Cantidad de dosis: "+(this.total)+" ML",
        buttons: ['Aceptar']
      });
      await alert1.present();
      break;
  
      default:
      const alert2 = await this.alertController.create
        ({
        header: 'Error de aplicación',
        message: "Ingrese datos correctos.",
        buttons: ['Reintentar']
        });
      await alert2.present();
      break;
      
      }
    }
  }

