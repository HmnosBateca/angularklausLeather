import { Component, Inject, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Pedido } from '../pedido';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent implements OnInit {

  public pedido: Pedido;
  constructor(public ventanaModalDetalle: MatDialogRef<DetallePedidoComponent>,
              public pedidoService: PedidoService,
              @Inject(MAT_DIALOG_DATA) public idPedido: number) { }

  ngOnInit(): void {
    this.ObtenerPedidoPorID(this.idPedido);
  }

  // Obtener Pedido Por Id
  ObtenerPedidoPorID(idPedido): void {
    if (idPedido) {
      this.pedidoService.VerPedidoPorId(idPedido).subscribe( pedido => {
        this.pedido = pedido;
        console.log(pedido.horaPedido);
      });
    }
  }
  // Cerrar Ventana Modal De Detalle
  CerrarVentanDetalle(): void {
    this.ventanaModalDetalle.close();
  }

}