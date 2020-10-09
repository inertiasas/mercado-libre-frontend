import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SearchBox from'../components/SearchBox/index'

function HomePage() {
  return(
  	<div>
	  	<Head>
	  		<title>Mercado Libre</title>
	  		<meta charset="UTF-8" />
	  		<link rel="shortcut icon" href="/Logo_ML.png" />
		</Head>
  		<SearchBox value=""/>
  	</div>
  	)
}

export default HomePage