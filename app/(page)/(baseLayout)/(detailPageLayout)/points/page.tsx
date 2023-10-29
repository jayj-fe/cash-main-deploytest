//@ts-nocheck
import React from "react";
import Image from "next/image";

import DetailPageNav from "@/app/(Components)/Nav/DetailPageNav";

import { getPointShopHome } from "@/app/(http)/apis/detailApi";
import { URL } from "@/app/(util)/CATEGORY";
import "../../../../../styles/pages/hotDeal.scss";

async function getData(searchParams) {
  let params = {
    cpage: searchParams.cpage || 1,
    categCd: searchParams.categCd || null,
  };
  const pointDetailData = await getPointShopHome(URL.POINT, params);

  console.log(pointDetailData.pointshopList);
  // return {
  //   subCategories: pointDetailData.categ1List,
  // }
  return {
    subCategories: pointDetailData.categ1List,
    itemListPsConv: pointDetailData.pointshopList.PS_CONV,
    itemListPsFood: pointDetailData.pointshopList.PS_FOOD,
    itemListPsProduct: pointDetailData.pointshopList.PS_PRODUCT,
    
  };
}

const page = async ({ searchParams }) => {
  const data = await getData(searchParams);
  return (
    <>
      <DetailPageNav navList={data.subCategories} />
      <main className="hotdeal-main">
        <header className="hotdeal-banner">
          <h2>
            <Image
              src="/asset/images/pointshop-banner.png"
              objectFit="cover"
              width={1200}
              height={240}
              alt="MD 추천 잇템!"
            />
          </h2>
        </header>
        <article className="hotdeal-list-con">
          <ul>
            <li>
              {data.itemListPsFood.map((item)=>{
                return <div key={item.brandId}>{item.brandName}</div>
              })}
            </li>
          </ul>
        </article>
      </main>
    </>
  );
};

export default page;
