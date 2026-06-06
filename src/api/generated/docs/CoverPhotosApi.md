# CoverPhotosApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**apiV1CoverPhotosBooksCoversIdBookGet**](#apiv1coverphotosbookscoversidbookget) | **GET** /api/v1/CoverPhotos/books/covers/{idBook} | |
|[**apiV1CoverPhotosGet**](#apiv1coverphotosget) | **GET** /api/v1/CoverPhotos | |
|[**apiV1CoverPhotosIdDelete**](#apiv1coverphotosiddelete) | **DELETE** /api/v1/CoverPhotos/{id} | |
|[**apiV1CoverPhotosIdGet**](#apiv1coverphotosidget) | **GET** /api/v1/CoverPhotos/{id} | |
|[**apiV1CoverPhotosIdPut**](#apiv1coverphotosidput) | **PUT** /api/v1/CoverPhotos/{id} | |
|[**apiV1CoverPhotosPost**](#apiv1coverphotospost) | **POST** /api/v1/CoverPhotos | |

# **apiV1CoverPhotosBooksCoversIdBookGet**
> Array<CoverPhoto> apiV1CoverPhotosBooksCoversIdBookGet()


### Example

```typescript
import {
    CoverPhotosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CoverPhotosApi(configuration);

let idBook: number; // (default to undefined)

const { status, data } = await apiInstance.apiV1CoverPhotosBooksCoversIdBookGet(
    idBook
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **idBook** | [**number**] |  | defaults to undefined|


### Return type

**Array<CoverPhoto>**

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

# **apiV1CoverPhotosGet**
> Array<CoverPhoto> apiV1CoverPhotosGet()


### Example

```typescript
import {
    CoverPhotosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CoverPhotosApi(configuration);

const { status, data } = await apiInstance.apiV1CoverPhotosGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<CoverPhoto>**

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

# **apiV1CoverPhotosIdDelete**
> apiV1CoverPhotosIdDelete()


### Example

```typescript
import {
    CoverPhotosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CoverPhotosApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.apiV1CoverPhotosIdDelete(
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

# **apiV1CoverPhotosIdGet**
> CoverPhoto apiV1CoverPhotosIdGet()


### Example

```typescript
import {
    CoverPhotosApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CoverPhotosApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.apiV1CoverPhotosIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**CoverPhoto**

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

# **apiV1CoverPhotosIdPut**
> CoverPhoto apiV1CoverPhotosIdPut()


### Example

```typescript
import {
    CoverPhotosApi,
    Configuration,
    CoverPhoto
} from './api';

const configuration = new Configuration();
const apiInstance = new CoverPhotosApi(configuration);

let id: number; // (default to undefined)
let coverPhoto: CoverPhoto; // (optional)

const { status, data } = await apiInstance.apiV1CoverPhotosIdPut(
    id,
    coverPhoto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **coverPhoto** | **CoverPhoto**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**CoverPhoto**

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

# **apiV1CoverPhotosPost**
> CoverPhoto apiV1CoverPhotosPost()


### Example

```typescript
import {
    CoverPhotosApi,
    Configuration,
    CoverPhoto
} from './api';

const configuration = new Configuration();
const apiInstance = new CoverPhotosApi(configuration);

let coverPhoto: CoverPhoto; // (optional)

const { status, data } = await apiInstance.apiV1CoverPhotosPost(
    coverPhoto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **coverPhoto** | **CoverPhoto**|  | |


### Return type

**CoverPhoto**

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

