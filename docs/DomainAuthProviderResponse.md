# CorelliumClient.DomainAuthProviderResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identifier** | **String** | Provider ID | 
**id** | **String** | Provider ID for backward compatibility with frontend | [optional] 
**providerType** | **String** | Provider Type | 
**provider** | **String** | Provider Type for backward compatibility with frontend | [optional] 
**label** | **String** | Login Button Text | 
**name** | **String** | Title Text for the Frontend&#39;s Provider Configuration Form | [optional] 
**authorizationUrl** | **String** | Coordinator endpoint for Authorizing with this provider | [optional] 
**_default** | **Boolean** | True: Configured in coordinator.json, False: Custom Domain Provider | 
**enabled** | **Boolean** | Enabled/Disabled | 
**config** | [**OpenIDConfig**](OpenIDConfig.md) |  | [optional] 
**createdBy** | **String** | Optional User ID of creator | [optional] 
**createdAt** | **String** | Created Date in ISO-8601 format e.g. 2022-05-06T02:39:23.000Z | 
**updatedAt** | **String** | Updated Date in ISO-8601 format e.g. 2022-05-06T02:39:23.000Z | 


