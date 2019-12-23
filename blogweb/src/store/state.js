import {getLocalItem} from '../util/util';
const state = {

  //用户
  isLogin: false,
  regOrLogin: 0,
  flag: 1,
  userId:getLocalItem('id')?getLocalItem('id'):0,
  userName:getLocalItem('userName')?getLocalItem('userName'):'',
  userToken:getLocalItem('userToken')?getLocalItem('userToken'):null,
}

export default state;