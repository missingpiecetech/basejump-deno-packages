export default async function getPlans(stripeClient) {
  const products = await stripeClient.products.list({});
  return products;

  // return prices?.data
  //   ?.map((price: Stripe.Price) => {
  //     return {
  //       product_name: price.product.name,
  //       product_description: price.product.description,
  //       active: price.product.active,
  //       currency: price.currency,
  //       price: price.unit_amount,
  //       id: price.id,
  //       interval: price.type === "one_time" ? "one_time" : price.recurring?.interval,
  //     };
  //   })
  //   .filter((price) => price.active);
}
