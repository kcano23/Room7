const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
 
const UserSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: [true, "First Name is requried"]
	},
	lastName: {
		type: String,
		required: [true, "Last Name is requried"]
	},
	email: {
		type: String,
		required: [true, "Email is requried"],
		validate: {
			validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
			message: "Please enter a valid email"
		}
	},
	birthday: {
        type: Date,
        required: [true, "Birthday Is Required!"]
    },
    profilePicture: {
        type: String,
        // required: [true, "Image Of Marine Is Required!"]
    },
    username: {
        type: String,
        required: [true, "Username Needs To Be Filled Out!"],
        minLength: [2, "Username Must Be At Least 2 Characters"]
	},
	password: {
		type: String,
		requried: [true, "Password is requried"],
		minLength: [8, "Password must be 8 characters or longer"]
	},
	terms: {
        type: Boolean,
    }
}, {timestamps: true});

UserSchema.virtual('confirmPassword')
	.get( () => this._confirmPassword )
	.set( value => this._confirmPassword = value );

UserSchema.pre('validate', function(next) {
	if (this.password !== this.confirmPassword) {
		this.invalidate('confirmPassword', 'Password must match confirm password');
	}
	next();
});

UserSchema.pre('save', function(next) {
	bcrypt.hash(this.password, 10)
	.then(hash => {
		this.password = hash;
		next();
	});
});

const User = mongoose.model('User', UserSchema);

module.exports = User;