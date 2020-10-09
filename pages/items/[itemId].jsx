import Head from 'next/head'
import SearchBox from '../../components/SearchBox/index'
import CategoriesMenu from '../../components/CategoriesMenu/index'
import ProductDetail from '../../components/ProductDetail/index'

function Item({ data }) {
  return (
    <div>
      <Head>
        <title>Mercado Libre</title>
        <meta charset="UTF-8" />
        <link rel="shortcut icon" href="/Logo_ML.png" />
      </Head>
      <SearchBox value=""/>
      <CategoriesMenu categories={data.categories}/>
      <ProductDetail item={data.item}/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const itemId = context.params.itemId;
  const res = await fetch(`http://localhost:3000/api/items/${itemId}`)
  const data = await res.json();
  return { props: { data } };
}

export default Item