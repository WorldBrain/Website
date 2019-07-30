# Website setup

Snipcart settings

1. Login in to the Snipcart Dashboard.
2. Choose the Live option from the Live/Test toogle button.
3. Setup regional settings (Account -> Regional Settings): choose EUR as currency and enable countries (by default only paying customers from US and Canada are allowed).
4. The API Key: Account -> API keys -> PUBLIC LIVE API KEY (a credit card needs to be added to the account in order to get the Live API key).


Deploying to AWS Amplify

1. Log in to the AWS Amplify Console and choose Get Started under Deploy.
2. Connect a branch from your GitHub repository. Connecting your repository allows Amplify to deploy updates on every code commit to a branch.

3. Accept the default build settings. Give the Amplify Console permission to deploy backend resources with your frontend with a service role. This allows the Console to detect changes to both your backend and frontend on every code commit and make updates. If you do not have a service role follow the prompts to create one, then come back to the console and pick it from the dropdown. 

4. Review your changes and then choose Save and deploy. The Amplify Console will pull code from your repository, build changes to the backend and frontend, and deploy your build artifacts at https://master.unique-id.amplifyapp.com

5. Once the subdomain is generated, setup the Environment variables: App settings -> Environment variables

	Variable: GATSBY_SNIPCART_API_KEY -> Value: Snipcart PUBLIC LIVE API KEY
	Variable: GATSBY_SNIPCART_PRODUCT_URL -> Value: https://master.unique-id.amplifyapp.com/pricing

	Redeploy again.

6. Go back to the Snipcart Dashboard and whitelist the generated subdomain for both HTTP and HTTPS: Account -> Domain & URLS

Reference: https://www.gatsbyjs.org/docs/deploying-to-aws-amplify/

Demo: https://master.dq349pyvytnjv.amplifyapp.com/