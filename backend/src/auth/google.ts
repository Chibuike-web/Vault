import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";

dotenv.config();

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((obj: any, done) => {
	done(null, obj);
});

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
			callbackURL: process.env.GOOGLE_CALLBACK_URL || "http://localhost:4000/auth/google/callback",
		},
		(accessToken, refreshToken, profile, done) => {
			const user = {
				profile,
				accessToken,
			};
			return done(null, user);
		}
	)
);
