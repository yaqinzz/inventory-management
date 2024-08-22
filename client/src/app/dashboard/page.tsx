'use client'

import CardExpenseSummary from './CardExpenseSummary'
import { CardPopularProducts } from './CardPopularProducts'
import CardPurchaseSummary from './CardPurchaseSummary'
import CardSalesSummary from './CardSalesSummary'

export const Dashboard = () => {
	return (
		<div className='grid grid-col-1 md:grid-cols-2 xl:grid-col-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows'>
			<CardPopularProducts />
			<CardSalesSummary />
			<CardPurchaseSummary />
			<CardExpenseSummary />
			<div className='md:row-span-1 xl:row-span-2 bg-gray-500' />
			<div className='md:row-span-1 xl:row-span-2 bg-gray-500' />
			<div className='md:row-span-1 xl:row-span-2 bg-gray-500' />
		</div>
	)
}
