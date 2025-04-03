# CorelliumClient.NetworkConnection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identifier** | **String** | UUIDv4 | 
**provider** | **String** | One of the registered [network provider types](#get-/v1/network/providers) | 
**name** | **String** | User specified name for this network connection. e.g., \&quot;My Network Connection\&quot; | 
**config** | **Object** | An object containing network connection configuration data. Will vary based on network provider type. | 
**projects** | [**[ProjectNetworkState]**](ProjectNetworkState.md) | An object where the keys are project IDs and the values are {@link ProjectNetworkState} objects representing the state of each project. | [optional] 
**createdAt** | **String** | Created Date in ISO-8601 format e.g., \&quot;2022-05-06T02:39:23.000Z\&quot; | 
**updatedAt** | **String** | Updated Date in ISO-8601 format e.g., \&quot;2022-05-06T02:39:23.000Z\&quot; | 
**createdBy** | **String** | UUIDv4 of the user who created this record. | 
**updatedBy** | **String** | UUIDv4 of the user who last updated this record. | 


