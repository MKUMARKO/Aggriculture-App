/*
export class OrderModel {

    constructor(
        public orderId: String,
        public dealerId: String,
        public farmerId: String,


        public cropId: String,
        public dealerName: String,
        public farmerName: String,
        public cropName: String,
        public dealerMobile: String,
        public farmerMobile: String,
        public orderStatus: String


    ) {
        this.orderId = orderId;
        this.dealerId = dealerId;
        this.farmerId = farmerId;


        this.cropId = cropId;
        this.dealerName = dealerName;
        this.farmerName = farmerName;
        this.cropName = cropName;
        this.dealerMobile = dealerMobile;
        this.farmerMobile = farmerMobile;
        this.orderStatus = orderStatus;

    }
}
*/

export class OrderModel{

    constructor(
        public farmerID:String,
        public orderID:String,
        public dealerID:String,
        public cropID:String,
        public dealerName:String,
        public farmerName:String,
        public cropName:String,
        public dealerMobile:String,
        public farmerMobile:String,
        public orderStatus:String
        
        
    )
        {
        this.farmerID=farmerID;
        this.orderID=orderID;
        this.dealerID=dealerID;
        this.cropID=cropID;
        this.dealerName=dealerName;
        this.farmerName=farmerName;
        this.cropName=cropName;
        this.dealerMobile=dealerMobile;
        this.farmerMobile=farmerMobile;
        this.orderStatus=orderStatus;
        
    }
}