# CorelliumClient.ActivityRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | **String** | Resource filter | [optional] 
**limit** | **Number** | Number of entries to return, defaults to 10 | [optional] 
**orderBy** | **String** | Sorting order (&#39;-createdAt&#39; or &#39;createdAt&#39;) | [optional] 
**page** | **Number** | Paginated results. Must be a positive integer. If not provided, defaults to the first page. | [optional] 
**instance** | **String** | Instance identifier used to filter instance resources | [optional] 
**project** | **String** | Instance identifier used to filter instance resources | [optional] 
**actor** | **String** | Actor identifier used to filter actor resources | [optional] 
**search** | **String** | Last filter applied and is a fuzzy match on results | [optional] 
**to** | **String** | Date to filter to, keyed off of createdAt | [optional] 
**from** | **String** | Date to filter from, keyed off of createdAt | [optional] 


