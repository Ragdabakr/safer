const mongoose = require('mongoose');

// select :false to any item hide it 

const roleSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'A role must have name'],
        unique: true,
    },
        userPermissions:{
          addUser: { type: Boolean, default: false},
          editUser: { type: Boolean,default: false},
          activeUser: { type: Boolean,default: false},
        },
        settingPermissions:{
        addPartner: { type: Boolean,default: false},
        addFlightTickets: { type: Boolean,default: false},
        addHotel:{ type: Boolean,default: false},
        addTour:{ type: Boolean,default: false},
        addVisa:{ type: Boolean,default: false},
        addCompany:{ type: Boolean,default: false},
      
        activePartner: { type: Boolean,default: false},
        activeFlightTickets: { type: Boolean,default: false},
        activeHotel: { type: Boolean,default: false},
        activeTour:{ type: Boolean,default: false},
        activeVisa:{ type: Boolean,default: false},
        activeCompany:{ type: Boolean,default: false},
      
        editPartner: { type: Boolean,default: false},
        editFlightTickets: { type: Boolean,default: false},
        editHotel: { type: Boolean,default: false},
        editour:{ type: Boolean,default: false},
        ediVisa:{ type: Boolean,default: false},
        editCompany:{ type: Boolean,default: false},
      
        allPartners: { type: Boolean,default: false},
        allFlightTickets: { type: Boolean,default: false},
        allHotels: { type: Boolean,default: false},
        allTours:{ type: Boolean,default: false},
        allVisas:{ type: Boolean,default: false},
        allCompanies:{ type: Boolean,default: false},
        
        backup: { type: Boolean,default: false},
        },
      dashboardPermissions:{
        tours: { type: Boolean,default: false},
         users: { type: Boolean,default: false},
        accountStatement:{ type: Boolean,default: false},
        reports: { type: Boolean,default: false},
        flightTickets: { type: Boolean,default: false},
        hotels: { type: Boolean,default: false},
        companies: { type: Boolean,default: false},
        
      },
     sidebarPermissions:{
        tours: { type: Boolean,default: false},
        reports: { type: Boolean,default: false},
        flightTickets: { type: Boolean,default: false},
        hotels: { type: Boolean,default: false},
        transports: { type: Boolean,default: false},
        companies: { type: Boolean,default: false},
        users: { type: Boolean,default: false},
        accounting: { type: Boolean,default: false},
      },
     reportPermissions:{
        toursProfits: { type: Boolean,default: false},
        companyProfits: { type: Boolean,default: false},
        flightTicketsProfits: { type: Boolean,default: false},
        hotelsProfits: { type: Boolean,default: false},
        visaProfits: { type: Boolean,default: false},
        tourProfits: { type: Boolean,default: false},
        tourReport: { type: Boolean,default: false},
        accountingReport: { type: Boolean,default: false},
        

      },

});



const Role = mongoose.model('Role', roleSchema);

module.exports = Role;