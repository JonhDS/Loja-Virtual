import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IProduto, lprodutos } from '../produtos';
import { RouterModule } from '@angular/router';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';


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
export class ProdutosComponent {
  produtos: IProduto[] = lprodutos;
}
