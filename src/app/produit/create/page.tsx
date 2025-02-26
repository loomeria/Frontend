"use client";

import { Button, Label, TextInput, Textarea, FileInput } from "flowbite-react";

export default function AddProductForm() {
  return (
    <form className="flex max-w-lg flex-col gap-4 mx-auto p-6 bg-gray-50 rounded-md shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Ajouter un produit</h2>
      
      {/* Nom du produit */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="product-name" value="Nom du produit" />
        </div>
        <TextInput
          id="product-name"
          type="text"
          placeholder="Nom du produit"
          required
          shadow
        />
      </div>

      {/* Description */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="product-description" value="Description" />
        </div>
        <Textarea
          id="product-description"
          placeholder="Décrivez le produit..."
          required
          rows={4}
        />
      </div>

      {/* Prix */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="product-price" value="Prix (€)" />
        </div>
        <TextInput
          id="product-price"
          type="number"
          placeholder="Prix"
          required
          shadow
        />
      </div>

      {/* Quantité */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="product-quantity" value="Quantité" />
        </div>
        <TextInput
          id="product-quantity"
          type="number"
          placeholder="Quantité"
          required
          shadow
        />
      </div>

      {/* Catégorie */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="product-category" value="Catégorie" />
        </div>
        <TextInput
          id="product-category"
          type="text"
          placeholder="Catégorie"
          shadow
        />
      </div>

      {/* Image */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="product-image" value="Image du produit" />
        </div>
        <FileInput
          id="product-image"
          helperText="Téléchargez une image du produit (formats acceptés : JPG, PNG)."
        />
      </div>

      {/* Bouton de soumission */}
      <Button type="submit">Ajouter le produit</Button>
    </form>
  );
}
