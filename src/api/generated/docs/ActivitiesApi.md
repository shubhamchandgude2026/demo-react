# ActivitiesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiV1ActivitiesGet**](#apiv1activitiesget) | **GET** /api/v1/Activities | |
|[**apiV1ActivitiesIdDelete**](#apiv1activitiesiddelete) | **DELETE** /api/v1/Activities/{id} | |
|[**apiV1ActivitiesIdGet**](#apiv1activitiesidget) | **GET** /api/v1/Activities/{id} | |
|[**apiV1ActivitiesIdPut**](#apiv1activitiesidput) | **PUT** /api/v1/Activities/{id} | |
|[**apiV1ActivitiesPost**](#apiv1activitiespost) | **POST** /api/v1/Activities | |

# **apiV1ActivitiesGet**
> Array<Activity> apiV1ActivitiesGet()


### Example

```typescript
import {
    ActivitiesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ActivitiesApi(configuration);

const { status, data } = await apiInstance.apiV1ActivitiesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Activity>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain; v=1.0, application/json; v=1.0, text/json; v=1.0


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1ActivitiesIdDelete**
> apiV1ActivitiesIdDelete()


### Example

```typescript
import {
    ActivitiesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ActivitiesApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.apiV1ActivitiesIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1ActivitiesIdGet**
> Activity apiV1ActivitiesIdGet()


### Example

```typescript
import {
    ActivitiesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ActivitiesApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.apiV1ActivitiesIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Activity**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain; v=1.0, application/json; v=1.0, text/json; v=1.0


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1ActivitiesIdPut**
> Activity apiV1ActivitiesIdPut()


### Example

```typescript
import {
    ActivitiesApi,
    Configuration,
    Activity
} from './api';

const configuration = new Configuration();
const apiInstance = new ActivitiesApi(configuration);

let id: number; // (default to undefined)
let activity: Activity; // (optional)

const { status, data } = await apiInstance.apiV1ActivitiesIdPut(
    id,
    activity
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **activity** | **Activity**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**Activity**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json; v=1.0, text/json; v=1.0, application/*+json; v=1.0
 - **Accept**: text/plain; v=1.0, application/json; v=1.0, text/json; v=1.0


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apiV1ActivitiesPost**
> Activity apiV1ActivitiesPost()


### Example

```typescript
import {
    ActivitiesApi,
    Configuration,
    Activity
} from './api';

const configuration = new Configuration();
const apiInstance = new ActivitiesApi(configuration);

let activity: Activity; // (optional)

const { status, data } = await apiInstance.apiV1ActivitiesPost(
    activity
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **activity** | **Activity**|  | |


### Return type

**Activity**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json; v=1.0, text/json; v=1.0, application/*+json; v=1.0
 - **Accept**: text/plain; v=1.0, application/json; v=1.0, text/json; v=1.0


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

