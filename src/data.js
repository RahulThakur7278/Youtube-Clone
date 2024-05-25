export const API_KEY='AIzaSyAWffZlKrL1vzmqp79hy_77cm5JfRuKc9Q';

export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}