# CorelliumClient.SnapshotSharing

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sharingType** | **String** |  | 
**password** | **String** | Password with using passwordPublicLink | [optional] 
**sharedBy** | [**SnapshotOwner**](SnapshotOwner.md) |  | [optional] 
**members** | [**[SnapshotMember]**](SnapshotMember.md) | The members who have access to the snapshot | [optional] 



## Enum: SharingTypeEnum


* `publicLink` (value: `"publicLink"`)

* `domainRestrictedLink` (value: `"domainRestrictedLink"`)

* `passwordPublicLink` (value: `"passwordPublicLink"`)

* `emailInvite` (value: `"emailInvite"`)




