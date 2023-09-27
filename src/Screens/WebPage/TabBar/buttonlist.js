import { Images, Url } from '@common';

const ButtonList = [
    {
        id : 0,
        name : 'Home',
        url : Url.homeurl,
        type : 'page',
        icon : Images.homeicon
    },
    {
        id : 1,
        name : 'Categories',
        url : Url.categoriesurl,
        type : 'page',
        icon : Images.categoryicon
    },
    {
        id : 2,
        name : 'Cart',
        url : Url.carturl,
        type : 'page',
        icon : Images.carticon
    },
    {
        id : 3,
        name : 'Profile',
        url : Url.myaccounturl,
        type : 'page',
        icon : Images.usericon
    },
    {
        id : 4,
        name : 'Back',
        url : '',
        type : 'function',
        icon : Images.backicon
    }
]
export default ButtonList;