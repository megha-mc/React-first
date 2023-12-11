import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id:"heading"},"Namaste react!")

// JSX (transpiled before it reaches the JS) - PARCEL - Babel(javascript complier)

// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)
const headng = <h1 id ="heading">Namaste React using JSX </h1>

// React functional component
// const HeadComponenets=()=>{
//   return<h1>namaste javascript</h1>
//                           }

// const HeadCompo = ()=><h1>namaste javascript</h1>

// const Title = () => (
//   <h1>Namaste React</h1>
// )

const Header = ()=> {
  return(
    <div className="header">
      <div className="logocontainer">
        <img className="logo"  src ="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )

}

const RestaurantCard = (props) => {
  const { resData } = props; // destructuring props object
  console.log(props)
  return (
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      <img
        className="res-logo"
        alt="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}
      />  
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating} stars</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
    <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard resData = {restaurant} />
        ))}
      </div>
    </div>
  )
}

const resList = [
  {
    "info": {
      "id": "23800",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "mzo4lgff5ka7tedvblc5",
      "locality": "4th phase",
      "areaName": "JP Nagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.6,
      "feeDetails": {
        "restaurantId": "23800",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3400
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3400
      },
      "parentId": "2456",
      "avgRatingString": "4.6",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 25,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-10 22:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dominos-pizza-4th-phase-jp-nagar-bangalore-23800",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "12804",
      "name": "Nandhana Palace",
      "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
      "locality": "JP Nagar",
      "areaName": "JP Nagar",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "12804",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3900
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3900
      },
      "parentId": "2120",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "24 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-11 02:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/nandhana-palace-jp-nagar-bangalore-12804",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "64131",
      "name": "Truffles",
      "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
      "locality": "1st Phase",
      "areaName": "JP Nagar",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "American",
        "Continental",
        "Desserts",
        "Italian",
        "Beverages"
      ],
      "avgRating": 4.4,
      "feeDetails": {
        "restaurantId": "64131",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3400
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3400
      },
      "parentId": "218065",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-11 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/truffles-1st-phase-jp-nagar-bangalore-64131",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "42579",
      "name": "Burger King",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "locality": "Vega City Mall",
      "areaName": "Btm Layout",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4,
      "feeDetails": {
        "restaurantId": "42579",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3400
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3400
      },
      "parentId": "166",
      "avgRatingString": "4.0",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 1.1,
        "serviceability": "SERVICEABLE",
        "slaString": "22 mins",
        "lastMileTravelString": "1.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-11 04:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-king-vega-city-mall-btm-layout-bangalore-42579",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "23692",
      "name": "McDonald's",
      "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
      "locality": "6th Phase",
      "areaName": "JP Nagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "23692",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3400
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3400
      },
      "parentId": "630",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "17 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-11 03:45:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mcdonalds-6th-phase-jp-nagar-bangalore-23692",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "17312",
      "name": "KFC",
      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
      "locality": "4th Phase",
      "areaName": "JP Nagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "17312",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4100
      },
      "parentId": "547",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-10 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-4th-phase-jp-nagar-bangalore-17312",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "240178",
      "name": "Leon's - Burgers & Wings (Leon Grill)",
      "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
      "locality": "5th Phase",
      "areaName": "JP Nagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "American",
        "Snacks",
        "Turkish",
        "Portuguese",
        "Continental"
      ],
      "avgRating": 4.3,
      "feeDetails": {
        "restaurantId": "240178",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3400
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3400
      },
      "parentId": "371281",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "16 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-11 04:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-5th-phase-jp-nagar-bangalore-240178",
      "type": "WEBLINK"
    }
  }]

const AppLayout = () => {
  return(
    <div className = "app">
      <Header/>
      <Body/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
    
