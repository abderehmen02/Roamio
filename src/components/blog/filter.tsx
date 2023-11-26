import { blogPostCategoriesArray } from "@/constants/blog/blog";
import { ButtonsSizes, PrimaryBtn, SecondaryBtn } from "@/ui/buttons";
import { H3, H4 } from "@/ui/typography";
import React from "react";
import LocationCityIcon from '@mui/icons-material/LocationCity';

export const BlogFilterCard : React.FC = ()=>{
return <div className="flex itesm-center bg-secondary text-primary gap-4  justify-start rounded-md h-fit flex-col px-8 py-3 " >
<H3 className="font-bold "  >Filters</H3>
<div className="gap-4 flex flex-col"  >
{
    blogPostCategoriesArray.map(filter=>{
      return <PrimaryBtn   className="w-full  capitalize rounded-lg px-11 bg-white border-primary border-2 text-primary  text-start" >{filter}  </PrimaryBtn>
    })
}
</div>
</div>
}