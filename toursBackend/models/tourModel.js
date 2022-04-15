const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const slugify = require('slugify');
const validator = require('validator');
const User = require('./userModel');
const Schema = mongoose.Schema;
// const {Point} = require('mongoose-geojson-schema');

// select :false to any item hide it 

const tourSchema = new mongoose.Schema({
    index: { type: Boolean, default: true },
    name: {
        type: String,
       // required: [true, 'A tour must have a name'],
        unique: true,
       // trim: true,
        maxlength: [40, 'A tour name must have less or equal then 40 characters'],
        minlength: [5, 'A tour name must have more or equal then 10 characters'],
        //   validate: [validator.isAlpha, 'Tour name must only contain characters']
    },
    slug: String,
    duration: {
        type: Number,
       // required: [true, 'A tour must have a duration']
    },
    maxGroupSize: {
        type: Number,
       // required: [true, 'A tour must have a group size']
    },
    difficulty: {
        type: String,
       // required: [true, 'A tour must have a difficulty'],
        // enum: {
        //     values: ['سهل', 'متوسط', 'صعب'],
        //     message: 'Difficulty is either: easy, medium, difficult'
        // }
    },
    type: {
        type: String,
       // required: [true, 'A tour must have a type'],
        // enum: {
        //     values: ['دولي', 'داخلي'],
        //     message: 'type is either: International,Domestic'
        // }
    },
    ratingsAverage: {
        type: Number,
        default: 1,
        min: [1, 'Rating must be above 1.0'],
        max: [5, 'Rating must be below 5.0']
    },
    ratingsQuantity: {
        type: Number,
        default: 0
    },
    childPrice: {
        type: Number,
       // required: [true, 'A tour must have a price']
    },
    adultPrice: {
        type: Number,
       // required: [true, 'A tour must have a price']
    },
    infantPrice: {
        type: Number,
       // required: [true, 'A tour must have a price']
    },
    // priceDiscount: {
    //     type: Number,
    //     validate: {
    //         validator: function (val) {
    //             // this only points to current doc on NEW document creation
    //             return val < this.price;
    //         },
    //         message: 'Discount price ({VALUE}) should be below regular price'
    //     }
    // },
 
    description: {
        type: String,
        trim: true
    },
 
    imageCover: {
        // type: String,
        imgVersion: { type: String, default: '1585916456' },
        imageId: { type: String},
       // required: [true, 'A tour must have a cover image']
    },
    images: [{
        imageVersion: { type: String, default: '1585916456' },
        imageId: { type: String }
    }],
    createdAt: {
        type: Date,
        default: Date.now(),
        select: true
    },
    startDates: [{
        date:{type:Date},
    }] ,
    costs: [{
        account:{type:String},
        note:{type:String},
        cost:{type:Number},
    }] ,
    secretTour: {
        type: Boolean,
        default: false
    },
    completed: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    },
    open: {
        type: Boolean,
        default: true
    },
    tripLocations: [ // location give me error cant get geo location
        {
            type: { type: String },
            coordinates:[mongoose.Schema.Types.Mixed],
            city: String,
            address: String,
            description: String,
            day: String,
        }],

    guides: [{
        id: { type: mongoose.SchemaTypes.ObjectId },
        guide:{type :Array}
    }],

},
  //3 ) to can access viruals
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);
tourSchema.index({ price: 1 }); //  ترتيب تصاعدي
tourSchema.index({ locations: '2dsphere' });

//Connect Tour with reviews
// Virtual populate

// tourSchema.virtual('reviews', {
//     ref: 'Review',
//     localField: '_id',
//     foreignField: 'tour',
// });

// // 1)populate bookings to tour (many Bookings)
tourSchema.virtual('bookings', {
    ref: 'Booking',
    localField: '_id',// part in tour i want to populate
    foreignField: 'tourName',  // part in Booking i want to populate
});
//2) get tour with bookings
tourSchema.pre(/^findOne/, function (next) {
    this.populate({
        path: 'bookings'
        // options: { select: 'name' } // <-- wrap `select` in `options` here...
    });
    next();
});



//4)populate path in controller

//virtual shema item not added otherwise we get function
tourSchema.virtual('durationWeeks').get(function () {
    return this.duration / 7;
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
tourSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

//if we embeed guides
// tourSchema.pre('save', async function(next) {
//   const guidesPromises = this.guides.map(async id => await User.findById(id));
//   this.guides = await Promise.all(guidesPromises);
//   next();
// });


// QUERY MIDDLEWARE
//populate guides to all find routes
tourSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'guides',
    });
    next();
});
// tourSchema.pre('find', function(next) {
// tourSchema.pre(/^find/, function(next) {
//   this.find({ secretTour: { $ne: true } });

//   this.start = Date.now();
//   next();
// });

// tourSchema.post(/^find/, function(docs, next) {
//   console.log(`Query took ${Date.now() - this.start} milliseconds!`);
//   next();
// });

// AGGREGATION MIDDLEWARE
// tourSchema.pre('aggregate', function(next) {
//   this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });

//   console.log(this.pipeline());
//   next();
// });

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;