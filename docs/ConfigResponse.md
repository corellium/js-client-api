# CorelliumClient.ConfigResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**onSite** | **Boolean** | Denotes whether it&#39;s an on-site install | [optional] 
**showDomainSettings** | **Boolean** | Denotes whether to show domain settings | [optional] 
**version** | **String** | Denotes the version | [optional] 
**invalidBuild** | **Boolean** | Denotes whether the build is invalid | [optional] 
**sepSim** | **Boolean** | Denotes whether sepSim is enabled | [optional] 
**installerAvailable** | **Boolean** | Denotes whether installer is available | [optional] 
**invoicedPublishableKey** | **String** | API publishable key to use for Invoiced | [optional] 
**stripePublicKey** | **String** | Stripe public key | [optional] 
**intercomId** | **String** | Intercom app ID, also known as workspace ID | [optional] 
**auxWebhook** | **String** | Webhook URL for aux | [optional] 
**gtmId** | **String** | Google Tag Manager | [optional] 
**zapierFeedbackWebhook** | **String** | Webhook URL to send feedback into Productboard automatically | [optional] 
**zapierBugsWebhook** | **String** | Webhook URL to send frontend errors to Jira automatically | [optional] 
**billingBackend** | **String** | Default backend billing api name for new subscriptions (e.g. \&quot;stripe\&quot;) | [optional] 
**maintenance** | [**ConfigResponseMaintenance**](ConfigResponseMaintenance.md) |  | [optional] 
**logging** | [**Logging**](Logging.md) |  | [optional] 
**cloudAdmin** | **String** | URL for cloud admin login | [optional] 
**filesAdmin** | **String** | URL for files admin login | [optional] 
**cloudDomain** | **String** | Cloud domain name (usually corellium.com or staging.corellium.com) | [optional] 
**billingDomain** | **String** | Billing domain name | [optional] 
**appDomain** | **String** | App domain name (usually app.corellium.com or app.staging.corellium.com) | [optional] 
**maxNetworkMonitorFileSize** | **String** | Maximum network monitor file size | [optional] 
**enableFirmwareImageUpload** | **Boolean** | Denotes whether users can upload firmware images | [optional] 
**authProviders** | [**[AuthProvider]**](AuthProvider.md) | Auth providers | [optional] 
**snapshotLimit** | **Number** | Maximum number of snapshots to allow | [optional] 
**maxKernelSize** | **Number** | The maximum size, in bytes, (default: 100 MB) that an uploaded kernel should be | [optional] 
**maxRamdiskSize** | **Number** | The maximum size, in bytes, (default: 500 MB) that an uploaded ramdisk should be | [optional] 
**charmSDK** | **String** | Denotes whether charmSDK is enabled | [optional] 
**trial** | [**Trial**](Trial.md) |  | [optional] 
**sentryUrl** | **String** | Sentry URL | [optional] 
**domainAuthenticationProviders** | **Boolean** | If enabled, adds the default providers in their current configuration | [optional] 
**defaultSsid** | **String** | The configured Default SSID from /etc/corellium/setup.json | [optional] 


