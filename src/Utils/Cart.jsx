export const getCart = () => {
  const cart = localStorage.getItem("cart");
  try {
    const parsed = JSON.parse(cart);
    if (!Array.isArray(parsed)) return [];

    return parsed.map(item => ({
      ...item,
      qty: Number(item.qty) || 1,
      priceAfter: Number(item.priceAfter) || 0,
    }));
  } catch (e) {
    return [];
  }
};

export const addToCart = (item) => {
  const cart = getCart();
  const isExist = cart.find((i) => i.id === item.id);
  if (!isExist) {
    cart.push({ ...item, qty: 1 });
  } else {
    isExist.qty += 1;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const removeFromCart = (id) => {
  const cart = getCart().filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const clearCart = () => {
  localStorage.removeItem("cart");
};

export const generateWhatsAppLink = (cart) => {
  const pesan = cart
    .map((item) => `- ${item.name} x${item.qty} (Rp ${item.priceAfter.toLocaleString("id-ID")})`)
    .join("%0A");
  const total = cart.reduce((sum, item) => sum + item.priceAfter * item.qty, 0);
  return `https://wa.me/6289639151016?text=Halo%2C%20saya%20ingin%20memesan%20game%20berikut%20%3A%0A${pesan}%0A%0ATotal%20%3A%20Rp%20${total.toLocaleString("id-ID")}`;
};