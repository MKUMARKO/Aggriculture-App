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