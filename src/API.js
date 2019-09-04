import axios from 'axios';

var url = 'http://localhost:4001/api';
var server = 'http://localhost:4001';

var api = {


    addProduct : (data) => {
        return axios.post(url+'/product',data)
    },
    
    updateProduct : (id,data) => {
        return axios.get(url+'/product'+id,data)
    },
    
    deleteProduct : (id) => {
        return axios.delete(url+'/product'+id)
    },
    
    getProduct : (id, data) => {
        return axios.get(url+'/products'+id,data)
    },

    addReview : (data) => {
        return axios.post(url+'/review',data)
    },
    
    updateReview : (id,data) => {
        return axios.get(url+'/review'+id,data)
    },
    
    deleteReview : (id) => {
        return axios.delete(url+'/review'+id)
    },
    
    uploadPhoto : (data) => {
        return axios.post(url+'/upload',data)
    },

    authenticate : (data) => {
        return axios.post(url+'/user',data)
    },

    getUser : (id) => {
        return axios.get(url+'/user'+id)
    },


}





export {server, api}