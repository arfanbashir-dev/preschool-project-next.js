import React from "react"

import { HomeVideoPage, HomeWellComePage,HomeDetailPage, HomeKeyFeaturePage, 
         HomeSchoolInfoPage, HomeFacilitiesPage, HomeMenuPage} from "@/Components"


export default function HomePage(){   

      return(
          <div>

            <HomeVideoPage />
            <HomeWellComePage />
            <HomeDetailPage />
            <HomeKeyFeaturePage />
            <HomeSchoolInfoPage />
            <HomeFacilitiesPage />
            <HomeMenuPage />

          </div>
      )  
  
}
