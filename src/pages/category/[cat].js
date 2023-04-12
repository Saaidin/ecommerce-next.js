import axios from "axios"
import ProductItem from "../../../components/ProductItem"

const Category = ({ data, category }) => {
  return (
    <div className="w-10/12 h-full mx-auto">
      <h2 className="text-center pt-16 text-2xl">
        Category:
        <span className="text-orange-500">{category}</span>
      </h2>
      <div className="grid grid-cols-3 gap-16">
        {data?.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Category

export async function getServerSideProps(ctx) {
  const category = ctx.params.cat

  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/products?cat=${category}`
  )

  return {
    props: {
      data,
      category,
    },
  }
}
/*
import axios from 'axios'
import React from 'react'
import Layout from '../../../components/Layout'
import ProductItem from '../../../components/ProductItem'

const Category = ({ data, category }) => {
  return (
    <>
    <Layout>
        <div className="w-10/12 h-full mx-auto">
            <h2 className="text-center pt-16 text-2xl">Category: <span className="text-orange-500">{category}</span></h2>
            <div className="grid grid-cols-3 gap-16">
                {data?.map((product) => (
                    <ProductItem key={product._id} product={product} />
                ))}
            </div>
        </div>
    </Layout>
    </>
  )
}

export default Category

export async function getServerSideProps(ctx){
  const category = ctx.params.cat

  const {data} = await axios.get(`https://ecommerce-next-js-xz5u.vercel.app/api/products?cat=${category}`)

  return {
    props: {
        data,
        category
    }
  }
}
*/
