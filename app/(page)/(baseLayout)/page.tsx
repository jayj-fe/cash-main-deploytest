//@ts-nocheck
import Image from "next/image";

import { getShoppingMallList } from "@/app/(http)/apis/productApi";

import MainTable from "@/app/(Components)/ItemTable/MainTable";
import { CATE_LABEL } from "@/app/(util)/CATEGORY";

async function getData() {
  let params = {
    pageNumber: 1,
    pageSize: 1,
  };
  const mallData = await getShoppingMallList("merchants", params);
  const pointshopData = await getShoppingMallList("pointshops", params);
  const hotDealData = await getShoppingMallList("hotdeals", params);
  const [mallD, pointD, hotD] = await Promise.all([
    mallData,
    pointshopData,
    hotDealData,
  ]);

  return { mallD, pointD, hotD };
}

export default async function Home() {
  const apiData = await getData();
  return (
    <main>
      <article className="main-jumbo">
        <Image
          width={1200}
          height={485}
          src="/asset/images/main-jumbo.png"
          alt="main-jumbo"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </article>
      <MainTable
        title="쇼핑몰"
        content="쇼핑할때마다 캐시백이 최대 20%"
        tableData={apiData.mallD.merchantList}
        navData={apiData.mallD.categList}
        tableCate={apiData.SHOPPING}
      />
      <article className="main-banner">
        <h3>스마트한 쇼핑 습관</h3>
        <ol>
          <li>
            <p>회원가입</p>
          </li>
          <li>
            <p>쇼핑 경유</p>
          </li>
          <li>
            <p>캐시적립</p>
          </li>
          <li>
            <p>환급or쿠폰</p>
          </li>
        </ol>
      </article>
      <MainTable
        title="MD추천 핫 딜 상품"
        tableData={apiData.hotD.hotdealList}
        // navData={data.mallD.categList}
        tableCate={CATE_LABEL.MERCHANT}
      />
      <MainTable
        title="포인트 샵"
        tableData={apiData.pointD.pointshopList}
        navData={apiData.pointD.categList}
        tableCate={CATE_LABEL.POINT}
      />
    </main>
  );
}
