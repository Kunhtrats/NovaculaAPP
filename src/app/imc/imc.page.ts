import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AlertController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';

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
    public toastController: ToastController
  ) 
  { }

  ngOnInit() 
  {
  }
  public dataAltura: number;
  public dataPeso: number;
  public total: number;
  public estado: string;

  async calcularIMC()

  {
    this.total = ((this.dataPeso/(this.dataAltura/100*this.dataAltura/100)))
    const toast = await this.toastController.create
    ({
      message: 'El resultado se encuentra en el recuadro cyan.',
      duration: 2000
    });
    toast.present();
    switch(true)
    {
      case (this.total < 18.4):
        this.estado = "Peso bajo"
      break;
  
      case (this.total >= 18.5 && this.total <= 24.9):
        this.estado = "Peso normal"
      break;

      case (this.total >= 25 && this.total <= 29.9):
        this.estado = "Sobrepeso"
      break;

      case (this.total >= 30 && this.total <= 34.9):
        this.estado = "Obesidad grado 1"
      break;

      case (this.total >= 35 && this.total <= 39.9):
        this.estado = "Obesidad grado 2"
      break;
      
      case (this.total >= 40):
        this.estado = "Obesidad grado 3"
      break;
  
      
      }
    }
  }
