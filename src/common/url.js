import Config from "./config";

const BaseUrl = Config.baseurl;

const Url = {
    homeurl : BaseUrl,
    categoriesurl : BaseUrl+'categories/',
    carturl : BaseUrl+'cart/',
    myaccounturl : BaseUrl+'my-account/'
}

export default Url