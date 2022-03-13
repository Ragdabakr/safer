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
          deleteUser: { type: Boolean,default: false},
          addEditCompanyInfo: { type: Boolean,default: false},
        },
        settingPermissions:{
          addVisa: { type: Boolean,default: false},
          addFlightTickets: { type: Boolean,default: false},
          addHotel: { type: Boolean,default: false},
          addTour: { type: Boolean,default: false},
          addCompany: { type: Boolean,default: false},
        },
        dashboardPermissions:{
        bookTour: { type: Boolean,default: false},
        bookVisa:  { type: Boolean,default: false},
        addCompany: { type: Boolean,default: false},
        bookFlightTickets: { type: Boolean,default: false},
        bookHotel: { type: Boolean,default: false},
        
      },
     sidebarPermissions:{
        tours: { type: Boolean,default: false},
        reports: { type: Boolean,default: false},
        flightTickets: { type: Boolean,default: false},
        hotels: { type: Boolean,default: false},
        transports: { type: Boolean,default: false},
        companies: { type: Boolean,default: false},
        users: { type: Boolean,default: false},
        safeBox: { type: Boolean,default: false},
        accountStatement:{ type: Boolean,default: false},
        visas: { type: Boolean,default: false},
      },
     reportPermissions:{
      tourReport: { type: Boolean,default: false},
      accountingReport: { type: Boolean,default: false},

      },

});



const Role = mongoose.model('Role', roleSchema);

module.exports = Role;