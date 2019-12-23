import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        adminToken:localStorage.getItem('adminToken')?localStorage.getItem('adminToken'):null,
        adminName:localStorage.getItem('adminName')?localStorage.getItem('adminName'):'',
    },
    mutations:{
        ['SET_ADMIN_TOKEN'] : (state, adminToken) =>
        {
            state.adminToken = adminToken;
            localStorage.setItem('adminToken',adminToken);
        },
        ['SET_ADMIN_NAME'] : (state, adminName) =>
        {
            state.adminName = adminName;
            localStorage.setItem('adminName',adminName);
        },
        ['ADMIN_LOGOUT'] : (state) =>
        {
            state.adminName = '';
            state.adminToken = null;
            localStorage.removeItem('adminToken');
            localStorage.removeItem('adminName');
        }
    },
    getters:{
        
    }
});