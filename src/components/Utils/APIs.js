import axios from 'axios';

export default{
    addCalculation: function(calculation){
        return axios.get("https://glacial-bayou-59948.herokuapp.com/create/" + calculation).then( res => {
        console.log(res.data);    
         return res.data
        })
    }
}