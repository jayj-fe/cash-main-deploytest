//@ts-nocheck
"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { URL } from "@/app/(util)/CATEGORY";

import "../../../styles/components/subNav.scss";

const DetailPageNav = ({ pageType, navList }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onClickTabBtn = (tableIdx, categCd) => {
    if (pageType === URL.POINT && categCd !== '') {
      if(categCd === 'PS_FOOD'){
        router.push(`${pageType}/point_detail?categCd=${categCd}&level=1&categCd_lvl2=ALL`);
      }else{
        router.push(`${pageType}/point_detail?categCd=${categCd}&level=1`);
      }
    } else {
      router.push(`${pageType}?categCd=${!!categCd ? categCd : ""}`);
    }

    // router.push(`${pageType}?categCd=${!!categCd ? categCd : ""}`);
    // return router.refresh();
  };

  const renderActiveClassName = (item, idx) => {
    switch (pageType) {
      default:
        return !searchParams.get("categCd") && idx === 0
          ? " on"
          : searchParams.get("categCd") === item.categCd
            ? " on"
            : "";
    }
  };

  return (
    <nav className="detail-nav">
      <ul>
        {navList?.map((item, idx) => {
          return (
            <li key={item.categCd} className={renderActiveClassName(item, idx)}>
              <button onClick={() => onClickTabBtn(idx + 1, item.categCd)}>
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DetailPageNav;
