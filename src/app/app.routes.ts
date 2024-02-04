import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { DetalhesProdutoComponent } from './produtos/detalhes-produto/detalhes-produto.component';

export const routes: Routes = [
    { path: 'produtos',component: ProdutosComponent},
    { path: "", redirectTo: "produtos", pathMatch: "full"},
    { path: 'produtos/:id', component: DetalhesProdutoComponent},
    { path: "**", component: NaoEncontradoComponent},
];

@NgModule ({
    declarations: [],
    imports: [
        [RouterModule.forRoot(routes)],
        RouterModule.forChild(routes),
  ],
    exports: [
        RouterModule,
  ]
})
export class AppRoutingModule { }