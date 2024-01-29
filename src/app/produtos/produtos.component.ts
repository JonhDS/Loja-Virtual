import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IProduto, lprodutos } from '../produtos';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {
  produtos: IProduto[] = lprodutos;
}
