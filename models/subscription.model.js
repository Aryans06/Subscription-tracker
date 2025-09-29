import mongoose from "mongoose";

const subscriptionSchema=new mongoose.Schema({
  name:{
    type:String,
    required:[true,'Subscription Name is required'],
    trim:true,
    minLength:2,
    maxLength:1000,

  },
  price:{
    type:Number,
    required:[true,'Subscription Price is required'],
    min:[0,'Price cannot be negative'],
    max:[1000,'Price cannot be more than 1000'],
  },
  currency:{
    type:String,
    enum:['USD','EUR','GBP','INR'],
    default:'INR',
  },
  frequency:{
    type:String,
    enum:['Monthly','Yearly','Weekly','daily'],
    default:'Monthly',
  },
  category:{
    type:String,
    enum:['Entertainment','Education','Productivity','Health','Other'],
   required:true
  },
  paymentMethod:{
    type:String,
    
    required:true,
    trim:true,
  },
  Status:{
    type:String,
    enum:['Active','Inactive','Cancelled'],
    default:'Active',
  },
  startDate:{
    type:Date,
    required:true,
    validate:{
        validator:(value)=>value<=new Date(),
        message:'Start date cannot be in the future'
    }

  },
  renewalDate:{
    type:Date,
    
    validate:{
        validator:function(value){
            return value > this.startDate;
        },
        message:'Renewal date must be after start date'
    
}
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true,
  }

}, {timestamps:true});

subscriptionSchema.pre('save',function(next){
 if(!this.renewalDate){
    const renewalPeriods={
        daily:1,
        Weekly:7,
        Monthly:30,
        Yearly:365
    };

    this.renewalDate=new Date(this.startDate);
    this.renewalDate.setDate(this.renewalDate.getDate()+renewalPeriods[this.frequency]);    
 }
 if(this.renewalDate <new Date()){
    this.Status='expired';
 }
 next();
})

const Subscription=mongoose.model('Subscription',subscriptionSchema);

export default Subscription;