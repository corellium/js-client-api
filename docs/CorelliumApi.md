# CorelliumClient.CorelliumApi

All URIs are relative to *https://app.corellium.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAssessment**](CorelliumApi.md#createAssessment) | **POST** /v1/services/matrix/{instanceId}/assessments | Create assessment
[**deleteAssessment**](CorelliumApi.md#deleteAssessment) | **DELETE** /v1/services/matrix/{instanceId}/assessments/{assessmentId} | Delete assessment
[**downloadReport**](CorelliumApi.md#downloadReport) | **GET** /v1/services/matrix/{instanceId}/assessments/{assessmentId}/download | Download report
[**getAssessmentById**](CorelliumApi.md#getAssessmentById) | **GET** /v1/services/matrix/{instanceId}/assessments/{assessmentId} | Get assessment by ID
[**getAssessmentsByInstanceId**](CorelliumApi.md#getAssessmentsByInstanceId) | **GET** /v1/services/matrix/{instanceId}/instances/{instanceId}/assessments | Get assessments by instanceId
[**runTests**](CorelliumApi.md#runTests) | **POST** /v1/services/matrix/{instanceId}/assessments/{assessmentId}/test | Update assessment state and execute MATRIX tests
[**startMonitoring**](CorelliumApi.md#startMonitoring) | **POST** /v1/services/matrix/{instanceId}/assessments/{assessmentId}/start | Update assessment state and begin device monitoring
[**stopMonitoring**](CorelliumApi.md#stopMonitoring) | **POST** /v1/services/matrix/{instanceId}/assessments/{assessmentId}/stop | Update assessment state and stop device monitoring
[**v1AcceptSharedSnapshot**](CorelliumApi.md#v1AcceptSharedSnapshot) | **POST** /v1/snapshots/accept | Accept a snapshot shared with you
[**v1ActivityExport**](CorelliumApi.md#v1ActivityExport) | **POST** /v1/activity/export | Start activity export
[**v1ActivityList**](CorelliumApi.md#v1ActivityList) | **GET** /v1/activity | Get resource activities
[**v1AddProjectKey**](CorelliumApi.md#v1AddProjectKey) | **POST** /v1/projects/{projectId}/keys | Add Project Authorized Key
[**v1AddTeamRoleToProject**](CorelliumApi.md#v1AddTeamRoleToProject) | **PUT** /v1/roles/projects/{projectId}/teams/{teamId}/roles/{roleId} | Add team role to project
[**v1AddUserRoleToProject**](CorelliumApi.md#v1AddUserRoleToProject) | **PUT** /v1/roles/projects/{projectId}/users/{userId}/roles/{roleId} | Add user role to project
[**v1AddUserToTeam**](CorelliumApi.md#v1AddUserToTeam) | **PUT** /v1/teams/{teamId}/users/{userId} | Add user to team
[**v1AgentAppReady**](CorelliumApi.md#v1AgentAppReady) | **GET** /v1/instances/{instanceId}/agent/v1/app/ready | Check if App subsystem is ready
[**v1AgentDeleteFile**](CorelliumApi.md#v1AgentDeleteFile) | **DELETE** /v1/instances/{instanceId}/agent/v1/file/device/{filePath} | Delete a File on VM
[**v1AgentGetFile**](CorelliumApi.md#v1AgentGetFile) | **GET** /v1/instances/{instanceId}/agent/v1/file/device/{filePath} | Download a File from VM
[**v1AgentGetTempFilename**](CorelliumApi.md#v1AgentGetTempFilename) | **POST** /v1/instances/{instanceId}/agent/v1/file/temp | Get the path for a new temp file
[**v1AgentInstallApp**](CorelliumApi.md#v1AgentInstallApp) | **POST** /v1/instances/{instanceId}/agent/v1/app/install | Install App at path
[**v1AgentInstallProfile**](CorelliumApi.md#v1AgentInstallProfile) | **POST** /v1/instances/{instanceId}/agent/v1/profile/install | Install a Profile to VM
[**v1AgentKillApp**](CorelliumApi.md#v1AgentKillApp) | **POST** /v1/instances/{instanceId}/agent/v1/app/apps/{bundleId}/kill | Kill an App
[**v1AgentListAppIcons**](CorelliumApi.md#v1AgentListAppIcons) | **GET** /v1/instances/{instanceId}/agent/v1/app/icons | List App Icons
[**v1AgentListApps**](CorelliumApi.md#v1AgentListApps) | **GET** /v1/instances/{instanceId}/agent/v1/app/apps | List Apps
[**v1AgentListAppsStatus**](CorelliumApi.md#v1AgentListAppsStatus) | **GET** /v1/instances/{instanceId}/agent/v1/app/apps/update | List Apps Status
[**v1AgentListProfiles**](CorelliumApi.md#v1AgentListProfiles) | **GET** /v1/instances/{instanceId}/agent/v1/profile/profiles | List Profiles
[**v1AgentRunApp**](CorelliumApi.md#v1AgentRunApp) | **POST** /v1/instances/{instanceId}/agent/v1/app/apps/{bundleId}/run | Run an App
[**v1AgentSetFileAttributes**](CorelliumApi.md#v1AgentSetFileAttributes) | **PATCH** /v1/instances/{instanceId}/agent/v1/file/device/{filePath} | Change Attrs of a File on VM
[**v1AgentSystemGetAdbAuth**](CorelliumApi.md#v1AgentSystemGetAdbAuth) | **GET** /v1/instances/{instanceId}/agent/v1/system/adbauth | Get ADB Auth Setting (AOSP only)
[**v1AgentSystemGetNetwork**](CorelliumApi.md#v1AgentSystemGetNetwork) | **GET** /v1/instances/{instanceId}/agent/v1/system/network | Get IP of eth0 (AOSP only)
[**v1AgentSystemGetProp**](CorelliumApi.md#v1AgentSystemGetProp) | **POST** /v1/instances/{instanceId}/agent/v1/system/getprop | Get System Property (AOSP only)
[**v1AgentSystemInstallOpenGApps**](CorelliumApi.md#v1AgentSystemInstallOpenGApps) | **POST** /v1/instances/{instanceId}/agent/v1/system/install-opengapps | Install OpenGApps (AOSP only)
[**v1AgentSystemLock**](CorelliumApi.md#v1AgentSystemLock) | **POST** /v1/instances/{instanceId}/agent/v1/system/lock | Lock Device (iOS Only)
[**v1AgentSystemSetAdbAuth**](CorelliumApi.md#v1AgentSystemSetAdbAuth) | **PUT** /v1/instances/{instanceId}/agent/v1/system/adbauth | Set ADB Auth Setting (AOSP only)
[**v1AgentSystemSetHostname**](CorelliumApi.md#v1AgentSystemSetHostname) | **POST** /v1/instances/{instanceId}/agent/v1/system/setHostname | Set Hostname of instance
[**v1AgentSystemShutdown**](CorelliumApi.md#v1AgentSystemShutdown) | **POST** /v1/instances/{instanceId}/agent/v1/system/shutdown | Instruct VM to halt
[**v1AgentSystemUnlock**](CorelliumApi.md#v1AgentSystemUnlock) | **POST** /v1/instances/{instanceId}/agent/v1/system/unlock | Unlock Device (iOS Only)
[**v1AgentUninstallApp**](CorelliumApi.md#v1AgentUninstallApp) | **POST** /v1/instances/{instanceId}/agent/v1/app/apps/{bundleId}/uninstall | Uninstall an App
[**v1AgentUninstallProfile**](CorelliumApi.md#v1AgentUninstallProfile) | **DELETE** /v1/instances/{instanceId}/agent/v1/profile/profiles/{profileId} | Uninstall a Profile from VM
[**v1AgentUploadFile**](CorelliumApi.md#v1AgentUploadFile) | **PUT** /v1/instances/{instanceId}/agent/v1/file/device/{filePath} | Upload a file to VM
[**v1AuthLogin**](CorelliumApi.md#v1AuthLogin) | **POST** /v1/auth/login | Log In
[**v1BtracePreauthorize**](CorelliumApi.md#v1BtracePreauthorize) | **GET** /v1/instances/{instanceId}/btrace-authorize | Pre-authorize an btrace download
[**v1CheckSubdomainExistence**](CorelliumApi.md#v1CheckSubdomainExistence) | **POST** /v1/domain/check | Check the existence of a subdomain
[**v1ClearCoreTrace**](CorelliumApi.md#v1ClearCoreTrace) | **DELETE** /v1/instances/{instanceId}/strace | Clear CoreTrace logs
[**v1ClearHyperTrace**](CorelliumApi.md#v1ClearHyperTrace) | **DELETE** /v1/instances/{instanceId}/btrace | Clear HyperTrace logs
[**v1ClearHyperTraceHooks**](CorelliumApi.md#v1ClearHyperTraceHooks) | **POST** /v1/instances/{instanceId}/hooks/clear | Clear Hooks on an instance
[**v1ClearInstancePanics**](CorelliumApi.md#v1ClearInstancePanics) | **DELETE** /v1/instances/{instanceId}/panics | Clear Panics
[**v1CreateDomainAuthProvider**](CorelliumApi.md#v1CreateDomainAuthProvider) | **POST** /v1/domain/{domainId}/auth | Create a new auth provider for a domain
[**v1CreateHook**](CorelliumApi.md#v1CreateHook) | **POST** /v1/instances/{instanceId}/hooks | Create hypervisor hook for Instance
[**v1CreateImage**](CorelliumApi.md#v1CreateImage) | **POST** /v1/images | Create a new Image
[**v1CreateInstance**](CorelliumApi.md#v1CreateInstance) | **POST** /v1/instances | Create Instance
[**v1CreateNetworkConnection**](CorelliumApi.md#v1CreateNetworkConnection) | **POST** /v1/network/connections | Create a new Network Connection
[**v1CreateProject**](CorelliumApi.md#v1CreateProject) | **POST** /v1/projects | Create a Project
[**v1CreateSnapshot**](CorelliumApi.md#v1CreateSnapshot) | **POST** /v1/instances/{instanceId}/snapshots | Create Instance Snapshot
[**v1CreateUser**](CorelliumApi.md#v1CreateUser) | **POST** /v1/users | Create User
[**v1DeleteDomainAuthProvider**](CorelliumApi.md#v1DeleteDomainAuthProvider) | **DELETE** /v1/domain/{domainId}/auth/{providerId} | Delete an auth provider from a domain
[**v1DeleteHook**](CorelliumApi.md#v1DeleteHook) | **DELETE** /v1/hooks/{hookId} | Delete an existing hypervisor hook
[**v1DeleteImage**](CorelliumApi.md#v1DeleteImage) | **DELETE** /v2/images/{imageId} | Delete Image
[**v1DeleteInstance**](CorelliumApi.md#v1DeleteInstance) | **DELETE** /v1/instances/{instanceId} | Remove Instance
[**v1DeleteInstanceSnapshot**](CorelliumApi.md#v1DeleteInstanceSnapshot) | **DELETE** /v1/instances/{instanceId}/snapshots/{snapshotId} | Delete an Instance Snapshot
[**v1DeleteNetworkConnection**](CorelliumApi.md#v1DeleteNetworkConnection) | **DELETE** /v1/network/connections/{id} | Delete an existing Network Connection
[**v1DeleteProject**](CorelliumApi.md#v1DeleteProject) | **DELETE** /v1/projects/{projectId} | Delete a Project
[**v1DeleteSnapshot**](CorelliumApi.md#v1DeleteSnapshot) | **DELETE** /v1/snapshots/{snapshotId} | Delete a Snapshot
[**v1DeleteSnapshotPermissions**](CorelliumApi.md#v1DeleteSnapshotPermissions) | **DELETE** /v1/snapshots/{snapshotId}/permissions | Delete member(s)
[**v1DeleteUser**](CorelliumApi.md#v1DeleteUser) | **DELETE** /v1/users/{userId} | Delete User
[**v1DisableExposePort**](CorelliumApi.md#v1DisableExposePort) | **POST** /v1/instances/{instanceId}/exposeport/disable | Disable an exposed port on an instance for device access.
[**v1DownloadActivity**](CorelliumApi.md#v1DownloadActivity) | **GET** /v1/activity/export/{taskId}/download | Download activity
[**v1EnableExposePort**](CorelliumApi.md#v1EnableExposePort) | **POST** /v1/instances/{instanceId}/exposeport/enable | Enable an exposed port on an instance for device access.
[**v1ExecuteHyperTraceHooks**](CorelliumApi.md#v1ExecuteHyperTraceHooks) | **POST** /v1/instances/{instanceId}/hooks/execute | Execute Hooks on an instance
[**v1GetActivityExportStatus**](CorelliumApi.md#v1GetActivityExportStatus) | **GET** /v1/activity/export/{taskId} | Get export task status
[**v1GetActivityExportTasks**](CorelliumApi.md#v1GetActivityExportTasks) | **GET** /v1/activity/export | Get all export tasks for user
[**v1GetConfig**](CorelliumApi.md#v1GetConfig) | **GET** /v1/config | Get all configs
[**v1GetDomainAuthProviders**](CorelliumApi.md#v1GetDomainAuthProviders) | **GET** /v1/domain/{domainId}/auth | Return all configured auth providers for a domain (including globally configured providers)
[**v1GetHookById**](CorelliumApi.md#v1GetHookById) | **GET** /v1/hooks/{hookId} | Get hypervisor hook by id
[**v1GetHooks**](CorelliumApi.md#v1GetHooks) | **GET** /v1/instances/{instanceId}/hooks | Get all hypervisor hooks for Instance
[**v1GetImage**](CorelliumApi.md#v1GetImage) | **GET** /v1/images/{imageId} | Get Image Metadata
[**v1GetImages**](CorelliumApi.md#v1GetImages) | **GET** /v1/images | Get all Images Metadata
[**v1GetInstance**](CorelliumApi.md#v1GetInstance) | **GET** /v1/instances/{instanceId} | Get Instance
[**v1GetInstanceConsole**](CorelliumApi.md#v1GetInstanceConsole) | **GET** /v1/instances/{instanceId}/console | Get console websocket URL
[**v1GetInstanceConsoleLog**](CorelliumApi.md#v1GetInstanceConsoleLog) | **GET** /v1/instances/{instanceId}/consoleLog | Get Console Log
[**v1GetInstanceGpios**](CorelliumApi.md#v1GetInstanceGpios) | **GET** /v1/instances/{instanceId}/gpios | Get Instance GPIOs
[**v1GetInstancePanics**](CorelliumApi.md#v1GetInstancePanics) | **GET** /v1/instances/{instanceId}/panics | Get Panics
[**v1GetInstancePeripherals**](CorelliumApi.md#v1GetInstancePeripherals) | **GET** /v1/instances/{instanceId}/peripherals | Get Instance Peripherals
[**v1GetInstanceScreenshot**](CorelliumApi.md#v1GetInstanceScreenshot) | **GET** /v1/instances/{instanceId}/screenshot.{format} | Get Instance Screenshot
[**v1GetInstanceSnapshot**](CorelliumApi.md#v1GetInstanceSnapshot) | **GET** /v1/instances/{instanceId}/snapshots/{snapshotId} | Get Instance Snapshot
[**v1GetInstanceSnapshots**](CorelliumApi.md#v1GetInstanceSnapshots) | **GET** /v1/instances/{instanceId}/snapshots | Get Instance Snapshots
[**v1GetInstances**](CorelliumApi.md#v1GetInstances) | **GET** /v1/instances | Get Instances
[**v1GetModelSoftware**](CorelliumApi.md#v1GetModelSoftware) | **GET** /v1/models/{model}/software | Get Software for Model
[**v1GetModels**](CorelliumApi.md#v1GetModels) | **GET** /v1/models | Get Supported Models
[**v1GetNetworkConnection**](CorelliumApi.md#v1GetNetworkConnection) | **GET** /v1/network/connections/{id} | Return the configuration and per project statuses for a single network provider.
[**v1GetProject**](CorelliumApi.md#v1GetProject) | **GET** /v1/projects/{projectId} | Get a Project
[**v1GetProjectInstances**](CorelliumApi.md#v1GetProjectInstances) | **GET** /v1/projects/{projectId}/instances | Get Instances in Project
[**v1GetProjectKeys**](CorelliumApi.md#v1GetProjectKeys) | **GET** /v1/projects/{projectId}/keys | Get Project Authorized Keys
[**v1GetProjectNetworkLog**](CorelliumApi.md#v1GetProjectNetworkLog) | **GET** /v1/projects/{projectId}/network/log | Retrieve the network connection log for a project
[**v1GetProjectNetworkStatus**](CorelliumApi.md#v1GetProjectNetworkStatus) | **GET** /v1/projects/{projectId}/network/status | Retrieve the network connection status for a project
[**v1GetProjectVpnConfig**](CorelliumApi.md#v1GetProjectVpnConfig) | **GET** /v1/projects/{projectId}/vpnconfig/{format} | Get Project VPN Configuration
[**v1GetProjects**](CorelliumApi.md#v1GetProjects) | **GET** /v1/projects | Get Projects
[**v1GetResetLinkInfo**](CorelliumApi.md#v1GetResetLinkInfo) | **GET** /v1/users/reset-link-info | Send Password Reset Link Info
[**v1GetServiceProviderMetadata**](CorelliumApi.md#v1GetServiceProviderMetadata) | **GET** /v1/auth/providers/:providerId/spmetadata | Get service provider metadata xml from an auth provider
[**v1GetSharedSnapshots**](CorelliumApi.md#v1GetSharedSnapshots) | **GET** /v1/snapshots/shared | Fetch shared snapshots
[**v1GetSnapshot**](CorelliumApi.md#v1GetSnapshot) | **GET** /v1/snapshots/{snapshotId} | Get Snapshot
[**v1InstancesInstanceIdMessagePost**](CorelliumApi.md#v1InstancesInstanceIdMessagePost) | **POST** /v1/instances/{instanceId}/message | Inject a message into an iOS VM
[**v1InstancesInstanceIdNetdumpPcapGet**](CorelliumApi.md#v1InstancesInstanceIdNetdumpPcapGet) | **GET** /v1/instances/{instanceId}/netdump.pcap | Download a netdump pcap file
[**v1InstancesInstanceIdNetworkMonitorPcapGet**](CorelliumApi.md#v1InstancesInstanceIdNetworkMonitorPcapGet) | **GET** /v1/instances/{instanceId}/networkMonitor.pcap | Download a Network Monitor pcap file
[**v1Kcrange**](CorelliumApi.md#v1Kcrange) | **GET** /v1/instances/{instanceId}/btrace-kcrange | Get Kernel extension ranges
[**v1ListNetworkConnections**](CorelliumApi.md#v1ListNetworkConnections) | **GET** /v1/network/connections | List available network connections
[**v1ListNetworkInterfaces**](CorelliumApi.md#v1ListNetworkInterfaces) | **GET** /v1/network/interfaces | List available physical network interfaces
[**v1ListNetworkProviders**](CorelliumApi.md#v1ListNetworkProviders) | **GET** /v1/network/providers | List available network providers
[**v1ListThreads**](CorelliumApi.md#v1ListThreads) | **GET** /v1/instances/{instanceId}/strace/thread-list | Get Running Threads (CoreTrace)
[**v1MediaPlay**](CorelliumApi.md#v1MediaPlay) | **POST** /v1/instances/{instanceId}/media/play | Start playing media
[**v1MediaStop**](CorelliumApi.md#v1MediaStop) | **POST** /v1/instances/{instanceId}/media/stop | Stop playing media
[**v1PartialUpdateNetworkConnection**](CorelliumApi.md#v1PartialUpdateNetworkConnection) | **PATCH** /v1/network/connections/{id} | Update Network Connection (partial)
[**v1PatchInstance**](CorelliumApi.md#v1PatchInstance) | **PATCH** /v1/instances/{instanceId} | Update Instance
[**v1PauseInstance**](CorelliumApi.md#v1PauseInstance) | **POST** /v1/instances/{instanceId}/pause | Pause an Instance
[**v1PostInstanceInput**](CorelliumApi.md#v1PostInstanceInput) | **POST** /v1/instances/{instanceId}/input | Provide Instance Input
[**v1Ready**](CorelliumApi.md#v1Ready) | **GET** /v1/ready | API Status
[**v1RebootInstance**](CorelliumApi.md#v1RebootInstance) | **POST** /v1/instances/{instanceId}/reboot | Reboot an Instance
[**v1RemoveProjectKey**](CorelliumApi.md#v1RemoveProjectKey) | **DELETE** /v1/projects/{projectId}/keys/{keyId} | Delete Project Authorized Key
[**v1RemoveTeamRoleFromProject**](CorelliumApi.md#v1RemoveTeamRoleFromProject) | **DELETE** /v1/roles/projects/{projectId}/teams/{teamId}/roles/{roleId} | Remove team role from project
[**v1RemoveUserFromTeam**](CorelliumApi.md#v1RemoveUserFromTeam) | **DELETE** /v1/teams/{teamId}/users/{userId} | Remove user from team
[**v1RemoveUserRoleFromProject**](CorelliumApi.md#v1RemoveUserRoleFromProject) | **DELETE** /v1/roles/projects/{projectId}/users/{userId}/roles/{roleId} | Remove user role from project
[**v1RenameInstanceSnapshot**](CorelliumApi.md#v1RenameInstanceSnapshot) | **PATCH** /v1/instances/{instanceId}/snapshots/{snapshotId} | Rename an Instance Snapshot
[**v1ResetUserPassword**](CorelliumApi.md#v1ResetUserPassword) | **POST** /v1/users/reset-password | Reset User Password
[**v1RestoreBackup**](CorelliumApi.md#v1RestoreBackup) | **POST** /v1/instances/{instanceId}/restoreBackup | Restore backup
[**v1RestoreInstanceSnapshot**](CorelliumApi.md#v1RestoreInstanceSnapshot) | **POST** /v1/instances/{instanceId}/snapshots/{snapshotId}/restore | Restore an Instance Snapshot
[**v1Roles**](CorelliumApi.md#v1Roles) | **GET** /v1/roles | Get all roles
[**v1RotateInstance**](CorelliumApi.md#v1RotateInstance) | **POST** /v1/instances/{instanceId}/rotate | Rotate device to specified orientation
[**v1SendUserResetLink**](CorelliumApi.md#v1SendUserResetLink) | **POST** /v1/users/send-reset-link | Send Password Reset Link
[**v1SetInstanceGpios**](CorelliumApi.md#v1SetInstanceGpios) | **PUT** /v1/instances/{instanceId}/gpios | Set Instance GPIOs
[**v1SetInstancePeripherals**](CorelliumApi.md#v1SetInstancePeripherals) | **PUT** /v1/instances/{instanceId}/peripherals | Set Instance Peripherals
[**v1SetInstanceState**](CorelliumApi.md#v1SetInstanceState) | **PUT** /v1/instances/{instanceId}/state | Set state of Instance
[**v1SetSnapshotPermissions**](CorelliumApi.md#v1SetSnapshotPermissions) | **POST** /v1/snapshots/{snapshotId}/permissions | Set member list
[**v1ShareSnapshot**](CorelliumApi.md#v1ShareSnapshot) | **POST** /v1/snapshots/{snapshotId}/share | Share snapshot
[**v1SnapshotRename**](CorelliumApi.md#v1SnapshotRename) | **PATCH** /v1/snapshots/{snapshotId} | Rename a Snapshot
[**v1StartCoreTrace**](CorelliumApi.md#v1StartCoreTrace) | **POST** /v1/instances/{instanceId}/strace/enable | Start CoreTrace on an instance
[**v1StartHyperTrace**](CorelliumApi.md#v1StartHyperTrace) | **POST** /v1/instances/{instanceId}/btrace/enable | Start HyperTrace on an instance
[**v1StartInstance**](CorelliumApi.md#v1StartInstance) | **POST** /v1/instances/{instanceId}/start | Start an Instance
[**v1StartNetdump**](CorelliumApi.md#v1StartNetdump) | **POST** /v1/instances/{instanceId}/netdump/enable | Start Enhanced Network Monitor on an instance.
[**v1StartNetworkMonitor**](CorelliumApi.md#v1StartNetworkMonitor) | **POST** /v1/instances/{instanceId}/sslsplit/enable | Start Network Monitor on an instance.
[**v1StopCoreTrace**](CorelliumApi.md#v1StopCoreTrace) | **POST** /v1/instances/{instanceId}/strace/disable | Stop CoreTrace on an instance.
[**v1StopHyperTrace**](CorelliumApi.md#v1StopHyperTrace) | **POST** /v1/instances/{instanceId}/btrace/disable | Stop HyperTrace on an instance.
[**v1StopInstance**](CorelliumApi.md#v1StopInstance) | **POST** /v1/instances/{instanceId}/stop | Stop an Instance
[**v1StopNetdump**](CorelliumApi.md#v1StopNetdump) | **POST** /v1/instances/{instanceId}/netdump/disable | Stop Enhanced Network Monitor on an instance.
[**v1StopNetworkMonitor**](CorelliumApi.md#v1StopNetworkMonitor) | **POST** /v1/instances/{instanceId}/sslsplit/disable | Stop Network Monitor on an instance.
[**v1TeamChange**](CorelliumApi.md#v1TeamChange) | **PATCH** /v1/teams/{teamId} | Update team
[**v1TeamCreate**](CorelliumApi.md#v1TeamCreate) | **POST** /v1/teams | Create team
[**v1TeamDelete**](CorelliumApi.md#v1TeamDelete) | **DELETE** /v1/teams/{teamId} | Delete team
[**v1Teams**](CorelliumApi.md#v1Teams) | **GET** /v1/teams | Get teams
[**v1UnpauseInstance**](CorelliumApi.md#v1UnpauseInstance) | **POST** /v1/instances/{instanceId}/unpause | Unpause an Instance
[**v1UpdateDomainAuthProvider**](CorelliumApi.md#v1UpdateDomainAuthProvider) | **PUT** /v1/domain/{domainId}/auth/{providerId} | Update an auth provider for a domain
[**v1UpdateHook**](CorelliumApi.md#v1UpdateHook) | **PUT** /v1/hooks/{hookId} | Update an existing hypervisor hook
[**v1UpdateNetworkConnection**](CorelliumApi.md#v1UpdateNetworkConnection) | **PUT** /v1/network/connections/{id} | Update Network Connection
[**v1UpdateProject**](CorelliumApi.md#v1UpdateProject) | **PATCH** /v1/projects/{projectId} | Update a Project
[**v1UpdateProjectSettings**](CorelliumApi.md#v1UpdateProjectSettings) | **PATCH** /v1/projects/{projectId}/settings | Change Project Settings
[**v1UpdateUser**](CorelliumApi.md#v1UpdateUser) | **PATCH** /v1/users/{userId} | Update User
[**v1UpgradeInstance**](CorelliumApi.md#v1UpgradeInstance) | **POST** /v1/instances/{instanceId}/upgrade | Upgrade iOS version
[**v1UploadImageData**](CorelliumApi.md#v1UploadImageData) | **POST** /v1/images/{imageId} | Upload Image Data
[**v1UserAgreeTerms**](CorelliumApi.md#v1UserAgreeTerms) | **POST** /v1/users/agree | Consent to the current terms and conditions
[**v1UsersChangePasswordPost**](CorelliumApi.md#v1UsersChangePasswordPost) | **POST** /v1/users/change-password | Change User Password
[**v1UsersLogin**](CorelliumApi.md#v1UsersLogin) | **POST** /v1/users/login | Log In
[**v1WebPlayerAllowedDomains**](CorelliumApi.md#v1WebPlayerAllowedDomains) | **GET** /v1/webplayer/allowedDomains | Retrieve the list of allowed domains for all Webplayer sessions
[**v1WebPlayerCreateSession**](CorelliumApi.md#v1WebPlayerCreateSession) | **POST** /v1/webplayer | Create a new Webplayer Session
[**v1WebPlayerDestroySession**](CorelliumApi.md#v1WebPlayerDestroySession) | **DELETE** /v1/webplayer/{sessionId} | Tear down a Webplayer Session
[**v1WebPlayerListSessions**](CorelliumApi.md#v1WebPlayerListSessions) | **GET** /v1/webplayer | List all Webplayer sessions
[**v1WebPlayerSessionInfo**](CorelliumApi.md#v1WebPlayerSessionInfo) | **GET** /v1/webplayer/{sessionId} | Retrieve Webplayer Session Information
[**v2GetInstanceQuickConnectCommand**](CorelliumApi.md#v2GetInstanceQuickConnectCommand) | **GET** /v2/instances/{instanceId}/quickConnectCommand | Recommended SSH Command for Quick Connect
[**v2GetInstanceState**](CorelliumApi.md#v2GetInstanceState) | **GET** /v2/instances/{instanceId}/state | Get state of Instance



## createAssessment

> AssessmentIdStatus createAssessment(instanceId, createAssessmentDto)

Create assessment

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | ID of instance
let createAssessmentDto = new CorelliumClient.CreateAssessmentDto(); // CreateAssessmentDto | Create a new assessment
apiInstance.createAssessment(instanceId, createAssessmentDto).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| ID of instance | 
 **createAssessmentDto** | [**CreateAssessmentDto**](CreateAssessmentDto.md)| Create a new assessment | 

### Return type

[**AssessmentIdStatus**](AssessmentIdStatus.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAssessment

> deleteAssessment(instanceId, assessmentId)

Delete assessment

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | ID of instance
let assessmentId = "assessmentId_example"; // String | ID of assessment
apiInstance.deleteAssessment(instanceId, assessmentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| ID of instance | 
 **assessmentId** | **String**| ID of assessment | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## downloadReport

> String downloadReport(instanceId, assessmentId, format)

Download report

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | ID of instance
let assessmentId = "assessmentId_example"; // String | ID of assessment
let format = "'html'"; // String | Assessment report download format
apiInstance.downloadReport(instanceId, assessmentId, format).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| ID of instance | 
 **assessmentId** | **String**| ID of assessment | 
 **format** | **String**| Assessment report download format | [default to &#39;html&#39;]

### Return type

**String**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/html, application/json


## getAssessmentById

> Assessment getAssessmentById(instanceId, assessmentId)

Get assessment by ID

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | ID of instance
let assessmentId = "assessmentId_example"; // String | ID of assessment
apiInstance.getAssessmentById(instanceId, assessmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| ID of instance | 
 **assessmentId** | **String**| ID of assessment | 

### Return type

[**Assessment**](Assessment.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAssessmentsByInstanceId

> [Assessment] getAssessmentsByInstanceId(instanceId)

Get assessments by instanceId

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | ID of instance
apiInstance.getAssessmentsByInstanceId(instanceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| ID of instance | 

### Return type

[**[Assessment]**](Assessment.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## runTests

> AssessmentIdStatus runTests(instanceId, assessmentId, opts)

Update assessment state and execute MATRIX tests

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | ID of instance
let assessmentId = "assessmentId_example"; // String | ID of assessment
let opts = {
  'testAssessmentDto': new CorelliumClient.TestAssessmentDto() // TestAssessmentDto | Execute MATRIX tests
};
apiInstance.runTests(instanceId, assessmentId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| ID of instance | 
 **assessmentId** | **String**| ID of assessment | 
 **testAssessmentDto** | [**TestAssessmentDto**](TestAssessmentDto.md)| Execute MATRIX tests | [optional] 

### Return type

[**AssessmentIdStatus**](AssessmentIdStatus.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## startMonitoring

> startMonitoring(instanceId, assessmentId)

Update assessment state and begin device monitoring

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | ID of instance
let assessmentId = "assessmentId_example"; // String | ID of assessment
apiInstance.startMonitoring(instanceId, assessmentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| ID of instance | 
 **assessmentId** | **String**| ID of assessment | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## stopMonitoring

> stopMonitoring(instanceId, assessmentId)

Update assessment state and stop device monitoring

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | ID of instance
let assessmentId = "assessmentId_example"; // String | ID of assessment
apiInstance.stopMonitoring(instanceId, assessmentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| ID of instance | 
 **assessmentId** | **String**| ID of assessment | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AcceptSharedSnapshot

> Snapshot v1AcceptSharedSnapshot(postShareSnapshotRequestPayload)

Accept a snapshot shared with you

Accept a snapshot shared with you

### Example

```javascript
import CorelliumClient from '@corellium/client-api';

let apiInstance = new CorelliumClient.CorelliumApi();
let postShareSnapshotRequestPayload = {
  "accessCode": "1S33IA5G71YJ5",
  "password": "password"
}; // PostShareSnapshotRequestPayload | 
apiInstance.v1AcceptSharedSnapshot(postShareSnapshotRequestPayload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postShareSnapshotRequestPayload** | [**PostShareSnapshotRequestPayload**](PostShareSnapshotRequestPayload.md)|  | 

### Return type

[**Snapshot**](Snapshot.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1ActivityExport

> ActivityExportResponse v1ActivityExport(activityExportDto)

Start activity export

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let activityExportDto = new CorelliumClient.ActivityExportDto(); // ActivityExportDto | 
apiInstance.v1ActivityExport(activityExportDto).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activityExportDto** | [**ActivityExportDto**](ActivityExportDto.md)|  | 

### Return type

[**ActivityExportResponse**](ActivityExportResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1ActivityList

> ActivityList v1ActivityList(opts)

Get resource activities

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let opts = {
  'request': {key: null} // ActivityRequest | 
};
apiInstance.v1ActivityList(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**ActivityRequest**](.md)|  | [optional] 

### Return type

[**ActivityList**](ActivityList.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AddProjectKey

> ProjectKey v1AddProjectKey(projectId, projectKey)

Add Project Authorized Key

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let projectId = "projectId_example"; // String | Project ID - uuid
let projectKey = {
  "kind": "ssh",
  "label": "My New Key",
  "key": "ssh-ed25519 <key>"
}; // ProjectKey | Key to add
apiInstance.v1AddProjectKey(projectId, projectKey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project ID - uuid | 
 **projectKey** | [**ProjectKey**](ProjectKey.md)| Key to add | 

### Return type

[**ProjectKey**](ProjectKey.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AddTeamRoleToProject

> v1AddTeamRoleToProject(projectId, teamId, roleId)

Add team role to project

This endpoint is available for Enterprise accounts only

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let projectId = "projectId_example"; // String | Project ID - uuid
let teamId = "teamId_example"; // String | Team ID - uuid
let roleId = "roleId_example"; // String | Role ID - uuid
apiInstance.v1AddTeamRoleToProject(projectId, teamId, roleId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project ID - uuid | 
 **teamId** | **String**| Team ID - uuid | 
 **roleId** | **String**| Role ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AddUserRoleToProject

> v1AddUserRoleToProject(projectId, userId, roleId)

Add user role to project

This endpoint is available for Enterprise accounts only

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let projectId = "projectId_example"; // String | Project ID - uuid
let userId = "userId_example"; // String | User ID - uuid
let roleId = "roleId_example"; // String | Role ID - uuid
apiInstance.v1AddUserRoleToProject(projectId, userId, roleId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project ID - uuid | 
 **userId** | **String**| User ID - uuid | 
 **roleId** | **String**| Role ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AddUserToTeam

> v1AddUserToTeam(teamId, userId)

Add user to team

This endpoint is available for Enterprise accounts only

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let teamId = "teamId_example"; // String | Team ID - uuid
let userId = "userId_example"; // String | User ID - uuid
apiInstance.v1AddUserToTeam(teamId, userId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| Team ID - uuid | 
 **userId** | **String**| User ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AgentAppReady

> AgentAppReadyResponse v1AgentAppReady(instanceId)

Check if App subsystem is ready

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1AgentAppReady(instanceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

[**AgentAppReadyResponse**](AgentAppReadyResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AgentDeleteFile

> v1AgentDeleteFile(instanceId, filePath)

Delete a File on VM

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let filePath = "filePath_example"; // String | File Path on VM
apiInstance.v1AgentDeleteFile(instanceId, filePath).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **filePath** | **String**| File Path on VM | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AgentGetFile

> File v1AgentGetFile(instanceId, filePath)

Download a File from VM

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let filePath = "filePath_example"; // String | File Path on VM
apiInstance.v1AgentGetFile(instanceId, filePath).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **filePath** | **String**| File Path on VM | 

### Return type

**File**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream, application/json


## v1AgentGetTempFilename

> String v1AgentGetTempFilename(instanceId)

Get the path for a new temp file

Returns a temporary random filename that is guranteed to be unique on the VMs filesystem at the time of invocation of this method.

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1AgentGetTempFilename(instanceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

**String**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AgentInstallApp

> v1AgentInstallApp(instanceId, agentInstallBody)

Install App at path

Installs the app located at path which must be present on the VM filesystem

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let agentInstallBody = {
  "path": "/tmp/test.ipa"
}; // AgentInstallBody | App parameters
apiInstance.v1AgentInstallApp(instanceId, agentInstallBody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **agentInstallBody** | [**AgentInstallBody**](AgentInstallBody.md)| App parameters | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AgentInstallProfile

> v1AgentInstallProfile(instanceId, body)

Install a Profile to VM

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let body = "/path/to/file"; // File | Profile to Install
apiInstance.v1AgentInstallProfile(instanceId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **body** | **File**| Profile to Install | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json


## v1AgentKillApp

> Object v1AgentKillApp(instanceId, bundleId)

Kill an App

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let bundleId = "bundleId_example"; // String | App Bundle ID
apiInstance.v1AgentKillApp(instanceId, bundleId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **bundleId** | **String**| App Bundle ID | 

### Return type

**Object**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AgentListAppIcons

> [AgentIcons] v1AgentListAppIcons(instanceId, bundleID)

List App Icons

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let bundleID = ["null"]; // [String] | App Bundle ID
apiInstance.v1AgentListAppIcons(instanceId, bundleID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **bundleID** | [**[String]**](String.md)| App Bundle ID | 

### Return type

[**[AgentIcons]**](AgentIcons.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AgentListApps

> AgentAppsList v1AgentListApps(instanceId)

List Apps

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1AgentListApps(instanceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

[**AgentAppsList**](AgentAppsList.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AgentListAppsStatus

> AgentAppsList v1AgentListAppsStatus(instanceId)

List Apps Status

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1AgentListAppsStatus(instanceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

[**AgentAppsList**](AgentAppsList.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AgentListProfiles

> AgentProfilesReturn v1AgentListProfiles(instanceId)

List Profiles

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1AgentListProfiles(instanceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

[**AgentProfilesReturn**](AgentProfilesReturn.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AgentRunApp

> Object v1AgentRunApp(instanceId, bundleId)

Run an App

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let bundleId = "bundleId_example"; // String | App Bundle ID
apiInstance.v1AgentRunApp(instanceId, bundleId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **bundleId** | **String**| App Bundle ID | 

### Return type

**Object**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AgentSetFileAttributes

> v1AgentSetFileAttributes(instanceId, filePath, fileChanges)

Change Attrs of a File on VM

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let filePath = "filePath_example"; // String | File Path on VM
let fileChanges = new CorelliumClient.FileChanges(); // FileChanges | New attrs
apiInstance.v1AgentSetFileAttributes(instanceId, filePath, fileChanges).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **filePath** | **String**| File Path on VM | 
 **fileChanges** | [**FileChanges**](FileChanges.md)| New attrs | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## v1AgentSystemGetAdbAuth

> AgentSystemAdbAuth v1AgentSystemGetAdbAuth(instanceId)

Get ADB Auth Setting (AOSP only)

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1AgentSystemGetAdbAuth(instanceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

[**AgentSystemAdbAuth**](AgentSystemAdbAuth.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AgentSystemGetNetwork

> AgentValueReturn v1AgentSystemGetNetwork(instanceId)

Get IP of eth0 (AOSP only)

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1AgentSystemGetNetwork(instanceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

[**AgentValueReturn**](AgentValueReturn.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AgentSystemGetProp

> AgentValueReturn v1AgentSystemGetProp(instanceId, agentSystemGetPropBody)

Get System Property (AOSP only)

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let agentSystemGetPropBody = {
  "property": "corellium.opengapps"
}; // AgentSystemGetPropBody | Parameters
apiInstance.v1AgentSystemGetProp(instanceId, agentSystemGetPropBody).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **agentSystemGetPropBody** | [**AgentSystemGetPropBody**](AgentSystemGetPropBody.md)| Parameters | 

### Return type

[**AgentValueReturn**](AgentValueReturn.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AgentSystemInstallOpenGApps

> v1AgentSystemInstallOpenGApps(instanceId, body)

Install OpenGApps (AOSP only)

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let body = {
    "url": "http://downloads.sourceforge.net/project/opengapps/arm64/20220119/open_gapps-arm64-11.0-pico-20220119.zip?r=&ts=1653516572&use_mirror=gigenet",
    "hash": "58398bf7628f38ef07eaeb3abe26f3ebf0474f4d5ecdac0852bd5de3c15cc828",
    "fingerprint": "google/flame/flame:11/RP1A.200720.009/6720564:user/release-keys__2020-09-05"
}; // Object | Installation parameters
apiInstance.v1AgentSystemInstallOpenGApps(instanceId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **body** | **Object**| Installation parameters | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AgentSystemLock

> v1AgentSystemLock(instanceId)

Lock Device (iOS Only)

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1AgentSystemLock(instanceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AgentSystemSetAdbAuth

> v1AgentSystemSetAdbAuth(instanceId, agentSystemAdbAuth)

Set ADB Auth Setting (AOSP only)

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let agentSystemAdbAuth = {
  "enabled": true
}; // AgentSystemAdbAuth | Desired ADB Auth Setting
apiInstance.v1AgentSystemSetAdbAuth(instanceId, agentSystemAdbAuth).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **agentSystemAdbAuth** | [**AgentSystemAdbAuth**](AgentSystemAdbAuth.md)| Desired ADB Auth Setting | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AgentSystemSetHostname

> v1AgentSystemSetHostname(instanceId, agentSystemSetHostnameBody)

Set Hostname of instance

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let agentSystemSetHostnameBody = new CorelliumClient.AgentSystemSetHostnameBody(); // AgentSystemSetHostnameBody | New hostname
apiInstance.v1AgentSystemSetHostname(instanceId, agentSystemSetHostnameBody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **agentSystemSetHostnameBody** | [**AgentSystemSetHostnameBody**](AgentSystemSetHostnameBody.md)| New hostname | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AgentSystemShutdown

> v1AgentSystemShutdown(instanceId)

Instruct VM to halt

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1AgentSystemShutdown(instanceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AgentSystemUnlock

> v1AgentSystemUnlock(instanceId)

Unlock Device (iOS Only)

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1AgentSystemUnlock(instanceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AgentUninstallApp

> Object v1AgentUninstallApp(instanceId, bundleId)

Uninstall an App

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let bundleId = "bundleId_example"; // String | App Bundle ID
apiInstance.v1AgentUninstallApp(instanceId, bundleId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **bundleId** | **String**| App Bundle ID | 

### Return type

**Object**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AgentUninstallProfile

> v1AgentUninstallProfile(instanceId, profileId)

Uninstall a Profile from VM

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let profileId = "profileId_example"; // String | Instance ID - uuid
apiInstance.v1AgentUninstallProfile(instanceId, profileId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **profileId** | **String**| Instance ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AgentUploadFile

> v1AgentUploadFile(instanceId, filePath, body)

Upload a file to VM

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let filePath = "filePath_example"; // String | File Path on VM to write to
let body = "/path/to/file"; // File | Uploaded File Contents
apiInstance.v1AgentUploadFile(instanceId, filePath, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **filePath** | **String**| File Path on VM to write to | 
 **body** | **File**| Uploaded File Contents | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/octet-stream
- **Accept**: application/json


## v1AuthLogin

> Token v1AuthLogin(body)

Log In

### Example

```javascript
import CorelliumClient from '@corellium/client-api';

let apiInstance = new CorelliumClient.CorelliumApi();
let body = {
  "username": "admin",
  "password": "password"
}; // Object | Authorization data ( Credentials|ApiToken )
apiInstance.v1AuthLogin(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| Authorization data ( Credentials|ApiToken ) | 

### Return type

[**Token**](Token.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1BtracePreauthorize

> Object v1BtracePreauthorize(instanceId)

Pre-authorize an btrace download

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1BtracePreauthorize(instanceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

**Object**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CheckSubdomainExistence

> CheckSubdomainResponse v1CheckSubdomainExistence(v1CheckSubdomainExistenceParameters)

Check the existence of a subdomain

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let v1CheckSubdomainExistenceParameters = new CorelliumClient.V1CheckSubdomainExistenceParameters(); // V1CheckSubdomainExistenceParameters | application/json
apiInstance.v1CheckSubdomainExistence(v1CheckSubdomainExistenceParameters).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v1CheckSubdomainExistenceParameters** | [**V1CheckSubdomainExistenceParameters**](V1CheckSubdomainExistenceParameters.md)| application/json | 

### Return type

[**CheckSubdomainResponse**](CheckSubdomainResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1ClearCoreTrace

> v1ClearCoreTrace(instanceId)

Clear CoreTrace logs

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1ClearCoreTrace(instanceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ClearHyperTrace

> v1ClearHyperTrace(instanceId)

Clear HyperTrace logs

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1ClearHyperTrace(instanceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ClearHyperTraceHooks

> v1ClearHyperTraceHooks(instanceId)

Clear Hooks on an instance

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1ClearHyperTraceHooks(instanceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ClearInstancePanics

> v1ClearInstancePanics(instanceId)

Clear Panics

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1ClearInstancePanics(instanceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CreateDomainAuthProvider

> DomainAuthProviderResponse v1CreateDomainAuthProvider(domainId, domainAuthProviderRequest)

Create a new auth provider for a domain

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let domainId = "domainId_example"; // String | Domain ID - uuid
let domainAuthProviderRequest = {
  "enabled": true,
  "providerType": "open-id-connect",
  "label": "Login with Custom Auth0",
  "config": {
    "discoveryUrl": "http://localhost:8080/realms/Corellium/.well-known/openid-configuration",
    "clientId": "B5GhRzrVn19adO1a1vJ6aZRYdNY9jSP4",
    "clientSecret": "itsasecret",
    "invitedOnly": false
  }
}; // DomainAuthProviderRequest | Request Data
apiInstance.v1CreateDomainAuthProvider(domainId, domainAuthProviderRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainId** | **String**| Domain ID - uuid | 
 **domainAuthProviderRequest** | [**DomainAuthProviderRequest**](DomainAuthProviderRequest.md)| Request Data | 

### Return type

[**DomainAuthProviderResponse**](DomainAuthProviderResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1CreateHook

> Hook v1CreateHook(instanceId, v1CreateHookParameters)

Create hypervisor hook for Instance

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let v1CreateHookParameters = new CorelliumClient.V1CreateHookParameters(); // V1CreateHookParameters | application/json
apiInstance.v1CreateHook(instanceId, v1CreateHookParameters).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **v1CreateHookParameters** | [**V1CreateHookParameters**](V1CreateHookParameters.md)| application/json | 

### Return type

[**Hook**](Hook.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1CreateImage

> Image v1CreateImage(type, encoding, opts)

Create a new Image

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let type = "type_example"; // String | Image type
let encoding = "encoding_example"; // String | How the file is stored
let opts = {
  'encapsulated': true, // Boolean | set to false if the uploaded file is not encapsulated inside an outer zipfile
  'name': "name_example", // String | Image name
  'project': "project_example", // String | Project ID
  'instance': "instance_example", // String | Instance ID
  'file': "/path/to/file" // File | Optionally the actual file
};
apiInstance.v1CreateImage(type, encoding, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Image type | 
 **encoding** | **String**| How the file is stored | 
 **encapsulated** | **Boolean**| set to false if the uploaded file is not encapsulated inside an outer zipfile | [optional] 
 **name** | **String**| Image name | [optional] 
 **project** | **String**| Project ID | [optional] 
 **instance** | **String**| Instance ID | [optional] 
 **file** | **File**| Optionally the actual file | [optional] 

### Return type

[**Image**](Image.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## v1CreateInstance

> InstanceReturn v1CreateInstance(instanceCreateOptions)

Create Instance

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceCreateOptions = {
  "project": "<your_project_id>",
  "name": "rpi4b Created via API",
  "flavor": "rpi4b",
  "os": "11.2.0"
}; // InstanceCreateOptions | The vm definition to create
apiInstance.v1CreateInstance(instanceCreateOptions).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceCreateOptions** | [**InstanceCreateOptions**](InstanceCreateOptions.md)| The vm definition to create | 

### Return type

[**InstanceReturn**](InstanceReturn.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1CreateNetworkConnection

> NetworkConnection v1CreateNetworkConnection(createNetworkConnectionOptions)

Create a new Network Connection

You must have the domain administrator role to create a network connection. VLAN networks are only supported in bridged networking mode.

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let createNetworkConnectionOptions = {
  "provider": "openvpn",
  "name": "My OpenVPN Connection",
  "config": {
    "config": "client\n" +
      "dev tun\n" +
      "proto tcp\n" +
      "remote my-server-1 1194\n" +
      "resolv-retry infinite\n" +
      "nobind\n" +
      "persist-key\n" +
      "persist-tun\n" +
      "remote-cert-tls server\n" +
      "tls-auth ta.key 1\n" +
      "cipher AES-256-CBC\n" +
      "verb 3\n"
  }
}; // CreateNetworkConnectionOptions | Network Connection Options
apiInstance.v1CreateNetworkConnection(createNetworkConnectionOptions).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createNetworkConnectionOptions** | [**CreateNetworkConnectionOptions**](CreateNetworkConnectionOptions.md)| Network Connection Options | 

### Return type

[**NetworkConnection**](NetworkConnection.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1CreateProject

> Project v1CreateProject(project)

Create a Project

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let project = {
  "name": "New Project",
  "settings": {
    "internet-access": true
  },
  "quotas": {
    "cores": 8,
    "instances": 2,
    "ram": 16384
  }
}; // Project | Project
apiInstance.v1CreateProject(project).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | [**Project**](Project.md)| Project | 

### Return type

[**Project**](Project.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1CreateSnapshot

> Snapshot v1CreateSnapshot(instanceId, snapshotCreationOptions)

Create Instance Snapshot

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let snapshotCreationOptions = new CorelliumClient.SnapshotCreationOptions(); // SnapshotCreationOptions | 
apiInstance.v1CreateSnapshot(instanceId, snapshotCreationOptions).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **snapshotCreationOptions** | [**SnapshotCreationOptions**](SnapshotCreationOptions.md)|  | 

### Return type

[**Snapshot**](Snapshot.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1CreateUser

> Object v1CreateUser(body)

Create User

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let body = {key: null}; // Object | User data
apiInstance.v1CreateUser(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| User data | 

### Return type

**Object**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1DeleteDomainAuthProvider

> Object v1DeleteDomainAuthProvider(domainId, providerId)

Delete an auth provider from a domain

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let domainId = "domainId_example"; // String | Domain ID - uuid
let providerId = "providerId_example"; // String | Provider ID - uuid
apiInstance.v1DeleteDomainAuthProvider(domainId, providerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainId** | **String**| Domain ID - uuid | 
 **providerId** | **String**| Provider ID - uuid | 

### Return type

**Object**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1DeleteHook

> v1DeleteHook(hookId)

Delete an existing hypervisor hook

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let hookId = "hookId_example"; // String | Hook ID
apiInstance.v1DeleteHook(hookId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hookId** | **String**| Hook ID | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1DeleteImage

> v1DeleteImage(imageId)

Delete Image

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let imageId = "imageId_example"; // String | Image ID - uuid
apiInstance.v1DeleteImage(imageId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageId** | **String**| Image ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1DeleteInstance

> v1DeleteInstance(instanceId)

Remove Instance

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID
apiInstance.v1DeleteInstance(instanceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1DeleteInstanceSnapshot

> v1DeleteInstanceSnapshot(instanceId, snapshotId)

Delete an Instance Snapshot

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let snapshotId = "snapshotId_example"; // String | Snapshot ID - uuid
apiInstance.v1DeleteInstanceSnapshot(instanceId, snapshotId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **snapshotId** | **String**| Snapshot ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1DeleteNetworkConnection

> v1DeleteNetworkConnection(id, opts)

Delete an existing Network Connection

You must have the domain administrator role to delete a network connection.

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let id = "id_example"; // String | Network Connection Identifier - uuid
let opts = {
  'force': true // Boolean | Force deletion (true only or not present)
};
apiInstance.v1DeleteNetworkConnection(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Network Connection Identifier - uuid | 
 **force** | **Boolean**| Force deletion (true only or not present) | [optional] 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1DeleteProject

> v1DeleteProject(projectId)

Delete a Project

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let projectId = "projectId_example"; // String | Project ID - uuid
apiInstance.v1DeleteProject(projectId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1DeleteSnapshot

> v1DeleteSnapshot(snapshotId)

Delete a Snapshot

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let snapshotId = "snapshotId_example"; // String | Snapshot ID - uuid
apiInstance.v1DeleteSnapshot(snapshotId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | **String**| Snapshot ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1DeleteSnapshotPermissions

> Snapshot v1DeleteSnapshotPermissions(snapshotId, snapshotPermissionsRequestPayload)

Delete member(s)

Deletes one or more members from the list of members who have access to the snapshot

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let snapshotId = "snapshotId_example"; // String | Snapshot ID - uuid
let snapshotPermissionsRequestPayload = {
  "members": [
    "newuser1@domain.com",
    "newuser2@domain.com"
  ]
}; // SnapshotPermissionsRequestPayload | 
apiInstance.v1DeleteSnapshotPermissions(snapshotId, snapshotPermissionsRequestPayload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | **String**| Snapshot ID - uuid | 
 **snapshotPermissionsRequestPayload** | [**SnapshotPermissionsRequestPayload**](SnapshotPermissionsRequestPayload.md)|  | 

### Return type

[**Snapshot**](Snapshot.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1DeleteUser

> Object v1DeleteUser(userId)

Delete User

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let userId = "userId_example"; // String | userId - uuid
apiInstance.v1DeleteUser(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| userId - uuid | 

### Return type

**Object**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1DisableExposePort

> v1DisableExposePort(instanceId)

Disable an exposed port on an instance for device access.

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1DisableExposePort(instanceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1DownloadActivity

> ActivityList v1DownloadActivity(taskId)

Download activity

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let taskId = "taskId_example"; // String | Export ID
apiInstance.v1DownloadActivity(taskId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| Export ID | 

### Return type

[**ActivityList**](ActivityList.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1EnableExposePort

> v1EnableExposePort(instanceId)

Enable an exposed port on an instance for device access.

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1EnableExposePort(instanceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ExecuteHyperTraceHooks

> v1ExecuteHyperTraceHooks(instanceId)

Execute Hooks on an instance

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1ExecuteHyperTraceHooks(instanceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetActivityExportStatus

> ActivityList v1GetActivityExportStatus(taskId)

Get export task status

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let taskId = "taskId_example"; // String | Export ID
apiInstance.v1GetActivityExportStatus(taskId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| Export ID | 

### Return type

[**ActivityList**](ActivityList.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetActivityExportTasks

> ActivityList v1GetActivityExportTasks()

Get all export tasks for user

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
apiInstance.v1GetActivityExportTasks().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ActivityList**](ActivityList.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetConfig

> ConfigResponse v1GetConfig()

Get all configs

### Example

```javascript
import CorelliumClient from '@corellium/client-api';

let apiInstance = new CorelliumClient.CorelliumApi();
apiInstance.v1GetConfig().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ConfigResponse**](ConfigResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetDomainAuthProviders

> [DomainAuthProviderResponse] v1GetDomainAuthProviders(domainId)

Return all configured auth providers for a domain (including globally configured providers)

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let domainId = "domainId_example"; // String | Domain ID - uuid
apiInstance.v1GetDomainAuthProviders(domainId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainId** | **String**| Domain ID - uuid | 

### Return type

[**[DomainAuthProviderResponse]**](DomainAuthProviderResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetHookById

> Hook v1GetHookById(hookId)

Get hypervisor hook by id

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let hookId = "hookId_example"; // String | Hook Id
apiInstance.v1GetHookById(hookId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hookId** | **String**| Hook Id | 

### Return type

[**Hook**](Hook.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetHooks

> [Hook] v1GetHooks(instanceId, opts)

Get all hypervisor hooks for Instance

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let opts = {
  'limit': 3.4, // Number | limit for pagination results, defaults to 20
  'offset': 3.4, // Number | offset for pagination results, defaults to 0
  'sort': "sort_example" // String | sort ASC or DESC, defaults to DESC
};
apiInstance.v1GetHooks(instanceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **limit** | **Number**| limit for pagination results, defaults to 20 | [optional] 
 **offset** | **Number**| offset for pagination results, defaults to 0 | [optional] 
 **sort** | **String**| sort ASC or DESC, defaults to DESC | [optional] 

### Return type

[**[Hook]**](Hook.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetImage

> Image v1GetImage(imageId)

Get Image Metadata

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let imageId = "imageId_example"; // String | Image ID - uuid
apiInstance.v1GetImage(imageId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageId** | **String**| Image ID - uuid | 

### Return type

[**Image**](Image.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetImages

> [Image] v1GetImages(opts)

Get all Images Metadata

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let opts = {
  'project': "project_example" // String | Optionally filter by project - uuid
};
apiInstance.v1GetImages(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | **String**| Optionally filter by project - uuid | [optional] 

### Return type

[**[Image]**](Image.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetInstance

> Instance v1GetInstance(instanceId, opts)

Get Instance

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID
let opts = {
  'returnAttr': ["null"] // [String] | Attributes to include in instance return
};
apiInstance.v1GetInstance(instanceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID | 
 **returnAttr** | [**[String]**](String.md)| Attributes to include in instance return | [optional] 

### Return type

[**Instance**](Instance.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetInstanceConsole

> InstanceConsoleEndpoint v1GetInstanceConsole(instanceId)

Get console websocket URL

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1GetInstanceConsole(instanceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

[**InstanceConsoleEndpoint**](InstanceConsoleEndpoint.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetInstanceConsoleLog

> String v1GetInstanceConsoleLog(instanceId)

Get Console Log

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1GetInstanceConsoleLog(instanceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

**String**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json


## v1GetInstanceGpios

> GpiosState v1GetInstanceGpios(instanceId)

Get Instance GPIOs

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1GetInstanceGpios(instanceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

[**GpiosState**](GpiosState.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetInstancePanics

> [Object] v1GetInstancePanics(instanceId)

Get Panics

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1GetInstancePanics(instanceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

**[Object]**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetInstancePeripherals

> PeripheralsData v1GetInstancePeripherals(instanceId)

Get Instance Peripherals

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1GetInstancePeripherals(instanceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

[**PeripheralsData**](PeripheralsData.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetInstanceScreenshot

> File v1GetInstanceScreenshot(instanceId, format, opts)

Get Instance Screenshot

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let format = "format_example"; // String | New peripherals state
let opts = {
  'scale': 56 // Number | Screenshot scale 1:N
};
apiInstance.v1GetInstanceScreenshot(instanceId, format, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **format** | **String**| New peripherals state | 
 **scale** | **Number**| Screenshot scale 1:N | [optional] 

### Return type

**File**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png, image/jpeg, application/json


## v1GetInstanceSnapshot

> Snapshot v1GetInstanceSnapshot(instanceId, snapshotId)

Get Instance Snapshot

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let snapshotId = "snapshotId_example"; // String | Snapshot ID - uuid
apiInstance.v1GetInstanceSnapshot(instanceId, snapshotId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **snapshotId** | **String**| Snapshot ID - uuid | 

### Return type

[**Snapshot**](Snapshot.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetInstanceSnapshots

> [Snapshot] v1GetInstanceSnapshots(instanceId)

Get Instance Snapshots

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1GetInstanceSnapshots(instanceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

[**[Snapshot]**](Snapshot.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetInstances

> [Instance] v1GetInstances(opts)

Get Instances

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let opts = {
  'name': "name_example", // String | Optionally filter by instance name
  'returnAttr': ["null"] // [String] | Attributes to include in instance return
};
apiInstance.v1GetInstances(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Optionally filter by instance name | [optional] 
 **returnAttr** | [**[String]**](String.md)| Attributes to include in instance return | [optional] 

### Return type

[**[Instance]**](Instance.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetModelSoftware

> [Firmware] v1GetModelSoftware(model)

Get Software for Model

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let model = "model_example"; // String | Model to list available software for
apiInstance.v1GetModelSoftware(model).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **model** | **String**| Model to list available software for | 

### Return type

[**[Firmware]**](Firmware.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetModels

> [Model] v1GetModels()

Get Supported Models

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
apiInstance.v1GetModels().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Model]**](Model.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetNetworkConnection

> NetworkConnection v1GetNetworkConnection(id)

Return the configuration and per project statuses for a single network provider.

You must have the domain administrator or project administrator role to fetch a network connection.

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let id = "id_example"; // String | Network Connection Identifier - uuid
apiInstance.v1GetNetworkConnection(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Network Connection Identifier - uuid | 

### Return type

[**NetworkConnection**](NetworkConnection.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetProject

> Project v1GetProject(projectId)

Get a Project

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let projectId = "projectId_example"; // String | Project ID - uuid
apiInstance.v1GetProject(projectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project ID - uuid | 

### Return type

[**Project**](Project.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetProjectInstances

> [Instance] v1GetProjectInstances(projectId, opts)

Get Instances in Project

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let projectId = "projectId_example"; // String | Project ID - uuid
let opts = {
  'name': "name_example", // String | Filter by project name
  'returnAttr': ["null"] // [String] | Attributes to include in instance return
};
apiInstance.v1GetProjectInstances(projectId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project ID - uuid | 
 **name** | **String**| Filter by project name | [optional] 
 **returnAttr** | [**[String]**](String.md)| Attributes to include in instance return | [optional] 

### Return type

[**[Instance]**](Instance.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetProjectKeys

> [ProjectKey] v1GetProjectKeys(projectId)

Get Project Authorized Keys

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let projectId = "projectId_example"; // String | Project ID - uuid
apiInstance.v1GetProjectKeys(projectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project ID - uuid | 

### Return type

[**[ProjectKey]**](ProjectKey.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetProjectNetworkLog

> String v1GetProjectNetworkLog(projectId)

Retrieve the network connection log for a project

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let projectId = "projectId_example"; // String | Project ID (must be a valid UUID)
apiInstance.v1GetProjectNetworkLog(projectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project ID (must be a valid UUID) | 

### Return type

**String**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetProjectNetworkStatus

> NetworkStatusResponse v1GetProjectNetworkStatus(projectId)

Retrieve the network connection status for a project

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let projectId = "projectId_example"; // String | Project ID - uuid
apiInstance.v1GetProjectNetworkStatus(projectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project ID - uuid | 

### Return type

[**NetworkStatusResponse**](NetworkStatusResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetProjectVpnConfig

> String v1GetProjectVpnConfig(projectId, format)

Get Project VPN Configuration

A Project VPN allows connection _into_ virtual devices in the project (e.g., connecting a researcher&#39;s computer as a VPN client to a virtual device within the project). If a Project VPN has been defined, this will return the configuration.

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let projectId = "projectId_example"; // String | Project ID - uuid
let format = "format_example"; // String | VPN Config format
apiInstance.v1GetProjectVpnConfig(projectId, format).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project ID - uuid | 
 **format** | **String**| VPN Config format | 

### Return type

**String**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/x-openvpn-profile, application/json


## v1GetProjects

> [Project] v1GetProjects(opts)

Get Projects

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let opts = {
  'name': "name_example", // String | Filter by project name
  'idsOnly': true // Boolean | Only include id of project in results
};
apiInstance.v1GetProjects(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filter by project name | [optional] 
 **idsOnly** | **Boolean**| Only include id of project in results | [optional] 

### Return type

[**[Project]**](Project.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetResetLinkInfo

> Object v1GetResetLinkInfo(token)

Send Password Reset Link Info

### Example

```javascript
import CorelliumClient from '@corellium/client-api';

let apiInstance = new CorelliumClient.CorelliumApi();
let token = "token_example"; // String | Reset token
apiInstance.v1GetResetLinkInfo(token).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**| Reset token | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetServiceProviderMetadata

> Object v1GetServiceProviderMetadata(providerId)

Get service provider metadata xml from an auth provider

### Example

```javascript
import CorelliumClient from '@corellium/client-api';

let apiInstance = new CorelliumClient.CorelliumApi();
let providerId = "providerId_example"; // String | Provider ID - uuid
apiInstance.v1GetServiceProviderMetadata(providerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | **String**| Provider ID - uuid | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetSharedSnapshots

> UserSnapshots v1GetSharedSnapshots()

Fetch shared snapshots

Fetch snapshots shared with and shared by the requesting user

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
apiInstance.v1GetSharedSnapshots().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UserSnapshots**](UserSnapshots.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GetSnapshot

> Snapshot v1GetSnapshot(snapshotId)

Get Snapshot

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let snapshotId = "snapshotId_example"; // String | Snapshot ID - uuid
apiInstance.v1GetSnapshot(snapshotId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | **String**| Snapshot ID - uuid | 

### Return type

[**Snapshot**](Snapshot.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1InstancesInstanceIdMessagePost

> v1InstancesInstanceIdMessagePost(instanceId, body)

Inject a message into an iOS VM

Given a message and source phone number, place this message as an incoming SMS message on the iOS VM. For advanced usage, a raw message of bytes may be sent. In this case, the parameter should provide hex encoded bytes  (0x00 0x11 0x22 0x33 in the example below) which are sent verbatim.  The user must ensure that the body is the correct format for the underlying device stack.

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let body = {
  "number": "+19997776666",
  "message": "the SMS message body goes here"
}; // Object | Message data
apiInstance.v1InstancesInstanceIdMessagePost(instanceId, body).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **body** | **Object**| Message data | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1InstancesInstanceIdNetdumpPcapGet

> File v1InstancesInstanceIdNetdumpPcapGet(instanceId)

Download a netdump pcap file

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1InstancesInstanceIdNetdumpPcapGet(instanceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

**File**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tcpdump.pcap, application/json


## v1InstancesInstanceIdNetworkMonitorPcapGet

> File v1InstancesInstanceIdNetworkMonitorPcapGet(instanceId)

Download a Network Monitor pcap file

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1InstancesInstanceIdNetworkMonitorPcapGet(instanceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

**File**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.tcpdump.pcap, application/json


## v1Kcrange

> [Kcrange] v1Kcrange(instanceId)

Get Kernel extension ranges

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1Kcrange(instanceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

[**[Kcrange]**](Kcrange.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ListNetworkConnections

> NetworkConnectionOffsetPaginationResult v1ListNetworkConnections(opts)

List available network connections

You must have the domain administrator or project administrator role to list network connections.

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let opts = {
  'limit': 3.4, // Number | The maximum number of items to return.
  'offset': 3.4 // Number | The starting index of the items to return.
};
apiInstance.v1ListNetworkConnections(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The maximum number of items to return. | [optional] 
 **offset** | **Number**| The starting index of the items to return. | [optional] 

### Return type

[**NetworkConnectionOffsetPaginationResult**](NetworkConnectionOffsetPaginationResult.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ListNetworkInterfaces

> [String] v1ListNetworkInterfaces()

List available physical network interfaces

Lists available physical network interfaces that can be used for VLAN configuration. You must have the domain administrator role to list network interfaces.

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
apiInstance.v1ListNetworkInterfaces().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

**[String]**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ListNetworkProviders

> NetworkConnectionProviderOffsetPaginationResult v1ListNetworkProviders()

List available network providers

Provides a list of registered network providers to be used when [creating network connections](#post-/v1/network/connections). You must have the domain administrator role to list network providers.

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
apiInstance.v1ListNetworkProviders().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**NetworkConnectionProviderOffsetPaginationResult**](NetworkConnectionProviderOffsetPaginationResult.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ListThreads

> [KernelTask] v1ListThreads(instanceId)

Get Running Threads (CoreTrace)

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1ListThreads(instanceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

[**[KernelTask]**](KernelTask.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1MediaPlay

> v1MediaPlay(instanceId, mediaPlayBody)

Start playing media

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let mediaPlayBody = {
  "url": "http://null.to/test.mp4"
}; // MediaPlayBody | Request Body
apiInstance.v1MediaPlay(instanceId, mediaPlayBody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **mediaPlayBody** | [**MediaPlayBody**](MediaPlayBody.md)| Request Body | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1MediaStop

> v1MediaStop(instanceId)

Stop playing media

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1MediaStop(instanceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1PartialUpdateNetworkConnection

> v1PartialUpdateNetworkConnection(id, updateNetworkConnectionOptions, opts)

Update Network Connection (partial)

Only updates the specified attributes. You must have the domain administrator role to update a network connection.

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let id = "id_example"; // String | Network Connection Identifier - uuid
let updateNetworkConnectionOptions = {
  "name": "My Renamed OpenVPN Connection"
}; // UpdateNetworkConnectionOptions | Network Connection Options
let opts = {
  'force': true // Boolean | Force deletion (true only or not present)
};
apiInstance.v1PartialUpdateNetworkConnection(id, updateNetworkConnectionOptions, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Network Connection Identifier - uuid | 
 **updateNetworkConnectionOptions** | [**UpdateNetworkConnectionOptions**](UpdateNetworkConnectionOptions.md)| Network Connection Options | 
 **force** | **Boolean**| Force deletion (true only or not present) | [optional] 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## v1PatchInstance

> Instance v1PatchInstance(instanceId, patchInstanceOptions)

Update Instance

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID
let patchInstanceOptions = {
 "name": "New Name"
}; // PatchInstanceOptions | 
apiInstance.v1PatchInstance(instanceId, patchInstanceOptions).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID | 
 **patchInstanceOptions** | [**PatchInstanceOptions**](PatchInstanceOptions.md)|  | 

### Return type

[**Instance**](Instance.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1PauseInstance

> v1PauseInstance(instanceId)

Pause an Instance

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1PauseInstance(instanceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1PostInstanceInput

> InputResponse v1PostInstanceInput(instanceId, instanceInput)

Provide Instance Input

Sends a touch or button event to the VM.  - Buttons (or keys) to be held during the input are specified as an array of strings, each string must be either a single ascii character or one of the following keywords:   - VM Buttons: finger, homeButton, holdButton, volumeUp, volumeDown, ringerSwitch, backButton, overviewButton   - Keyboard Buttons: again, alt, alterase, apostrophe, back, backslash, backspace, bassboost, bookmarks, bsp, calc, camera, cancel, caps, capslock, chat, close, closecd, comma, compose, computer, config, connect, copy, ctrl, cut, cyclewindows, dashboard, del, delete, deletefile, dot, down, edit, eject, ejectclose, email, end, enter, equal, esc, escape, exit, f1, f10, f11, f12, f13, f14, f15, f16, f17, f18, f19, f2, f20, f21, f22, f23, f24, f3, f4, f5, f6, f7, f8, f9, fastfwd, file, finance, find, forward, front, grave, hangeul, hanja, help, henkan, home, homepage, hp, hrgn, ins, insert, iso, k102, kp0, kp1, kp2, kp3, kp4, kp5, kp6, kp7, kp8, kp9, kpasterisk, kpcomma, kpdot, kpenter, kpequal, kpjpcomma, kpleftparen, kpminus, kpplus, kpplusminus, kprightparen, kpslash, ktkn, ktknhrgn, left, leftalt, leftbrace, leftctrl, leftmeta, leftshift, linefeed, macro, mail, menu, meta, minus, move, msdos, muhenkan, mute, new, next, numlock, open, pagedown, pageup, paste, pause, pausecd, pgdn, pgup, phone, play, playcd, playpause, power, previous, print, prog1, prog2, prog3, prog4, props, question, record, redo, refresh, return, rewind, right, rightalt, rightbrace, rightctrl, rightmeta, rightshift, ro, rotate, scale, screenlock, scrolldown, scrolllock, scrollup, search, semicolon, sendfile, setup, shift, shop, slash, sleep, sound, space, sport, stop, stopcd, suspend, sysrq, tab, undo, up, voldown, volup, wakeup, www, xfer, yen, zkhk

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let instanceInput = [
  {
    "buttons": ["finger"],
    "position": [
      [300, 600]
    ],
    "wait": 0
  },
  {
    "buttons": [],
    "wait": 100
  }
]; // [InstanceInput] | The input to send to the VM
apiInstance.v1PostInstanceInput(instanceId, instanceInput).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **instanceInput** | [**[InstanceInput]**](InstanceInput.md)| The input to send to the VM | 

### Return type

[**InputResponse**](InputResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1Ready

> v1Ready()

API Status

Check if  API is ready for queries

### Example

```javascript
import CorelliumClient from '@corellium/client-api';

let apiInstance = new CorelliumClient.CorelliumApi();
apiInstance.v1Ready().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1RebootInstance

> v1RebootInstance(instanceId)

Reboot an Instance

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1RebootInstance(instanceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1RemoveProjectKey

> v1RemoveProjectKey(projectId, keyId)

Delete Project Authorized Key

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let projectId = "projectId_example"; // String | Project ID - uuid
let keyId = "keyId_example"; // String | Key ID - uuid
apiInstance.v1RemoveProjectKey(projectId, keyId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project ID - uuid | 
 **keyId** | **String**| Key ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1RemoveTeamRoleFromProject

> v1RemoveTeamRoleFromProject(projectId, teamId, roleId)

Remove team role from project

This endpoint is available for Enterprise accounts only

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let projectId = "projectId_example"; // String | Project ID - uuid
let teamId = "teamId_example"; // String | Team ID - uuid
let roleId = "roleId_example"; // String | Role ID - uuid
apiInstance.v1RemoveTeamRoleFromProject(projectId, teamId, roleId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project ID - uuid | 
 **teamId** | **String**| Team ID - uuid | 
 **roleId** | **String**| Role ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1RemoveUserFromTeam

> v1RemoveUserFromTeam(teamId, userId)

Remove user from team

This endpoint is available for Enterprise accounts only

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let teamId = "teamId_example"; // String | Team ID - uuid
let userId = "userId_example"; // String | User ID - uuid
apiInstance.v1RemoveUserFromTeam(teamId, userId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| Team ID - uuid | 
 **userId** | **String**| User ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1RemoveUserRoleFromProject

> v1RemoveUserRoleFromProject(projectId, userId, roleId)

Remove user role from project

This endpoint is available for Enterprise accounts only

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let projectId = "projectId_example"; // String | Project ID - uuid
let userId = "userId_example"; // String | User ID - uuid
let roleId = "roleId_example"; // String | Role ID - uuid
apiInstance.v1RemoveUserRoleFromProject(projectId, userId, roleId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project ID - uuid | 
 **userId** | **String**| User ID - uuid | 
 **roleId** | **String**| Role ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1RenameInstanceSnapshot

> Snapshot v1RenameInstanceSnapshot(instanceId, snapshotId, snapshotCreationOptions)

Rename an Instance Snapshot

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let snapshotId = "snapshotId_example"; // String | Snapshot ID - uuid
let snapshotCreationOptions = new CorelliumClient.SnapshotCreationOptions(); // SnapshotCreationOptions | 
apiInstance.v1RenameInstanceSnapshot(instanceId, snapshotId, snapshotCreationOptions).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **snapshotId** | **String**| Snapshot ID - uuid | 
 **snapshotCreationOptions** | [**SnapshotCreationOptions**](SnapshotCreationOptions.md)|  | 

### Return type

[**Snapshot**](Snapshot.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1ResetUserPassword

> v1ResetUserPassword(passwordResetBody)

Reset User Password

### Example

```javascript
import CorelliumClient from '@corellium/client-api';

let apiInstance = new CorelliumClient.CorelliumApi();
let passwordResetBody = {
  "token": "<token>",
  "totpToken": "<totpToken>",
  "new-password": "password"
}; // PasswordResetBody | application/json
apiInstance.v1ResetUserPassword(passwordResetBody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordResetBody** | [**PasswordResetBody**](PasswordResetBody.md)| application/json | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1RestoreBackup

> v1RestoreBackup(instanceId, opts)

Restore backup

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let opts = {
  'body': {key: null} // Object | Restore backup data
};
apiInstance.v1RestoreBackup(instanceId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **body** | **Object**| Restore backup data | [optional] 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1RestoreInstanceSnapshot

> v1RestoreInstanceSnapshot(instanceId, snapshotId)

Restore an Instance Snapshot

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let snapshotId = "snapshotId_example"; // String | Snapshot ID - uuid
apiInstance.v1RestoreInstanceSnapshot(instanceId, snapshotId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **snapshotId** | **String**| Snapshot ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1Roles

> [Role] v1Roles()

Get all roles

This endpoint is available for Enterprise accounts only

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
apiInstance.v1Roles().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Role]**](Role.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1RotateInstance

> v1RotateInstance(instanceId, rotateBody)

Rotate device to specified orientation

Rotate device to orientation.  Accepted orientations: 1. Portrait 2. Portrait vertically inverted (up-side-down) 3. Landscape with top of the device to the left 4. Landscape with top of the device to the right

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | 
let rotateBody = {
  "orientation": 1
}; // RotateBody | 
apiInstance.v1RotateInstance(instanceId, rotateBody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**|  | 
 **rotateBody** | [**RotateBody**](RotateBody.md)|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1SendUserResetLink

> v1SendUserResetLink(resetLinkBody)

Send Password Reset Link

### Example

```javascript
import CorelliumClient from '@corellium/client-api';

let apiInstance = new CorelliumClient.CorelliumApi();
let resetLinkBody = new CorelliumClient.ResetLinkBody(); // ResetLinkBody | application/json
apiInstance.v1SendUserResetLink(resetLinkBody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resetLinkBody** | [**ResetLinkBody**](ResetLinkBody.md)| application/json | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1SetInstanceGpios

> GpiosState v1SetInstanceGpios(instanceId, gpiosState)

Set Instance GPIOs

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let gpiosState = {
  "button": {
    "bitCount": 2,
    "banks": [
      [0,1],
      [1,0]
    ]
  },
  "switch": {
    "bitCount": 8,
    "banks": [
      [0,1,0,1,0,1,0,1]
    ]
  }
}; // GpiosState | New GPIO state
apiInstance.v1SetInstanceGpios(instanceId, gpiosState).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **gpiosState** | [**GpiosState**](GpiosState.md)| New GPIO state | 

### Return type

[**GpiosState**](GpiosState.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1SetInstancePeripherals

> PeripheralsData v1SetInstancePeripherals(instanceId, peripheralsData)

Set Instance Peripherals

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let peripheralsData = {
  "acceleration": [0, 9.81, 0],
  "gyroscope": [0, 0, 0],
  "magnetic": [0, 45, 0 ],
  "orientation": [0, 0, 0 ],
  "temperature": 25,
  "proximity": 50,
  "light": 20,
  "pressure": 1013.25,
  "humidity": 55
}; // PeripheralsData | New peripherals state
apiInstance.v1SetInstancePeripherals(instanceId, peripheralsData).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **peripheralsData** | [**PeripheralsData**](PeripheralsData.md)| New peripherals state | 

### Return type

[**PeripheralsData**](PeripheralsData.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1SetInstanceState

> v1SetInstanceState(instanceId, v1SetStateBody)

Set state of Instance

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let v1SetStateBody = new CorelliumClient.V1SetStateBody(); // V1SetStateBody | Desired State
apiInstance.v1SetInstanceState(instanceId, v1SetStateBody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **v1SetStateBody** | [**V1SetStateBody**](V1SetStateBody.md)| Desired State | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1SetSnapshotPermissions

> Snapshot v1SetSnapshotPermissions(snapshotId, snapshotPermissionsRequestPayload)

Set member list

Sets the list of members who have access to the snapshot

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let snapshotId = "snapshotId_example"; // String | Snapshot ID - uuid
let snapshotPermissionsRequestPayload = {
  "members": [
    "newuser1@domain.com",
    "newuser2@domain.com"
  ]
}; // SnapshotPermissionsRequestPayload | 
apiInstance.v1SetSnapshotPermissions(snapshotId, snapshotPermissionsRequestPayload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | **String**| Snapshot ID - uuid | 
 **snapshotPermissionsRequestPayload** | [**SnapshotPermissionsRequestPayload**](SnapshotPermissionsRequestPayload.md)|  | 

### Return type

[**Snapshot**](Snapshot.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1ShareSnapshot

> Snapshot v1ShareSnapshot(snapshotId, postShareSnapshotRequestPayload)

Share snapshot

Share a snapshot

### Example

```javascript
import CorelliumClient from '@corellium/client-api';

let apiInstance = new CorelliumClient.CorelliumApi();
let snapshotId = "snapshotId_example"; // String | Snapshot ID - uuid
let postShareSnapshotRequestPayload = {
  "sharingType": "passwordPublicLink",
  "password": "password"
}; // PostShareSnapshotRequestPayload | 
apiInstance.v1ShareSnapshot(snapshotId, postShareSnapshotRequestPayload).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | **String**| Snapshot ID - uuid | 
 **postShareSnapshotRequestPayload** | [**PostShareSnapshotRequestPayload**](PostShareSnapshotRequestPayload.md)|  | 

### Return type

[**Snapshot**](Snapshot.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1SnapshotRename

> Snapshot v1SnapshotRename(snapshotId, snapshotCreationOptions)

Rename a Snapshot

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let snapshotId = "snapshotId_example"; // String | Snapshot ID - uuid
let snapshotCreationOptions = new CorelliumClient.SnapshotCreationOptions(); // SnapshotCreationOptions | 
apiInstance.v1SnapshotRename(snapshotId, snapshotCreationOptions).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapshotId** | **String**| Snapshot ID - uuid | 
 **snapshotCreationOptions** | [**SnapshotCreationOptions**](SnapshotCreationOptions.md)|  | 

### Return type

[**Snapshot**](Snapshot.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1StartCoreTrace

> v1StartCoreTrace(instanceId)

Start CoreTrace on an instance

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1StartCoreTrace(instanceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1StartHyperTrace

> v1StartHyperTrace(instanceId, btraceEnableOptions)

Start HyperTrace on an instance

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let btraceEnableOptions = new CorelliumClient.BtraceEnableOptions(); // BtraceEnableOptions | 
apiInstance.v1StartHyperTrace(instanceId, btraceEnableOptions).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **btraceEnableOptions** | [**BtraceEnableOptions**](BtraceEnableOptions.md)|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1StartInstance

> v1StartInstance(instanceId, opts)

Start an Instance

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let opts = {
  'instanceStartOptions': new CorelliumClient.InstanceStartOptions() // InstanceStartOptions | Start options
};
apiInstance.v1StartInstance(instanceId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **instanceStartOptions** | [**InstanceStartOptions**](InstanceStartOptions.md)| Start options | [optional] 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1StartNetdump

> v1StartNetdump(instanceId, opts)

Start Enhanced Network Monitor on an instance.

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let opts = {
  'netdumpFilter': { } // NetdumpFilter | 
};
apiInstance.v1StartNetdump(instanceId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **netdumpFilter** | [**NetdumpFilter**](NetdumpFilter.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1StartNetworkMonitor

> v1StartNetworkMonitor(instanceId, opts)

Start Network Monitor on an instance.

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let opts = {
  'sslsplitFilter': new CorelliumClient.SslsplitFilter() // SslsplitFilter | 
};
apiInstance.v1StartNetworkMonitor(instanceId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **sslsplitFilter** | [**SslsplitFilter**](SslsplitFilter.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1StopCoreTrace

> v1StopCoreTrace(instanceId)

Stop CoreTrace on an instance.

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1StopCoreTrace(instanceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1StopHyperTrace

> v1StopHyperTrace(instanceId)

Stop HyperTrace on an instance.

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1StopHyperTrace(instanceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1StopInstance

> v1StopInstance(instanceId, opts)

Stop an Instance

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let opts = {
  'instanceStopOptions': new CorelliumClient.InstanceStopOptions() // InstanceStopOptions | Stop options
};
apiInstance.v1StopInstance(instanceId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **instanceStopOptions** | [**InstanceStopOptions**](InstanceStopOptions.md)| Stop options | [optional] 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1StopNetdump

> v1StopNetdump(instanceId)

Stop Enhanced Network Monitor on an instance.

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1StopNetdump(instanceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1StopNetworkMonitor

> v1StopNetworkMonitor(instanceId)

Stop Network Monitor on an instance.

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1StopNetworkMonitor(instanceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1TeamChange

> v1TeamChange(teamId, createTeam)

Update team

This endpoint is available for Enterprise accounts only

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let teamId = "teamId_example"; // String | Team ID - uuid
let createTeam = { "name": "Test Team"}; // CreateTeam | 
apiInstance.v1TeamChange(teamId, createTeam).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| Team ID - uuid | 
 **createTeam** | [**CreateTeam**](CreateTeam.md)|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1TeamCreate

> TeamCreate v1TeamCreate(createTeam)

Create team

This endpoint is available for Enterprise accounts only

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let createTeam = { "name": "Test Team"}; // CreateTeam | 
apiInstance.v1TeamCreate(createTeam).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTeam** | [**CreateTeam**](CreateTeam.md)|  | 

### Return type

[**TeamCreate**](TeamCreate.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1TeamDelete

> v1TeamDelete(teamId)

Delete team

This endpoint is available for Enterprise accounts only

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let teamId = "teamId_example"; // String | Team ID - uuid
apiInstance.v1TeamDelete(teamId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| Team ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1Teams

> [Team] v1Teams()

Get teams

This endpoint is available for Enterprise accounts only

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
apiInstance.v1Teams().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Team]**](Team.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1UnpauseInstance

> v1UnpauseInstance(instanceId)

Unpause an Instance

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v1UnpauseInstance(instanceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1UpdateDomainAuthProvider

> DomainAuthProviderResponse v1UpdateDomainAuthProvider(domainId, providerId, domainAuthProviderRequest)

Update an auth provider for a domain

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let domainId = "domainId_example"; // String | Domain ID - uuid
let providerId = "providerId_example"; // String | Provider ID - uuid
let domainAuthProviderRequest = {
  "enabled": false,
  "providerType": "open-id-connect",
  "label": "Login with Custom Auth0",
  "config": {
    "discoveryUrl": "http://localhost:8080/realms/Corellium/.well-known/openid-configuration",
    "clientId": "B5GhRzrVn19adO1a1vJ6aZRYdNY9jSP4",
    "clientSecret": "itsasecret",
    "invitedOnly": true
  }
}; // DomainAuthProviderRequest | Request Data
apiInstance.v1UpdateDomainAuthProvider(domainId, providerId, domainAuthProviderRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domainId** | **String**| Domain ID - uuid | 
 **providerId** | **String**| Provider ID - uuid | 
 **domainAuthProviderRequest** | [**DomainAuthProviderRequest**](DomainAuthProviderRequest.md)| Request Data | 

### Return type

[**DomainAuthProviderResponse**](DomainAuthProviderResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1UpdateHook

> Hook v1UpdateHook(hookId, v1CreateHookParameters)

Update an existing hypervisor hook

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let hookId = "hookId_example"; // String | Hook ID
let v1CreateHookParameters = { "enabled": false}; // V1CreateHookParameters | application/json
apiInstance.v1UpdateHook(hookId, v1CreateHookParameters).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hookId** | **String**| Hook ID | 
 **v1CreateHookParameters** | [**V1CreateHookParameters**](V1CreateHookParameters.md)| application/json | 

### Return type

[**Hook**](Hook.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1UpdateNetworkConnection

> NetworkConnection v1UpdateNetworkConnection(id, updateNetworkConnectionOptions, opts)

Update Network Connection

You must have the domain administrator role to update a network connection.

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let id = "id_example"; // String | Network Connection Identifier - uuid
let updateNetworkConnectionOptions = {
  "type": "openvpn",
  "name": "My Renamed OpenVPN Connection",
  "config": {
    "config": "client\n" +
      "dev tun\n" +
      "proto tcp\n" +
      "remote my-server-1 1194\n" +
      "resolv-retry infinite\n" +
      "nobind\n" +
      "persist-key\n" +
      "persist-tun\n" +
      "remote-cert-tls server\n" +
      "tls-auth ta.key 1\n" +
      "cipher AES-256-CBC\n" +
      "verb 3\n"
  }
}; // UpdateNetworkConnectionOptions | Network Connection Options
let opts = {
  'force': true // Boolean | Force deletion (true only or not present)
};
apiInstance.v1UpdateNetworkConnection(id, updateNetworkConnectionOptions, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Network Connection Identifier - uuid | 
 **updateNetworkConnectionOptions** | [**UpdateNetworkConnectionOptions**](UpdateNetworkConnectionOptions.md)| Network Connection Options | 
 **force** | **Boolean**| Force deletion (true only or not present) | [optional] 

### Return type

[**NetworkConnection**](NetworkConnection.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1UpdateProject

> Project v1UpdateProject(projectId, project)

Update a Project

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let projectId = "projectId_example"; // String | Project ID - uuid
let project = new CorelliumClient.Project(); // Project | Updated Project Settings
apiInstance.v1UpdateProject(projectId, project).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project ID - uuid | 
 **project** | [**Project**](Project.md)| Updated Project Settings | 

### Return type

[**Project**](Project.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1UpdateProjectSettings

> v1UpdateProjectSettings(projectId, projectSettings)

Change Project Settings

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let projectId = "projectId_example"; // String | Project ID - uuid
let projectSettings = new CorelliumClient.ProjectSettings(); // ProjectSettings | New settings
apiInstance.v1UpdateProjectSettings(projectId, projectSettings).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project ID - uuid | 
 **projectSettings** | [**ProjectSettings**](ProjectSettings.md)| New settings | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1UpdateUser

> Object v1UpdateUser(userId, body)

Update User

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let userId = "userId_example"; // String | userId - uuid
let body = {key: null}; // Object | User data
apiInstance.v1UpdateUser(userId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| userId - uuid | 
 **body** | **Object**| User data | 

### Return type

**Object**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1UpgradeInstance

> v1UpgradeInstance(instanceId, instanceUpgradeBody)

Upgrade iOS version

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | 
let instanceUpgradeBody = {
  "os":"16.1",
  "osbuild":"20B79"
}; // InstanceUpgradeBody | 
apiInstance.v1UpgradeInstance(instanceId, instanceUpgradeBody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**|  | 
 **instanceUpgradeBody** | [**InstanceUpgradeBody**](InstanceUpgradeBody.md)|  | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1UploadImageData

> Image v1UploadImageData(imageId, body)

Upload Image Data

If the active project has enough remaining quota, updates an Image with the contents of the request body.

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let imageId = "imageId_example"; // String | Image ID - uuid
let body = "body_example"; // String | Uploaded Image
apiInstance.v1UploadImageData(imageId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageId** | **String**| Image ID - uuid | 
 **body** | **String**| Uploaded Image | 

### Return type

[**Image**](Image.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: binary
- **Accept**: application/json


## v1UserAgreeTerms

> AgreedAck v1UserAgreeTerms()

Consent to the current terms and conditions

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
apiInstance.v1UserAgreeTerms().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AgreedAck**](AgreedAck.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1UsersChangePasswordPost

> v1UsersChangePasswordPost(passwordChangeBody)

Change User Password

Authenticated solely by the old-password.

### Example

```javascript
import CorelliumClient from '@corellium/client-api';

let apiInstance = new CorelliumClient.CorelliumApi();
let passwordChangeBody = {
  "user": "<userId>",
  "old-password": "Password1",
  "new-password": "Password2"
}; // PasswordChangeBody | 
apiInstance.v1UsersChangePasswordPost(passwordChangeBody).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordChangeBody** | [**PasswordChangeBody**](PasswordChangeBody.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1UsersLogin

> Token v1UsersLogin(credentials)

Log In

### Example

```javascript
import CorelliumClient from '@corellium/client-api';

let apiInstance = new CorelliumClient.CorelliumApi();
let credentials = {
  "username": "admin",
  "password": "password"
}; // Credentials | Authorization data
apiInstance.v1UsersLogin(credentials).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentials** | [**Credentials**](Credentials.md)| Authorization data | 

### Return type

[**Token**](Token.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1WebPlayerAllowedDomains

> v1WebPlayerAllowedDomains()

Retrieve the list of allowed domains for all Webplayer sessions

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
apiInstance.v1WebPlayerAllowedDomains().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## v1WebPlayerCreateSession

> WebPlayerSession v1WebPlayerCreateSession(webPlayerCreateSessionRequest)

Create a new Webplayer Session

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let webPlayerCreateSessionRequest = {
  "projectId": "0fc719fc-335d-458c-a424-51a550a73d12",
  "instanceId": "fbd94550-3f74-4d46-a6ed-c26cbfb23340",
  "expiresIn": 18000,
  "features": {
    "apps": true,
    "files": true
  }
}; // WebPlayerCreateSessionRequest | Request Data
apiInstance.v1WebPlayerCreateSession(webPlayerCreateSessionRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webPlayerCreateSessionRequest** | [**WebPlayerCreateSessionRequest**](WebPlayerCreateSessionRequest.md)| Request Data | 

### Return type

[**WebPlayerSession**](WebPlayerSession.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1WebPlayerDestroySession

> v1WebPlayerDestroySession(sessionId)

Tear down a Webplayer Session

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let sessionId = "sessionId_example"; // String | Webplayer Session identifier
apiInstance.v1WebPlayerDestroySession(sessionId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **String**| Webplayer Session identifier | 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1WebPlayerListSessions

> [WebPlayerSession] v1WebPlayerListSessions()

List all Webplayer sessions

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
apiInstance.v1WebPlayerListSessions().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[WebPlayerSession]**](WebPlayerSession.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1WebPlayerSessionInfo

> WebPlayerSession v1WebPlayerSessionInfo(sessionId)

Retrieve Webplayer Session Information

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let sessionId = "sessionId_example"; // String | Webplayer Session identifier
apiInstance.v1WebPlayerSessionInfo(sessionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **String**| Webplayer Session identifier | 

### Return type

[**WebPlayerSession**](WebPlayerSession.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v2GetInstanceQuickConnectCommand

> String v2GetInstanceQuickConnectCommand(instanceId)

Recommended SSH Command for Quick Connect

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
apiInstance.v2GetInstanceQuickConnectCommand(instanceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 

### Return type

**String**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v2GetInstanceState

> InstanceState v2GetInstanceState(instanceId, opts)

Get state of Instance

### Example

```javascript
import CorelliumClient from '@corellium/client-api';
let defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new CorelliumClient.CorelliumApi();
let instanceId = "instanceId_example"; // String | Instance ID - uuid
let opts = {
  'returnAttr': ["null"] // [String] | The attributes to return.
};
apiInstance.v2GetInstanceState(instanceId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instanceId** | **String**| Instance ID - uuid | 
 **returnAttr** | [**[String]**](String.md)| The attributes to return. | [optional] 

### Return type

[**InstanceState**](InstanceState.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

