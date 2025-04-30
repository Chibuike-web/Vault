import express from "express";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import dotenv from "dotenv";
import "./auth/google";

dotenv.config();

const app = express();

app.use(
	cors({
		origin: "http://localhost:5175",
		credentials: true,
	})
);

app.use(
	session({
		secret: "my-super-secret",
		resave: false,
		saveUninitialized: false,
		cookie: {
			httpOnly: true,
			secure: false,
		},
	})
);

app.use(passport.initialize());
app.use(passport.session());

// routes
app.get("/", (_req, res) => {
	res.send("Server is running 👋");
});

app.get(
	"/auth/google",
	passport.authenticate("google", {
		scope: ["profile", "email", "https://www.googleapis.com/auth/youtube.readonly"],
	})
);

app.get(
	"/auth/google/callback",
	passport.authenticate("google", {
		failureRedirect: "/",
	}),
	(req, res) => {
		res.redirect("http://localhost:5175");
	}
);

app.get("/api/session", (req, res) => {
	if (req.isAuthenticated()) {
		res.json(req.user);
	} else {
		res.status(401).json({ error: "Not authenticated" });
	}
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
