/**
 *                                  --------------------------
 *                                     INITIAL INSTALLATION
 *                                  ---------------------------
 * 1: visit : console.firebase.google.com
 * 2: create a projects, (scripts google analytics)
 * 3: register app (create config)
 * 4: install firebase: npm install firebase
 * 5: add config file to your project
 * 6: Danger : do not publish or make firebase config to public by pushing those to gitHub
 *                          ------------------------------
 *                                  INTEGRATION
 *                          ------------------------------
 * 7: visit : go to docs > build > Authentication > web > get started
 * 8: export app from the firebase.config.js: export default app
 * 9: login.js import getAuth from firebase/auth
 * 10: create const auth = getAuth(app)
 *                          ------------------------------
 *                                  PROVIDER SETUP
 *                          ------------------------------
 * 11. import googleAuthProvider and create a new provide like (const provider = new googleAuthProvider())
 * 12: use signInPopUp and pass auth provider (signInPopUp(auth, provider))
 * 13: activate signIn method (google, facebook, github, phoneNumber etc.) from firebase authentication > sign-in-method
 * 14: [vite]: change 127.0.0.1 to localhost
 *                      ---------------------------
 *                          MORE AUTH PROVIDER
 *                      ---------------------------
 * 1: activate the auth provider (create app, provider redirect url, client id, client secret)
 * 
 */