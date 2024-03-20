//@ts-nocheck
"use client";

import React from "react";
import Link from "next/link";

import ImageWithFallback from "../../ImageWithFallback";

// import "../../../../styles/components/bestBrand.scss";

const ShoppingItem = ({ item }) => {
  // categCd
  // :
  // "6"
  // commissionComment
  // :
  // "10.5%"
  // favCnt
  // :
  // 0
  // favYn
  // :
  // "N"
  // imageLink
  // :
  // "http://img.linkprice.com/files/stlink/99flower/0001"
  // merchantId
  // :
  // "99flower"
  // mobileCommissionComment
  // :
  // "10.5%"
  // popularityOrd
  // :
  // 8
  // siteName
  // :
  // "(주)99플라워 기분좋은 꽃배달 "
  // siteUrl
  // :
  // "http://link.99flower.co.kr"
  // view
  // :
  // 1
  return (
    <Link href={`/shopping/${item.merchantId}${window.location.search}`}>
      <div className="brand-slider-card">
        <ImageWithFallback
          src={item.imageLink}
          width={207}
          height={110}
          objectFit="contain"
          alt={item.brandName}
        />
        <p className="brand-title">{item.siteName}</p>
      </div>
    </Link>
  );
};

export default ShoppingItem;
