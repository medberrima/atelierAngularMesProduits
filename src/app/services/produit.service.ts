import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits : Produit[] ;
  constructor() { 
    this.produits = [
      {idProduit : 1, nomProduit : "PC ASUS123" , prixProduit : 300.600 , dateCreation : new Date("01/14/2011") },
      {idProduit : 2, nomProduit : "imprimante epson" , prixProduit : 45 , dateCreation : new Date("12/17/2010") },
      {idProduit : 3, nomProduit : "tablette samsung" , prixProduit : 900.123 , dateCreation : new Date("02/20/2020") }, 
    ];
  }

  listeProduit():Produit[]{
    return this.produits ;
  }

  ajouterProduit(produit : Produit) {
    this.produits.push(produit) ;
  }
}
