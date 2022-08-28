export class CropModel{

    constructor(
        public id:String,
        public cropName:String,

        public address:String,
        public cropQty:String,
        public cropType:String,
        public cropImgUrl:String,
        public cropDesc:String,
        public cropPrice:String,


        public farmerId:String,
        public uploadedBy:String,
       
        
       
        
        
        
       
        
    )
        {
       
        this.id=id;
        this.cropName=cropName;
        this.address=address;
        this.cropQty=cropQty;
        this.cropType=cropType;

        this.cropImgUrl=cropImgUrl;
        this.cropDesc=cropDesc;
        this.cropPrice=cropPrice;
       
        this.farmerId=farmerId;
        this.uploadedBy=uploadedBy;
    }
}