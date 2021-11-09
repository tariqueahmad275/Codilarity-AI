const passport = require("passport")
const User = require("../models/user")

const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.use(new GoogleStrategy({
    clientID: "9880865608-ebsd24s4gssj3847fd9aeianv6nmfg3k.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/auth/googleCallback",
    passReqToCallback: true
},
    async function (request, accessToken, refreshToken, profile, done) {
        const id = profile.id;
        const email = profile.emails[0].value;
        const displayName = profile.name.givenName + " " + profile.name.familyName ;

        const userList = await User.find({email:email})
        const currentUser = userList[0]

        if (!currentUser) {
            const newUser = User({ email: email, displayName: displayName, access: true, password: "SignedInWithGoogle" })
            const result = await newUser.save()
            return done(null, result);
        }
        return done(null, currentUser);
    }
));

passport.serializeUser((user, done) => {
    return done(null, user)
})

passport.deserializeUser((user, done) => {
    return done(null, user)
})