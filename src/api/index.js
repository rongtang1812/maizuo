
//http://m.maizuo.com/v4/api/billboard/home?__t=1503104743918
const homeBannerApi = "/v4/api/billboard/home"

//http://m.maizuo.com/v4/api/film/now-playing?__t=1503104743935&page=1&count=5
const homeContenApi = "/v4/api/film/now-playing"

//http://m.maizuo.com/v4/api/film/coming-soon?__t=1503113881983&page=1&count=3
const homeSoonApi = "/v4/api/film/coming-soon"

//http://m.maizuo.com/v4/api/film/now-playing?page=1&count=7
const pagesNowplayApi="/v4/api/film/now-playing"

//http://m.maizuo.com/v4/api/film/coming-soon?page=1&count=7
const pagesSoonplayApi="/v4/api/film/coming-soon"


//http://m.maizuo.com/v4/api/cinema?__t=1503294018374
const pagesCinemasApi= "/v4/api/cinema" 

//商城焦点图
const stroeBannerApi = "../../static/banner.json"

//商城ShopList  http://aura.maizuo.com/api/ad/list
const stroeShopListApi="/api/ad/list"

//商城好货精选 http://aura.maizuo.com/api/recommend/home?page=1&num=20
const stroeGoodApi="/api/recommend/home?num=20"
export default {
	homeBannerApi,
	homeContenApi,
	homeSoonApi,
	pagesNowplayApi,
	pagesCinemasApi,
	pagesSoonplayApi,
	stroeBannerApi,
	stroeShopListApi,
	stroeGoodApi
}
