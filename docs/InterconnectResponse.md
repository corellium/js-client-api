# CorelliumClient.InterconnectResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The interconnect identifier | [optional] 
**name** | **String** | The name of the interconnect | [optional] 
**protocol** | **String** | The protocol used by the interconnect | [optional] 
**type** | **String** | The type of interconnect | [optional] 
**project** | **String** | The UUID of the project | [optional] 
**status** | **String** | The current status of the interconnect | [optional] 
**interfaces** | [**[InstanceInterface]**](InstanceInterface.md) | Array of instance interfaces | [optional] 
**createdAt** | **String** | Creation timestamp | [optional] 
**updatedAt** | **String** | Last update timestamp | [optional] 



## Enum: TypeEnum


* `hub` (value: `"hub"`)

* `switch` (value: `"switch"`)




