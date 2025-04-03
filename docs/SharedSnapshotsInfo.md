# CorelliumClient.SharedSnapshotsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | UUID of the snapshot | 
**name** | **String** | Snapshot name | 
**model** | **String** | Device model | 
**sharedOn** | **Number** | UNIX Date of when the snapshot was first shared with member | 
**sharedWithMember** | **String** | The member who the snapshot was shared with. Only present in sharedWithUser | [optional] 
**sharedBy** | [**SnapshotOwner**](SnapshotOwner.md) |  | [optional] 


