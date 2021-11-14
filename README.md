# Lab 8 - Starter

1) Within a Github action that runs whenever code is pushed. We have decided to run automated tests for integration during build stage, so we won't have major issues when we run E2E tests during deployment.
2) No, E2E tests are for UI, not for isolated functions
3) No, because the messaging between users requires request/recieve which is larger than a single unit and more suitable for E2E testing. 
4) Yes, this is a perfect case for unit testing, as it is an isolated feature that does not depend on other features. 