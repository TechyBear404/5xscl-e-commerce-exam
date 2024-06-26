export const CartItemTemplate = (item) => {
  // Retourne un template HTML pour un item du panier
  return `
    <tr>
      <td>${item.name}</td>
      <td>${item.price}€</td>
      <td class="d-flex flex-nowrap">
        <button class="btn btn-sm btn-primary decrease-quantity" data-item-id="${
          item.id
        }">-</button>
        <div class="px-2 bg-white">${item.quantity}</div> 
        <button class="btn btn-sm btn-primary increase-quantity" data-item-id="${
          item.id
        }">+</button>
      </td>
      <td>${(item.price * item.quantity).toFixed(2)}€</td>
      <td>
        <button class="btn btn-sm btn-danger delete-item" data-item-id="${
          item.id
        }">
          X
        </button>
      </td>
    </tr>
    `;
};
