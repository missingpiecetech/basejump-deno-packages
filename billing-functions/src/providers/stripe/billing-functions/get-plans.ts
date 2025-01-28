export default async function getPlans(stripeClient, productName = "") {
  let { data: products } = await stripeClient.products.list({ active: true });
  if (productName) products = products.filter((product) => product.name.includes(productName));
  return await Promise.all(
    products.map(async (product) => {
      const prices = await stripeClient.prices.list({ product: product.id, active: true });
      return {
        id: product.id,
        active: product.active,
        default_price: product.default_price,
        description: product.description,
        features: product.features,
        images: product.images,
        name: product.name,
        prices: prices.data.map((price) => ({
          id: price.id,
          active: price.active,
          currency: price.currency,
          recurring: price.recurring,
          unit_amount: price.unit_amount,
        })),
      };
    })
  );
}
