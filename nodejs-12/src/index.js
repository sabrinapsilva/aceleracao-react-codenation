const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

const isArray = (item) => {
	return Array.isArray(item)
}

const sum = (total, price) => {
	return total + price
}

const productsCart = (ids, products) => {
	return (isArray(ids) && isArray(products)) && products.filter(({ id }) => ids.includes(id))
}

const productsCartFilter = (cart) => {
	return isArray(cart) && cart.map(({ name, category }) => ({ name, category }))
}

const looksProductsCart = (cart) => {
	const look = cart.map((product) => product.category)
	return Array.from(new Set(look))
}

const totalNoPromotion = (cart) => {
	return cart.reduce((total, product) => sum(total, product.regularPrice), 0).toFixed(2);
}

const totalPromotion = (cart, promotion) => {
	return cart.reduce((total, product) => {
		const pricePromotion = product.promotions.find(({ looks }) =>
			looks.includes(promotion)
		)
		return pricePromotion ? sum(total, pricePromotion.price) : sum(total, product.regularPrice)
	}, 0).toFixed(2)
}

function getShoppingCart(ids, productsList) {

	const cart = productsCart(ids, productsList)

	const products = productsCartFilter(cart)

	const looks = looksProductsCart(cart)

	const promotion = promotions[looks.length - 1]

	const priceNoPromotion = totalNoPromotion(cart)

	const totalPrice = totalPromotion(cart, promotion)

	const discountValue = (priceNoPromotion - totalPrice).toFixed(2)
	const discount = (`${((discountValue * 100) / priceNoPromotion).toFixed(2)}%`)

	return {
		products,
		promotion,
		totalPrice,
		discountValue,
		discount
	}
}

module.exports = { getShoppingCart };
