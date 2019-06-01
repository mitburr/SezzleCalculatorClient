import axios from 'axios';

export default{
    addCalculation: function(calculation){
        return axios.get("http://localhost:4000/create/" + calculation).then( res => {
        console.log(res.data);    
         return res.data
        })
    }
}