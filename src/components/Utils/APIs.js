import axios from 'axios';

export default {
    addCalculation: function (calculation) {
        return axios.get("https://cors-anywhere.herokuapp.com/https://glacial-bayou-59948.herokuapp.com/create/" + calculation).then(res => {
            console.log(res.data);
            return res.data
        })
    },
    fillCalculations: function () {
        return axios.get("https://cors-anywhere.herokuapp.com/https://glacial-bayou-59948.herokuapp.com/").then(res => {
            return res.data;
        })
    }
}