# CorelliumClient.InstanceCreateOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sharedSnapshot** | **String** | identifier of the snapshot that was shared. | [optional] 
**sharedSnapshotPassword** | **String** | optional password if the shared snapshot requires a password. | [optional] 
**name** | **String** | the name of the device | [optional] 
**key** | **String** | Key used to encrypt the Instance | [optional] 
**flavor** | **String** | the flavor id | 
**project** | **String** | project UUID | 
**os** | **String** | OS Version | 
**osbuild** | **String** | OS Build | [optional] 
**patches** | **[String]** | list of patches to apply | [optional] 
**fwpackage** | **String** | URL or image id | [optional] 
**origFwPackageUrl** | **String** | URL that firmware package used to create this instance is available at | [optional] 
**encrypt** | **Boolean** |  | [optional] 
**wifiMac** | **String** |  | [optional] 
**volume** | [**VolumeOptions**](VolumeOptions.md) |  | [optional] 
**snapshot** | **String** | Snapshot ID for this instance to be cloned from if defined | [optional] 
**bootOptions** | [**InstanceBootOptions**](InstanceBootOptions.md) |  | [optional] 
**device** | [**Model**](Model.md) |  | [optional] 


