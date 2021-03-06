const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const flightTicketBookingInvoiceSchema = new mongoose.Schema({
  index: { type: Boolean, default: true },
  number: {
    type: Number,
},
    createdAt: {
      type: Date,
      default: Date.now()
    },
    bookingFrom: {
      type: mongoose.Schema.ObjectId,
      ref: 'Company',
      required: [true],
  },
  bookingTo: {
      type: mongoose.Schema.ObjectId,
      ref: 'Company',
      required: [true],
  },
  travellers:[{
      travellerFirstName: {
          type: String,
         
      },
      travellerLastName: {
          type: String,
          
      },
      travellerType: {
          type: String,
         
      },
         
      passportNumber: {
          type: String,
          
      }, 
      phoneNumber: {
        type: Number,
        
    }, 
      ticketCostPrice: {
          type: Number,
          
      },
      ticketSellingPrice: {
          type: Number,
         
      },
      pnrNumber: {
          type: String,
         
      },
      ticketvatPrice: {
          type: String,
         
      },

      comm: {
          type: Number,
         
      },
      netCost: {
          type: Number,
       
      },
      discount: {
          type: Number,
         
      },
      netComm: {
          type: Number,
         
      },
      totalPrice: {
          type: Number,
          
      },
      receivedAmount: {
          type: Number,
         
      },
      remainingAmount: {
          type: Number,
         
      },
  
  }],

  
  ratio: {
      type: Number,
  },
  paymentMethod: {
      type: String,
      required: true,
  },

  departureDate: {
      type: Date,
      required: true,
  },
  destination: {
      type: String,
      required: true,
  },
  notes: {
      type: String,
      required: false,
  },
  totalNetSellingPrice: {
      type: Number, default: 0,
  },
  totalNetCostPrice: {
      type: Number, default: 0,
  },
  totalNetComm: {
      type: Number, default: 0,
  },
  totalReceivedAmount: {
    type: Number, default: 0,
  },
  totalRemainingAmount: {
      type: Number, default: 0,
  },
 createdInvoice: {
    type: Boolean, default: false
},

}
  

);




const FlightTicketBookingInvoice = mongoose.model('FlightTicketBookingInvoice', flightTicketBookingInvoiceSchema);

module.exports = FlightTicketBookingInvoice;