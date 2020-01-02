export const firebaseConfig = {
  staging: {
    apiKey: process.env.GATSBY_STAGING_FIREBASE_API_KEY,
    authDomain: process.env.GATSBY_STAGING_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.GATSBY_STAGING_FIREBASE_DATABASEURL,
    projectId: process.env.GATSBY_STAGING_FIREBASE_PROJECT_ID,
    appId: process.env.GATSBY_STAGING_FIREBASE_APP_ID,
  },
  production: {
    apiKey: process.env.GATSBY_PRODUCTION_FIREBASE_API_KEY,
    authDomain: process.env.GATSBY_PRODUCTION_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.GATSBY_PRODUCTION_FIREBASE_DATABASEURL,
    projectId: process.env.GATSBY_PRODUCTION_FIREBASE_PROJECT_ID,
    appId: process.env.GATSBY_PRODUCTION_FIREBASE_APP_ID,
  },
}

export const chargebeeConfig = {
  staging: {
    site: process.env.GATSBY_STAGING_CHARGEBEE_SITE,
  },
  production: {
    site:  process.env.GATSBY_PRODUCTION_CHARGEBEE_SITE,
  }
}

export const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"


