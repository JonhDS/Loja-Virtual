import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos';
import { RouterModule } from '@angular/router';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { ProdutosService } from '../produto.service';


@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DetalhesProdutoComponent,
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent implements OnInit {
  produtos: IProduto[] | undefined ;

  constructor(
    private produtosService: ProdutosService
  ) { }

  ngOnInit(): void {
    this.produtos = this.produtosService.getAll();
  } 
}
