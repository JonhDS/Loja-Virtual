import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';

export const routes: Routes = [
    { path: 'produtos',component: ProdutosComponent, loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)},
    { path: "", redirectTo: "produtos", pathMatch: "full"}
];

@NgModule ({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
  ],
    exports: [
        RouterModule,
  ]
})
export class AppRoutingModule { }





