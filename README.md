# @corellium/client-api

CorelliumClient - JavaScript client for @corellium/client-api
REST API to manage your virtual devices.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 5.2.0-17368
- Package version: 0.3.3
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install @corellium/client-api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your @corellium/client-api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CorelliumClient = require('@corellium/client-api');

var defaultClient = CorelliumClient.ApiClient.instance;
// Configure Bearer (ApiToken or JWT) access token for authorization: BearerAuth
var BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.accessToken = "YOUR ACCESS TOKEN"

var api = new CorelliumClient.CorelliumApi()
var projectId = "projectId_example"; // {String} Project ID - uuid
var projectKey = {
  "kind": "ssh",
  "label": "My New Key",
  "key": "ssh-ed25519 <key>"
}; // {ProjectKey} Key to add
api.v1AddProjectKey(projectId, projectKey).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://app.corellium.com/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CorelliumClient.CorelliumApi* | [**v1AddProjectKey**](docs/CorelliumApi.md#v1AddProjectKey) | **POST** /v1/projects/{projectId}/keys | Add Project Authorized Key
*CorelliumClient.CorelliumApi* | [**v1AddTeamRoleToProject**](docs/CorelliumApi.md#v1AddTeamRoleToProject) | **PUT** /v1/roles/projects/{projectId}/teams/{teamId}/roles/{roleId} | Add team role to project
*CorelliumClient.CorelliumApi* | [**v1AddUserRoleToProject**](docs/CorelliumApi.md#v1AddUserRoleToProject) | **PUT** /v1/roles/projects/{projectId}/users/{userId}/roles/{roleId} | Add user role to project
*CorelliumClient.CorelliumApi* | [**v1AddUserToTeam**](docs/CorelliumApi.md#v1AddUserToTeam) | **PUT** /v1/teams/{teamId}/users/{userId} | Add user to team
*CorelliumClient.CorelliumApi* | [**v1AgentAppReady**](docs/CorelliumApi.md#v1AgentAppReady) | **GET** /v1/instances/{instanceId}/agent/v1/app/ready | Check if App subsystem is ready
*CorelliumClient.CorelliumApi* | [**v1AgentDeleteFile**](docs/CorelliumApi.md#v1AgentDeleteFile) | **DELETE** /v1/instances/{instanceId}/agent/v1/file/device/{filePath} | Delete a File on VM
*CorelliumClient.CorelliumApi* | [**v1AgentGetFile**](docs/CorelliumApi.md#v1AgentGetFile) | **GET** /v1/instances/{instanceId}/agent/v1/file/device/{filePath} | Download a File from VM
*CorelliumClient.CorelliumApi* | [**v1AgentGetTempFilename**](docs/CorelliumApi.md#v1AgentGetTempFilename) | **POST** /v1/instances/{instanceId}/agent/v1/file/temp | Get the path for a new temp file
*CorelliumClient.CorelliumApi* | [**v1AgentInstallApp**](docs/CorelliumApi.md#v1AgentInstallApp) | **POST** /v1/instances/{instanceId}/agent/v1/app/install | Install App at path
*CorelliumClient.CorelliumApi* | [**v1AgentInstallProfile**](docs/CorelliumApi.md#v1AgentInstallProfile) | **POST** /v1/instances/{instanceId}/agent/v1/profile/install | Install a Profile to VM
*CorelliumClient.CorelliumApi* | [**v1AgentKillApp**](docs/CorelliumApi.md#v1AgentKillApp) | **POST** /v1/instances/{instanceId}/agent/v1/app/apps/{bundleId}/kill | Kill an App
*CorelliumClient.CorelliumApi* | [**v1AgentListAppIcons**](docs/CorelliumApi.md#v1AgentListAppIcons) | **GET** /v1/instances/{instanceId}/agent/v1/app/icons | List App Icons
*CorelliumClient.CorelliumApi* | [**v1AgentListApps**](docs/CorelliumApi.md#v1AgentListApps) | **GET** /v1/instances/{instanceId}/agent/v1/app/apps | List Apps
*CorelliumClient.CorelliumApi* | [**v1AgentListAppsStatus**](docs/CorelliumApi.md#v1AgentListAppsStatus) | **GET** /v1/instances/{instanceId}/agent/v1/app/apps/update | List Apps Status
*CorelliumClient.CorelliumApi* | [**v1AgentListProfiles**](docs/CorelliumApi.md#v1AgentListProfiles) | **GET** /v1/instances/{instanceId}/agent/v1/profile/profiles | List Profiles
*CorelliumClient.CorelliumApi* | [**v1AgentRunApp**](docs/CorelliumApi.md#v1AgentRunApp) | **POST** /v1/instances/{instanceId}/agent/v1/app/apps/{bundleId}/run | Run an App
*CorelliumClient.CorelliumApi* | [**v1AgentSetFileAttributes**](docs/CorelliumApi.md#v1AgentSetFileAttributes) | **PATCH** /v1/instances/{instanceId}/agent/v1/file/device/{filePath} | Change Attrs of a File on VM
*CorelliumClient.CorelliumApi* | [**v1AgentSystemGetAdbAuth**](docs/CorelliumApi.md#v1AgentSystemGetAdbAuth) | **GET** /v1/instances/{instanceId}/agent/v1/system/adbauth | Get ADB Auth Setting (AOSP only)
*CorelliumClient.CorelliumApi* | [**v1AgentSystemGetNetwork**](docs/CorelliumApi.md#v1AgentSystemGetNetwork) | **GET** /v1/instances/{instanceId}/agent/v1/system/network | Get IP of eth0 (AOSP only)
*CorelliumClient.CorelliumApi* | [**v1AgentSystemGetProp**](docs/CorelliumApi.md#v1AgentSystemGetProp) | **POST** /v1/instances/{instanceId}/agent/v1/system/getprop | Get System Property (AOSP only)
*CorelliumClient.CorelliumApi* | [**v1AgentSystemInstallOpenGApps**](docs/CorelliumApi.md#v1AgentSystemInstallOpenGApps) | **POST** /v1/instances/{instanceId}/agent/v1/system/install-opengapps | Install OpenGApps (AOSP only)
*CorelliumClient.CorelliumApi* | [**v1AgentSystemLock**](docs/CorelliumApi.md#v1AgentSystemLock) | **POST** /v1/instances/{instanceId}/agent/v1/system/lock | Lock Device (iOS Only)
*CorelliumClient.CorelliumApi* | [**v1AgentSystemSetAdbAuth**](docs/CorelliumApi.md#v1AgentSystemSetAdbAuth) | **PUT** /v1/instances/{instanceId}/agent/v1/system/adbauth | Set ADB Auth Setting (AOSP only)
*CorelliumClient.CorelliumApi* | [**v1AgentSystemShutdown**](docs/CorelliumApi.md#v1AgentSystemShutdown) | **POST** /v1/instances/{instanceId}/agent/v1/system/shutdown | Instruct VM to halt
*CorelliumClient.CorelliumApi* | [**v1AgentSystemUnlock**](docs/CorelliumApi.md#v1AgentSystemUnlock) | **POST** /v1/instances/{instanceId}/agent/v1/system/unlock | Unlock Device (iOS Only)
*CorelliumClient.CorelliumApi* | [**v1AgentUninstallApp**](docs/CorelliumApi.md#v1AgentUninstallApp) | **POST** /v1/instances/{instanceId}/agent/v1/app/apps/{bundleId}/uninstall | Uninstall an App
*CorelliumClient.CorelliumApi* | [**v1AgentUninstallProfile**](docs/CorelliumApi.md#v1AgentUninstallProfile) | **DELETE** /v1/instances/{instanceId}/agent/v1/profile/profiles/{profileId} | Uninstall a Profile from VM
*CorelliumClient.CorelliumApi* | [**v1AgentUploadFile**](docs/CorelliumApi.md#v1AgentUploadFile) | **PUT** /v1/instances/{instanceId}/agent/v1/file/device/{filePath} | Upload a file to VM
*CorelliumClient.CorelliumApi* | [**v1AuthLogin**](docs/CorelliumApi.md#v1AuthLogin) | **POST** /v1/auth/login | Log In
*CorelliumClient.CorelliumApi* | [**v1BtracePreauthorize**](docs/CorelliumApi.md#v1BtracePreauthorize) | **GET** /v1/instances/{instanceId}/btrace-authorize | Pre-authorize an btrace download
*CorelliumClient.CorelliumApi* | [**v1ClearCoreTrace**](docs/CorelliumApi.md#v1ClearCoreTrace) | **DELETE** /v1/instances/{instanceId}/strace | Clear CoreTrace logs
*CorelliumClient.CorelliumApi* | [**v1ClearHyperTrace**](docs/CorelliumApi.md#v1ClearHyperTrace) | **DELETE** /v1/instances/{instanceId}/btrace | Clear HyperTrace logs
*CorelliumClient.CorelliumApi* | [**v1ClearHyperTraceHooks**](docs/CorelliumApi.md#v1ClearHyperTraceHooks) | **POST** /v1/instances/{instanceId}/hooks/clear | Clear Hooks on an instance
*CorelliumClient.CorelliumApi* | [**v1ClearInstancePanics**](docs/CorelliumApi.md#v1ClearInstancePanics) | **DELETE** /v1/instances/{instanceId}/panics | Clear Panics
*CorelliumClient.CorelliumApi* | [**v1CreateHook**](docs/CorelliumApi.md#v1CreateHook) | **POST** /v1/instances/{instanceId}/hooks | Create hypervisor hook for Instance
*CorelliumClient.CorelliumApi* | [**v1CreateImage**](docs/CorelliumApi.md#v1CreateImage) | **POST** /v1/images | Create a new Image
*CorelliumClient.CorelliumApi* | [**v1CreateInstance**](docs/CorelliumApi.md#v1CreateInstance) | **POST** /v1/instances | Create Instance
*CorelliumClient.CorelliumApi* | [**v1CreateProject**](docs/CorelliumApi.md#v1CreateProject) | **POST** /v1/projects | Create a Project
*CorelliumClient.CorelliumApi* | [**v1CreateSnapshot**](docs/CorelliumApi.md#v1CreateSnapshot) | **POST** /v1/instances/{instanceId}/snapshots | Create Instance Snapshot
*CorelliumClient.CorelliumApi* | [**v1CreateSubscriberInvite**](docs/CorelliumApi.md#v1CreateSubscriberInvite) | **POST** /v1/billing/invites | Create Subscriber Invite
*CorelliumClient.CorelliumApi* | [**v1CreateUser**](docs/CorelliumApi.md#v1CreateUser) | **POST** /v1/users | Create User
*CorelliumClient.CorelliumApi* | [**v1DeleteHook**](docs/CorelliumApi.md#v1DeleteHook) | **DELETE** /v1/hooks/{hookId} | Delete an existing hypervisor hook
*CorelliumClient.CorelliumApi* | [**v1DeleteImage**](docs/CorelliumApi.md#v1DeleteImage) | **DELETE** /v2/images/{imageId} | Delete Image
*CorelliumClient.CorelliumApi* | [**v1DeleteInstance**](docs/CorelliumApi.md#v1DeleteInstance) | **DELETE** /v1/instances/{instanceId} | Remove Instance
*CorelliumClient.CorelliumApi* | [**v1DeleteInstanceSnapshot**](docs/CorelliumApi.md#v1DeleteInstanceSnapshot) | **DELETE** /v1/instances/{instanceId}/snapshots/{snapshotId} | Delete a Snapshot
*CorelliumClient.CorelliumApi* | [**v1DeleteProject**](docs/CorelliumApi.md#v1DeleteProject) | **DELETE** /v1/projects/{projectId} | Delete a Project
*CorelliumClient.CorelliumApi* | [**v1DeleteSnapshot**](docs/CorelliumApi.md#v1DeleteSnapshot) | **DELETE** /v1/snapshots/{snapshotId} | Delete a Snapshot
*CorelliumClient.CorelliumApi* | [**v1DeleteUser**](docs/CorelliumApi.md#v1DeleteUser) | **DELETE** /v1/users/{userId} | Delete User
*CorelliumClient.CorelliumApi* | [**v1DisableExposePort**](docs/CorelliumApi.md#v1DisableExposePort) | **POST** /v1/instances/{instanceId}/exposeport/disable | Disable an exposed port on an instance for device access.
*CorelliumClient.CorelliumApi* | [**v1EnableExposePort**](docs/CorelliumApi.md#v1EnableExposePort) | **POST** /v1/instances/{instanceId}/exposeport/enable | Enable an exposed port on an instance for device access.
*CorelliumClient.CorelliumApi* | [**v1ExecuteHyperTraceHooks**](docs/CorelliumApi.md#v1ExecuteHyperTraceHooks) | **POST** /v1/instances/{instanceId}/hooks/execute | Execute Hooks on an instance
*CorelliumClient.CorelliumApi* | [**v1GetHookById**](docs/CorelliumApi.md#v1GetHookById) | **GET** /v1/hooks/{hookId} | Get hypervisor hook by id
*CorelliumClient.CorelliumApi* | [**v1GetHooks**](docs/CorelliumApi.md#v1GetHooks) | **GET** /v1/instances/{instanceId}/hooks | Get all hypervisor hooks for Instance
*CorelliumClient.CorelliumApi* | [**v1GetImage**](docs/CorelliumApi.md#v1GetImage) | **GET** /v1/images/{imageId} | Get Image Metadata
*CorelliumClient.CorelliumApi* | [**v1GetImages**](docs/CorelliumApi.md#v1GetImages) | **GET** /v1/images | Get all Images Metadata
*CorelliumClient.CorelliumApi* | [**v1GetInstance**](docs/CorelliumApi.md#v1GetInstance) | **GET** /v1/instances/{instanceId} | Get Instance
*CorelliumClient.CorelliumApi* | [**v1GetInstanceConsole**](docs/CorelliumApi.md#v1GetInstanceConsole) | **GET** /v1/instances/{instanceId}/console | Get console websocket URL
*CorelliumClient.CorelliumApi* | [**v1GetInstanceConsoleLog**](docs/CorelliumApi.md#v1GetInstanceConsoleLog) | **GET** /v1/instances/{instanceId}/consoleLog | Get Console Log
*CorelliumClient.CorelliumApi* | [**v1GetInstanceGpios**](docs/CorelliumApi.md#v1GetInstanceGpios) | **GET** /v1/instances/{instanceId}/gpios | Get Instance GPIOs
*CorelliumClient.CorelliumApi* | [**v1GetInstancePanics**](docs/CorelliumApi.md#v1GetInstancePanics) | **GET** /v1/instances/{instanceId}/panics | Get Panics
*CorelliumClient.CorelliumApi* | [**v1GetInstancePeripherals**](docs/CorelliumApi.md#v1GetInstancePeripherals) | **GET** /v1/instances/{instanceId}/peripherals | Get Instance Peripherals
*CorelliumClient.CorelliumApi* | [**v1GetInstanceRate**](docs/CorelliumApi.md#v1GetInstanceRate) | **GET** /v1/instances/{instanceId}/rate | Get rate information
*CorelliumClient.CorelliumApi* | [**v1GetInstanceScreenshot**](docs/CorelliumApi.md#v1GetInstanceScreenshot) | **GET** /v1/instances/{instanceId}/screenshot.{format} | Get Instance Screenshot
*CorelliumClient.CorelliumApi* | [**v1GetInstanceSnapshot**](docs/CorelliumApi.md#v1GetInstanceSnapshot) | **GET** /v1/instances/{instanceId}/snapshots/{snapshotId} | Get Instance Snapshot
*CorelliumClient.CorelliumApi* | [**v1GetInstanceSnapshots**](docs/CorelliumApi.md#v1GetInstanceSnapshots) | **GET** /v1/instances/{instanceId}/snapshots | Get Instance Snapshots
*CorelliumClient.CorelliumApi* | [**v1GetInstances**](docs/CorelliumApi.md#v1GetInstances) | **GET** /v1/instances | Get Instances
*CorelliumClient.CorelliumApi* | [**v1GetModelSoftware**](docs/CorelliumApi.md#v1GetModelSoftware) | **GET** /v1/models/{model}/software | Get Software for Model
*CorelliumClient.CorelliumApi* | [**v1GetModels**](docs/CorelliumApi.md#v1GetModels) | **GET** /v1/models | Get Supported Models
*CorelliumClient.CorelliumApi* | [**v1GetProject**](docs/CorelliumApi.md#v1GetProject) | **GET** /v1/projects/{projectId} | Get a Project
*CorelliumClient.CorelliumApi* | [**v1GetProjectInstances**](docs/CorelliumApi.md#v1GetProjectInstances) | **GET** /v1/projects/{projectId}/instances | Get Instances in Project
*CorelliumClient.CorelliumApi* | [**v1GetProjectKeys**](docs/CorelliumApi.md#v1GetProjectKeys) | **GET** /v1/projects/{projectId}/keys | Get Project Authorized Keys
*CorelliumClient.CorelliumApi* | [**v1GetProjectVpnConfig**](docs/CorelliumApi.md#v1GetProjectVpnConfig) | **GET** /v1/projects/{projectId}/vpnconfig/{format} | Get Project VPN Configuration
*CorelliumClient.CorelliumApi* | [**v1GetProjects**](docs/CorelliumApi.md#v1GetProjects) | **GET** /v1/projects | Get Projects
*CorelliumClient.CorelliumApi* | [**v1GetResetLinkInfo**](docs/CorelliumApi.md#v1GetResetLinkInfo) | **GET** /v1/users/reset-link-info | Send Password Reset Link Info
*CorelliumClient.CorelliumApi* | [**v1GetSnapshot**](docs/CorelliumApi.md#v1GetSnapshot) | **GET** /v1/snapshots/{snapshotId} | Get Snapshot
*CorelliumClient.CorelliumApi* | [**v1InstancesInstanceIdMessagePost**](docs/CorelliumApi.md#v1InstancesInstanceIdMessagePost) | **POST** /v1/instances/{instanceId}/message | Receive a message on an iOS vm
*CorelliumClient.CorelliumApi* | [**v1InstancesInstanceIdNetdumpPcapGet**](docs/CorelliumApi.md#v1InstancesInstanceIdNetdumpPcapGet) | **GET** /v1/instances/{instanceId}/netdump.pcap | Download a netdump pcap file
*CorelliumClient.CorelliumApi* | [**v1InstancesInstanceIdNetworkMonitorPcapGet**](docs/CorelliumApi.md#v1InstancesInstanceIdNetworkMonitorPcapGet) | **GET** /v1/instances/{instanceId}/networkMonitor.pcap | Download a Network Monitor pcap file
*CorelliumClient.CorelliumApi* | [**v1Kcrange**](docs/CorelliumApi.md#v1Kcrange) | **GET** /v1/instances/{instanceId}/btrace-kcrange | Get Kernel extension ranges
*CorelliumClient.CorelliumApi* | [**v1ListThreads**](docs/CorelliumApi.md#v1ListThreads) | **GET** /v1/instances/{instanceId}/strace/thread-list | Get Running Threads (CoreTrace)
*CorelliumClient.CorelliumApi* | [**v1MediaPlay**](docs/CorelliumApi.md#v1MediaPlay) | **POST** /v1/instances/{instanceId}/media/play | Start playing media
*CorelliumClient.CorelliumApi* | [**v1MediaStop**](docs/CorelliumApi.md#v1MediaStop) | **POST** /v1/instances/{instanceId}/media/stop | Stop playing media
*CorelliumClient.CorelliumApi* | [**v1PatchInstance**](docs/CorelliumApi.md#v1PatchInstance) | **PATCH** /v1/instances/{instanceId} | Update Instance
*CorelliumClient.CorelliumApi* | [**v1PauseInstance**](docs/CorelliumApi.md#v1PauseInstance) | **POST** /v1/instances/{instanceId}/pause | Pause an Instance
*CorelliumClient.CorelliumApi* | [**v1PostInstanceInput**](docs/CorelliumApi.md#v1PostInstanceInput) | **POST** /v1/instances/{instanceId}/input | Provide Instance Input
*CorelliumClient.CorelliumApi* | [**v1Ready**](docs/CorelliumApi.md#v1Ready) | **GET** /v1/ready | API Status
*CorelliumClient.CorelliumApi* | [**v1RebootInstance**](docs/CorelliumApi.md#v1RebootInstance) | **POST** /v1/instances/{instanceId}/reboot | Reboot an Instance
*CorelliumClient.CorelliumApi* | [**v1RemoveProjectKey**](docs/CorelliumApi.md#v1RemoveProjectKey) | **DELETE** /v1/projects/{projectId}/keys/{keyId} | Delete Project Authorized Key
*CorelliumClient.CorelliumApi* | [**v1RemoveTeamRoleFromProject**](docs/CorelliumApi.md#v1RemoveTeamRoleFromProject) | **DELETE** /v1/roles/projects/{projectId}/teams/{teamId}/roles/{roleId} | Remove team role from project
*CorelliumClient.CorelliumApi* | [**v1RemoveUserFromTeam**](docs/CorelliumApi.md#v1RemoveUserFromTeam) | **DELETE** /v1/teams/{teamId}/users/{userId} | Remove user from team
*CorelliumClient.CorelliumApi* | [**v1RemoveUserRoleFromProject**](docs/CorelliumApi.md#v1RemoveUserRoleFromProject) | **DELETE** /v1/roles/projects/{projectId}/users/{userId}/roles/{roleId} | Remove user role from project
*CorelliumClient.CorelliumApi* | [**v1RenameInstanceSnapshot**](docs/CorelliumApi.md#v1RenameInstanceSnapshot) | **PATCH** /v1/instances/{instanceId}/snapshots/{snapshotId} | Rename a Snapshot
*CorelliumClient.CorelliumApi* | [**v1ResetUserPassword**](docs/CorelliumApi.md#v1ResetUserPassword) | **POST** /v1/users/reset-password | Reset User Password
*CorelliumClient.CorelliumApi* | [**v1RestoreBackup**](docs/CorelliumApi.md#v1RestoreBackup) | **POST** /v1/instances/{instanceId}/restoreBackup | Restore backup
*CorelliumClient.CorelliumApi* | [**v1RestoreInstanceSnapshot**](docs/CorelliumApi.md#v1RestoreInstanceSnapshot) | **POST** /v1/instances/{instanceId}/snapshots/{snapshotId}/restore | Restore a Snapshot
*CorelliumClient.CorelliumApi* | [**v1Roles**](docs/CorelliumApi.md#v1Roles) | **GET** /v1/roles | Get all roles
*CorelliumClient.CorelliumApi* | [**v1RotateInstance**](docs/CorelliumApi.md#v1RotateInstance) | **POST** /v1/instances/{instanceId}/rotate | Rotate device to specified orientation
*CorelliumClient.CorelliumApi* | [**v1SendUserResetLink**](docs/CorelliumApi.md#v1SendUserResetLink) | **POST** /v1/users/send-reset-link | Send Password Reset Link
*CorelliumClient.CorelliumApi* | [**v1SetInstanceGpios**](docs/CorelliumApi.md#v1SetInstanceGpios) | **PUT** /v1/instances/{instanceId}/gpios | Set Instance GPIOs
*CorelliumClient.CorelliumApi* | [**v1SetInstancePeripherals**](docs/CorelliumApi.md#v1SetInstancePeripherals) | **PUT** /v1/instances/{instanceId}/peripherals | Set Instance Peripherals
*CorelliumClient.CorelliumApi* | [**v1SetInstanceState**](docs/CorelliumApi.md#v1SetInstanceState) | **PUT** /v1/instances/{instanceId}/state | Set state of Instance
*CorelliumClient.CorelliumApi* | [**v1SnapshotRename**](docs/CorelliumApi.md#v1SnapshotRename) | **PATCH** /v1/snapshots/{snapshotId} | Rename a Snapshot
*CorelliumClient.CorelliumApi* | [**v1StartCoreTrace**](docs/CorelliumApi.md#v1StartCoreTrace) | **POST** /v1/instances/{instanceId}/strace/enable | Start CoreTrace on an instance
*CorelliumClient.CorelliumApi* | [**v1StartHyperTrace**](docs/CorelliumApi.md#v1StartHyperTrace) | **POST** /v1/instances/{instanceId}/btrace/enable | Start HyperTrace on an instance
*CorelliumClient.CorelliumApi* | [**v1StartInstance**](docs/CorelliumApi.md#v1StartInstance) | **POST** /v1/instances/{instanceId}/start | Start an Instance
*CorelliumClient.CorelliumApi* | [**v1StartNetdump**](docs/CorelliumApi.md#v1StartNetdump) | **POST** /v1/instances/{instanceId}/netdump/enable | Start Enhanced Network Monitor on an instance.
*CorelliumClient.CorelliumApi* | [**v1StartNetworkMonitor**](docs/CorelliumApi.md#v1StartNetworkMonitor) | **POST** /v1/instances/{instanceId}/sslsplit/enable | Start Network Monitor on an instance.
*CorelliumClient.CorelliumApi* | [**v1StopCoreTrace**](docs/CorelliumApi.md#v1StopCoreTrace) | **POST** /v1/instances/{instanceId}/strace/disable | Stop CoreTrace on an instance.
*CorelliumClient.CorelliumApi* | [**v1StopHyperTrace**](docs/CorelliumApi.md#v1StopHyperTrace) | **POST** /v1/instances/{instanceId}/btrace/disable | Stop HyperTrace on an instance.
*CorelliumClient.CorelliumApi* | [**v1StopInstance**](docs/CorelliumApi.md#v1StopInstance) | **POST** /v1/instances/{instanceId}/stop | Stop an Instance
*CorelliumClient.CorelliumApi* | [**v1StopNetdump**](docs/CorelliumApi.md#v1StopNetdump) | **POST** /v1/instances/{instanceId}/netdump/disable | Stop Enhanced Network Monitor on an instance.
*CorelliumClient.CorelliumApi* | [**v1StopNetworkMonitor**](docs/CorelliumApi.md#v1StopNetworkMonitor) | **POST** /v1/instances/{instanceId}/sslsplit/disable | Stop Network Monitor on an instance.
*CorelliumClient.CorelliumApi* | [**v1TeamChange**](docs/CorelliumApi.md#v1TeamChange) | **PATCH** /v1/teams/{teamId} | Update team
*CorelliumClient.CorelliumApi* | [**v1TeamCreate**](docs/CorelliumApi.md#v1TeamCreate) | **POST** /v1/teams | Create team
*CorelliumClient.CorelliumApi* | [**v1TeamDelete**](docs/CorelliumApi.md#v1TeamDelete) | **DELETE** /v1/teams/{teamId} | Delete team
*CorelliumClient.CorelliumApi* | [**v1Teams**](docs/CorelliumApi.md#v1Teams) | **GET** /v1/teams | Get teams
*CorelliumClient.CorelliumApi* | [**v1UnpauseInstance**](docs/CorelliumApi.md#v1UnpauseInstance) | **POST** /v1/instances/{instanceId}/unpause | Unpause an Instance
*CorelliumClient.CorelliumApi* | [**v1UpdateHook**](docs/CorelliumApi.md#v1UpdateHook) | **PUT** /v1/hooks/{hookId} | Update an existing hypervisor hook
*CorelliumClient.CorelliumApi* | [**v1UpdateProject**](docs/CorelliumApi.md#v1UpdateProject) | **PATCH** /v1/projects/{projectId} | Update a Project
*CorelliumClient.CorelliumApi* | [**v1UpdateProjectSettings**](docs/CorelliumApi.md#v1UpdateProjectSettings) | **PATCH** /v1/projects/{projectId}/settings | Change Project Settings
*CorelliumClient.CorelliumApi* | [**v1UpdateUser**](docs/CorelliumApi.md#v1UpdateUser) | **PATCH** /v1/users/{userId} | Update User
*CorelliumClient.CorelliumApi* | [**v1UpgradeInstance**](docs/CorelliumApi.md#v1UpgradeInstance) | **POST** /v1/instances/{instanceId}/upgrade | Upgrade iOS version
*CorelliumClient.CorelliumApi* | [**v1UploadImageData**](docs/CorelliumApi.md#v1UploadImageData) | **POST** /v1/images/{imageId} | Upload Image Data
*CorelliumClient.CorelliumApi* | [**v1UserAgreeTerms**](docs/CorelliumApi.md#v1UserAgreeTerms) | **POST** /v1/users/agree | Consent to the current terms and conditions
*CorelliumClient.CorelliumApi* | [**v1UsersChangePasswordPost**](docs/CorelliumApi.md#v1UsersChangePasswordPost) | **POST** /v1/users/change-password | Change User Password
*CorelliumClient.CorelliumApi* | [**v1UsersLogin**](docs/CorelliumApi.md#v1UsersLogin) | **POST** /v1/users/login | Log In
*CorelliumClient.CorelliumApi* | [**v2GetInstanceQuickConnectCommand**](docs/CorelliumApi.md#v2GetInstanceQuickConnectCommand) | **GET** /v2/instances/{instanceId}/quickConnectCommand | Recommended SSH Command for Quick Connect
*CorelliumClient.CorelliumApi* | [**v2GetInstanceState**](docs/CorelliumApi.md#v2GetInstanceState) | **GET** /v2/instances/{instanceId}/state | Get state of Instance


## Documentation for Models

 - [CorelliumClient.Address](docs/Address.md)
 - [CorelliumClient.AgentApp](docs/AgentApp.md)
 - [CorelliumClient.AgentAppReadyResponse](docs/AgentAppReadyResponse.md)
 - [CorelliumClient.AgentAppStatus](docs/AgentAppStatus.md)
 - [CorelliumClient.AgentAppsList](docs/AgentAppsList.md)
 - [CorelliumClient.AgentAppsStatusList](docs/AgentAppsStatusList.md)
 - [CorelliumClient.AgentError](docs/AgentError.md)
 - [CorelliumClient.AgentIcons](docs/AgentIcons.md)
 - [CorelliumClient.AgentInstallBody](docs/AgentInstallBody.md)
 - [CorelliumClient.AgentProfilesReturn](docs/AgentProfilesReturn.md)
 - [CorelliumClient.AgentSystemAdbAuth](docs/AgentSystemAdbAuth.md)
 - [CorelliumClient.AgentSystemGetPropBody](docs/AgentSystemGetPropBody.md)
 - [CorelliumClient.AgentValueReturn](docs/AgentValueReturn.md)
 - [CorelliumClient.AgreedAck](docs/AgreedAck.md)
 - [CorelliumClient.ApiConflictError](docs/ApiConflictError.md)
 - [CorelliumClient.ApiError](docs/ApiError.md)
 - [CorelliumClient.ApiInternalConsistencyError](docs/ApiInternalConsistencyError.md)
 - [CorelliumClient.ApiNotFoundError](docs/ApiNotFoundError.md)
 - [CorelliumClient.ApiToken](docs/ApiToken.md)
 - [CorelliumClient.Bit](docs/Bit.md)
 - [CorelliumClient.BtraceEnableOptions](docs/BtraceEnableOptions.md)
 - [CorelliumClient.Button](docs/Button.md)
 - [CorelliumClient.CouponOptions](docs/CouponOptions.md)
 - [CorelliumClient.CreateTeam](docs/CreateTeam.md)
 - [CorelliumClient.CreatedBy](docs/CreatedBy.md)
 - [CorelliumClient.Credentials](docs/Credentials.md)
 - [CorelliumClient.DomainOptions](docs/DomainOptions.md)
 - [CorelliumClient.Extension](docs/Extension.md)
 - [CorelliumClient.Features](docs/Features.md)
 - [CorelliumClient.FileChanges](docs/FileChanges.md)
 - [CorelliumClient.Firmware](docs/Firmware.md)
 - [CorelliumClient.GpioStateDefinition](docs/GpioStateDefinition.md)
 - [CorelliumClient.GpiosState](docs/GpiosState.md)
 - [CorelliumClient.GrantTrialRequestResponse](docs/GrantTrialRequestResponse.md)
 - [CorelliumClient.Hook](docs/Hook.md)
 - [CorelliumClient.Image](docs/Image.md)
 - [CorelliumClient.Instance](docs/Instance.md)
 - [CorelliumClient.InstanceAgentState](docs/InstanceAgentState.md)
 - [CorelliumClient.InstanceBootOptions](docs/InstanceBootOptions.md)
 - [CorelliumClient.InstanceBootOptionsAdditionalTag](docs/InstanceBootOptionsAdditionalTag.md)
 - [CorelliumClient.InstanceConsoleEndpoint](docs/InstanceConsoleEndpoint.md)
 - [CorelliumClient.InstanceCreateOptions](docs/InstanceCreateOptions.md)
 - [CorelliumClient.InstanceInput](docs/InstanceInput.md)
 - [CorelliumClient.InstanceNetdumpState](docs/InstanceNetdumpState.md)
 - [CorelliumClient.InstanceNetmonState](docs/InstanceNetmonState.md)
 - [CorelliumClient.InstanceReturn](docs/InstanceReturn.md)
 - [CorelliumClient.InstanceServices](docs/InstanceServices.md)
 - [CorelliumClient.InstanceStartOptions](docs/InstanceStartOptions.md)
 - [CorelliumClient.InstanceState](docs/InstanceState.md)
 - [CorelliumClient.InstanceStopOptions](docs/InstanceStopOptions.md)
 - [CorelliumClient.InstanceUpgradeBody](docs/InstanceUpgradeBody.md)
 - [CorelliumClient.Invitation](docs/Invitation.md)
 - [CorelliumClient.InviteRevokeParams](docs/InviteRevokeParams.md)
 - [CorelliumClient.InviteRevokeParamsIds](docs/InviteRevokeParamsIds.md)
 - [CorelliumClient.Kcrange](docs/Kcrange.md)
 - [CorelliumClient.KernelTask](docs/KernelTask.md)
 - [CorelliumClient.KernelThread](docs/KernelThread.md)
 - [CorelliumClient.MediaPlayBody](docs/MediaPlayBody.md)
 - [CorelliumClient.Model](docs/Model.md)
 - [CorelliumClient.ModelSoftware](docs/ModelSoftware.md)
 - [CorelliumClient.NetdumpFilter](docs/NetdumpFilter.md)
 - [CorelliumClient.PasswordChangeBody](docs/PasswordChangeBody.md)
 - [CorelliumClient.PasswordResetBody](docs/PasswordResetBody.md)
 - [CorelliumClient.PatchInstanceOptions](docs/PatchInstanceOptions.md)
 - [CorelliumClient.PeripheralsData](docs/PeripheralsData.md)
 - [CorelliumClient.Plan](docs/Plan.md)
 - [CorelliumClient.Project](docs/Project.md)
 - [CorelliumClient.ProjectKey](docs/ProjectKey.md)
 - [CorelliumClient.ProjectQuota](docs/ProjectQuota.md)
 - [CorelliumClient.ProjectSettings](docs/ProjectSettings.md)
 - [CorelliumClient.ProjectUsage](docs/ProjectUsage.md)
 - [CorelliumClient.ProxyConfig](docs/ProxyConfig.md)
 - [CorelliumClient.RateInfo](docs/RateInfo.md)
 - [CorelliumClient.ResetLinkBody](docs/ResetLinkBody.md)
 - [CorelliumClient.Role](docs/Role.md)
 - [CorelliumClient.RotateBody](docs/RotateBody.md)
 - [CorelliumClient.Snapshot](docs/Snapshot.md)
 - [CorelliumClient.SnapshotCreationOptions](docs/SnapshotCreationOptions.md)
 - [CorelliumClient.SnapshotStatus](docs/SnapshotStatus.md)
 - [CorelliumClient.SubscriberInvite](docs/SubscriberInvite.md)
 - [CorelliumClient.Team](docs/Team.md)
 - [CorelliumClient.TeamCreate](docs/TeamCreate.md)
 - [CorelliumClient.TextInput](docs/TextInput.md)
 - [CorelliumClient.Token](docs/Token.md)
 - [CorelliumClient.TouchCurveInput](docs/TouchCurveInput.md)
 - [CorelliumClient.TouchInput](docs/TouchInput.md)
 - [CorelliumClient.Trial](docs/Trial.md)
 - [CorelliumClient.TrialExtension](docs/TrialExtension.md)
 - [CorelliumClient.TrialRequestMetadata](docs/TrialRequestMetadata.md)
 - [CorelliumClient.TrialRequestOptions](docs/TrialRequestOptions.md)
 - [CorelliumClient.UpdateExtension](docs/UpdateExtension.md)
 - [CorelliumClient.User](docs/User.md)
 - [CorelliumClient.UserError](docs/UserError.md)
 - [CorelliumClient.V1CreateHookParameters](docs/V1CreateHookParameters.md)
 - [CorelliumClient.V1LoadExtensionParameters](docs/V1LoadExtensionParameters.md)
 - [CorelliumClient.V1SetStateBody](docs/V1SetStateBody.md)
 - [CorelliumClient.ValidationError](docs/ValidationError.md)
 - [CorelliumClient.VolumeOptions](docs/VolumeOptions.md)
 - [CorelliumClient.VpnDefinition](docs/VpnDefinition.md)
 - [CorelliumClient.WebPlayerCreateSessionRequest](docs/WebPlayerCreateSessionRequest.md)
 - [CorelliumClient.WebPlayerSession](docs/WebPlayerSession.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### BearerAuth

- **Type**: Bearer authentication (ApiToken or JWT)

