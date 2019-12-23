import * as types from './mutation-types';
import {setLocalItem} from '../util/util';

const mutations = {
    //用户
    [types.isLogin]:(state,data) => {
        state.isLogin = data;
    },
    [types.regOrLogin]:(state,data) => {
        state.regOrLogin = data;
    },
    [types.flag]:(state,data) => {
        state.flag = data;
    },
    [types.userId]:(state,data) => {
        state.userId = data;
        setLocalItem('id',data);
    },
	[types.SET_USER_TOKEN]:(state, userToken) => {
        state.userToken = userToken;
        setLocalItem('userToken',userToken);
    },
    [types.SET_USER_NAME]:(state, userName) => {
        state.userName = userName;
        setLocalItem('userName',userName);
    },
  [types.USER_LOGOUT]: (state) => {
      state.isLogin = false;
      state.userToken = null;
      state.userName = '';
      localStorage.removeItem('userToken');
      localStorage.removeItem('userName');
      localStorage.removeItem('id');
  },
}

export default mutations;