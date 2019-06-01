import axios from 'axios';

export default{
    addCalculation: function(calculation){
        return axios.get("/create/" + calculation).then( res => {
        console.log(res.data);    
         return res.data
        })
    }
}