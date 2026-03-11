# CorelliumClient.SnapshotRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **Number** | Number of entries to return, defaults to 100 | [optional] 
**offset** | **Number** | Number of rows to skip, defaults to 0 | [optional] 
**springboard** | **Boolean** | Denotes whether snapshot was a springboard snapshot | [optional] 
**live** | **Boolean** | Denotes whether snapshot was a live snapshot | [optional] 
**fresh** | **Boolean** | Denotes whether snapshot was created immediately after the device was restored | [optional] 
**deviceName** | **String** | Name of device | [optional] 
**task** | **String** | Task being executed on snapshot | [optional] 
**to** | **String** | Date to filter to, keyed off of createdAt | [optional] 
**from** | **String** | Date to filter from, keyed off of createdAt | [optional] 
**orderBy** | **String** | Sorting order (&#39;-createdAt&#39; or &#39;createdAt&#39;), defaults to -createdAt | [optional] 
**search** | **String** | Last filter applied and searches on snapshot / associated instance name and snapshot / instance id | [optional] 


