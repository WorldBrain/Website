export const firebaseConfig = {
    apiKey: process.env.GATSBY_FIREBASE_API_KEY,
    authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.GATSBY_FIREBASE_DATABASEURL,
    projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
    appId: process.env.GATSBY_FIREBASE_APP_ID,
}

export const chargebeeConfig = {
    site: process.env.GATSBY_CHARGEBEE_SITE,
    enableGTMTracking: true,
}

export const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"


