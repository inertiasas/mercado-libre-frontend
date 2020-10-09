import Head from 'next/head'
import SearchBox from '../components/SearchBox/index'
import CategoriesMenu from '../components/CategoriesMenu/index'
import ProductItem from '../components/ProductItem/index'

function Items({ data, search }) {
  return (
  	<div>
	  	<Head>
	  		<title>Mercado Libre</title>
	  		<meta charset="UTF-8" />
	  		<link rel="shortcut icon" href="/Logo_ML.png" />
		  </Head>
  		<SearchBox value={search}/>
  		<CategoriesMenu categories={data.categories}/>
  		{data.items.slice(0,4).map((item) => (
  			<ProductItem item={item}/>
  			))}
  	</div>
  )
}

export async function getServerSideProps(context) {
  const search = context.query.search;
  const res = await fetch(`http://localhost:3000/api/items?q=${search}`)
  const data = await res.json();
  return { props: { data, search } };
}

export default Items