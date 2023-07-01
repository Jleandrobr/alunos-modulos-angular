import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemProdutosComponent } from './listagem-produtos/listagem-produtos.component';
import { MantemProdutoComponent } from './mantem-produto/mantem-produto.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatInput} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {FlexModule} from '@angular/flex-layout';
import {RouterLink} from '@angular/router';
import {ListagemUsuariosComponent} from "../usuario/listagem-usuarios/listagem-usuarios.component";
import {MantemUsuarioComponent} from "../usuario/mantem-usuario/mantem-usuario.component";




@NgModule({
  declarations: [
    ListagemProdutosComponent,
    MantemProdutoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    FlexModule,
    RouterLink
  ],
  exports: [
    ListagemProdutosComponent,
    MantemProdutoComponent
  ]
})
export class ProdutoModule { }
